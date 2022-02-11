const form = document.querySelector('form');
const passwordInput = document.getElementById('password');
const signupButton = document.querySelector('button#sign-up');
const togglePasswordButton = document.getElementById('toggle-password');

form.addEventListener('submit', handleFormSubmission);
passwordInput.addEventListener('input', resetCustomValidity);
togglePasswordButton.addEventListener('click', togglePassword);

function togglePassword() {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        togglePasswordButton.textContent = 'Hide password';
        togglePasswordButton.setAttribute('aria-label',
            'Hide password.');
    } else {
        passwordInput.type = 'password';
        togglePasswordButton.textContent = 'Show password';
        togglePasswordButton.setAttribute('aria-label',
            'Show password as plain text. ' +
            'Warning: this will display your password on the screen.');
    }
}

function resetCustomValidity() {
    passwordInput.setCustomValidity('');
}

// A production site would use more stringent password testing.
function validatePassword() {
    let message= '';
    if (!/.{8,}/.test(passwordInput.value)) {
        message = 'At least eight characters. ';
    }
    // Don't allow a compromised password: check using a service/API such as haveibeenpwned.com
    // if (isCompromisedPassword()) {
    // 	message += 'This password has been compromised. Please try again. ';
    // }
    passwordInput.setCustomValidity(message);
}

function handleFormSubmission(event) {
    event.preventDefault();
    validatePassword();
    form.reportValidity();
    if (form.checkValidity() === false) {
        // Handle invalid form
    } else {
        // On a production site do form submission.
        alert('Signed up!')
        // Disable on successful sign-up — but don't disable pending valid input!
        signupButton.disabled = 'true';
    }
}
