const botonResultado = document.getElementById("botonResultado");
let entradaNumerica = document.getElementsByClassName("pantalla_inferior");

let cadenaExpresion;
let operacion;
let operando1, operando2;

botonResultado.addEventListener("click", function()
{
    //Se obtiene la cadena de texto de la entrada de datos
    cadenaExpresion = entradaNumerica[0].value;
    //Divide la expresión en: operando1, operación y operando2
    let dividirCadenaExpresion = cadenaExpresion.split(/(\+)/);

    //Almacena cada parte de la expresión en su correspondiente variable
    operando1 = dividirCadenaExpresion[0];
    operacion = dividirCadenaExpresion[1];
    operando2 = dividirCadenaExpresion[2];

});