// Array para guardar los nombres de los amigos
let listaAmigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    // Obtener el nombre del campo de entrada
    let nombreAmigo = document.getElementById("amigo").value;
    
    // Verificar que el campo no esté vacío
    if (nombreAmigo === "") {
        alert("Por favor, ingresa un nombre válido");
        return;
    }
    
    // Verificar que el nombre no esté duplicado
    if (listaAmigos.includes(nombreAmigo)) {
        alert("Este nombre ya está en la lista");
        return;
    }
    
    // Agregar el nombre a la lista
    listaAmigos.push(nombreAmigo);
    // Limpiar el campo de entrada
    document.getElementById("amigo").value = "";
    // Actualizar la lista en pantalla
    mostrarListaAmigos();
}

// Función para mostrar la lista de amigos en la página
function mostrarListaAmigos() {
    let listaElement = document.getElementById("listaAmigos");
    // Limpiar la lista actual
    listaElement.innerHTML = "";
    
    // Recorrer la lista y mostrar cada nombre numerado
    for (let i = 0; i < listaAmigos.length; i++) {
        let li = document.createElement("li");
        li.innerHTML = (i + 1) + ". " + listaAmigos[i];
        listaElement.appendChild(li);
    }
}

// Función para sortear un amigo aleatorio
function sortearAmigo() {
    // Verificar que haya al menos un amigo en la lista
    if (listaAmigos.length === 0) {
        alert("No hay amigos en la lista. Agrega al menos un amigo.");
        return;
    }
    
    // Generar un número aleatorio para seleccionar un amigo
    let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    let amigoSeleccionado = listaAmigos[indiceAleatorio];
    
    // Mostrar el resultado del sorteo
    let resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = "";
    
    let li = document.createElement("li");
    li.innerHTML = "¡El amigo secreto es: <strong>" + amigoSeleccionado + "</strong>! ";
    resultadoElement.appendChild(li);
}