

(function() {
    // Inicialización de emailjs usando la variable de entorno
    emailjs.init('mI62WskSC-u4po9oO');
})();

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        
        var userEmail = document.getElementById('user-email').value;
        var userMessage = document.getElementById('user-message').value;

        var templateParams = {
            from_name: 'PabloPruebas',
            to_name: 'User',
            reply_to: userEmail,
            message: userMessage
        };
        
        emailjs.sendForm('service_ss1po4w', 'template_g32gu89', this)
            .then(function() {
                console.log('SUCCESS!');
                alert('Mensaje enviado con éxito!');
            }, function(error) {
                console.log('FAILED...', error);
                alert('Error al enviar el mensaje. Por favor, intenta de nuevo.');
            });
    });
};
