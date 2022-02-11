const passwordInput = document.getElementById('password');
const togglePasswordButton = document.getElementById('toggle-password');
const togglePasswordIcon = document.getElementById('toggle-password-icon');

togglePasswordButton.addEventListener('click', togglePassword);

function togglePassword() {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        togglePasswordIcon.textContent = 'visibility_off';
        togglePasswordButton.setAttribute('aria-label',
            'Hide password.');
    } else {
        passwordInput.type = 'password';
        togglePasswordIcon.textContent = 'visibility';
        togglePasswordButton.setAttribute('aria-label',
            'Show password as plain text. ' +
            'Warning: this will display your password on the screen.');
    }
}

passwordInput.addEventListener('input', resetCustomValidity);
function resetCustomValidity() {
    passwordInput.setCustomValidity('');
}

// A production site would use more stringent password testing.
function validatePassword() {
    let message= '';
    if (!/.{8,}/.test(passwordInput.value)) {
        message = 'At least eight characters. ';
    }
    if (!/.*[A-Z].*/.test(passwordInput.value)) {
        message += 'At least one uppercase letter. ';
    }
    if (!/.*[a-z].*/.test(passwordInput.value)) {
        message += 'At least one lowercase letter.';
    }
    passwordInput.setCustomValidity(message);
}

const form = document.querySelector('form');
const signinButton = document.querySelector('button#sign-in');

form.addEventListener('submit', handleFormSubmission);

function handleFormSubmission(event) {
    event.preventDefault();
    validatePassword();
    form.reportValidity();
    if (form.checkValidity() === false) {
    } else {
        // On a production site do form submission.
        alert('Logging in!')
        signinButton.disabled = 'true';
    }
}
