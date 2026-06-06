document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registrationForm");

  form.addEventListener("submit", function (e) {
    const nama = document.getElementById("nama").value.trim();
    const email = document.getElementById("email").value.trim();
    const gender = document.getElementById("gender").value;
    const password = document.getElementById("password").value;
    const confpass = document.getElementById("confpass").value;

    if (!nama || !email || !gender || !password || !confpass) {
      alert("Please fill out all the field.");
      e.preventDefault();
      return;
    }

    if (
      !email.includes("@") ||
      !email.includes(".") ||
      email.indexOf("@") === 0 ||
      email.indexOf("@") > email.lastIndexOf(".") ||
      email.endsWith(".")
    ) {
      alert("Email is not valid.");
      e.preventDefault();
      return;
    }

    if (password.length < 8) {
      alert("Password must be at least 8 characters.");
      e.preventDefault();
      return;
    }
    // Validasi password dan confirm password
    if (password !== confpass) {
      alert("Password does not match.");
      e.preventDefault();
      return;
    }
    alert("Registration successful!");
  });
});
