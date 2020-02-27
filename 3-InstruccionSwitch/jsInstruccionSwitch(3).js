function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

switch (mesDelAño) {
    case "Febrero":
        alert("Este mes no tiene más de 29 días.");
        break;
        default: //Una instancia default, cuando es declarada, es ejecutada si el valor de la expresión 
        //no coincide con cualquiera de las otras instancias.
        alert("Este mes tiene 30 o más días.");
}	
	


}//FIN DE LA FUNCIÓN