'use strict';

const textInput = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

const defaultText = output.innerText;

textInput.addEventListener('input', event => {
  const currentValue = event.currentTarget.value.trim();

  output.textContent = currentValue ? currentValue : defaultText;
});
