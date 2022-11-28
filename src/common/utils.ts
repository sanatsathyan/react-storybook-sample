
export const debounce = (fn: Function, delay: number = 250) => {
  let id: NodeJS.Timeout;
  return (...args: any[]) => {
    clearTimeout(id);
    id = setTimeout(() => {
      fn(...args);
    }, delay);
  }
}