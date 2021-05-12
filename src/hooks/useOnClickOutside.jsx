// Hook
import {useEffect} from 'react';

export const useOnClickOutside = (ref, handler) => {
  useEffect(
      () => {
        const listener = (event) => {
          if (!ref.current || ref.current.contains(event.target)) {
            return;
          }
          handler(event);
        };
        document.addEventListener('mouseup', listener);
        document.addEventListener('touchstart', listener);
        return () => {
          document.removeEventListener('mouseup', listener);
          document.removeEventListener('touchstart', listener);
        };
      },
      [ref, handler],
  );
};
