// Función para validar que solo se ingresen letras minúsculas sin acentos ni caracteres especiales
function validarTexto(texto) {
    // Expresión regular para permitir solo letras minúsculas y espacios
    const regex = /^[a-z\s]+$/;

    // Validar el texto
    if (!regex.test(texto)) {
        alert("Por favor, introduce solo letras minúsculas sin acentos ni caracteres especiales.");
        return false;
    }

    return true;
}

function encriptar() {
    let textoIntroducido = document.getElementById("textoIntroducido").value;

    // Validar el texto antes de encriptar
    if (!validarTexto(textoIntroducido)) {
        return;
    }

    let encriptarTexto = textoIntroducido
        .replace(/a/g, "ai")    
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    document.getElementById("textoResultado").value = encriptarTexto;

    // Mostrar el botón de copiar    
    document.getElementById("botonCopiar").classList.add("mostrar");

    // Ocultar los valores iniciales
    mostrarOcultarContenidoInicial();

    ajustarAlturaContenedor();
}

function desencriptar() {
    let textoIntroducido = document.getElementById("textoIntroducido").value;

    // Validar el texto antes de desencriptar
    if (!validarTexto(textoIntroducido)) {
        return;
    }

    let desencriptarTexto = textoIntroducido
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    document.getElementById("textoResultado").value = desencriptarTexto;

    // Mostrar el botón de copiar    
    document.getElementById("botonCopiar").classList.add("mostrar");

    // Ocultar los valores iniciales
    mostrarOcultarContenidoInicial();

    ajustarAlturaContenedor();
}

function copiarTexto() {
    let textoResultado = document.getElementById("textoResultado");
    textoResultado.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles.");
}

function mostrarOcultarContenidoInicial() {
    const contenidoInicial = document.querySelector(".contenido_textoresultado_contenidoInicial");
    const textoResultado = document.getElementById("textoResultado").value.trim();

    if (textoResultado) {
        contenidoInicial.style.opacity = '0';
        setTimeout(function() {
            contenidoInicial.style.display = 'none';
        }, 300); // Espera a que la transición termine antes de ocultar el elemento
        
        // Mostrar el área de resultado con transición
        document.getElementById('textoResultado').style.opacity = '1';
    } else {
        contenidoInicial.style.display = 'flex';
    }
}

function ajustarAlturaContenedor() {
    const contenedorResultado = document.querySelector(".contenido_textoresultado");
    const textareaResultado = document.getElementById("textoResultado");

    if (textareaResultado.scrollHeight > contenedorResultado.clientHeight) {
        contenedorResultado.style.height = `${textareaResultado.scrollHeight + 50}px`;
    }
}
