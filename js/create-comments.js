import { getRandomPositiveInteger } from './util.js';
import { createCommentMessage } from './create-comment-message.js';

let commentsId = 0;

const NAMES = [
  'Артем',
  'Вадим',
  'Анна',
  'Виктор',
  'Елена',
  'Олег',
];

const AVATARS = [
  'img/avatar-1.svg',
  'img/avatar-2.svg',
  'img/avatar-3.svg',
  'img/avatar-4.svg',
  'img/avatar-5.svg',
  'img/avatar-6.svg',
];

const createComments = () => {
  commentsId++;
  return {
    id: commentsId++,
    avatar: AVATARS[getRandomPositiveInteger(0, AVATARS.length - 1)],
    message: createCommentMessage(),
    name: NAMES[getRandomPositiveInteger(0, NAMES.length - 1)],
  };
};

export {createComments};
