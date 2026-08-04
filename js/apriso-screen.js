(function () {
  'use strict';

  const DESIGN_WIDTH = 1280;
  const DESIGN_HEIGHT = 800;
  const MIN_SCALE = 0.5;
  const MAX_SCALE = 1.0;

  let records = [];

  function fitToScreen() {
    const app = document.getElementById('aprisoApp');
    const wrapper = document.getElementById('viewportWrapper');
    if (!app || !wrapper) return;

    const scaleX = window.innerWidth / DESIGN_WIDTH;
    const scaleY = window.innerHeight / DESIGN_HEIGHT;
    const scale = Math.max(Math.min(scaleX, scaleY, MAX_SCALE), MIN_SCALE);

    app.style.transform = 'scale(' + scale + ')';
    app.style.transformOrigin = 'top left';
    wrapper.style.width = Math.ceil(DESIGN_WIDTH * scale) + 'px';
    wrapper.style.height = Math.ceil(DESIGN_HEIGHT * scale) + 'px';
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
    document.getElementById('modalBody').innerHTML = body;
    document.getElementById('modalOverlay').classList.add('open');
  }

  function closeModal() {
    document.getElementById('modalOverlay').classList.remove('open');
  }

  function validateForm() {
    const fields = [
      { el: document.getElementById('name'), label: 'Name' },
      { el: document.getElementById('id'), label: 'ID' },
      { el: document.getElementById('department'), label: 'Department' },
      { el: document.getElementById('location'), label: 'Location' }
    ];

    let valid = true;
    fields.forEach(function (f) {
      const empty = !f.el.value || !f.el.value.trim();
      f.el.classList.toggle('invalid', empty);
      if (empty) valid = false;
    });

    if (!valid) {
      showToast('Please fill all required fields', 'error');
    }
    return valid;
  }

  function renderTable() {
    const tbody = document.getElementById('employeeTableBody');
    const countEl = document.getElementById('recordCount');

    if (records.length === 0) {
      tbody.innerHTML = '<tr class="empty-row"><td colspan="5">List is empty</td></tr>';
      countEl.textContent = 'Records: 0';
      return;
    }

    tbody.innerHTML = records.map(function (r, i) {
      return '<tr data-index="' + i + '">' +
        '<td>' + escapeHtml(r.name) + '</td>' +
        '<td>' + escapeHtml(r.id) + '</td>' +
        '<td>' + escapeHtml(r.department) + '</td>' +
        '<td>' + escapeHtml(r.location) + '</td>' +
        '<td><span class="status-saved">Saved</span></td>' +
        '</tr>';
    }).join('');

    countEl.textContent = 'Records: ' + records.length;

    tbody.querySelectorAll('tr[data-index]').forEach(function (row) {
      row.addEventListener('click', function () {
        tbody.querySelectorAll('tr').forEach(function (r) { r.classList.remove('selected'); });
        row.classList.add('selected');
        const idx = parseInt(row.dataset.index, 10);
        const rec = records[idx];
        showModal('Employee Record', 
          '<strong>Name:</strong> ' + escapeHtml(rec.name) + '<br>' +
          '<strong>ID:</strong> ' + escapeHtml(rec.id) + '<br>' +
          '<strong>Department:</strong> ' + escapeHtml(rec.department) + '<br>' +
          '<strong>Location:</strong> ' + escapeHtml(rec.location) + '<br>' +
          '<strong>Status:</strong> Saved'
        );
      });
    });
  }

  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!validateForm()) return;

    const record = {
      name: document.getElementById('name').value.trim(),
      id: document.getElementById('id').value.trim(),
      department: document.getElementById('department').value.trim(),
      location: document.getElementById('location').value
    };

    records.push(record);
    renderTable();

    showToast('Employee record saved — SetSessions triggered', 'success');
    showModal('Submit Successful',
      'Data submitted to <strong>SetSessions</strong> function.<br><br>' +
      '<strong>Name:</strong> ' + escapeHtml(record.name) + '<br>' +
      '<strong>ID:</strong> ' + escapeHtml(record.id) + '<br>' +
      '<strong>Department:</strong> ' + escapeHtml(record.department) + '<br>' +
      '<strong>Location:</strong> ' + escapeHtml(record.location)
    );

    document.getElementById('employeeForm').reset();
    document.querySelectorAll('.text-input, .select-input').forEach(function (el) {
      el.classList.remove('invalid');
    });
  }

  function init() {
    fitToScreen();
    window.addEventListener('resize', fitToScreen);

    document.getElementById('employeeForm').addEventListener('submit', handleSubmit);

    document.getElementById('submitBtn').addEventListener('click', function (e) {
      e.preventDefault();
      document.getElementById('employeeForm').requestSubmit();
    });

    document.querySelectorAll('.text-input, .select-input').forEach(function (el) {
      el.addEventListener('input', function () { el.classList.remove('invalid'); });
      el.addEventListener('change', function () { el.classList.remove('invalid'); });
    });

    document.getElementById('searchBtn').addEventListener('click', function () {
      const query = document.getElementById('findScreen').value.trim();
      if (query) {
        showToast('Searching for: ' + query, 'info');
      } else {
        showToast('Enter a screen name to search', 'info');
      }
    });

    document.getElementById('findScreen').addEventListener('keydown', function (e) {
      if (e.key === 'Enter') document.getElementById('searchBtn').click();
    });

    document.getElementById('userMenu').addEventListener('click', function () {
      showModal('User Profile', '<strong>User:</strong> VISHNU<br><strong>Server:</strong> JSWMRCPSNMESTST.jsw.in<br><strong>Role:</strong> Operator');
    });

    document.getElementById('infoBtn').addEventListener('click', function () {
      showModal('Screen Information',
        '<strong>Screen:</strong> Employee Registration<br>' +
        '<strong>Project:</strong> TestPage - VF.26D2.001<br>' +
        '<strong>Step:</strong> New Step 1<br>' +
        '<strong>Functions:</strong> ScreenInterface → InputToOutput1 → SetSessions'
      );
    });

    document.querySelector('.tab-home').addEventListener('click', function () {
      showToast('Navigating to Home', 'info');
    });

    document.getElementById('closeTab').addEventListener('click', function (e) {
      e.stopPropagation();
      showModal('Close Tab', 'Are you sure you want to close the Employee Registration screen?');
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
