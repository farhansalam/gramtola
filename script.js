const tolaInput = document.getElementById("tola");
const gramsInput = document.getElementById("grams");
const resultDiv = document.getElementById("result");

const TOLA_TO_GRAMS = 11.6638038;

tolaInput.addEventListener("input", function () {
  if (this.value) {
    const grams = (parseFloat(this.value) * TOLA_TO_GRAMS).toFixed(4);
    gramsInput.value = grams;
    resultDiv.textContent = `${this.value} Tola = ${grams} Grams`;
  } else {
    gramsInput.value = "";
    resultDiv.textContent = "";
  }
});

gramsInput.addEventListener("input", function () {
  if (this.value) {
    const tola = (parseFloat(this.value) / TOLA_TO_GRAMS).toFixed(4);
    tolaInput.value = tola;
    resultDiv.textContent = `${this.value} Grams = ${tola} Tola`;
  } else {
    tolaInput.value = "";
    resultDiv.textContent = "";
  }
});
