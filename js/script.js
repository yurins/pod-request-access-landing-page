document.getElementById('signup-form').addEventListener('submit', function(event) {
    var emailInput = document.getElementById('email');
    validateEmail(emailInput);

    function validateEmail(input) {
        var errorMessage = input.nextElementSibling;

        if (!isValidEmail(input.value.trim())) {
            errorMessage.classList.remove('invisible');
            input.classList.add('error-form');
            event.preventDefault();
        } else {
            errorMessage.classList.add('invisible');
            input.classList.remove('error-form');
        }
    }

    function isValidEmail(email) {
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }
});