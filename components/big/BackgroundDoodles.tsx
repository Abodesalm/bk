'use client';

import { useEffect, useState } from 'react';
import { StudyIcons } from './StudyIcons';

interface DoodleElement {
  id: number;
  type: number;
  x: number;
  y: number;
  size: number;
  rotation: number;
  animationType: 'float-slow' | 'float-medium' | 'float-fast' | 'rotate-slow';
  animationDuration: number;
  opacity: number;
}

export default function BackgroundDoodles() {
  const [doodles, setDoodles] = useState<DoodleElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // إنشاء 40-60 أيقونة عشوائية
    const newDoodles: DoodleElement[] = Array.from({ length: 50 }, (_, i) => {
      const animationTypes: DoodleElement['animationType'][] = [
        'float-slow',
        'float-medium',
        'float-fast',
        'rotate-slow',
      ];

      return {
        id: i,
        type: Math.floor(Math.random() * StudyIcons.length),
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 30 + 20, // حجم بين 20-50px
        rotation: Math.random() * 360,
        animationType:
          animationTypes[Math.floor(Math.random() * animationTypes.length)],
        animationDuration: Math.random() * 20 + 15,
        opacity: Math.random() * 0.08 + 0.05, // شفافية بين 0.05 و 0.13
      };
    });

    setDoodles(newDoodles);
    setIsLoaded(true);
  }, []);

  if (!isLoaded) {
    return (
      <div className="fixed inset-0 -z-50 bg-gradient-to-br from-[#0c7c6c] via-[#128C7E] to-[#075E54]">
        {/* خلفية مؤقتة أثناء التحميل */}
      </div>
    );
  }

  return (
    <>
      {/* الخلفية الثابتة - لون مثل واتساب */}
      <div className="fixed inset-0 -z-50 overflow-hidden bg-gradient-to-br from-[#0c7c6c] via-[#128C7E] to-[#075E54]">
        {/* نمط نقطي خفيف مثل واتساب */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: '50px 50px',
          }}
        />

        {/* الأيقونات SVG */}
        {doodles.map((doodle) => {
          const IconComponent = StudyIcons[doodle.type];
          return (
            <div
              key={doodle.id}
              className={`absolute transition-opacity duration-1000 ${doodle.animationType}`}
              style={{
                left: `${doodle.x}vw`,
                top: `${doodle.y}vh`,
                width: `${doodle.size}px`,
                height: `${doodle.size}px`,
                transform: `rotate(${doodle.rotation}deg)`,
                animationDuration: `${doodle.animationDuration}s`,
                animationDelay: `${Math.random() * 5}s`,
                opacity: doodle.opacity,
                color: 'white',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '0.2';
                e.currentTarget.style.transform = `rotate(${doodle.rotation}deg) scale(1.1)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = `${doodle.opacity}`;
                e.currentTarget.style.transform = `rotate(${doodle.rotation}deg) scale(1)`;
              }}
            >
              <IconComponent />
            </div>
          );
        })}
      </div>

      {/* طبقة شفافة فوق الخلفية لتحسين قراءة النص */}
      <div className="fixed inset-0 -z-40 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
    </>
  );
}
