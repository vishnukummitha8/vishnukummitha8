(() => {
  const passwordInput = document.getElementById("password");
  const toggleBtn = document.getElementById("togglePassword");
  const form = document.getElementById("loginForm");

  if (toggleBtn && passwordInput) {
    toggleBtn.addEventListener("click", () => {
      const showing = passwordInput.type === "text";
      passwordInput.type = showing ? "password" : "text";
      toggleBtn.setAttribute("aria-label", showing ? "Show password" : "Hide password");

      const eye = toggleBtn.querySelector(".icon-eye");
      const eyeOff = toggleBtn.querySelector(".icon-eye-off");
      if (eye && eyeOff) {
        eye.hidden = !showing;
        eyeOff.hidden = showing;
      }
    });
  }

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const username = String(data.get("username") || "").trim();
      const plant = String(data.get("plant") || "");

      if (!username || !data.get("password") || !plant) {
        form.reportValidity();
        return;
      }

      const button = form.querySelector(".btn-login");
      if (!button) return;

      const original = button.innerHTML;
      button.disabled = true;
      button.innerHTML = "<span>SIGNING IN…</span>";

      window.setTimeout(() => {
        button.disabled = false;
        button.innerHTML = original;
        window.alert(`Welcome, ${username}. Plant selected: ${plant.replace("plant-", "Plant ")}.`);
      }, 700);
    });
  }
})();
