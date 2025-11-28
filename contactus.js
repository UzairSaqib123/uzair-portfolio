// Email function - opens Gmail directly
function sendEmail() {
    const subject = "Project Inquiry";
    const body = "Hello! I'm interested in your services. Let's discuss potential collaboration.";
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=uzairsaqib02@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, '_blank');
}

// WhatsApp function - opens WhatsApp with message
function sendWhatsApp() {
    const message = "Hello! I'm interested in your services. Let's discuss potential collaboration.";
    window.open(`https://wa.me/923008464865?text=${encodeURIComponent(message)}`, '_blank');
}

// Contact form submission - opens Gmail
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    const subject = `New Message from ${name}`;
    const body = `Name: ${name}%0AEmail: ${email}%0A%0AMessage:%0A${message}`;
    
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=uzairsaqib02@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, '_blank');
    
    this.reset();
    alert('Thank you! Gmail opened with your message.');
});