document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registerForm");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const togglePassword = document.getElementById("togglePassword");
  const errorMsg = document.getElementById("errorMsg");
  const previewBox = document.getElementById("previewBox");
  const previewName = document.getElementById("previewName");
  const previewEmail = document.getElementById("previewEmail");

  // 🔐 Toggle Password Visibility
  togglePassword.addEventListener("click", () => {
    const type = passwordInput.type === "password" ? "text" : "password";
    passwordInput.type = type;
    togglePassword.textContent = type === "password" ? "Show" : "Hide";
  });

  // 🧪 Form Validation & Preview
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Simple validation
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();

    if (name === "" || email === "") {
      errorMsg.textContent = "Please fill out all fields.";
      return;
    }

    errorMsg.textContent = "";

    // Show preview
    previewName.textContent = name;
    previewEmail.textContent = email;
    previewBox.style.display = "block";
  });
});
