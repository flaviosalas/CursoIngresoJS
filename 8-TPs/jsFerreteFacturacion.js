/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{

    var precioA;
    var precioB;
    var precioC;
    var suma;
    var promedio;
    var preciofinal;

    precioA = parseInt(document.getElementById("PrecioUno").value);
    precioB = parseInt(document.getElementById("PrecioDos").value);
    precioC = parseInt(document.getElementById("PrecioTres").value);

    suma = precioA + precioB + precioC;

    alert("La suma de los productos es de " + suma);
	
}
function Promedio () 
{

    var precioA;
    var precioB;
    var precioC;
    var promedio;

    precioA = parseInt(document.getElementById("PrecioUno").value);
    precioB = parseInt(document.getElementById("PrecioDos").value);
    precioC = parseInt(document.getElementById("PrecioTres").value);

    promedio = (precioA + precioB + precioC) / 3;

    alert("El promedio es de " + promedio);
	
}
function PrecioFinal () 
{

    var precioA;
    var precioB;
    var precioC;
    var suma;
    var iva;
    var preciofinal;

    precioA = parseInt(document.getElementById("PrecioUno").value);
    precioB = parseInt(document.getElementById("PrecioDos").value);
    precioC = parseInt(document.getElementById("PrecioTres").value);

    suma = precioA + precioB + precioC;
    iva = suma * 21 / 100;
    preciofinal = suma + iva;

    alert("El precio final (con IVA 21%) es de " + preciofinal);
	
}