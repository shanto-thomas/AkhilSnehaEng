import React, { useState } from 'react';

interface BlossomLoaderProps {
  onOpen: () => void;
}

export const BlossomLoader: React.FC<BlossomLoaderProps> = ({ onOpen }) => {
  const [isOpenAnimation, setIsOpenAnimation] = useState(false);
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = () => {
    if (isOpenAnimation) return;
    setIsOpenAnimation(true);
    // Card glides up, wax seal bursts with shimmer, then transition to main invitation
    setTimeout(() => {
      setIsOpening(true);
      setTimeout(onOpen, 650);
    }, 450);
  };

  return (
    <div
      onClick={handleOpen}
      className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-[#fbf4f6] via-[#f7ebee] to-[#f2e1e7] cursor-pointer transition-opacity duration-700 select-none p-3 sm:p-6 overflow-hidden ${
        isOpening ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Romantic Ambient Atmosphere with Soft Floating Petals */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/6 left-1/3 w-80 h-80 bg-[#f9dde3]/60 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#f4cfd7]/50 rounded-full blur-3xl"></div>

        {/* Scattered soft sakura petals around envelope */}
        <span className="absolute top-10 left-8 sm:left-16 text-2xl select-none filter drop-shadow-xs animate-sakura-1">
          🌸
        </span>
        <span className="absolute top-1/4 right-8 sm:right-16 text-xl select-none filter drop-shadow-xs animate-sakura-2">
          🌸
        </span>
        <span className="absolute bottom-16 left-10 sm:left-20 text-xl select-none filter drop-shadow-xs animate-sakura-1">
          🌸
        </span>
        <span className="absolute bottom-24 right-10 sm:right-20 text-2xl select-none filter drop-shadow-xs animate-sakura-2">
          🌸
        </span>
      </div>

      {/* MAIN ENVELOPE & INVITATION CARD COMPONENT (Matching Reference Photo) */}
      <div className="relative z-10 flex flex-col items-center max-w-sm sm:max-w-md w-full">
        
        {/* Envelope Container */}
        <div className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-[1/1.24] flex items-end justify-center">
          
          {/* Back Flap / Open Interior of Envelope */}
          <div 
            className="absolute inset-x-2 top-0 bottom-2 bg-gradient-to-b from-[#fceef1] to-[#f4dbe2] rounded-t-3xl border border-[#eed4db]/80 shadow-md"
            style={{
              clipPath: 'polygon(0 32%, 50% 0, 100% 32%, 100% 100%, 0 100%)',
            }}
          ></div>

          {/* INNER WHITE INVITATION CARD (SLIDING OUT OF ENVELOPE) */}
          <div 
            className={`absolute inset-x-5 top-2 sm:top-3 bg-white rounded-t-2xl shadow-xl shadow-[#7a4855]/15 border border-[#eed4db] overflow-hidden flex flex-col items-center transition-all duration-700 ease-out z-10 ${
              isOpenAnimation 
                ? '-translate-y-16 sm:-translate-y-20 scale-[1.03] shadow-2xl' 
                : 'hover:-translate-y-2'
            }`}
            style={{ height: '86%' }}
          >
            {/* Top Watercolor Floral Arrangement (Pure floral bouquet, NO other couple names) */}
            <div className="relative w-full h-28 sm:h-34 overflow-hidden bg-white shrink-0 pt-2 px-3 flex items-center justify-center">
              <img
                src="/assets/aistudio/blossom_card_flowers.png"
                alt="Cherry Blossom & Roses Watercolor"
                className="w-full h-full object-contain pointer-events-none select-none"
              />
              {/* Soft bottom blend fade into white card */}
              <div className="absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none"></div>
            </div>

            {/* ONLY ONE COUPLE NAME: AKHIL ♡ SNEHA (Positioned clearly above the envelope V-flap) */}
            <div className="px-4 pt-1 pb-3 text-center w-full flex flex-col items-center justify-start flex-1">
              
              {/* Couple Names in Cursive Script with Heart ♡ */}
              <div className="flex items-center justify-center gap-2 text-[#2d1b24] font-script text-3xl sm:text-4xl tracking-wide my-1">
                <span>Akhil</span>
                <span className="text-xl sm:text-2xl text-[#b36e7f] font-serif">♡</span>
                <span>Sneha</span>
              </div>

              {/* Ceremony Subtitle */}
              <p className="font-marcellus text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#914d60] font-semibold mt-0.5">
                The Beginning of Forever
              </p>
            </div>
          </div>

          {/* FRONT ENVELOPE POCKET & V-SHAPED FLAPS */}
          <div className="relative w-full h-[58%] z-20 pointer-events-none">
            
            {/* Pink Envelope Front Body */}
            <div 
              className="absolute inset-0 bg-gradient-to-b from-[#f9edf0] to-[#f4dce3] rounded-b-2xl border-x border-b border-[#eed4db] shadow-xl shadow-[#7a4855]/20"
              style={{
                clipPath: 'polygon(0 0, 50% 48%, 100% 0, 100% 100%, 0 100%)',
              }}
            >
              {/* Fine diagonal fold hairline shadow */}
              <div 
                className="absolute inset-0 opacity-25"
                style={{
                  background: 'linear-gradient(135deg, rgba(0,0,0,0.06) 0%, transparent 50%), linear-gradient(225deg, rgba(0,0,0,0.06) 0%, transparent 50%)',
                }}
              ></div>
            </div>

            {/* Bottom triangular fold lines meeting in center */}
            <div 
              className="absolute inset-x-0 bottom-0 h-full border-t border-[#f0cbd4]/60 pointer-events-none opacity-40"
              style={{
                clipPath: 'polygon(0 100%, 50% 50%, 100% 100%)',
                background: 'linear-gradient(to top, rgba(255,255,255,0.4), transparent)',
              }}
            ></div>
          </div>

          {/* AUTHENTIC GOLDEN WAX SEAL STAMP (INTERACTIVE OPENING OPTION) */}
          <div className="absolute top-[58%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-auto">
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleOpen();
              }}
              type="button"
              aria-label="Open invitation"
              className={`group relative w-15 h-15 sm:w-17 sm:h-17 rounded-full bg-gradient-to-br from-[#e0aa4c] via-[#c6892e] to-[#7d4809] p-[3px] shadow-2xl shadow-[#613605]/50 border-2 border-[#fff0c7] flex items-center justify-center cursor-pointer transition-all duration-300 ${
                isOpenAnimation ? 'scale-125 rotate-12 opacity-80' : 'hover:scale-110 active:scale-95'
              }`}
            >
              {/* Realistic Wax Seal Inner Impression */}
              <div className="w-full h-full rounded-full bg-gradient-to-b from-[#c88f32] to-[#8c520f] flex flex-col items-center justify-center text-center shadow-inner relative overflow-hidden border border-[#ffe499]/60">
                
                {/* Light reflection gloss */}
                <div className="absolute top-0 left-0 w-full h-1/2 bg-white/30 rounded-t-full pointer-events-none"></div>

                {/* Laurel Wreath & Heart Impression (Matching Reference Photo) */}
                <svg
                  className="w-9 h-9 sm:w-10 sm:h-10 text-[#4f2a03] filter drop-shadow-[0_1px_1px_rgba(255,255,255,0.3)]"
                  viewBox="0 0 100 100"
                  fill="none"
                >
                  {/* Embossed Laurel Wreath Ring */}
                  <circle cx="50" cy="50" r="33" stroke="currentColor" strokeWidth="2.5" strokeDasharray="3 3" opacity="0.65" />
                  
                  {/* Left Wreath Branch */}
                  <path d="M 50,83 C 32,80 19,66 19,50 C 19,34 32,20 50,17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="28" cy="30" r="2.5" fill="currentColor" opacity="0.7" />
                  <circle cx="21" cy="45" r="2.5" fill="currentColor" opacity="0.7" />
                  <circle cx="24" cy="62" r="2.5" fill="currentColor" opacity="0.7" />
                  <circle cx="34" cy="74" r="2.5" fill="currentColor" opacity="0.7" />

                  {/* Right Wreath Branch */}
                  <path d="M 50,83 C 68,80 81,66 81,50 C 81,34 68,20 50,17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="72" cy="30" r="2.5" fill="currentColor" opacity="0.7" />
                  <circle cx="79" cy="45" r="2.5" fill="currentColor" opacity="0.7" />
                  <circle cx="76" cy="62" r="2.5" fill="currentColor" opacity="0.7" />
                  <circle cx="66" cy="74" r="2.5" fill="currentColor" opacity="0.7" />

                  {/* Embossed Center Heart */}
                  <path
                    d="M 50,60 C 50,60 38,51 36,43 C 34,36 40,32 44.5,34 C 48,35.5 50,39.5 50,39.5 C 50,39.5 52,35.5 55.5,34 C 60,32 66,36 64,43 C 62,51 50,60 50,60 Z"
                    fill="currentColor"
                    opacity="0.85"
                  />
                </svg>
              </div>

              {/* Gentle Golden Pulse Ping */}
              <div 
                className="absolute -inset-2 rounded-full border border-[#f5c76c]/70 animate-ping pointer-events-none" 
                style={{ animationDuration: '2.8s' }}
              ></div>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
