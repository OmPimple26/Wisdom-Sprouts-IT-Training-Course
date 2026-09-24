function generatePassword() {
  let length = document.getElementById("length").value;

  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ" +
    "abcdefghijklmnopqrstuvwxyz" +
    "0123456789" +
    "!@#$%^&*";

  let password = "";

  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * characters.length);

    password = password + characters[randomIndex];
  }

  document.getElementById("password").value = password;
}
