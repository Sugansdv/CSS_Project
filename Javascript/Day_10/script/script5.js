function togglePassword() {
    const pwd = document.getElementById("passwordField");
    if (pwd.type === "password") {
      pwd.type = "text";
    } else {
      pwd.type = "password";
    }
  }