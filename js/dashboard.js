(function () {
  'use strict';

  const DESIGN_WIDTH = 1920;
  const DESIGN_HEIGHT = 1080;
  const MIN_SCALE = 0.4;
  const MAX_SCALE = 1.0;

  let userScale = null;
  let jobState = 'running';

  const stepData = {
    1: {
      title: 'Step 1: Install Lower Control Arm',
      steps: [
        'Position the lower control arm into the subframe mounting points.',
        'Install and hand-tighten the lower arm bolts (LH & RH).',
        'Verify correct orientation per work instruction diagram.',
        'Prepare for torque application in Step 2.'
      ]
    },
    2: {
      title: 'Step 2: Torque Lower Arm Bolts',
      steps: [
        'Apply torque to lower arm bolts per torque sheet specification.',
        'Torque LH bolt to 85 Nm using smart torque tool.',
        'Torque RH bolt to 85 Nm using smart torque tool.',
        'Verify torque curves are within tolerance.'
      ]
    },
    3: {
      title: 'Step 3: Install Strut Assembly',
      steps: [
        'Mount strut assembly onto steering knuckle (LH & RH).',
        'Align strut top mount with body mounting points.',
        'Install strut-to-knuckle bolts and hand-tighten.',
        'Verify strut orientation matches variant specification.'
      ]
    },
    4: {
      title: 'Step 4: Connect Stabilizer Bar Link',
      steps: [
        'Connect stabilizer bar link to lower control arm (LH).',
        'Connect stabilizer bar link to lower control arm (RH).',
        'Install and torque stabilizer link nuts to 65 Nm.',
        'Verify free movement of stabilizer bar.'
      ]
    },
    5: {
      title: 'Step 5: Final Inspection',
      steps: [
        'Perform visual inspection of all installed components.',
        'Complete quality checklist verification.',
        'Scan all component serial numbers for genealogy.',
        'Press COMPLETE STATION to release vehicle.'
      ]
    }
  };

  const actionMessages = {
    'view-inspection': { title: 'View Inspection', body: 'Opening quality inspection records for VIN MA1AB2SU0R64012345. All 6 check points passed.' },
    'defect-log': { title: 'Defect Log', body: 'No active defects logged for current production order PO-24-0009876.' },
    'pdf-sop': { title: 'PDF / SOP', body: 'Opening Standard Operating Procedure document: SOP-FS-02-Rev4.pdf' },
    'part-list': { title: 'Part List', body: 'Displaying BOM part list for SUV-X / XZA 2.0 AT variant. 8 components required.' },
    'torque-sheet': { title: 'Torque Sheet', body: 'Opening torque specification sheet. 8 torque points defined for this station.' },
    '3d-view': { title: '3D View', body: 'Launching 3D assembly viewer for front suspension sub-assembly.' },
    'video': { title: 'Training Video', body: 'Playing work instruction video: WI-FS-02-Install-Lower-Arm.mp4' },
    'full-genealogy': { title: 'Full Genealogy', body: 'Loading complete VIN traceability tree for MA1AB2SU0R64012345 across all stations.' },
    'step-list': { title: 'All Steps', body: 'Step 1: Install Lower Control Arm\nStep 2: Torque Lower Arm Bolts\nStep 3: Install Strut Assembly\nStep 4: Connect Stabilizer Bar Link\nStep 5: Final Inspection' },
    'start-job': { title: 'Start Job', body: 'Production job started for PO-24-0009876.' },
    'hold': { title: 'Hold', body: 'Station placed on HOLD. Production paused.' },
    'resume': { title: 'Resume', body: 'Station resumed. Production continuing.' },
    'request-quality': { title: 'Request Quality', body: 'Quality inspector notified. Andon QUALITY alert raised.' },
    'call-maintenance': { title: 'Call Maintenance', body: 'Maintenance team notified. Andon MAINTENANCE alert raised.' },
    'complete-station': { title: 'Complete Station', body: 'Station 02 completed for VIN MA1AB2SU0R64012345. Vehicle released to next station.' }
  };

  function fitDashboard() {
    const dashboard = document.getElementById('mesDashboard');
    const wrapper = document.getElementById('viewportWrapper');
    if (!dashboard || !wrapper) return;

    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const scaleX = vw / DESIGN_WIDTH;
    const scaleY = vh / DESIGN_HEIGHT;
    const autoScale = Math.min(scaleX, scaleY, MAX_SCALE);
    const scale = userScale !== null ? userScale : Math.max(autoScale, MIN_SCALE);

    dashboard.style.transform = `scale(${scale})`;
    dashboard.style.transformOrigin = 'top left';

    wrapper.style.width = Math.ceil(DESIGN_WIDTH * scale) + 'px';
    wrapper.style.height = Math.ceil(DESIGN_HEIGHT * scale) + 'px';

    const label = document.getElementById('zoomLabel');
    if (label) label.textContent = Math.round(scale * 100) + '%';
  }

  function showToast(message, type) {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = 'toast ' + (type || 'info');
    toast.textContent = message;
    container.appendChild(toast);
    setTimeout(function () {
      toast.style.opacity = '0';
      toast.style.transition = 'opacity 0.3s';
      setTimeout(function () { toast.remove(); }, 300);
    }, 3000);
  }

  function showModal(title, body) {
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalBody').innerHTML = body.replace(/\n/g, '<br>');
    document.getElementById('modalOverlay').classList.add('open');
  }

  function closeModal() {
    document.getElementById('modalOverlay').classList.remove('open');
  }

  function handleAction(action) {
    const info = actionMessages[action];
    if (!info) {
      showToast('Action: ' + action, 'info');
      return;
    }

    if (action === 'start-job') {
      jobState = 'running';
      document.getElementById('stationStatusText').textContent = 'RUNNING';
      document.querySelector('[data-action="resume"]').disabled = true;
      document.querySelector('[data-action="hold"]').disabled = false;
      showToast('Job started — Station RUNNING', 'success');
    } else if (action === 'hold') {
      jobState = 'hold';
      document.getElementById('stationStatusText').textContent = 'ON HOLD';
      document.querySelector('[data-action="resume"]').disabled = false;
      showToast('Station on HOLD', 'warning');
    } else if (action === 'resume') {
      jobState = 'running';
      document.getElementById('stationStatusText').textContent = 'RUNNING';
      document.querySelector('[data-action="resume"]').disabled = true;
      showToast('Station RESUMED', 'success');
    } else if (action === 'request-quality') {
      document.querySelector('[data-andon="quality"] .andon-count').textContent = '1';
      showToast('Quality inspector requested', 'warning');
    } else if (action === 'call-maintenance') {
      document.querySelector('[data-andon="maintenance"] .andon-count').textContent = '1';
      showToast('Maintenance team called', 'error');
    } else if (action === 'complete-station') {
      showToast('Station completed successfully!', 'success');
    } else {
      showToast(info.title + ' activated', 'info');
    }

    showModal(info.title, info.body);
  }

  function switchStep(stepNum) {
    const data = stepData[stepNum];
    if (!data) return;

    document.querySelectorAll('.step-tab').forEach(function (tab) {
      tab.classList.toggle('active', tab.dataset.step === String(stepNum));
    });

    document.getElementById('stepTitle').textContent = data.title;
    document.getElementById('stepList').innerHTML = data.steps.map(function (s) {
      return '<li>' + s + '</li>';
    }).join('');

    showToast('Switched to ' + data.title, 'info');
  }

  function highlightBolt(boltNum) {
    document.querySelectorAll('.bolt-marker').forEach(function (m) {
      m.classList.toggle('active', m.dataset.bolt === String(boltNum));
    });
    document.querySelectorAll('#torqueTable tbody tr').forEach(function (row) {
      row.classList.toggle('selected', row.dataset.bolt === String(boltNum));
    });
  }

  function updateDateTime() {
    const el = document.getElementById('liveDateTime');
    if (!el) return;
    const now = new Date();
    const options = { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
    el.textContent = now.toLocaleString('en-GB', options).replace(',', ',');
  }

  function init() {
    fitDashboard();
    updateDateTime();
    setInterval(updateDateTime, 1000);

    window.addEventListener('resize', fitDashboard);

    document.getElementById('zoomIn').addEventListener('click', function () {
      const current = userScale !== null ? userScale : parseFloat(document.getElementById('zoomLabel').textContent) / 100;
      userScale = Math.min(current + 0.05, MAX_SCALE);
      fitDashboard();
    });

    document.getElementById('zoomOut').addEventListener('click', function () {
      const current = userScale !== null ? userScale : parseFloat(document.getElementById('zoomLabel').textContent) / 100;
      userScale = Math.max(current - 0.05, MIN_SCALE);
      fitDashboard();
    });

    document.getElementById('zoomFit').addEventListener('click', function () {
      userScale = null;
      fitDashboard();
      showToast('Fitted to screen', 'info');
    });

    document.getElementById('stepTabs').addEventListener('click', function (e) {
      const tab = e.target.closest('.step-tab');
      if (!tab) return;
      if (tab.dataset.action) {
        handleAction(tab.dataset.action);
        return;
      }
      if (tab.dataset.step) switchStep(parseInt(tab.dataset.step, 10));
    });

    document.querySelectorAll('[data-action]').forEach(function (el) {
      if (el.closest('#stepTabs')) return;
      el.addEventListener('click', function () {
        handleAction(el.dataset.action);
      });
    });

    document.querySelectorAll('.equipment-card').forEach(function (card) {
      card.addEventListener('click', function () {
        showModal(card.dataset.equipment, 'Equipment: ' + card.dataset.equipment + '\nStatus: ' + card.querySelector('.equip-status').textContent + '\nLast heartbeat: Just now\nConnection: Stable');
        showToast(card.dataset.equipment + ' — ' + card.querySelector('.equip-status').textContent, 'success');
      });
    });

    document.querySelectorAll('.integration-item').forEach(function (item) {
      item.addEventListener('click', function () {
        showModal(item.dataset.system + ' Integration', 'System: ' + item.dataset.system + '\nStatus: ' + item.querySelector('.int-status').textContent + '\nLatency: 12ms\nLast sync: Just now');
      });
    });

    document.querySelectorAll('.andon-box').forEach(function (box) {
      box.addEventListener('click', function () {
        const type = box.dataset.andon;
        const count = box.querySelector('.andon-count').textContent;
        showModal('Andon — ' + type.toUpperCase(), 'Category: ' + type.toUpperCase() + '\nActive alerts: ' + count + '\nClick station action buttons to raise or clear alerts.');
      });
    });

    document.querySelectorAll('#torqueTable tbody tr').forEach(function (row) {
      row.addEventListener('click', function () {
        highlightBolt(row.dataset.bolt);
        showToast('Bolt ' + row.dataset.bolt + ' — Torque OK', 'success');
      });
    });

    document.querySelectorAll('.bolt-marker').forEach(function (marker) {
      marker.addEventListener('click', function () {
        highlightBolt(marker.dataset.bolt);
      });
    });

    document.querySelectorAll('#componentTable tbody tr').forEach(function (row) {
      row.addEventListener('click', function () {
        document.querySelectorAll('#componentTable tbody tr').forEach(function (r) { r.classList.remove('selected'); });
        row.classList.add('selected');
        showToast(row.dataset.component + ' verified', 'success');
      });
    });

    document.getElementById('modalClose').addEventListener('click', closeModal);
    document.getElementById('modalOk').addEventListener('click', closeModal);
    document.getElementById('modalOverlay').addEventListener('click', function (e) {
      if (e.target === e.currentTarget) closeModal();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
