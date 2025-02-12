const birthdayYear = 2013;

if (birthdayYear >= 2000) {
  console.log("You were borned in 20s century");
} else {
  console.log("You were borned in 19s century");
}

const birhdayString =
  birthdayYear >= 2000
    ? "You were borned in 20s century"
    : "You were borned in 19s century";
console.log(`Using ? operator ${birhdayString}`);

if (birthdayYear < 2000) {
  console.log("You were borned in 19s century");
} else if (birthdayYear >= 2000 && birthdayYear < 2010) {
  console.log("You were borned in 2010s decade");
} else if (birthdayYear >= 2010 && birthdayYear < 2020) {
  console.log("You were borned in 2020s decade");
} else {
  console.log("You were borned in 2030s decade");
}

const gradeIn12System = 3;
let gradeIn5System;

switch (gradeIn12System) {
  case 1:
    gradeIn5System = 2;
    break;
  case 2:
    gradeIn5System = 2;
    break;
  case 3:
    gradeIn5System = 2;
    break;
  case 4:
    gradeIn5System = 3;
    break;
  case 5:
    gradeIn5System = 3;
    break;
  case 6:
    gradeIn5System = 3;
    break;
  case 7:
    gradeIn5System = 4;
    break;
  case 8:
    gradeIn5System = 4;
    break;
  case 9:
    gradeIn5System = 4;
    break;
  case 10:
    gradeIn5System = 5;
    break;
  case 11:
    gradeIn5System = 5;
    break;
  case 12:
    gradeIn5System = 5;
    break;
  default:
    gradeIn5System = 1;
    break;
}

console.log(`Grade in 12 system: ${gradeIn12System}`);
console.log(`Grade in 5 system: ${gradeIn5System}`);

if (
  gradeIn12System === 12 ||
  gradeIn12System === 11 ||
  gradeIn12System === 10
) {
  console.log("Your gradw is 5");
}
