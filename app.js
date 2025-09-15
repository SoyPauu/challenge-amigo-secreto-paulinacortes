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

function mostrarAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ""; // limpiar lista

    // Recorrer el array y agregar elementos <li>
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

// Función para sortear amigos 

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }

    // Generar índice aleatorio
    const indice = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre
    const amigoSorteado = amigos[indice];

    // Mostrar resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `🎉 El amigo secreto es: <strong>${amigoSorteado}</strong> 🎉`;
}


