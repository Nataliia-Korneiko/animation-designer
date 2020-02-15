const logoFirst = document.querySelectorAll("#logo-first path");
const logo = document.querySelectorAll("#logo path");
console.log(logoFirst);
console.log(logo);

for (let i = 0; i < logoFirst.length; i++) {
  console.log(`Letter ${i} is ${logoFirst[i].getTotalLength()}`);
}

for (let i = 0; i < logo.length; i++) {
  console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
}
