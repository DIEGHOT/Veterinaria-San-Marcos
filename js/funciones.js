document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.getElementById("formularioContacto");

    if (formulario) {
        formulario.addEventListener("submit", function(evento) {
            // Evita que la página se recargue al enviar
            evento.preventDefault(); 
            
            const nombre = document.getElementById("nombre").value.trim();
            const mascota = document.getElementById("mascota").value.trim();
            const correo = document.getElementById("correo").value.trim();
            const motivo = document.getElementById("motivo").value.trim();
            const mensajeError = document.getElementById("mensajeError");

            mensajeError.textContent = "";

            // Validación 1: Campos vacíos
            if (nombre === "" || mascota === "" || correo === "" || motivo === "") {
                mensajeError.textContent = "Error: Todos los campos son obligatorios para agendar.";
                return;
            }

            // Validación 2: Formato de correo válido
            const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!regexCorreo.test(correo)) {
                mensajeError.textContent = "Error: Ingresa un correo electrónico válido (ej. usuario@dominio.cl).";
                return;
            }

            // Validación 3: Longitud mínima del motivo
            if (motivo.length < 15) {
                mensajeError.textContent = "Error: Detalla un poco más el motivo (mínimo 15 caracteres).";
                return;
            }

            // Éxito: Todo está correcto
            alert("¡Hola " + nombre + "! Hemos recibido tu solicitud para " + mascota + ". Te confirmaremos la hora al correo " + correo + ".");
            formulario.reset();
        });
    }
});
