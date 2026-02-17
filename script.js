// CLICK
document.getElementById("btnClick").addEventListener("click", function(){
    this.style.transform = "scale(1.2)";
    this.style.backgroundColor = "#1abc9c";
    alert("Evento Click activado");
});

// DOBLE CLICK
document.getElementById("btnDoble").addEventListener("dblclick", function(){
    this.style.boxShadow = "0px 0px 20px yellow";
    alert("Doble Click activado");
});

// KEYUP
document.getElementById("inputTexto").addEventListener("keyup", function(){
    this.style.backgroundColor = "#dff9fb";
});

// BLUR
document.getElementById("inputBlur").addEventListener("blur", function(){
    this.style.backgroundColor = "#ffcccc";
    alert("Saliste del campo");
});

// MOUSEOVER (MUY VISIBLE)
document.getElementById("btnMouse").addEventListener("mouseover", function(){
    this.style.transform = "scale(1.3)";
    this.style.backgroundColor = "#27ae60";
    this.innerText = "👀 Estoy activo!";
});

// MOUSEOUT
document.getElementById("btnMouse").addEventListener("mouseout", function(){
    this.style.transform = "scale(1)";
    this.style.backgroundColor = "#2ecc71";
    this.innerText = "Pasa el mouse";
});

// MOUSEOUT botón rojo
document.getElementById("btnSalir").addEventListener("mouseover", function(){
    this.style.transform = "rotate(10deg)";
});

document.getElementById("btnSalir").addEventListener("mouseout", function(){
    this.style.transform = "rotate(0deg)";
});

// SUBMIT
document.getElementById("formulario").addEventListener("submit", function(e){
    e.preventDefault();
    alert("Formulario enviado correctamente");
});

// CAMBIAR FONDO
document.getElementById("btnColor").addEventListener("click", function(){
    document.body.style.background = "linear-gradient(to right, #ff9a9e, #fad0c4)";
});