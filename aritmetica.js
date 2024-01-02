const botonResultado = document.getElementById("botonResultado");
const botonBorrar = document.getElementById("botonBorrar");
let entradaNumerica = document.getElementsByClassName("pantalla_inferior");

let cadenaExpresion;
//Permite hacer cálculos aritméticos
botonResultado.addEventListener("click", function()
{
    //Se obtiene la cadena de texto de la entrada de datos
    cadenaExpresion = entradaNumerica[0].value;
    entradaNumerica[0].value = math.evaluate(cadenaExpresion);
});

botonBorrar.addEventListener("click", function()
{
    entradaNumerica[0].value = "";
});