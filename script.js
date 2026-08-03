const components = [
  ["Lower Control Arm", "LH", "FS-LCA-LH-001", "LCA-LH-250531-001"],
  ["Lower Control Arm", "RH", "FS-LCA-RH-001", "LCA-RH-250531-001"],
  ["Strut Assembly", "LH", "FS-STRUT-LH-001", "STRUT-LH-250531-001"],
  ["Strut Assembly", "RH", "FS-STRUT-RH-001", "STRUT-RH-250531-001"],
  ["Steering Knuckle", "LH", "FS-KNUCKLE-LH-001", "KN-LH-250531-001"],
  ["Steering Knuckle", "RH", "FS-KNUCKLE-RH-001", "KN-RH-250531-001"],
  ["Stabilizer Bar", "-", "FS-STAB-BAR-001", "SB-250531-001"],
  ["Stabilizer Link", "LH", "FS-STAB-LINK-LH-001", "SL-LH-250531-001"],
  ["Stabilizer Link", "RH", "FS-STAB-LINK-RH-001", "SL-RH-250531-001"],
];

const torquePoints = [
  ["1", "LCA LH - Front Bolt", "110", "109.6"], ["2", "LCA LH - Rear Bolt", "110", "110.2"],
  ["3", "LCA RH - Front Bolt", "110", "109.8"], ["4", "LCA RH - Rear Bolt", "110", "110.1"],
  ["5", "Strut LH - Top Bolt", "65", "64.7"], ["6", "Strut LH - Bottom Bolt", "120", "119.5"],
  ["7", "Strut RH - Top Bolt", "65", "65.1"], ["8", "Strut RH - Bottom Bolt", "120", "120.3"],
];

const steps = {
  1: ["Step 1: Install Lower Control Arm", ["Scan Lower Control Arm (LH) and (RH).", "Position lower control arm on the subframe.", "Tighten front and rear bolts as per sequence.", "Ensure all bolts are tightened to target torque."]],
  2: ["Step 2: Install Strut Assembly", ["Scan the matched strut assembly.", "Locate the strut to the mounting points.", "Install upper and lower fasteners.", "Confirm torque points on the connected tool."]],
  3: ["Step 3: Install Steering Knuckle", ["Scan steering knuckle serial number.", "Fit knuckle to the lower control arm.", "Connect the strut to the knuckle.", "Verify the installation visually."]],
  4: ["Step 4: Connect Stabilizer Bar", ["Position the stabilizer bar.", "Install both stabilizer links.", "Tighten link fasteners to specification.", "Check for unrestricted movement."]],
  5: ["Step 5: Final Quality Check", ["Inspect all installed components.", "Confirm each torque curve is acceptable.", "Complete visual inspection checklist.", "Submit the station for quality approval."]],
};

function rows(items, kind) {
  return items.map((item, index) => {
    if (kind === "component") return `<tr><td>${item[0]}</td><td>${item[1]}</td><td>${item[2]}</td><td>${item[3]}</td><td class="pass">●</td></tr>`;
    if (kind === "torque") return `<tr><td>${item[0]}</td><td>${item[1]}</td><td>${item[2]}</td><td>${item[3]}</td><td class="pass">OK</td><td>⌁</td></tr>`;
    return `<tr><td>${item[0]}</td><td>${item[2]}</td><td>${item[2]}</td><td class="pass">●</td></tr>`;
  }).join("");
}

document.querySelector("#componentRows").innerHTML = rows(components, "component");
document.querySelector("#bomRows").innerHTML = rows(components.slice(0, 5), "bom");
document.querySelector("#genealogyRows").innerHTML = components.slice(0, 4).map((item, i) =>
  `<tr><td>${item[0]} ${item[1]}</td><td>${item[3]}</td><td>10:${19 + i}:0${i + 2} AM</td></tr>`).join("");
document.querySelector("#torqueRows").innerHTML = rows(torquePoints, "torque");

function renderStep(step) {
  const [title, instructions] = steps[step];
  document.querySelector("#stepContent").innerHTML = `<h3>${title}</h3><ol>${instructions.map(text => `<li>${text}</li>`).join("")}</ol>`;
}
renderStep(1);
document.querySelectorAll("[data-step]").forEach(button => button.addEventListener("click", () => {
  document.querySelectorAll("[data-step]").forEach(item => item.classList.remove("active"));
  button.classList.add("active");
  renderStep(button.dataset.step);
}));

const toast = document.querySelector("#toast");
function notify(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(window.toastTimer);
  window.toastTimer = window.setTimeout(() => toast.classList.remove("show"), 2200);
}
document.querySelector("#startBtn").addEventListener("click", () => notify("Job started — Station 02 is running."));
document.querySelector("#holdBtn").addEventListener("click", () => notify("Station placed on hold."));
document.querySelector("#resumeBtn").addEventListener("click", () => notify("Station resumed."));
document.querySelector("#completeBtn").addEventListener("click", () => notify("Station completion submitted for validation."));
document.querySelectorAll(".work-tools button, .mini-actions button, .full-genealogy, .quality, .maintenance").forEach(button =>
  button.addEventListener("click", () => notify(`${button.textContent.trim()} selected.`))
);
