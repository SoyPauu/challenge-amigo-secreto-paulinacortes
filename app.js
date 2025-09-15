// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array para guardar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo

function agregarAmigo() {
    // Obtener el valor del input
    const input = document.getElementById('amigo');
    const nombre = input.value.trim(); // trim elimina espacios al inicio/final

    // Validar que no esté vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Agregar nombre al array
    amigos.push(nombre);

    // Limpiar el input
    input.value = "";

    // Actualizar la lista en pantalla
    mostrarAmigos();
}


