import {createThumbnail} from './data.js';

const pictureBlock = document.querySelector('.picture');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const pictureData = createThumbnail();

const pictureFragment = document.createDocumentFragment();

pictureData.forEach(({url, likes, comments}) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__likes').textContent = likes.length;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  pictureElement.append(pictureFragment);
});

pictureFragment.append(pictureBlock);
