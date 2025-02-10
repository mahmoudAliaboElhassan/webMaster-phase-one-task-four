document.getElementById("login").onclick = function () {
  // Get the values inside the click event
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const emailStored = localStorage.getItem("currentEmail");
  const passwordStored = localStorage.getItem("currentPassword");

  console.log("email", email);
  console.log("password", password);
  console.log("emailStored", emailStored);
  console.log("passwordStored", passwordStored);

  if (!email || !password) {
    alert("Both email and password are required!");
    return;
  }

  if (email === emailStored && password === passwordStored) {
    alert("Successful login!");
  } else {
    alert("Email or password is incorrect!");
  }
};
