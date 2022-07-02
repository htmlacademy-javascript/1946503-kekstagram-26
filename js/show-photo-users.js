import {createThumbnail} from './data.js';

const pictureBlock = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const pictureData = createThumbnail();

const pictureFragment = document.createDocumentFragment();

const drawThumbnail = () => {
  pictureData.forEach(({url, likes, comments}) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__likes').textContent = likes.length;
    pictureElement.querySelector('.picture__comments').textContent = comments.length;
    pictureFragment.append(pictureElement);
  });

  pictureBlock.append(pictureFragment);
};

export {drawThumbnail};
