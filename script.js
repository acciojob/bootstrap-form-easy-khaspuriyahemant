//your code here
document.querySelector('form').addEventListener('submit', function(event) {
    // Prevent form submission
    event.preventDefault();

    // Check all inputs
    const inputs = document.querySelectorAll('.form-control, .form-select');
    inputs.forEach(input => {
        if (!input.checkValidity()) {
            input.classList.add('is-invalid'); // Add Bootstrap invalid class
        } else {
            input.classList.remove('is-invalid'); // Remove invalid class if valid
        }
    });
});