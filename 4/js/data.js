import {createPhotoDescription} from './create-photo-description.js';

const OBJECT_COUNTER = 25;

const createThumbnail = () => Array.from({length: OBJECT_COUNTER}, createPhotoDescription);

export {createThumbnail};
