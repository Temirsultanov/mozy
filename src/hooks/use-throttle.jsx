import { useRef, useCallback } from "react";

export const useThrottle = (func, ms, dependencies) => {
  const throttled = useRef(false);
  const wrapper = useCallback(function (...args) {
    if (throttled.current) return;
    func(...args);

    throttled.current = true;
    setTimeout(() => {
      throttled.current = false;
    }, ms);
  }, dependencies);

  return wrapper;
};
