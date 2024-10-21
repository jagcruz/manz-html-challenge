const outputEl = document.querySelector(".number");

function normalizeNumber(num) {
  return num < 10 ? `0${num}` : `${num}`;
}

document
  .querySelector('input[type="range"]')
  .addEventListener("input", function () {
    outputEl.textContent = normalizeNumber(this.value);
  });
