import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

interface InvitationLoaderProps {
  onOpen: () => void;
}

export const InvitationLoader: React.FC<InvitationLoaderProps> = ({ onOpen }) => {
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Automatically transition smoothly after 1.4 seconds
    const timer = setTimeout(() => {
      setIsFading(true);
      setTimeout(onOpen, 500);
    }, 1400);

    return () => clearTimeout(timer);
  }, [onOpen]);

  const handleQuickSkip = () => {
    setIsFading(true);
    setTimeout(onOpen, 300);
  };

  return (
    <div
      onClick={handleQuickSkip}
      className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-[#fbf4f6] via-[#f8edf0] to-[#f4e6ea] cursor-pointer transition-opacity duration-700 ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Floating Cherry Blossom Petals Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-[#f9dde3]/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-[#f4cfd7]/30 rounded-full blur-3xl"></div>
        
        {/* Subtle decorative petals */}
        <span className="absolute top-12 left-1/4 text-2xl animate-sakura-1 select-none">🌸</span>
        <span className="absolute top-1/3 right-1/4 text-xl animate-sakura-2 select-none">🌸</span>
        <span className="absolute bottom-20 left-1/3 text-lg animate-sakura-1 select-none">🌸</span>
      </div>

      <div className="relative z-10 text-center flex flex-col items-center">
        {/* Blooming Cherry Blossom Emblem */}
        <div className="relative mb-4">
          <div className="w-20 h-20 rounded-full bg-white/95 backdrop-blur-md shadow-lg shadow-[#b36e7f]/10 border border-[#eed4db] flex items-center justify-center animate-float">
            <span className="text-3xl select-none">🌸</span>
          </div>
          {/* Subtle glowing ring */}
          <div className="absolute -inset-2 rounded-full border border-[#eed4db]/60 animate-ping" style={{ animationDuration: '3s' }}></div>
        </div>

        {/* Minimal Names Alone (NO 'Opening invitation' text, NO line) */}
        <div className="flex items-center gap-2 text-[#422831] font-serif text-2xl font-bold tracking-wider">
          <span>Akhil</span>
          <Heart className="w-4 h-4 fill-[#b36e7f] text-[#b36e7f] inline" />
          <span>Sneha</span>
        </div>
      </div>
    </div>
  );
};
