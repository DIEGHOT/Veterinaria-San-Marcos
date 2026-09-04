document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("formularioContacto");
    if (!formulario) return;

    /*Benjamin Rojas
    Validación modular mediante un objeto de reglas.
    Mensajes y validaciones específicos por campo (IE1.2.1 / IE1.2.2).
    Incorporación de validación para el campo teléfono.
    */
    const reglas = {
        nombre: {
            input: document.getElementById("nombre"),
            error: document.getElementById("errorNombre"),
            validar: (valor) => {
                if (valor.trim() === "") return "El nombre del dueño es obligatorio.";
                if (valor.trim().length < 3) return "El nombre debe tener al menos 3 caracteres.";
                if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(valor)) return "El nombre solo puede contener letras y espacios.";
                return "";
            }
        },
        mascota: {
            input: document.getElementById("mascota"),
            error: document.getElementById("errorMascota"),
            validar: (valor) => {
                if (valor.trim() === "") return "Cuéntanos el nombre de tu mascota.";
                if (valor.trim().length < 2) return "El nombre de la mascota es muy corto.";
                if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ0-9\s]+$/.test(valor)) return "Usa solo letras y números para el nombre de la mascota.";
                return "";
            }
        },
        correo: {
            input: document.getElementById("correo"),
            error: document.getElementById("errorCorreo"),
            validar: (valor) => {
                if (valor.trim() === "") return "Necesitamos un correo para contactarte.";
                const patronCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!patronCorreo.test(valor)) return "Ingresa un correo válido, ej: nombre@dominio.com";
                return "";
            }
        },
        telefono: {
            input: document.getElementById("telefono"),
            error: document.getElementById("errorTelefono"),
            validar: (valor) => {
                if (valor.trim() === "") return "Déjanos un teléfono de contacto.";
                if (!/^[0-9+\s]{8,15}$/.test(valor)) return "Ingresa un teléfono válido (solo números, 8 a 15 dígitos).";
                return "";
            }
        },
        motivo: {
            input: document.getElementById("motivo"),
            error: document.getElementById("errorMotivo"),
            validar: (valor) => {
                if (valor.trim() === "") return "Cuéntanos brevemente el motivo de tu consulta.";
                if (valor.trim().length < 5) return "Describe un poco más el motivo (mínimo 5 caracteres).";
                return "";
            }
        }
    };

    /*
    Benjamin Rojas)
    Función para actualizar el estado visual individual (clases CSS y aria-invalid).
    Validación en tiempo real (eventos blur e input).*/
 
    function actualizarCampo(clave) {
        const regla = reglas[clave];
        const mensaje = regla.validar(regla.input.value);

        regla.error.textContent = mensaje;
        regla.input.classList.toggle("invalido", mensaje !== "");
        regla.input.classList.toggle("valido", mensaje === "" && regla.input.value.trim() !== "");
        regla.input.setAttribute("aria-invalid", mensaje !== "" ? "true" : "false");

        return mensaje === "";
    }

    Object.keys(reglas).forEach((clave) => {
        const campo = reglas[clave].input;
        campo.addEventListener("blur", () => actualizarCampo(clave));
        campo.addEventListener("input", () => {
            if (campo.classList.contains("invalido")) actualizarCampo(clave);
        });
    });

    formulario.addEventListener("submit", function (evento) {
        
        /*Diego Sansana
        Evita que la página se recargue al enviar el formulario.*/
      
        evento.preventDefault();

        const mensajeGlobal = document.getElementById("mensajeGlobal");
        let formularioValido = true;
        let primerCampoInvalido = null;

        /*
        Benjamin Rojas
        Iteración global de reglas al enviar, enfoque automático (focus) al primer error y limpieza de estados.
        */
        Object.keys(reglas).forEach((clave) => {
            const esValido = actualizarCampo(clave);
            if (!esValido) {
                formularioValido = false;
                if (!primerCampoInvalido) primerCampoInvalido = reglas[clave].input;
            }
        });

        if (!formularioValido) {
            mensajeGlobal.textContent = "Por favor corrige los campos marcados antes de continuar.";
            if (primerCampoInvalido) primerCampoInvalido.focus();
            return;
        }

        /* Diego Sansana
        Alerta final de éxito y restablecimiento de los campos del formulario.*/
        mensajeGlobal.textContent = "";
        const nombre = document.getElementById("nombre").value.trim();
        const mascota = document.getElementById("mascota").value.trim();

        alert("¡Hola " + nombre + "! Hemos recibido tu solicitud para " + mascota + ". Nos contactaremos pronto.");
        formulario.reset();

        Object.keys(reglas).forEach((clave) => {
            reglas[clave].input.classList.remove("invalido", "valido");
            reglas[clave].error.textContent = "";
        });
    });
});