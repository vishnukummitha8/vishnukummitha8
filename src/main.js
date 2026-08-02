const form = document.querySelector("#login-form");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const plant = document.querySelector("#plant");
const togglePassword = document.querySelector("#toggle-password");
const formMessage = document.querySelector("#form-message");
const forgotPassword = document.querySelector("#forgot-password");
const toast = document.querySelector("#toast");

let toastTimer;

function showToast(message) {
  window.clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("show");
  toastTimer = window.setTimeout(() => toast.classList.remove("show"), 3000);
}

function setError(message, field) {
  formMessage.textContent = message;
  formMessage.classList.add("visible");
  field?.focus();
}

function clearError() {
  formMessage.textContent = "";
  formMessage.classList.remove("visible");
}

togglePassword.addEventListener("click", () => {
  const willShow = password.type === "password";
  password.type = willShow ? "text" : "password";
  togglePassword.classList.toggle("password-shown", willShow);
  togglePassword.setAttribute("aria-label", willShow ? "Hide password" : "Show password");
});

[username, password, plant].forEach((field) => {
  field.addEventListener("input", clearError);
  field.addEventListener("change", clearError);
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  clearError();

  if (!username.value.trim()) {
    setError("Please enter your username.", username);
    return;
  }

  if (!password.value) {
    setError("Please enter your password.", password);
    return;
  }

  if (!plant.value) {
    setError("Please select a plant.", plant);
    return;
  }

  showToast(`Welcome back. Connecting to ${plant.value}…`);
});

forgotPassword.addEventListener("click", () => {
  showToast("Password recovery will be handled by your system administrator.");
});
