function mostrar()
{

    var precio;
    var descuento;
    var resultado;

    precio = parseInt(prompt("Ingrese el precio."));
    descuento = parseInt(prompt ("Ingrese el porcentaje descuento."));

    descuento = descuento / 100;

    resultado = precio - (precio * descuento);

    document.getElementById("elPrecioFinal").value = resultado;

}
