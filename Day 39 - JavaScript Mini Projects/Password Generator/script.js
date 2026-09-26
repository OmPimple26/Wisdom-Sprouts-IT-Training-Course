function generatePassword() {
  let length = document.getElementById("length").value;

  let characters = "";

  let password = "";

  // Add uppercase letters
  if (document.getElementById("uppercase").checked) {
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  // Add lowercase letters
  if (document.getElementById("lowercase").checked) {
    characters += "abcdefghijklmnopqrstuvwxyz";
  }

  // Add numbers
  if (document.getElementById("numbers").checked) {
    characters += "0123456789";
  }

  // Add symbols
  if (document.getElementById("symbols").checked) {
    characters += "!@#$%^&*";
  }

  // Check if nothing is selected
  if (characters == "") {
    alert("Please select at least one option.");
    return;
  }

  // Generate password
  for (let i = 0; i < length; i++) {
    let randomNumber = Math.floor(Math.random() * characters.length);
    password += characters[randomNumber];
  }

  // Show password
  document.getElementById("password").value = password;
}

function copyPassword() {
  let password = document.getElementById("password").value;

  if (password == "") {
    alert("Generate a password first.");
    return;
  }

  navigator.clipboard.writeText(password);
  alert("Password copied!");
}
