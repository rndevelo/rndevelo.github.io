(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init(process.env.API_KEY_EMAIL);
})();

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
            .then(function() {
                console.log('SUCCESS!');
                alert('Mensaje enviado con éxito!');
            }, function(error) {
                console.log('FAILED...', error);
                alert('Error al enviar el mensaje. Por favor, intenta de nuevo.');
            });
    });
}