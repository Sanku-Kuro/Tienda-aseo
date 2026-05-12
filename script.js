
document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('formContacto');

   
    formulario.addEventListener('submit', function(evento) {
        evento.preventDefault(); 

        
        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensaje = document.getElementById('mensaje').value.trim();

        
        if (nombre.length < 3) {
            alert("Por favor, ingresa un nombre válido (mínimo 3 caracteres).");
            return;
        }

        
        console.log("Datos capturados:", { nombre, email, mensaje });
        
        
        alert(`¡Gracias ${nombre}! Hemos recibido tu mensaje sobre nuestros utensilios.`);
        
        
        formulario.reset();
    });
});