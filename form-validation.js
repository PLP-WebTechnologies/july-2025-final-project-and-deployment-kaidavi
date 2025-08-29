const validateForm = (formId) => {
    const form = document.getElementById(formId);
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const inputs = form.querySelectorAll('input, textarea');
        let isValid = true;

        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                input.classList.add('error');
            } else {
                input.classList.remove('error');
            }
        });

        if (isValid) {
            alert('Thank you for your message!');
            form.reset();
        }
    });
};

// Initialize form validation
document.addEventListener('DOMContentLoaded', () => {
    validateForm('contactForm');
});