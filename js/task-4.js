'use strict';

const form = document.querySelector('.login-form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const form = event.target;
  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();

  if (email === '' || password === '') {
    alert('All form fields must be filled in');

    return;
  }

  const formData = new FormData(form);

  const formObject = {};

  formData.forEach(function(value, key) {
    formObject[key] = value;
  });

  console.log(formObject);

  form.reset();
});
