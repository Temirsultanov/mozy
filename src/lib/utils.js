export const getRandomId = () => {
  const timestamp = Date.now();
  const randomNumber = Math.floor(Math.random() * 100);
  const id = (timestamp % 1000) + randomNumber;
  return id;
};
