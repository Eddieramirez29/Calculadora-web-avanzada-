//Botones para cambiar el color de fondo
let botonBlanco = document.getElementById("btnlight");
let botonNegro = document.getElementById("btndark");
let titulo = document.getElementById("titulo");

botonBlanco.addEventListener("click", function()
{
    document.body.style.backgroundColor = "#D2E3C8";  
    titulo.style.color = "#191919";
});

botonNegro.addEventListener("click", function()
{
    document.body.style.backgroundColor = "#191919";
    titulo.style.color = "#D2E3C8";
});





