import React, { useState } from 'react';
import { Heart, Sparkles } from 'lucide-react';

interface BlossomLoaderProps {
  onOpen: () => void;
}

export const BlossomLoader: React.FC<BlossomLoaderProps> = ({ onOpen }) => {
  const [isOpening, setIsOpening] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleOpen = () => {
    if (isClicked) return;
    setIsClicked(true);
    // Smooth blossom expansion, then fade out and display inner invitation
    setTimeout(() => {
      setIsOpening(true);
      setTimeout(onOpen, 600);
    }, 250);
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
        <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-[#f9dde3]/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-[#f4cfd7]/30 rounded-full blur-3xl"></div>
        
        {/* Soft floating sakura petals */}
        <span className="absolute top-12 left-1/4 text-2xl animate-sakura-1 select-none">🌸</span>
        <span className="absolute top-1/3 right-1/4 text-xl animate-sakura-2 select-none">🌸</span>
        <span className="absolute bottom-20 left-1/3 text-lg animate-sakura-1 select-none">🌸</span>
        <span className="absolute bottom-1/3 right-10 text-xl animate-sakura-2 select-none">🌸</span>
      </div>

      <div className="relative z-10 text-center flex flex-col items-center px-4">
        
        {/* Interactive Blooming Flower Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleOpen();
          }}
          type="button"
          aria-label="Click flower to open invitation"
          className={`group relative mb-5 p-2 rounded-full cursor-pointer focus:outline-none transition-transform duration-300 ${
            isClicked ? 'scale-125' : 'hover:scale-105 active:scale-95'
          }`}
        >
          {/* Main Flower Emblem Badge */}
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white/95 backdrop-blur-md shadow-xl shadow-[#b36e7f]/20 border-2 border-[#eed4db] flex items-center justify-center transition-all duration-300 group-hover:border-[#dca8b5] group-hover:shadow-[#b36e7f]/30">
            <span
              className={`text-4xl sm:text-5xl transition-transform duration-500 select-none inline-block ${
                isClicked ? 'rotate-45 scale-110' : 'group-hover:rotate-12 group-hover:scale-110'
              }`}
            >
              🌸
            </span>
          </div>

          {/* Glowing ambient rings */}
          <div
            className="absolute -inset-2 rounded-full border border-[#eed4db]/80 animate-ping pointer-events-none"
            style={{ animationDuration: '3s' }}
          ></div>
          <div className="absolute -inset-4 rounded-full border border-[#f0cbd4]/40 pointer-events-none"></div>
        </button>

        {/* Couple Names */}
        <div className="flex items-center gap-2 text-[#422831] font-serif text-2xl sm:text-3xl font-bold tracking-wider mb-1">
          <span>Akhil</span>
          <Heart className="w-4 h-4 fill-[#b36e7f] text-[#b36e7f] inline shrink-0" />
          <span>Sneha</span>
        </div>

        {/* Tap Flower to Open Prompt Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleOpen();
          }}
          type="button"
          className="mt-3 inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/90 hover:bg-white text-[#914d60] border border-[#eed4db] text-xs font-marcellus tracking-wider shadow-xs transition-all active:scale-95 cursor-pointer hover:shadow-md"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#b36e7f]" />
          <span>Tap Flower to Open 🌸</span>
        </button>

        <p className="text-[11px] text-[#8e485a] mt-4 font-sans tracking-wide opacity-80">
          Monday, 28 December 2026 &bull; Edoor
        </p>

      </div>
    </div>
  );
};
