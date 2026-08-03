/* DELMIA Apriso MES — Station 02 interactivity */

(function () {
  "use strict";

  /* ---------- Live clock ---------- */
  function pad(n) {
    return String(n).padStart(2, "0");
  }

  function updateClock() {
    const now = new Date();
    const months = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
    ];
    const dateEl = document.getElementById("current-date");
    const timeEl = document.getElementById("current-time");
    if (dateEl) {
      dateEl.textContent =
        pad(now.getDate()) +
        " " +
        months[now.getMonth()] +
        " " +
        now.getFullYear();
    }
    if (timeEl) {
      timeEl.textContent =
        pad(now.getHours()) +
        ":" +
        pad(now.getMinutes()) +
        ":" +
        pad(now.getSeconds());
    }
  }

  updateClock();
  setInterval(updateClock, 1000);

  /* ---------- Toast ---------- */
  const toastEl = document.getElementById("toast");
  let toastTimer;

  function showToast(message) {
    if (!toastEl) return;
    toastEl.textContent = message;
    toastEl.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      toastEl.hidden = true;
    }, 2800);
  }

  /* ---------- Modal ---------- */
  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("modal-title");
  const modalBody = document.getElementById("modal-body");
  const modalClose = document.getElementById("modal-close");
  const modalOk = document.getElementById("modal-ok");

  function openModal(title, bodyHtml) {
    if (!modal) return;
    modalTitle.textContent = title;
    modalBody.innerHTML = bodyHtml;
    modal.hidden = false;
  }

  function closeModal() {
    if (!modal) return;
    modal.hidden = true;
  }

  if (modalClose) modalClose.addEventListener("click", closeModal);
  if (modalOk) modalOk.addEventListener("click", closeModal);
  if (modal) {
    modal.addEventListener("click", function (e) {
      if (e.target === modal) closeModal();
    });
  }

  /* ---------- Work instruction tabs ---------- */
  const tabs = document.querySelectorAll(".work-tab");
  const panels = document.querySelectorAll(".tab-panel");

  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      const id = tab.getAttribute("data-tab");
      tabs.forEach(function (t) {
        t.classList.remove("active");
      });
      panels.forEach(function (p) {
        p.classList.remove("active");
      });
      tab.classList.add("active");
      const panel = document.getElementById("tab-" + id);
      if (panel) panel.classList.add("active");
    });
  });

  /* ---------- Step progress ---------- */
  const stepData = {
    1: {
      title: "Step 1: Install Lower Control Arm",
      items: [
        "Position LH Lower Control Arm onto subframe mount points.",
        "Insert pivot bolts loosely — do not fully torque yet.",
        "Align ball joint with steering knuckle taper.",
        "Verify LH/RH orientation mark faces outward.",
        "Scan part barcode to confirm genealogy capture.",
      ],
    },
    2: {
      title: "Step 2: Align Strut & Knuckle",
      items: [
        "Engage lift assist and position strut assembly.",
        "Seat strut into knuckle pocket — check orientation.",
        "Install knuckle pinch bolt finger-tight.",
        "Confirm camber reference marks are aligned.",
        "Scan strut and knuckle serial numbers.",
      ],
    },
    3: {
      title: "Step 3: Apply Torque Sequence",
      items: [
        "Connect smart torque tool AT-8842.",
        "Follow torque points 1 → 8 in sequence.",
        "Verify each curve is within tolerance band.",
        "Do not skip points — system enforces order.",
        "Confirm ALL TORQUE POINTS COMPLETED banner.",
      ],
    },
    4: {
      title: "Step 4: Verify Quality Checklist",
      items: [
        "Complete visual inspection of all joints.",
        "Confirm cotter pins and lock nuts installed.",
        "Check stabilizer link both sides seated.",
        "Run vision camera verification cycle.",
        "Mark all quality checkpoints as Pass.",
      ],
    },
    5: {
      title: "Step 5: Complete Station",
      items: [
        "Confirm genealogy record is complete.",
        "Verify BOM / variant match status = MATCHED.",
        "Clear tools and fixtures from work zone.",
        "Press COMPLETE STATION to release vehicle.",
        "Wait for conveyor advance confirmation.",
      ],
    },
  };

  const steps = document.querySelectorAll(".step");
  const stepTitle = document.getElementById("step-title");
  const stepList = document.getElementById("step-list");

  steps.forEach(function (stepBtn) {
    stepBtn.addEventListener("click", function () {
      const n = stepBtn.getAttribute("data-step");
      const data = stepData[n];
      if (!data) return;

      steps.forEach(function (s) {
        const sn = parseInt(s.getAttribute("data-step"), 10);
        s.classList.remove("active", "done");
        if (sn < parseInt(n, 10)) s.classList.add("done");
        if (sn === parseInt(n, 10)) s.classList.add("active");
      });

      stepTitle.textContent = data.title;
      stepList.innerHTML = data.items
        .map(function (item) {
          return "<li>" + item + "</li>";
        })
        .join("");

      showToast("Navigated to " + data.title);
    });
  });

  /* ---------- Station status helper ---------- */
  function setStationStatus(label, isSuccess) {
    const cards = document.querySelectorAll(".status-card");
    cards.forEach(function (card) {
      const lbl = card.querySelector(".status-label");
      if (lbl && lbl.textContent.trim() === "Station Status") {
        const val = card.querySelector(".status-value");
        if (val) {
          val.textContent = label;
          val.classList.toggle("success", !!isSuccess);
        }
      }
    });
  }

  /* ---------- Station action buttons ---------- */
  const actionButtons = document.querySelectorAll(".action-btn");

  const actionHandlers = {
    start: function () {
      setStationStatus("RUNNING", true);
      showToast("Job started — station RUNNING");
      openModal(
        "START JOB",
        "<p>Production order <strong>PO-2026-08421</strong> started at Station 02.</p>" +
          "<p>VIN: <strong>MA3EJDL2S00128476</strong></p>" +
          "<p>Cycle timer is now active. Target: 180 sec.</p>"
      );
    },
    hold: function () {
      setStationStatus("HOLD", false);
      showToast("Station placed on HOLD");
      openModal(
        "HOLD",
        "<p>Station 02 has been placed on <strong>HOLD</strong>.</p>" +
          "<p>Conveyor advance is blocked until RESUME is pressed.</p>" +
          "<p>Andon Production signal can be raised if needed.</p>"
      );
    },
    resume: function () {
      setStationStatus("RUNNING", true);
      showToast("Station RESUMED — RUNNING");
      openModal(
        "RESUME",
        "<p>Station 02 operations have been <strong>resumed</strong>.</p>" +
          "<p>Continue from the current work instruction step.</p>"
      );
    },
    quality: function () {
      const box = document.querySelector(".andon-box.quality .andon-count");
      if (box) box.textContent = String(parseInt(box.textContent, 10) + 1);
      showToast("Quality assistance requested");
      openModal(
        "REQUEST QUALITY",
        "<p>Quality Andon has been raised for Station 02.</p>" +
          "<p>A quality engineer will be notified.</p>" +
          "<p>Defect Log remains available for entry while waiting.</p>"
      );
    },
    maint: function () {
      const box = document.querySelector(".andon-box.maintenance .andon-count");
      if (box) box.textContent = String(parseInt(box.textContent, 10) + 1);
      showToast("Maintenance called");
      openModal(
        "CALL MAINTENANCE",
        "<p>Maintenance Andon has been raised.</p>" +
          "<p>Equipment status will remain visible during the call-out.</p>" +
          "<p>Tool ID AT-8842 and PLC health are attached to the ticket.</p>"
      );
    },
    complete: function () {
      setStationStatus("COMPLETE", true);
      showToast("Station completed — vehicle released");
      openModal(
        "COMPLETE STATION",
        "<p>All torque points completed. Quality checklist: Pass.</p>" +
          "<p>Genealogy recorded for VIN <strong>MA3EJDL2S00128476</strong>.</p>" +
          "<p>Vehicle released to next station. Cycle time: <strong>132 sec</strong>.</p>"
      );
    },
  };

  actionButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      actionButtons.forEach(function (b) {
        b.classList.remove("active-state");
      });
      btn.classList.add("active-state");
      const action = btn.getAttribute("data-action");
      if (actionHandlers[action]) actionHandlers[action]();
    });
  });

  /* ---------- Left panel buttons ---------- */
  const btnInspection = document.getElementById("btn-view-inspection");
  const btnDefect = document.getElementById("btn-defect-log");
  const btnGenealogy = document.getElementById("btn-genealogy");

  if (btnInspection) {
    btnInspection.addEventListener("click", function () {
      openModal(
        "VIEW INSPECTION",
        "<p><strong>Inspection Report — ST-02</strong></p>" +
          "<ul style='margin:8px 0 0 18px'>" +
          "<li>Lower Arm Installation — Pass</li>" +
          "<li>Strut Mount Torque — Pass (108–109 Nm)</li>" +
          "<li>Knuckle Ball Joint — Pass</li>" +
          "<li>Stabilizer Link Fit — Pass</li>" +
          "<li>Visual Damage Check — Pass</li>" +
          "<li>Part Orientation — Pass</li>" +
          "</ul>" +
          "<p style='margin-top:10px'>Inspector: System / Operator Ramesh K</p>"
      );
    });
  }

  if (btnDefect) {
    btnDefect.addEventListener("click", function () {
      openModal(
        "DEFECT LOG",
        "<p>No open defects for current VIN.</p>" +
          "<p>Shift totals — Reject: <strong style='color:#DC3545'>4</strong>, " +
          "Rework: <strong style='color:#FD7E14'>2</strong>.</p>" +
          "<p>Use this dialog to log a new defect against the active order.</p>"
      );
    });
  }

  if (btnGenealogy) {
    btnGenealogy.addEventListener("click", function () {
      openModal(
        "VIEW FULL GENEALOGY",
        "<p><strong>VIN:</strong> MA3EJDL2S00128476</p>" +
          "<p><strong>Order:</strong> PO-2026-08421</p>" +
          "<p>7 components traced with serial / batch capture.</p>" +
          "<p>Upstream: Body Shop BS-14 → Paint PT-03 → Trim TR-08 → ST-02.</p>" +
          "<p>Downstream release pending COMPLETE STATION.</p>"
      );
    });
  }

  /* ---------- Keyboard: Escape closes modal ---------- */
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeModal();
  });
})();
