(() => {
  const passwordInput = document.getElementById("password");
  const togglePassword = document.getElementById("togglePassword");
  const loginForm = document.getElementById("loginForm");
  const plantSelect = loginForm?.querySelector('select[name="plant"]');

  if (togglePassword && passwordInput) {
    const eye = togglePassword.querySelector(".icon-eye");
    const eyeOff = togglePassword.querySelector(".icon-eye-off");

    togglePassword.addEventListener("click", () => {
      const showing = passwordInput.type === "text";
      passwordInput.type = showing ? "password" : "text";
      togglePassword.setAttribute(
        "aria-label",
        showing ? "Show password" : "Hide password"
      );
      if (eye && eyeOff) {
        eye.hidden = !showing;
        eyeOff.hidden = showing;
      }
    });
  }

  if (plantSelect) {
    const syncPlantColor = () => {
      plantSelect.classList.toggle("has-value", Boolean(plantSelect.value));
    };
    plantSelect.addEventListener("change", syncPlantColor);
    syncPlantColor();
  }

  if (loginForm) {
    let message = loginForm.querySelector(".form-message");
    if (!message) {
      message = document.createElement("p");
      message.className = "form-message";
      message.setAttribute("role", "status");
      loginForm.appendChild(message);
    }

    loginForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const formData = new FormData(loginForm);
      const username = String(formData.get("username") || "").trim();
      const password = String(formData.get("password") || "");
      const plant = String(formData.get("plant") || "");

      if (!username || !password || !plant) {
        message.textContent = "Please complete username, password, and plant.";
        return;
      }

      const submitBtn = loginForm.querySelector(".login-btn");
      submitBtn?.classList.add("is-loading");
      message.textContent = "";

      window.setTimeout(() => {
        submitBtn?.classList.remove("is-loading");
        message.style.color = "#1b3a6b";
        message.textContent = `Signed in to ${plant.replace(/-/g, " ")}.`;
      }, 700);
    });
  }

  // Gentle entrance stagger for tiles after load
  document.querySelectorAll(".tile").forEach((tile, index) => {
    tile.style.transitionDelay = `${0.05 * index}s`;
  });
})();
