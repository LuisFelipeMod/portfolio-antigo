import React, { useEffect, useState, useRef } from 'react';

export default function Cursor() {
  const [displayCursor, setDisplayCursor] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const cursor = ref.current;

    const cursorAnimation = (e) => {
      let x = e.clientX;
      let y = e.clientY;

      cursor.style.top = y + 'px';
      cursor.style.left = x + 'px';
      cursor.style.display = 'block';
    };

    const mouseStopped = () => {
      cursor.style.display = 'none';
    };

    document.addEventListener('mousemove', (e) => {
      cursorAnimation(e);

      clearTimeout(timeout);
      timeout = setTimeout(mouseStopped, 1000);
    });

    let timeout;

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return <div className="cursor" ref={ref} style={{ display: displayCursor ? 'block' : 'none' }}></div>;
}
