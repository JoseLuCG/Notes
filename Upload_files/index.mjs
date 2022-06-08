// Valid image file types for browsers: https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types
// https://caniuse.com/?search=webp

// Mime types de los ficheros aceptados como imagenes en HTML.
const validHtmlImageFormats = [
    "image/apng",
    "image/avif",
    "image/gif",
    "image/jpeg",
    "image/png",
    "image/svg+xml",
    "image/webp",
]

// Almacenará la información recopilada sobre el fichero.
const imageData = {};

// Obtenemos acceso en el DOM a los elementos HTML
// que deseamos controlar desde este script.
const input = document.querySelector("input");
const image = document.querySelector("img")
const imageDataElement = document.querySelector("p")

/**
 * Se ejecuta cuando el usuario selecciona un fichero.
 */
function selectFileHandler () {

    // Obtiene una URL válida para el contenido del fichero
    const encodedFile = URL.createObjectURL(input.files[0])

    // Cuando la imagen se cargue, añadirá información sobre
    // el tamaño de la misma.
    image.addEventListener("load", imageLoadHandler)

    // Asigna el contenido del fichero a la imagen.
    image.src = encodedFile

    // Obtiene información sobre el fichero y lo muestra en el 
    // elemento párrafo.
    imageData.primaryMimeType = input.files[0].type.split("/",1)[0]
    imageData.validHtmlImageIdx = validHtmlImageFormats.findIndex( item =>  item === input.files[0].type)
    imageDataElement.innerText = `
        bytes: ${input.files[0].size}
        mime type: ${input.files[0].type}
        is image: ${imageData.primaryMimeType === "image" ? "Yes" : "No"}
        is valid: ${imageData.validHtmlImageIdx > 0 ? "Yes" : "No"}
    `
}

/**
 * Añade información del tamaño de la imagen.
 * Se ejecuta una vez finalice la carga de la imagen en
 * el elemento img.
 */
function imageLoadHandler () {
    imageDataElement.innerText += `
        width: ${image.naturalWidth}
        height:${image.naturalHeight}
    `
}

// Iniciar la actualización del contenido de los elementos 
// cada vez que el usuario selecciona un fichero.
input.addEventListener("change",selectFileHandler);