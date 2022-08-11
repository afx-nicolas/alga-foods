import { useEffect, useState } from 'react';

type ScreenSize = [number, number];

export default function useScreenSize() {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const { screen } = window;
    setWidth(screen.width);
    setHeight(screen.height);

    window.addEventListener('resize', () => {
      setWidth(screen.width);
      setHeight(screen.height);
    });
  }, []);

  return [width, height] as ScreenSize;
}
