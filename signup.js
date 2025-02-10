// Retrieve registered emails from localStorage
const registeredEmails =
  JSON.parse(localStorage.getItem("registeredEmails")) || [];

document.getElementById("myEmail").onblur = function () {
  const email = this.value.trim();

  if (registeredEmails.includes(email)) {
    alert("This email is already registered. Please use another one.");
    this.value = ""; // Clear the input field
  }
};

// Handle registration
document.getElementById("registerBtn").onclick = function () {
  const name = document.getElementById("myName").value.trim();
  const email = document.getElementById("myEmail").value.trim();
  const password = document.getElementById("myPassword").value.trim();

  if (!name || !email || !password) {
    alert("All fields are required!");
    return;
  }

  if (registeredEmails.includes(email)) {
    alert("This email is already registered!");
    return;
  }
  localStorage.setItem(
    "currentEmail",
    document.getElementById("myEmail").value
  );
  localStorage.setItem("currentPassword", password);
  console.log("password-stored", localStorage.getItem("currentPassword"));
  console.log("password", password);
  // Store the new email
  registeredEmails.push(email);
  localStorage.setItem("registeredEmails", JSON.stringify(registeredEmails));

  alert("Registration successful!");
  window.location.href = "login.html"; // Redirect to login page
};
