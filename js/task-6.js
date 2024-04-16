'use strict';

const controls = document.querySelector('#controls');

const input = controls.querySelector('input[type="number"]');
const createButton = controls.querySelector('button[data-create]');
const destroyButton = controls.querySelector('button[data-destroy]');

const boxesContainer = document.querySelector('#boxes');

const handleDestroy = () => {
  boxesContainer.innerHTML = '';
};

destroyButton.addEventListener('click', handleDestroy);

const handleCreate = () => {
  const numberOfBoxes = Number(input.value);

  if (numberOfBoxes < 1 || numberOfBoxes > 100) {
    return;
  }

  handleDestroy();

  for (let i = 0; i < numberOfBoxes; i++) {
    const box = document.createElement('div');
    box.style.width = 30 + 10 * i + 'px';
    box.style.height = 30 + 10 * i + 'px';

    box.style.backgroundColor = getRandomHexColor();

    boxesContainer.append(box);
  }

  input.value = '';
};

createButton.addEventListener('click', handleCreate);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
