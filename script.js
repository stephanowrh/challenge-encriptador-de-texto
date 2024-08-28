// Función para mostrar mensajes de advertencia con estilo y animación
function mostrarAdvertencia(mensaje, tipo) {
    const advertenciaElemento = document.querySelector('.mensaje-advertencia');
    const advertenciaTexto = advertenciaElemento.querySelector('.advertencia-texto');
    
    advertenciaTexto.textContent = mensaje;

    // Limpiar clases anteriores
    advertenciaTexto.classList.remove('info', 'error', 'animar');
    
    // Aplicar la clase correspondiente según el tipo de mensaje
    advertenciaTexto.classList.add(tipo);

    if (tipo === "error") {
        // Aplicar animación solo si es un error
        advertenciaTexto.classList.add('animar');

        // Remover la clase de animación después de un tiempo para que no interfiera
        setTimeout(() => {
            advertenciaTexto.classList.remove('animar');
        }, 600); // Duración de la animación en milisegundos
    }
}

// Función para copiar el texto al portapapeles
async function copiarTexto() {
    const textoResultado = document.getElementById("textoResultado").value;

    try {
        await navigator.clipboard.writeText(textoResultado);

        // Mostrar una notificación de éxito
        mostrarNotificacion("¡Copiado al portapapeles!");
    } catch (err) {
        console.error('Error al copiar al portapapeles: ', err);
    }
}

// Función para mostrar una notificación
function mostrarNotificacion(mensaje) {
    const notificacion = document.createElement('div');
    notificacion.className = 'notificacion';
    notificacion.innerText = mensaje;

    document.body.appendChild(notificacion);

    setTimeout(() => {
        document.body.removeChild(notificacion);
    }, 2000);
}

// Resto de las funciones permanece igual


// Función para validar que solo se ingresen letras minúsculas sin acentos ni caracteres especiales
function validarTexto(texto) {
    const regex = /^[a-z\s]+$/;

    if (!regex.test(texto)) {
        mostrarAdvertencia("Solo letras minúsculas y sin acentos", "error");
        return false;
    }

    // Si el texto es válido, mostrar mensaje por defecto en color original
    mostrarAdvertencia("Solo letras minúsculas y sin acentos", "info");
    return true;
}

// Función para encriptar el texto
function encriptar() {
    let textoIntroducido = document.getElementById("textoIntroducido").value;

    if (textoIntroducido.trim() === "") {
        mostrarAdvertencia("Campo de texto vacío", "error");
        return;
    }

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
    document.getElementById("botonCopiar").classList.add("mostrar");

    mostrarOcultarContenidoInicial();
    ajustarAlturaContenedor();
}

// Función para desencriptar el texto
function desencriptar() {
    let textoIntroducido = document.getElementById("textoIntroducido").value;

    if (textoIntroducido.trim() === "") {
        mostrarAdvertencia("Campo de texto vacío", "error");
        return;
    }

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
    document.getElementById("botonCopiar").classList.add("mostrar");

    mostrarOcultarContenidoInicial();
    ajustarAlturaContenedor();
}
