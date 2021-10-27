function cambiarTitulo(){
    console.log("aqui estoy dentro de la funcion cambiar titulo");
    // traer al titulo o h1
    let titulo = document.querySelector("#titulo");
    console.log(titulo);
    titulo.innerHTML = "Titulo modificado";
    titulo.className = "display-4 text-warning"
}