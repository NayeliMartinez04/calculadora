function calculadora() {
  let message = prompt(
    "Bienvenido a la calculadora\n Que desea realizar?\n 1. Suma\n 2.Resta\n 3. Multiplicacion\n 4. Division\n 5. Potenciacion"
  );

  if (message > 5 || message < 1 || message == "") {
    alert("No es valido");
  }

  if (isNaN(parseInt(message)) || message == "") {
    alert("No es valido");
    calculadora();
  } else {
    let number1 = parseInt(prompt("Ingrese un numero"));
    if (isNaN(parseInt(number1)) || number1 == "") {
      alert("No es valido");
      calculadora();
    } else {
      let number2 = parseInt(prompt("Ingrese otro numero"));
      if (isNaN(parseInt(number2))) {
        alert("No es valido");
      }

      let result;

      if (message == 1) {
        result = number1 + number2;
      } else if (message == 2) {
        result = number1 - number2;
      } else if (message == 3) {
        result = number1 * number2;
      } else if (message == 4) {
        result = number1 / number2;
      } else {
        result = Math.pow(number1, number2);
      }

      console.log("El resultado es ", result);
    }
  }
}

calculadora();
