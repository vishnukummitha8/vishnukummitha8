document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  const passwordInput = document.getElementById("password");
  const toggleBtn = document.getElementById("togglePassword");

  if (toggleBtn && passwordInput) {
    toggleBtn.addEventListener("click", () => {
      const isHidden = passwordInput.type === "password";
      passwordInput.type = isHidden ? "text" : "password";

      const icon = toggleBtn.querySelector("i");
      icon.classList.toggle("fa-eye", !isHidden);
      icon.classList.toggle("fa-eye-slash", isHidden);
      toggleBtn.setAttribute("aria-label", isHidden ? "Hide password" : "Show password");
    });
  }

  const form = document.getElementById("loginForm");
  const message = document.getElementById("formMessage");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const username = document.getElementById("username").value.trim();
      const password = passwordInput.value.trim();
      const plant = document.getElementById("plant").value;

      message.classList.remove("error", "success");

      if (!username || !password || !plant) {
        message.textContent = "Please fill in username, password and select a plant.";
        message.classList.add("error");
        return;
      }

      message.textContent = `Welcome, ${username}! Authenticating for selected plant...`;
      message.classList.add("success");

      const loginBtn = form.querySelector(".login-btn");
      loginBtn.disabled = true;
      loginBtn.style.opacity = "0.75";

      setTimeout(() => {
        loginBtn.disabled = false;
        loginBtn.style.opacity = "1";
      }, 1400);
    });
  }
});
