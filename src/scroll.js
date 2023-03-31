let translateHandlers = [];
let rotateHandlers = [];
let opacityHandlers = [];

export function translateSubscribe({ elem, translateY, translateX }) {
  const obj = {
    elem,
    translateY,
    translateX,
  };

  translateHandlers.push(obj);

  return function translateUnsubscribe() {
    translateHandlers = translateHandlers.filter((handler) => handler !== obj);
  };
}

export function rotateSubscribe({
  elem,
  documentBeginPoint,
  duration,
  beginValue,
  finishValue,
  increase = true,
}) {
  const obj = {
    elem,
    documentBeginPoint,
    duration,
    beginValue,
    finishValue,
    increase,
  };

  rotateHandlers.push(obj);

  return function rotateUnsubscribe() {
    rotateHandlers = rotateHandlers.filter((handler) => handler !== obj);
  };
}

export function opacitySubscribe({
  elem,
  documentBeginPoint,
  duration,
  beginValue,
  finishValue,
  increase = true,
}) {
  const obj = {
    elem,
    documentBeginPoint,
    duration,
    beginValue,
    finishValue,
    increase,
  };

  opacityHandlers.push(obj);

  return function opacityUnsubscribe() {
    opacityHandlers = opacityHandlers.filter((handler) => handler !== obj);
  };
}

function getValueFromObj(obj) {
  let percent = Math.floor(
    ((window.pageYOffset - obj.documentBeginPoint) / obj.duration) * 100
  );

  if (percent < 0) percent = 0;
  if (percent > 100) percent = 100;

  let value;
  if (obj.increase) {
    value = obj.beginValue + obj.finishValue * percent * 0.01;
  } else {
    value =
      obj.beginValue - (obj.beginValue - obj.finishValue) * percent * 0.01;
  }
  return value + (obj.unit || "");
}

function translateOnScroll() {
  for (let i = 0; i < translateHandlers.length; i++) {
    const obj = translateHandlers[i];

    const translateXValue = obj.translateX
      ? getValueFromObj(obj.translateX)
      : "0";

    const translateYValue = obj.translateY
      ? getValueFromObj(obj.translateY)
      : "0";

    obj.elem.style.translate = `${translateXValue} ${translateYValue}`;
  }
}

function rotateOnScroll() {
  for (let i = 0; i < rotateHandlers.length; i++) {
    const obj = rotateHandlers[i];
    const rotateValue = getValueFromObj(obj);
    obj.elem.style.rotate = `${rotateValue}deg`;
  }
}

function opacityOnScroll() {
  for (let i = 0; i < opacityHandlers.length; i++) {
    const obj = opacityHandlers[i];
    const opacityValue = getValueFromObj(obj);
    obj.elem.style.opacity = opacityValue;
  }
}

function throttle(func, ms) {
  let isThrottled = false;
  let savedArgs;
  let savedThis;

  function wrapper() {
    if (isThrottled) {
      savedArgs = arguments;
      savedThis = this;
      return;
    }

    func.apply(this, arguments);

    isThrottled = true;
    setTimeout(() => {
      isThrottled = false;
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = null;
        savedThis = null;
      }
    }, ms);
  }

  return wrapper;
}

let animateOnScroll = function () {
  translateOnScroll();
  rotateOnScroll();
  opacityOnScroll();
};

animateOnScroll = throttle(animateOnScroll, 1);
window.addEventListener("scroll", animateOnScroll);
