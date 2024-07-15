(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init(`${process.env.API_KEY_EMAIL}`);
})();

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Variables para obtener los datos del formulario
    var userEmail = document.getElementById('user-email').value;
    var userMessage = document.getElementById('user-message').value;

    // Parámetros que se enviarán en el correo
    var templateParams = {
        from_name: 'PabloPruebas',
        to_name: 'User',
        reply_to: userEmail,
        message: userMessage
    };
        
        emailjs.sendForm(`${process.env.SERVICE_ID}`, `${process.env.TEMPLATE_ID}`, templateParams)
            .then(function() {
                console.log('SUCCESS!');
                alert('Mensaje enviado con éxito!');
            }, function(error) {
                console.log('FAILED...', error);
                alert('Error al enviar el mensaje. Por favor, intenta de nuevo.');
            });
    });
}