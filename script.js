function togglePassword() {
  const passwordInput = document.getElementById("password");
  const toggleIcon = document.querySelector(".toggle-password");
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggleIcon.textContent = "🙈";
  } else {
    passwordInput.type = "password";
    toggleIcon.textContent = "👁";
  }
}

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const error = document.getElementById("error");

  if (!username || !password) {
    error.style.color = "red";
    error.textContent = "❌ Username and password cannot be empty.";
    return;
  }

  // Fake login check (replace with real backend later)
  if (username === "admin" && password === "1234") {
    error.style.color = "green";
    error.textContent = "✅ Login successful!";
  } else {
    error.style.color = "red";
    error.textContent = "❌ Invalid credentials. Please try again.";
  }
}
