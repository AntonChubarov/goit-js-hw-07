'use strict';

// my own photos used
const images = [
  {
    url: 'https://images.pexels.com/photos/17272502/pexels-photo-17272502.jpeg?auto=compress&cs=tinysrgb&h=350',
    alt: 'Brunette Woman in Jean Jacket',
  },
  {
    url: 'https://images.pexels.com/photos/17222542/pexels-photo-17222542.jpeg?auto=compress&cs=tinysrgb&h=350',
    alt: 'Woman in Suit in Black and White',
  },
  {
    url: 'https://images.pexels.com/photos/17272539/pexels-photo-17272539.jpeg?auto=compress&cs=tinysrgb&h=350',
    alt: 'Man in Black Clothes Sitting on Stairs',
  },
];

const gallery = document.querySelector('.gallery');

for (const image of images) {
  const galleryListItem = document.createElement('li');
  const imageElement = document.createElement('img');
  imageElement.src = image.url;
  imageElement.alt = image.alt;
  galleryListItem.append(imageElement);

  gallery.append(galleryListItem);
}
