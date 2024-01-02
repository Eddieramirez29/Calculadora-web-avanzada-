const botonResultado = document.getElementById("botonResultado");
let entradaNumerica = document.getElementsByClassName("pantalla_inferior");

let cadenaExpresion;
//Permite hacer cálculos aritméticos
botonResultado.addEventListener("click", function()
{
    //Se obtiene la cadena de texto de la entrada de datos
    cadenaExpresion = entradaNumerica[0].value;
    alert(math.evaluate(cadenaExpresion));

});