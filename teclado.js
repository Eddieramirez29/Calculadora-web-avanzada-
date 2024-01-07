// Obtener todos los elementos con las clases "celda" y "celda_2"
let celdas = document.querySelectorAll('.celda, .celda_2');

// Función para manejar el clic en las celdas
function handleClick(event)
 {
  // Obtener el elemento que realmente se hace clic
  let elementoClicado = event.target.closest('.celda, .celda_2');

  // Obtener el ID del elemento clicado
  let id = elementoClicado.id;
  console.log(id);
}

// Iterar sobre la colección de celdas y agregar evento click a cada una
celdas.forEach(function (celda)
{
  celda.addEventListener("click", handleClick);
});




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
