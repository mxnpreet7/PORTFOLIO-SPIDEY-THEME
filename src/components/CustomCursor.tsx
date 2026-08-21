import React, { useEffect, useState } from 'react';

interface CustomCursorProps {
  spiderSenseActive?: boolean;
}

export const CustomCursor: React.FC<CustomCursorProps> = ({ spiderSenseActive = false }) => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Check if touch device
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouch(true);
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });

      // Check if hovering over clickable element
      const target = e.target as HTMLElement | null;
      if (target) {
        const isClickable = 
          target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.closest('button') ||
          target.closest('a') ||
          target.getAttribute('role') === 'button' ||
          target.classList.contains('cursor-pointer');
        setHovered(!!isClickable);
      }
    };

    const onMouseDown = () => setClicked(true);
    const onMouseUp = () => setClicked(false);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  if (isTouch) return null;

  return (
    <div id="spider-custom-cursor-root" className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Outer Spider-Sense ring */}
      <div
        className={`fixed rounded-full transition-transform duration-100 ease-out -translate-x-1/2 -translate-y-1/2 pointer-events-none border ${
          spiderSenseActive
            ? 'border-[#E22424] bg-[#E22424]/10 shadow-[0_0_15px_rgba(226,36,36,0.5)]'
            : hovered
            ? 'border-[#E22424]/70 bg-[#E22424]/5 scale-150'
            : 'border-white/20 bg-transparent'
        }`}
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
          width: clicked ? '28px' : hovered ? '38px' : '26px',
          height: clicked ? '28px' : hovered ? '38px' : '26px',
          transitionProperty: 'width, height, transform, border-color, background-color',
        }}
      />

      {/* Center pinpoint */}
      <div
        className={`fixed rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-colors duration-150 ${
          spiderSenseActive || hovered ? 'bg-[#E22424]' : 'bg-white/90'
        }`}
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
          width: '5px',
          height: '5px',
        }}
      />
    </div>
  );
};
