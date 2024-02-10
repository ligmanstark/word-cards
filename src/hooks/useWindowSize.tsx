import { useState } from 'react';
import useEventListener from './useEventListener';
import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';

interface WindowSize {
  windowWidth: number;
  windowHeight: number;
}

function useWindowSize(): WindowSize {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    windowWidth: 0,
    windowHeight: 0
  });

  const handleSize = () => {
    setWindowSize({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight
    });
  };

  useEventListener('resize', handleSize);

  // Set size at the first client-side load
  useIsomorphicLayoutEffect(() => {
    handleSize();
  }, []);

  return windowSize;
}

export default useWindowSize;

//usage
//const { windowWidth, windowHeight } = useWindowSize()
