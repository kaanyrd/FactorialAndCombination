// const input = document.querySelector("input");
// const form = document.querySelector("form");

// function showFactorial(number, factorial) {
//   const markUp = `<p>${number}! (${number} faktoriyel): ${factorial}</p>`;
//   document.body.insertAdjacentHTML("beforeend", markUp);
// }

// function calcShowFactorial(event) {
//   event.preventDefault();
//   if (input.value === "") return;
//   const number = Number(input.value);
//   if (number < 0) {
//     alert(`Pozitif sayı beklerken ${number} girdin, tekrar dene:)`);
//   } else if (number === 0) {
//     showFactorial(number, 1);
//   } else if (number > 0) {
//     let factorial = BigInt(1);
//     for (let n = BigInt(1); n <= number; n++) {
//       factorial *= n;
//     }
//     showFactorial(number, factorial);
//   } else {
//     alert("Bir şeyler kötü gitti");
//   }
// }

// form.addEventListener("submit", calcShowFactorial);
