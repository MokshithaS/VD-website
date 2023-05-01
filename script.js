const form = document.querySelector('#login-form');
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const submitBtn = document.querySelector('#submit-btn');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  if (validateForm()) {
    console.log('Form is valid');
    // Add your login logic here
  }
});

function validateForm() {
  let isValid = true;
  const usernameValue = username.value.trim();
  const passwordValue = password.value.trim();

  if (usernameValue === '') {
    setErrorFor(username, 'Username cannot be blank');
    isValid = false;
  } else {
    setSuccessFor(username);
  }

  if (passwordValue === '') {
    setErrorFor(password, 'Password cannot be blank');
    isValid = false;
  } else {
    setSuccessFor(password);
  }

  return isValid;
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const errorMessage = formControl.querySelector('.error-message');
  errorMessage.innerText = message;
  formControl.classList.add('error');
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.classList.remove('error');
}
