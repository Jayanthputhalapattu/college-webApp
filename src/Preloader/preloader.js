import { useEffect, useState } from 'react';

export default function Preloader() {

  const [loadProgress, setLoadProgress] = useState(0);

  useEffect(() => {

    const loader = document.getElementById('loader');
    const text = document.getElementById('text');

    const fadeInText = () => {
      let opacity = Number(text.style.opacity);
      if(opacity < 1) {
        text.style.opacity = opacity + 0.05;
        requestAnimationFrame(fadeInText);
      }
    }

    const load = () => {
      let w = loadProgress;
      if(w < 100) {
        setLoadProgress(prev => prev + 1);
        loader.style.width = `${w}%`;
        requestAnimationFrame(load);  
      } else {
        loader.style.width = '100%';
        finishLoading();
      }
    }

    fadeInText();
    load();

    const finishLoading = () => {
      text.style.opacity = 1; 

      setTimeout(() => {
        loader.style.opacity = 0;
      }, 500);

      setTimeout(() => {
        loader.style.display = 'none';
      }, 1000);
    }

  }, []);

  return (
    <div>
      <div id="text">SVUCE</div>
      
      {/* Animated loader bar */}
      <div id="loader"/>
    </div>
  )

}