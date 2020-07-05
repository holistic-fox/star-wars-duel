export const getRandomArrayElement = <E>(array: Array<E>): E => array[Math.floor(Math.random() * array.length)];
