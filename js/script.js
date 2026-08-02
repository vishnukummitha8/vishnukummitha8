(function () {
  "use strict";

  const form = document.getElementById("loginForm");
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const plantSelect = document.getElementById("plant");
  const rememberMe = document.getElementById("rememberMe");
  const loginBtn = document.getElementById("loginBtn");
  const formError = document.getElementById("formError");
  const toggleBtn = document.getElementById("togglePassword");
  const eyeOpen = toggleBtn.querySelector(".eye-open");
  const eyeClosed = toggleBtn.querySelector(".eye-closed");

  /* ---------------- Password visibility toggle ---------------- */
  toggleBtn.addEventListener("click", function () {
    const show = passwordInput.type === "password";
    passwordInput.type = show ? "text" : "password";
    eyeOpen.hidden = show;
    eyeClosed.hidden = !show;
    toggleBtn.setAttribute("aria-label", show ? "Hide password" : "Show password");
  });

  /* ---------------- Remember me (username only) ---------------- */
  const STORAGE_KEY = "jsw-mes-remembered-user";
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    try {
      const data = JSON.parse(saved);
      usernameInput.value = data.username || "";
      if (data.plant) plantSelect.value = data.plant;
      rememberMe.checked = true;
    } catch (_) {
      localStorage.removeItem(STORAGE_KEY);
    }
  }

  /* ---------------- Validation helpers ---------------- */
  function setError(message, fields) {
    formError.textContent = message;
    formError.hidden = !message;
    document
      .querySelectorAll(".field--error")
      .forEach((el) => el.classList.remove("field--error"));
    (fields || []).forEach((input) => input.closest(".field").classList.add("field--error"));
  }

  [usernameInput, passwordInput, plantSelect].forEach((el) => {
    el.addEventListener("input", () => setError("", []));
    el.addEventListener("change", () => setError("", []));
  });

  /* ---------------- Submit ---------------- */
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const invalid = [];
    if (!usernameInput.value.trim()) invalid.push(usernameInput);
    if (!passwordInput.value) invalid.push(passwordInput);
    if (!plantSelect.value) invalid.push(plantSelect);

    if (invalid.length) {
      setError("Please enter username, password and select a plant.", invalid);
      invalid[0].focus();
      return;
    }

    if (rememberMe.checked) {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ username: usernameInput.value.trim(), plant: plantSelect.value })
      );
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }

    // Simulated authentication — replace with a real API call.
    loginBtn.disabled = true;
    loginBtn.querySelector("span").textContent = "Signing in\u2026";

    setTimeout(function () {
      loginBtn.disabled = false;
      loginBtn.querySelector("span").textContent = "Login";
      const plantName = plantSelect.options[plantSelect.selectedIndex].text;
      alert(
        "Welcome, " + usernameInput.value.trim() + "!\n" +
        "Logged in to JSW Motors MES \u2014 " + plantName + "."
      );
    }, 900);
  });

  /* ---------------- Forgot password ---------------- */
  document.getElementById("forgotPassword").addEventListener("click", function (event) {
    event.preventDefault();
    alert("Please contact your plant IT administrator to reset your MES password.");
  });
})();
