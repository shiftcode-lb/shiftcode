import React, { useEffect, useState } from 'react';
import '../assets/css/LoadingScreen.css';
import { assets } from '../assets/assets';

const STATUS_LINES = [
  'shiftcode.init()',
  'compiling components...',
  'optimizing assets...',
  'ready.',
];

const LoadingScreen = ({ onFinish, minDuration = 1600 }) => {
  const [visible, setVisible] = useState(true);
  const [closing, setClosing] = useState(false);
  const [statusIndex, setStatusIndex] = useState(0);

  useEffect(() => {
    const statusTimer = setInterval(() => {
      setStatusIndex((i) => (i + 1) % STATUS_LINES.length);
    }, minDuration / STATUS_LINES.length);

    const closeTimer = setTimeout(() => {
      setClosing(true);
      setTimeout(() => {
        setVisible(false);
        onFinish && onFinish();
      }, 600);
    }, minDuration);

    return () => {
      clearInterval(statusTimer);
      clearTimeout(closeTimer);
    };
  }, [minDuration, onFinish]);

  if (!visible) return null;

  return (
    <div className={`loading-screen ${closing ? 'is-hidden' : ''}`} role="status" aria-live="polite">
      <div className="loading-logo-wrap">
        <img src={assets.logo} alt="ShiftCode" className="loading-logo logo-green" />
      </div>
      <div className="loading-bar-track">
        <div className="loading-bar-fill" />
      </div>
      <div className="loading-sub">{STATUS_LINES[statusIndex]}</div>
    </div>
  );
};

export default LoadingScreen;
