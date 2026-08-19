import React, { useMemo } from 'react';
import '../assets/css/TechBackground.css';

// A soft, drifting field of code-flavoured symbols that sits behind
// every section of the site. Purely decorative (aria-hidden) and
// completely non-interactive so it never blocks real content.
const SYMBOLS = ['<', '>', '</>', '{', '}', '{ }', ';', '::', '#', '=>', '( )', '&&', '||', '[ ]'];

const seededRandom = (seed) => {
  let value = seed;
  return () => {
    value = (value * 9301 + 49297) % 233280;
    return value / 233280;
  };
};

const TechBackground = ({ count = 26 }) => {
  const symbols = useMemo(() => {
    const rand = seededRandom(42);
    return Array.from({ length: count }).map((_, i) => {
      const size = 14 + Math.floor(rand() * 26); // 14px - 40px
      const top = rand() * 100;
      const left = rand() * 100;
      const duration = 10 + rand() * 14; // 10s - 24s
      const delay = -rand() * duration;
      const dx = (rand() * 60 - 30).toFixed(0);
      const dy = (rand() * 60 - 30).toFixed(0);
      const rot = (rand() * 20 - 10).toFixed(0);
      const opacity = (0.08 + rand() * 0.16).toFixed(2);
      return {
        id: i,
        char: SYMBOLS[i % SYMBOLS.length],
        style: {
          top: `${top}%`,
          left: `${left}%`,
          fontSize: `${size}px`,
          animationDuration: `${duration}s`,
          animationDelay: `${delay}s`,
          '--dx': `${dx}px`,
          '--dy': `${dy}px`,
          '--rot': `${rot}deg`,
          '--sym-op': opacity,
        },
      };
    });
  }, [count]);

  return (
    <div className="tech-bg" aria-hidden="true">
      {symbols.map((s) => (
        <span key={s.id} className="tech-symbol" style={s.style}>
          {s.char}
        </span>
      ))}
    </div>
  );
};

export default TechBackground;
