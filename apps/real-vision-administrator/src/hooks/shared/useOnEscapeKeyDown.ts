import { KeyCodes } from '@/constants-definitions/keyCodes';
import { useEffect } from 'react';


const useOnEscapeKeyDown = (isListening:boolean, onEscapeKeyDown:Function) => {
  useEffect(() => {
    const handleKeyDown = (event:any) => {
      if (event.keyCode === KeyCodes.ESCAPE) {
        console.log('PRESSED')
        onEscapeKeyDown();
      }
    };

    if (isListening) {
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isListening, onEscapeKeyDown]);
};

export default useOnEscapeKeyDown;