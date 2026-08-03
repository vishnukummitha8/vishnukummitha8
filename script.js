const stepData = [
  {
    title: "Step 1 : Install Lower Control Arm",
    items: [
      "Scan Lower Control Arm (LH) and (RH).",
      "Position lower control arm on the subframe.",
      "Tighten front and rear bolts as per sequence.",
      "Ensure all bolts are tightened to target torque."
    ]
  },
  {
    title: "Step 2 : Install Strut Assembly",
    items: [
      "Scan Strut Assembly (LH) and (RH).",
      "Guide strut into the upper mounting location.",
      "Install top nuts and lower mounting bolt.",
      "Confirm orientation marks before tightening."
    ]
  },
  {
    title: "Step 3 : Fit Steering Knuckle",
    items: [
      "Scan and verify the steering knuckle.",
      "Position knuckle against the strut bracket.",
      "Install knuckle fasteners in sequence.",
      "Check free movement and component clearance."
    ]
  },
  {
    title: "Step 4 : Install Stabilizer",
    items: [
      "Position stabilizer bar on the subframe.",
      "Install LH and RH stabilizer links.",
      "Hand-tighten all mounting hardware.",
      "Verify bar is centered before final torque."
    ]
  },
  {
    title: "Step 5 : Final Verification",
    items: [
      "Complete all controlled torque points.",
      "Check component and routing clearances.",
      "Perform the final visual inspection.",
      "Confirm station completion in MES."
    ]
  }
];

const modalCopy = {
  inspection: ["Inspection Details", "All six front suspension inspection points have passed. No deviations were recorded."],
  defects: ["Defect Log", "No open defects are recorded against VIN MA1AB2SU0R64012345."],
  genealogy: ["Full VIN Genealogy", "All scanned components are linked to this VIN with verified serial numbers and installation timestamps."],
  quality: ["Quality Request", "A quality assistance request has been created for Station 02."],
  maintenance: ["Maintenance Request", "Maintenance has been notified. The station remains safely held until assistance arrives."]
};

const toast = document.getElementById("toast");
const backdrop = document.getElementById("modalBackdrop");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");
let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2400);
}

function showModal(type) {
  const [title, text] = modalCopy[type] || ["Station Message", "The requested station action has been registered."];
  modalTitle.textContent = title;
  modalText.textContent = text;
  backdrop.classList.add("open");
  backdrop.setAttribute("aria-hidden", "false");
  document.querySelector(".modal-confirm").focus();
}

function closeModal() {
  backdrop.classList.remove("open");
  backdrop.setAttribute("aria-hidden", "true");
}

document.querySelectorAll(".step-tabs button").forEach((button) => {
  button.addEventListener("click", () => {
    const index = Number(button.dataset.step);
    const data = stepData[index];
    document.querySelectorAll(".step-tabs button").forEach((tab) => tab.classList.remove("active"));
    button.classList.add("active");
    document.getElementById("stepContent").innerHTML = `
      <h3>${data.title}</h3>
      <ol>${data.items.map((item) => `<li>${item}</li>`).join("")}</ol>
    `;
  });
});

document.querySelectorAll(".instruction-nav button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".instruction-nav button").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    showToast(`${button.dataset.view} opened for the current operation`);
  });
});

document.querySelectorAll("[data-modal]").forEach((button) => {
  button.addEventListener("click", () => showModal(button.dataset.modal));
});

document.querySelectorAll("[data-action]").forEach((button) => {
  button.addEventListener("click", () => {
    const action = button.dataset.action;
    const stationStatus = document.querySelector(".status-strip article:first-child strong");
    document.querySelectorAll("[data-action]").forEach((item) => item.classList.remove("selected"));
    button.classList.add("selected");

    if (action === "hold") {
      stationStatus.textContent = "ON HOLD";
      stationStatus.className = "orange";
      showToast("Station placed on hold");
    } else if (action === "complete") {
      stationStatus.textContent = "COMPLETED";
      stationStatus.className = "green";
      showToast("Station operation completed successfully");
    } else {
      stationStatus.textContent = "RUNNING";
      stationStatus.className = "green";
      showToast(action === "resume" ? "Station operation resumed" : "Station job started");
    }
  });
});

document.querySelectorAll(".view-tools button").forEach((button, index) => {
  button.addEventListener("click", () => {
    const svg = document.querySelector(".assembly-view svg");
    if (index === 0) svg.style.transform = "scale(1.12)";
    if (index === 1) svg.style.transform = "scale(1)";
    if (index === 2) svg.style.transform = svg.style.transform.includes("rotate") ? "scale(1)" : "scale(1) rotate(3deg)";
    svg.style.transition = "transform .25s ease";
  });
});

document.querySelectorAll(".torque-table tbody tr, #componentRows tr").forEach((row) => {
  row.addEventListener("click", () => {
    row.parentElement.querySelectorAll("tr").forEach((item) => item.classList.remove("selected-row"));
    row.classList.add("selected-row");
    showToast(`Selected ${row.children[1]?.textContent || row.children[0].textContent}`);
  });
});

document.querySelector(".modal-close").addEventListener("click", closeModal);
document.querySelector(".modal-confirm").addEventListener("click", closeModal);
backdrop.addEventListener("click", (event) => {
  if (event.target === backdrop) closeModal();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeModal();
});

function updateClock() {
  const now = new Date();
  document.getElementById("clockText").textContent = now.toLocaleTimeString("en-US");
  document.getElementById("dateText").textContent = now.toLocaleDateString("en-GB", {
    day: "2-digit", month: "short", year: "numeric"
  }).replace(/ /g, "-");
}

updateClock();
setInterval(updateClock, 1000);
