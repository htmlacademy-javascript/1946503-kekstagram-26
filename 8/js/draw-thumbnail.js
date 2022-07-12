import {createThumbnail} from './data.js';
import {showBigPicture} from './show-big-picture.js';

const pictureBlock = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const pictureData = createThumbnail();
const pictureFragment = document.createDocumentFragment();

const drawThumbnail = () => {
  pictureData.forEach((picture) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = picture.url;
    pictureElement.querySelector('.picture__likes').textContent = picture.likes;
    pictureElement.querySelector('.picture__comments').textContent = picture.comments.length;
    pictureFragment.append(pictureElement);

    pictureElement.addEventListener('click', () => {
      showBigPicture(picture);
    });
  });

  pictureBlock.append(pictureFragment);
};

export {drawThumbnail};
