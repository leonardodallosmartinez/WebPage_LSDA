console.log("Entrando a archivo script.js...");

// Lista de imágenes para alternar
const images = ["media/pag2/transparent.png","media/pag2/1.png", "media/pag2/2.jpg", "media/pag2/3.png", "media/pag2/4.jpg", 
    "media/pag2/5.jpg", "media/pag2/6.jpg", "media/pag2/7.png", "media/pag2/8.jpg", 
    "media/pag2/9.jpg", "media/pag2/10.jpg", "media/pag2/11.jpg", "media/pag2/12.jpg", 
    "media/pag2/13.jpg", "media/pag2/14.jpg", "media/pag2/15.png", "media/pag2/16.jpg", 
    "media/pag2/17.png", "media/pag2/18.jpg", "media/pag2/19.jpg", "media/pag2/20.jpg", 
    "media/pag2/21.jpg", "media/pag2/22.jpg", "media/pag2/23.jpg", "media/pag2/24.jpg", 
    "media/pag2/25.jpg", "media/pag2/26.jpg", "media/pag2/27.jpg", "media/pag2/28.jpg", 
    "media/pag2/29.jpg", "media/pag2/30.jpg", "media/pag2/31.jpg", "media/pag2/32.jpg", 
    "media/pag2/33.jpg", "media/pag2/34.jpg", "media/pag2/35.jpg", "media/pag2/36.jpg", 
    "media/pag2/37.jpg", "media/pag2/37_1.jpg", "media/pag2/38.jpg", "media/pag2/39.png"];
let currentIndex = 0;

// Referencias a la imagen centrada y el fondo
const centerImage = document.getElementById("center-image");
const background = document.querySelector(".background");
const centerBox = document.querySelector(".center-box");

// Tamaño fijo para las imágenes añadidas (300px en este caso, como la imagen inicial)
const imageSize = 300;  // 300px de ancho y altura

// Función para agregar una nueva imagen
function addNewImage() {
    console.log("Añadiendo nueva imagen...");

    // Verificar si ya se alcanzó la última imagen del arreglo
    if (currentIndex >= images.length - 1) {
        console.log("Última imagen alcanzada. No se generarán más imágenes.");
        return; // Salir de la función
    }

    // Incrementar el índice de la imagen actual
    currentIndex++;

    // Crear una nueva imagen
    const newImage = document.createElement("img");
    newImage.src = images[currentIndex];
    newImage.classList.add("new-image");

    // Establecer el tamaño de la imagen a 300px x 300px
    newImage.style.width = `${imageSize}px`;
    newImage.style.height = `${imageSize}px`;

    // Mover la nueva imagen a una posición aleatoria dentro de los límites de la pantalla
    moveToRandomPosition(newImage);

    // Agregar la nueva imagen al body
    centerBox.appendChild(newImage);
}

// Función para mover una imagen a una posición aleatoria dentro de los límites de la pantalla
function moveToRandomPosition(image) {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    // Asegurarnos de que la imagen no se salga de la pantalla
    const maxX = screenWidth - imageSize;
    const maxY = screenHeight - imageSize;

    // Generar posiciones aleatorias dentro de los límites de la pantalla
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    // Aplicar las posiciones aleatorias a la nueva imagen
    image.style.position = "absolute";  // Asegura que la imagen se posicione absolutamente
    image.style.left = randomX + "px";
    image.style.top = randomY + "px";
}

// Mover el cuadro a una posición aleatoria cuando la página cargue (no se necesita cambios en este caso)
moveToRandomPosition(centerImage);

// Eventos para agregar una nueva imagen y moverla a una posición aleatoria al hacer clic en el fondo o en la imagen centrada
centerImage.addEventListener("click", addNewImage);
background.addEventListener("click", addNewImage);
