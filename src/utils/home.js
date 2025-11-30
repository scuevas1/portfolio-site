export function useTypedName(fullName, delay = 130) {
  return function startTyping(callback) {
    let i = 0;

    const timer = setInterval(() => {
      callback(fullName.slice(0, i));
      i++;

      if (i > fullName.length) clearInterval(timer);
    }, delay);

    return () => clearInterval(timer);
  };
}
