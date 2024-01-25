const botonBorrar = document.getElementById("botonBorrar");
const botonResultado = document.getElementById("botonResultado");
let entradaNumerica = document.getElementsByClassName("pantalla_inferior");
let cadenaExpresion = "";
//------------------
let cadenaEntrada = "";
// Obtener todos los elementos con las clases "celda"
let celdas = document.querySelectorAll('.celda');


// Función para manejar el clic en las celdas
function handleClick(event)
{
  // Obtener el elemento que realmente se hace clic
  let elementoClicado = event.target.closest('.celda');
  let id = "";
  // Obtener el ID del elemento clicado
  id = elementoClicado.id;
  convertIdFromIdToNumber(id);
}

// Iterar sobre la colección de celdas y agregar evento click a cada una
celdas.forEach(function (celda)
{
  celda.addEventListener("click", handleClick);
});

function convertIdFromIdToNumber(id)
{
    let key;
    switch(id)
    {
      case "boton_0":
        key = 0;
      break;
      case "boton_1":
        key = 1;
      break;
      case "boton_2":
        key = 2;
      break;
      case "boton_3":
        key = 3;
      break;
      case "boton_4":
        key = 4;
      break;
      case "boton_5":
        key = 5;
      break;
      case "boton_6":
        key = 6;
      break;
      case "boton_7":
        key = 7;
      break;
      case "boton_8":
        key = 8;
      break;
      case "boton_9":
        key = 9;
      break;
      case "boton_dot":
        key = ".";
      break;
      case "boton_suma":
        key = "+";
      break;
      case "boton_resta":
        key = "-";
      break;
      case "boton_multiplicacion":
        key = "*";
      break;
      case "boton_division":
        key = "/";
      break;
      case "boton_raiz_cuadrada":
        key = "sqrt";
        break;
      case "boton_X2":
        key = "^";
        break;
      case "boton_percent":
        key = "%";
        break;
      default:
    }
  cadenaEntrada = cadenaEntrada + key;
  //Evalua la raíz cuadrada
  if(contieneNumeroCadena(cadenaEntrada))
  {
    //Descomponer la cadena en palabra y número
    const matches = cadenaEntrada.match(/^([a-zA-Z]+)(\d+)$/);
    if (matches)
    {
      // matches[1] contendrá la palabra
      const palabra = matches[1];
    
      // matches[2] contendrá el número
      const numero = matches[2];
    
      console.log("Palabra:", palabra);
      console.log("Número:", numero);

      cadenaEntrada = "sqrt(" + numero + ")";
      
    }
    else
    {
      console.log("La cadena no cumple con el patrón especificado.");
    }
    // localStorage.setItem("cadenaEntrada", cadenaEntrada);
  }
  else
  {
    console.log(cadenaEntrada);
    // localStorage.setItem("cadenaEntrada", cadenaEntrada);
  }
}

//Validar sin la cadena está compuesta por una palabra y un número
function contieneNumeroCadena(expresion)
{
  // Expresión regular para buscar una cadena junto con un número
  const regex = /\d+\D*/;

  // Devuelve true, si la cadena cumple con el patrón, false en caso contrario
  return regex.test(expresion);
}

  //When reloding the page, the variables of the operation will be reseted
function resetVariables()
  {
    cadenaEntrada = "";
    // localStorage.setItem("cadenaEntrada", cadenaEntrada);
  }


  //-----------------------------------------------------------


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
    cadenaExpresion = cadenaEntrada;
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

//It resets only the input screen
botonBorrar.addEventListener("click", function()
{
    entradaNumerica[0].value = "";
    cadenaEntrada = "";
});


  //It call resetVariables when reloding page
  window.addEventListener("beforeunload", resetVariables);

