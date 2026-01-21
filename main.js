const inputTarea = document.getElementById("inputTarea");
const listaTareas = document.getElementById("listaTareas");


inputTarea.addEventListener("keypress", function(event) {
    if (event.key === "Enter" && inputTarea.value) {
        agregarTarea(inputTarea.value);
        inputTarea.value = "";
    }   
});

function agregarTarea(textoTarea) {
    const li = document.createElement("li"); //Se crea un elemento <li> para la tarea
    const checkbox = document.createElement("input"); //Se crea un elemento input para el checkbox
    checkbox.type = "checkbox"; //Se crea un checkbox para marcar la tarea como completada
    checkbox.addEventListener("change", function() {
        li.classList.toggle("completed");
    });

    const texto = document.createElement("p"); //Se crea un elemento <p> para el texto de la tarea
    texto.innerHTML = textoTarea; //Se inserta el texto de la tarea en el elemento <p>
    const botonEliminar = document.createElement("span"); //Se crea un elemento <span> para el botón de eliminar
    botonEliminar.classList.add("delete");
    botonEliminar.innerHTML = "<ion-icon name='close'></ion-icon>";


    botonEliminar.addEventListener("click", function() {
        li.parentNode.removeChild(li); //Se elimina la tarea de la lista al hacer clic en el botón de eliminar
    }); 

    //Se insertan los nuevos elementos en el DOM
    li.appendChild(checkbox);
    li.appendChild(texto);
    li.appendChild(botonEliminar);
    listaTareas.appendChild(li);
}