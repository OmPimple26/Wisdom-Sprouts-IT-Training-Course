const password = document.getElementById("password");

const length = document.getElementById("length");

const lengthValue = document.getElementById("lengthValue");

const uppercase = document.getElementById("uppercase");

const lowercase = document.getElementById("lowercase");

const numbers = document.getElementById("numbers");

const symbols = document.getElementById("symbols");

const generateBtn = document.getElementById("generateBtn");

const copyBtn = document.getElementById("copyBtn");

const strengthText = document.getElementById("strengthText");

const strengthFill = document.getElementById("strengthFill");

// Show selected password length
length.addEventListener("input", function () {
  lengthValue.innerText = length.value;

  updateStrength();
});

// Generate password when button is clicked
generateBtn.addEventListener("click", generatePassword);

// Copy password
copyBtn.addEventListener("click", copyPassword);

// Generate password function
function generatePassword() {
  let characters = "";

  let passwordResult = "";

  // Add uppercase characters
  if (uppercase.checked) {
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  // Add lowercase characters
  if (lowercase.checked) {
    characters += "abcdefghijklmnopqrstuvwxyz";
  }

  // Add numbers
  if (numbers.checked) {
    characters += "0123456789";
  }

  // Add symbols
  if (symbols.checked) {
    characters += "!@#$%^&*()_+";
  }

  // Check if no option is selected
  if (characters === "") {
    alert("Please select at least one option.");

    return;
  }

  // Generate password
  for (let i = 0; i < length.value; i++) {
    let randomIndex = Math.floor(Math.random() * characters.length);

    passwordResult += characters[randomIndex];
  }

  // Display password
  password.value = passwordResult;

  // Update password strength
  updateStrength();
}

// Copy password function
function copyPassword() {
  if (password.value === "") {
    alert("Generate a password first.");

    return;
  }

  navigator.clipboard.writeText(password.value);

  copyBtn.innerText = "Copied!";

  setTimeout(function () {
    copyBtn.innerText = "Copy";
  }, 1500);
}

// Password strength
function updateStrength() {
  let score = 0;

  let passwordLength = Number(length.value);

  // Check password length
  if (passwordLength >= 8) {
    score++;
  }

  if (passwordLength >= 12) {
    score++;
  }

  // Check selected options
  if (uppercase.checked) {
    score++;
  }

  if (lowercase.checked) {
    score++;
  }

  if (numbers.checked) {
    score++;
  }

  if (symbols.checked) {
    score++;
  }

  // Display strength
  if (score <= 2) {
    strengthText.innerText = "Weak";

    strengthFill.style.width = "30%";
  } else if (score <= 4) {
    strengthText.innerText = "Medium";

    strengthFill.style.width = "60%";
  } else {
    strengthText.innerText = "Strong";

    strengthFill.style.width = "100%";
  }
}

// Generate a password when page loads
generatePassword();
