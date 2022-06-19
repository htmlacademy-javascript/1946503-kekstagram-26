const checkStringLength = (string, length) => string.length <= length;

function getRandomPositiveInteger (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const id = [getRandomPositiveInteger(1, 25)];
const url = 'photos/' + [getRandomPositiveInteger(1, 25)] + '.jpg';
const description = ['Хорошее фото', 'Здорово', 'Могло бы быть лучше', 'Опять еда', 'Всё! Я звоню в полицию!', 'Памагити...'];
const likes = [getRandomPositiveInteger(15, 200)];

const commentsId = [];
for (let i = 0; i <= 4; i++) {
	commentsId[i] = i + 1;
};
const commentsAvatar = ['img/avatar-1.svg', 'img/avatar-2.svg', 'img/avatar-3.svg', 'img/avatar-4.svg', 'img/avatar-5.svg', 'img/avatar-6.svg'];
const commentsMessage = ['Всё отлично!', 'В целом всё неплохо. Но не всё.'];
const commentsName = ['Артем', 'Вадим', 'Анна', 'Виктор', 'Елена', 'Олег'];

const comments = () => {
  return {
    id: commentsId[getRandomPositiveInteger(0, commentsAvatar.length - 1)],
    avatar: commentsAvatar[getRandomPositiveInteger(0, commentsAvatar.length - 1)],
    message: commentsMessage[getRandomPositiveInteger(0, commentsMessage.length - 1)],
    name: commentsName[getRandomPositiveInteger(0, commentsName.length - 1)],
  };
};

const similarComments = Array.from({length: 25}, comments);
