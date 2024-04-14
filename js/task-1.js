'use strict';

const categories = document.querySelectorAll('#categories > li');
console.log(`Number of categories: ${categories.length}`);

for (const category of categories) {
  const name = category.querySelector('h2').innerText;
  console.log(`Category: ${name}`);

  const elements = category.querySelectorAll('ul > li');
  console.log(`Elements: ${elements.length}`);
}
