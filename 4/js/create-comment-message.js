import { getRandomPositiveInteger } from './util.js';

const MessageCount = {
  min: 1,
  max: 2,
};

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const createCommentMessage = () => {
  const messageCount = [getRandomPositiveInteger(MessageCount.min, MessageCount.max)];
  const message = [];

  for (let i = 1; i <= messageCount; i++) {
    message.push(MESSAGES[getRandomPositiveInteger(0, MESSAGES.length - 1)]);
  }

  return [... new Set(message)].join(' ');
};

export {createCommentMessage};
