(function() {
    emailjs.init('mI62WskSC-u4po9oO');
})();

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        
        emailjs.sendForm('service_ss1po4w', 'template_g32gu89', this)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                alert('Message sent successfully!');
            }, function(error) {
                console.log('FAILED...', error);
                alert('Error sending the message. Please try again.');
            });
    });
};