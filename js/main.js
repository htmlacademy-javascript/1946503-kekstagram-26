const checkStringLength = (string, length) => string.length <= length;

const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const OBJECT_COUNTER = 25;

const messageCount = {
  min: 1,
  max: 6,
};

const LIKES_COUNTER = {
  min: 15,
  max: 200,
};

const COMMENTS_COUNTER = {
  min: 0,
  max: 20,
};

const AVATARS = [
  'img/avatar-1.svg',
  'img/avatar-2.svg',
  'img/avatar-3.svg',
  'img/avatar-4.svg',
  'img/avatar-5.svg',
  'img/avatar-6.svg',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Артем',
  'Вадим',
  'Анна',
  'Виктор',
  'Елена',
  'Олег',
];

const DESCRIPTIONS = [
  'Хорошее фото',
  'Здорово',
  'Могло бы быть лучше',
  'Опять еда',
  'Всё! Я звоню в полицию!',
  'Памагити...',
];

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

const createCommentMessage = () => {
  const messageCount = [getRandomPositiveInteger(messageCount.min, messageCount.max)];
  const message = [];

  for (let i = 1; i <= messageCount; i++) {
    message.push(MESSAGES[getRandomArrayElement(0, MESSAGES.length - 1)]);
  }
  return [... new Set(message)].join(' ');
};

let commentsId = 0;
let photoId = 0;

const createComments = () => {
  commentsId++;
  return {
    id: commentsId++,
    avatar: AVATARS[getRandomPositiveInteger(0, AVATARS.length - 1)],
    message: MESSAGES[getRandomPositiveInteger(0, MESSAGES.length - 1)],
    name: NAMES[getRandomPositiveInteger(0, NAMES.length - 1)],
  };
};

const createPhotoDescription = () => {
  photoId++;
  return {
    id: photoId,
    url: 'photos/' + photoId + '.jpg',
    likes: getRandomPositiveInteger(LIKES_COUNTER.min, LIKES_COUNTER.max),
    comments: Array.from({length: [getRandomPositiveInteger(COMMENTS_COUNTER.min, COMMENTS_COUNTER.max)]}, createComments),
    description: DESCRIPTIONS[getRandomPositiveInteger(0, DESCRIPTIONS.length - 1)],
  };
};

const feedbackPackage = Array.from({length: OBJECT_COUNTER}, createPhotoDescription);
