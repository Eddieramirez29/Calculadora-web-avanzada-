//Código de prueba

document.addEventListener("DOMContentLoaded", function() {
    var panel = document.getElementById("miPanel");
    var isDragging = false;
    var offset = { x: 0, y: 0 };

    panel.addEventListener("mousedown", function(event) {
      isDragging = true;
      offset.x = event.clientX - panel.getBoundingClientRect().left;
      offset.y = event.clientY - panel.getBoundingClientRect().top;
    });

    document.addEventListener("mousemove", function(event) {
      if (isDragging) {
        panel.style.left = event.clientX - offset.x + "px";
        panel.style.top = event.clientY - offset.y + "px";
      }
    });

    document.addEventListener("mouseup", function() {
      isDragging = false;
    });
  });
