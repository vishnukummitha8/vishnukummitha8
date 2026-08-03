const stepContent = {
  1: {
    title: "Step 1 : Install Lower Control Arm",
    items: [
      "Scan Lower Control Arm (LH) and (RH).",
      "Position lower control arm on the subframe.",
      "Tighten front and rear bolts as per sequence.",
      "Ensure all bolts are tightened to target torque.",
    ],
  },
  2: {
    title: "Step 2 : Install Strut Assembly",
    items: [
      "Scan Strut Assembly (LH) and (RH).",
      "Position strut assembly onto the knuckle and body mount.",
      "Tighten top nut and bottom bolt as per sequence.",
      "Verify strut alignment before final torque.",
    ],
  },
  3: {
    title: "Step 3 : Install Steering Knuckle",
    items: [
      "Scan Steering Knuckle (LH) and (RH).",
      "Mount knuckle assembly to the lower control arm and strut.",
      "Insert and hand-tighten mounting bolts.",
      "Apply final torque as per the torque sheet.",
    ],
  },
  4: {
    title: "Step 4 : Install Stabilizer Bar & Links",
    items: [
      "Scan Stabilizer Bar and Stabilizer Links (LH / RH).",
      "Position stabilizer bar on the subframe bushings.",
      "Connect stabilizer links to the bar and control arm.",
      "Tighten all mounting points to target torque.",
    ],
  },
  5: {
    title: "Step 5 : Final Inspection & Torque Verification",
    items: [
      "Perform a full visual inspection of the assembly.",
      "Confirm all torque points on the torque sheet are OK.",
      "Verify component genealogy has been recorded.",
      "Mark station job as complete once all checks pass.",
    ],
  },
};

function setActiveStep(stepNumber) {
  document.querySelectorAll(".step-tab").forEach((tab) => {
    const isActive = tab.dataset.step === String(stepNumber);
    tab.classList.toggle("is-active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
  });

  const data = stepContent[stepNumber];
  if (!data) return;

  const heading = document.getElementById("step-heading");
  const list = document.getElementById("step-list");
  if (heading) heading.textContent = data.title;
  if (list) {
    list.innerHTML = "";
    data.items.forEach((text) => {
      const li = document.createElement("li");
      li.textContent = text;
      list.appendChild(li);
    });
  }
}

document.querySelectorAll(".step-tab").forEach((tab) => {
  tab.addEventListener("click", () => setActiveStep(tab.dataset.step));
});

let zoomLevel = 1;
const visualCanvas = document.querySelector(".visual-canvas");

function applyZoom() {
  const art = document.querySelector(".suspension-art");
  if (art) art.style.transform = `scale(${zoomLevel})`;
}

document.getElementById("zoom-in")?.addEventListener("click", () => {
  zoomLevel = Math.min(zoomLevel + 0.15, 2);
  applyZoom();
});

document.getElementById("zoom-out")?.addEventListener("click", () => {
  zoomLevel = Math.max(zoomLevel - 0.15, 0.7);
  applyZoom();
});

document.getElementById("zoom-fit")?.addEventListener("click", () => {
  zoomLevel = 1;
  applyZoom();
});

document.querySelectorAll(".tag").forEach((tag) => {
  tag.addEventListener("click", () => {
    tag.classList.toggle("tag--active");
  });
});

const startJobBtn = document.getElementById("btn-start-job");
const holdBtn = document.getElementById("btn-hold");
const resumeBtn = document.getElementById("btn-resume");
const completeBtn = document.getElementById("btn-complete-station");
const stationStatusValue = document.querySelector(".status-card .status-value");

function setStationStatus(text, mood) {
  if (!stationStatusValue) return;
  stationStatusValue.classList.remove("good", "neutral", "warn");
  stationStatusValue.classList.add(mood);
  const iconMarkup = stationStatusValue.querySelector("svg")?.outerHTML || "";
  stationStatusValue.innerHTML = `${iconMarkup}${text}`;
}

startJobBtn?.addEventListener("click", () => {
  setStationStatus("RUNNING", "good");
  holdBtn.disabled = false;
  resumeBtn.disabled = true;
});

holdBtn?.addEventListener("click", () => {
  setStationStatus("ON HOLD", "neutral");
  resumeBtn.disabled = false;
});

resumeBtn?.addEventListener("click", () => {
  setStationStatus("RUNNING", "good");
  resumeBtn.disabled = true;
});

completeBtn?.addEventListener("click", () => {
  setStationStatus("COMPLETED", "good");
});

[
  "btn-view-inspection",
  "btn-defect-log",
  "btn-genealogy",
  "btn-request-quality",
  "btn-call-maintenance",
  "link-pdf",
  "link-partlist",
  "link-torque",
  "link-3d",
  "link-video",
].forEach((id) => {
  document.getElementById(id)?.addEventListener("click", (event) => {
    if (event.currentTarget.tagName === "A") event.preventDefault();
  });
});
