function mostrar() {

	var contador = 0;
	var numero;
	var maximo;
	var minimo;

	do {
		numero = parseInt(prompt("Ingrese un numero:"));
		while (isNaN(numero)) {
			numero = parseInt(prompt("Eso no es un numero. Ingrese un numero: "))
		}

		if (contador == 0) {

			maximo = numero;
			minimo = numero;

		}
		else if (numero > maximo) {
			maximo = numero;
		}
		else if (numero < minimo) {
			minimo = numero;
		}

		contador++;

		/* OTRA FORMA, DECLARANDO LA VARIABLE FLAG

		if (flag == 0 || numero > maximo) {
			maximo = numero;
		}

		if (flag == 0 || numero < minimo) {
			minimo = numero;
			flag = 1;
		}

		*/

		seguir = prompt("Quiere ingresar otro numero?");
	} while (seguir == "s");

	document.getElementById('suma').value = maximo;
	document.getElementById('producto').value = minimo;

}//FIN DE LA FUNCIÓN