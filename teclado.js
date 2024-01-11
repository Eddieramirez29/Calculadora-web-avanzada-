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
    let number;
    switch(id)
    {
      case "boton_0":
        number = 0;
      break;
      case "boton_1":
        number = 1;
      break;
      case "boton_2":
        number = 2;
      break;
      case "boton_3":
        number = 3;
      break;
      case "boton_4":
        number = 4;
      break;
      case "boton_5":
        number = 5;
      break;
      case "boton_6":
        number = 6;
      break;
      case "boton_7":
        number = 7;
      break;
      case "boton_8":
        number = 8;
      break;
      case "boton_9":
        number = 9;
      break;
      case "boton_dot":
        number = ".";
      break;
      case "boton_suma":
        number = "+";
      break;
      case "boton_resta":
        number = "-";
      break;
      case "boton_multiplicacion":
        number = "*";
      break;
      case "boton_division":
        number = "/";
      break;
      default:
    }
  cadenaEntrada = cadenaEntrada + number;
  console.log(cadenaEntrada);
  localStorage.setItem("cadenaEntrada", cadenaEntrada);
}






//El siguiente código permite que el panel sea arrastrado
document.addEventListener("DOMContentLoaded", function()
 {
    var panel = document.getElementById("miPanel");
    var isDragging = false;
    var offset = { x: 0, y: 0 };

    panel.addEventListener("mousedown", function(event) 
    {
      isDragging = true;
      offset.x = event.clientX - panel.getBoundingClientRect().left;
      offset.y = event.clientY - panel.getBoundingClientRect().top;
    });

    document.addEventListener("mousemove", function(event)
     {
      if (isDragging) {
        panel.style.left = event.clientX - offset.x + "px";
        panel.style.top = event.clientY - offset.y + "px";
      }
    });

    document.addEventListener("mouseup", function() 
    {
      isDragging = false;
    });
  });

  function resetVariables()
  {
    cadenaEntrada = "";
    localStorage.setItem("cadenaEntrada", cadenaEntrada);
  }

  window.addEventListener("beforeunload", resetVariables);

