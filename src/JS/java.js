function calculateIMC() {
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value);
    let result = document.getElementById("result");navigator

    let imc = weight / (height * height);
    let message = "";

    if (imc < 16) {
      message = "Severely underweight";
    } else if (imc < 18.5) {
      message = "Underweight";
    } else if (imc < 25) {
      message = "Normal";
    } else if (imc < 30) {
      message = "Overweight";
    } else {
      message = "Obese";
    }

    result.textContent = "Your IMC" + imc + message}
    result.style.color = "black";
