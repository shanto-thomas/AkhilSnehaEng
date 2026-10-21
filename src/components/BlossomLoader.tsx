import React, { useState } from 'react';
import { Heart } from 'lucide-react';

interface BlossomLoaderProps {
  onOpen: () => void;
}

export const BlossomLoader: React.FC<BlossomLoaderProps> = ({ onOpen }) => {
  const [isOpening, setIsOpening] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleOpen = () => {
    if (isClicked) return;
    setIsClicked(true);
    // Smooth blossom expansion bloom, then fade out and display inner invitation
    setTimeout(() => {
      setIsOpening(true);
      setTimeout(onOpen, 650);
    }, 280);
  };

  return (
    <div
      onClick={handleOpen}
      className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-[#fbf4f6] via-[#f8edf0] to-[#f4e6ea] cursor-pointer transition-opacity duration-700 select-none ${
        isOpening ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Drifting Cherry Blossom Petals Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-[#f9dde3]/50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-88 h-88 bg-[#f4cfd7]/40 rounded-full blur-3xl"></div>
        
        {/* Soft floating sakura petals drifting in wind */}
        <span className="absolute top-12 left-1/4 text-2xl animate-sakura-1 select-none">🌸</span>
        <span className="absolute top-1/3 right-1/4 text-xl animate-sakura-2 select-none">🌸</span>
        <span className="absolute bottom-24 left-1/3 text-lg animate-sakura-1 select-none">🌸</span>
        <span className="absolute bottom-1/3 right-12 text-xl animate-sakura-2 select-none">🌸</span>
        <span className="absolute top-1/2 left-12 text-sm animate-sakura-1 select-none opacity-60">🌸</span>
      </div>

      <div className="relative z-10 text-center flex flex-col items-center px-4">
        
        {/* Interactive Blooming Flower Emblem (Medium Size Medallion) */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleOpen();
          }}
          type="button"
          aria-label="Open invitation"
          className="group relative mb-4 p-2 rounded-full cursor-pointer focus:outline-none transition-all duration-300"
        >
          {/* Outward Radiating Concentric Ripple Rings */}
          <div className="absolute inset-0 rounded-full border border-[#e8bac5]/60 animate-aura-ripple-1 pointer-events-none"></div>
          <div className="absolute inset-0 rounded-full border border-[#f0cbd4]/50 animate-aura-ripple-2 pointer-events-none"></div>
          
          {/* Ambient Glow Halo */}
          <div className="absolute -inset-1.5 rounded-full bg-[#fcedf0]/70 blur-sm pointer-events-none"></div>

          {/* Pretty Medium Flower Emblem Medallion Badge */}
          <div
            className={`w-20 h-20 sm:w-22 sm:h-22 rounded-full bg-gradient-to-b from-white via-[#fffafb] to-[#fcf0f3] shadow-lg shadow-[#b36e7f]/15 border border-[#eed4db] ring-2 ring-[#f5dbe2]/70 ring-offset-2 ring-offset-[#fbf4f6] flex items-center justify-center transition-all duration-500 group-hover:border-[#dca8b5] group-hover:shadow-xl group-hover:shadow-[#b36e7f]/25 ${
              isClicked ? 'scale-125 shadow-rose-gold' : 'group-hover:scale-106 animate-blossom-breathe'
            }`}
          >
            <span
              className={`text-3xl sm:text-4xl transition-transform duration-500 select-none inline-block ${
                isClicked
                  ? 'scale-125 rotate-45'
                  : 'group-hover:rotate-12 group-hover:scale-110'
              }`}
            >
              🌸
            </span>
          </div>
        </button>

        {/* Clean Couple Names */}
        <div className="flex items-center gap-2 text-[#3d242e] font-serif text-2xl sm:text-3xl font-bold tracking-wide transition-transform duration-300 group-hover:scale-102">
          <span>Akhil</span>
          <Heart className="w-3.5 h-3.5 fill-[#b36e7f] text-[#b36e7f] inline shrink-0 animate-pulse" />
          <span>Sneha</span>
        </div>

      </div>
    </div>
  );
};
