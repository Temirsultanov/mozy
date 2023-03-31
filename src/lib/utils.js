export const throttle = (func, ms) => {
  let isThrottled = false;

  const wrapper = function (...args) {
    if (isThrottled) return;

    func(...args);

    isThrottled = true;
    setTimeout(() => {
      isThrottled = false;
    }, ms);
  };

  return wrapper;
};

export const getRandomId = () => {
  const timestamp = Date.now();
  const randomNumber = Math.floor(Math.random() * 100);
  const id = (timestamp % 1000) + randomNumber;
  return id;
};
