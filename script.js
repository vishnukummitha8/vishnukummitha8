const form = document.querySelector("form");
const password = document.querySelector('input[type="password"]');
const togglePassword = document.querySelector(".eye");

togglePassword.addEventListener("click", () => {
  const visible = password.type === "text";
  password.type = visible ? "password" : "text";
  togglePassword.textContent = visible ? "◉" : "◌";
  togglePassword.setAttribute("aria-label", visible ? "Show password" : "Hide password");
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const button = form.querySelector(".login-button");
  button.textContent = "Login";
  button.blur();
});
