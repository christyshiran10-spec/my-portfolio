document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you! Message captured successfully.');
    this.reset();
});