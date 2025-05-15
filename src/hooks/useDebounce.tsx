import { useRef } from 'react';

function useDebounce(func: () => void, duaration: number) {
  const timer = useRef<number | null>(null);

  return (...args: []) => {
    if (timer.current) {
      clearTimeout(timer.current);
    }

    timer.current = setTimeout(() => {
      func(...args);
    });
  };
}

export default useDebounce;
