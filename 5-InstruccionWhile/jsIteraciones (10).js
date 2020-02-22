function mostrar() {

	var acumuladorNeg = 0;
	var acumuladorPos = 0;
	var cantidadPos = 0;
	var cantidadNeg = 0;
	var cantidadCeros = 0;
	var cantidadPares = 0;
	var promedioPos;
	var promedioNeg;
	var diferencia;
	var numero;
	var seguir;

	do {
		numero = parseInt(prompt("Ingrese un numero:"));
		while (isNaN(numero)) {
			numero = parseInt(prompt("Eso no es un numero. Ingrese un numero: "))
		}

		if (numero <0) {
			acumuladorNeg = acumuladorNeg + numero;
		}
		
		if (numero >= 0) {
			acumuladorPos = acumuladorPos + numero;
		}

		if (numero < 0) {
			acumuladorPos = acumuladorPos;
		}

		
		//contador++;

		seguir = prompt("Quiere ingresar otro numero?");
	} while (seguir == "s");


	document.write("La suma de los negativos es: " + acumuladorNeg , "</br>");
	document.write("La suma de los positivos es: " + acumuladorPos , "</br>");
	document.write("La cantidad de positivos es: " + cantidadPos , "</br>");
	document.write("La cantidad de negativos es: " + cantidadNeg , "</br>");
	document.write("La cantidad de ceros es: " + cantidadCeros , "</br>");
	document.write("La cantidad de pares es: " + cantidadPares , "</br>");
	document.write("El promedio de los positivos es: " + promedioPos , "</br>");
	document.write("El promedio de los negativos es: " + promedioNeg , "</br>");
	document.write("La diferencia entre numeros positivos y negativos es: " + diferencia , "</br>");

}//FIN DE LA FUNCIÓN