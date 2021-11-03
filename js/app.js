function cambiarTitulo(){
    console.log("aqui estoy dentro de la funcion cambiar titulo");
    // traer al titulo o h1
    //let titulo = document.querySelector("#titulo");
    //otra forma de traer el h1
    let titulo = document.getElementById("titulo");
    console.log(titulo);
    titulo.innerHTML = "Titulo modificado";
    titulo.className = "display-4 text-warning"
}

function verMas(){
    console.log("desde la funcion ver mas");
    // buscar el elemento padre
    let contenedorPadre = document.querySelector("#articulo");
    let btnVerMas = document.querySelector("#btnVerMas");

    if(btnVerMas.innerHTML == "Ver mas"){
        // opcion 1 - camino corto
    // contenedorPadre.innerHTML += `<p class="lead">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt, quasi natus? Deserunt quis magnam vitae culpa. Repellat facilis molestiae maiores, ipsa omnis voluptate! At sequi nisi soluta animi exercitationem beatae, perspiciatis delectus dignissimos quaerat aliquid autem explicabo nulla deleniti id tempora, iusto sapiente. Facilis ipsum nam perspiciatis itaque ab. Iste impedit numquam dolorem saepe ducimus quibusdam dolorum excepturi nesciunt optio!
    // </p>`;
    // opcion 2 - camino largo
    // 1- crear el elemento
    let parrafo = document.createElement("p");
    // 2- trabajar el elemento creado
    parrafo.innerHTML = "aqui agrego todo el parrafo de prueba";
    parrafo.className = "lead";
    // 3- insertar el elemento en el maquetado
    contenedorPadre.appendChild(parrafo);
    btnVerMas.innerHTML = "ocultar";
    btnVerMas.className = "btn btn-danger";
    }else{
        console.log("quiero ocultar el parrafo")
        // borrar o eliminar el parrafo del DOM
        console.log(contenedorPadre.hasChildNodes()); //devuelve un true o false
        console.log(contenedorPadre.children); //obtenemos un arreglo con los nodos hijos
        if(contenedorPadre.hasChildNodes() && contenedorPadre.children.length == 2){
            //aqui digo que quiero remover un nodo
            contenedorPadre.removeChild(contenedorPadre.children[1]);
            // cambiar el texto del boton de nuevo a ver mas
            btnVerMas.innerHTML = "Ver mas";
            btnVerMas.className = "btn btn-primary";
        }
    }   
}

//la propiedad para acceder a un texto de un input es value no innerHTML
