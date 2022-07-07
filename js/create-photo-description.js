import {getRandomPositiveInteger} from './util.js';
import {createComments} from './create-comments.js';

const LIKES_COUNTER = {
  min: 15,
  max: 200,
};

const COMMENTS_COUNTER = {
  min: 0,
  max: 20,
};

const DESCRIPTIONS = [
  'Хорошее фото',
  'Здорово',
  'Могло бы быть лучше',
  'Опять еда',
  'Всё! Я звоню в полицию!',
  'Памагити...',
];

let photoId = 0;

const createPhotoDescription = () => {
  photoId++;
  return {
    id: photoId,
    url: `photos/${photoId}.jpg`,
    likes: getRandomPositiveInteger(LIKES_COUNTER.min, LIKES_COUNTER.max),
    comments: Array.from({length: [getRandomPositiveInteger(COMMENTS_COUNTER.min, COMMENTS_COUNTER.max)]}, createComments),
    description: DESCRIPTIONS[getRandomPositiveInteger(0, DESCRIPTIONS.length - 1)],
  };
};

export {createPhotoDescription};
