const botonBorrar = document.getElementById("botonBorrar");
const botonResultado = document.getElementById("botonResultado");
let entradaNumerica = document.getElementsByClassName("pantalla_inferior");
let cadenaExpresion;

document.addEventListener('DOMContentLoaded', function () {
    // Obtener todos los elementos con las clases "celda"
  let celdas = document.querySelectorAll('.celda');
  
    // Agrega un event listener a cada botón
    celdas.forEach(function (tecla)
   {
      tecla.addEventListener('click', function () 
  {
        // Llama a la función cuando se hace clic en una tecla
        anyClic();
      });
    });
  
    // Función que maneja el clic en una tecla
    function anyClic()
   {
    cadenaExpresion = localStorage.getItem("cadenaEntrada");
    entradaNumerica[0].value = cadenaExpresion;
      // Aquí puedes realizar cualquier acción que desees al presionar una tecla
    }
  });

//Permite hacer cálculos aritméticos
botonResultado.addEventListener("click", function()
{
    //Se obtiene la cadena de texto de la entrada de datos
    entradaNumerica[0].value = math.evaluate(cadenaExpresion);
});

botonBorrar.addEventListener("click", function()
{
    entradaNumerica[0].value = "";
});

function resetVariables()
{
    entradaNumerica[0].value = "";
    cadenaExpresion = "";
}

window.addEventListener("beforeunload", resetVariables);