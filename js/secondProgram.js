const primaryUserName = "Maria";
const primaryPassword = "Lacontraseñademaria7";
const repeatedPassword = "Lacontraseñademaria7";
const userAge = "30";

const isPrimaryUserNameValid = primaryUserName.length >= 5;

const isPrimaryPasswordValid = primaryPassword.length >= 8;
const hasNumberInPassword = /[0-9]/.test(primaryPassword);
const hasUpperCaseInPassword = /[A-Z]/.test(primaryPassword);
const isPasswordValid =
  isPrimaryPasswordValid && hasNumberInPassword && hasUpperCaseInPassword;

const arePasswordsEqual = primaryPassword === repeatedPassword;

const isUserAdult = userAge >= 18;

console.log(`El nombre de usuario es válido: ${isPrimaryUserNameValid}`);
console.log(`La contraseña es válida: ${isPasswordValid}`);
console.log(`La repetición de la contraseña es válida: ${arePasswordsEqual}`);
console.log(`Es mayor de edad: ${isUserAdult}`);
