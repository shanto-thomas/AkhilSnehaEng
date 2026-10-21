import React, { useState } from 'react';
import { Heart, Sparkles } from 'lucide-react';

interface WaxSealLoaderProps {
  onOpen: () => void;
}

export const WaxSealLoader: React.FC<WaxSealLoaderProps> = ({ onOpen }) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpenInvitation = () => {
    setIsOpening(true);
    setTimeout(() => {
      onOpen();
    }, 700);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#15231c] transition-opacity duration-700 ${
        isOpening ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Decorative Vintage Damask & Golden Starlight */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <div className="relative text-center flex flex-col items-center max-w-sm px-6">
        {/* Envelope Flap Accent */}
        <div className="w-64 h-1 bg-gradient-to-r from-transparent via-[#d4af37]/60 to-transparent mb-8"></div>

        {/* Monogram Crest */}
        <div className="mb-4">
          <span className="font-marcellus text-xs uppercase tracking-[0.35em] text-[#e0cfad]">
            You Are Cordially Invited
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#f5ebd7] font-bold mt-1 tracking-wider">
            Akhil &amp; Sneha
          </h2>
          <p className="font-serif text-xs text-[#d4af37] italic mt-0.5">
            Solemn Christian Betrothal
          </p>
        </div>

        {/* Golden Wax Seal Stamp Button */}
        <button
          onClick={handleOpenInvitation}
          type="button"
          aria-label="Break Wax Seal & Open Invitation"
          className="group relative my-6 cursor-pointer focus:outline-none transition-transform duration-300 hover:scale-105 active:scale-95"
        >
          {/* Wax Seal Outer Ring */}
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#c8922e] via-[#d4af37] to-[#8c6218] p-[3px] shadow-2xl shadow-[#d4af37]/30 flex items-center justify-center border border-[#ffecb3]">
            {/* Wax Body */}
            <div className="w-full h-full rounded-full bg-gradient-to-b from-[#8f2323] via-[#751616] to-[#540c0c] flex flex-col items-center justify-center text-center shadow-inner relative overflow-hidden">
              {/* Subtle light reflection */}
              <div className="absolute top-0 left-0 w-full h-1/2 bg-white/10 rounded-t-full pointer-events-none"></div>
              
              <span className="font-serif text-xl sm:text-2xl font-bold text-[#ffecb3] tracking-widest">
                A &amp; S
              </span>
              <Heart className="w-3.5 h-3.5 fill-[#d4af37] text-[#d4af37] mt-0.5" />
            </div>
          </div>

          {/* Golden Pulse Ring */}
          <div className="absolute -inset-2 rounded-full border border-[#d4af37]/40 animate-ping pointer-events-none" style={{ animationDuration: '3s' }}></div>
        </button>

        {/* Call to Action Prompt */}
        <button
          onClick={handleOpenInvitation}
          type="button"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1e3328] hover:bg-[#284436] text-[#e5d4b8] border border-[#d4af37]/40 text-xs font-marcellus tracking-widest uppercase transition-all shadow-md active:scale-95 cursor-pointer"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
          <span>Tap to Break Seal &amp; Open</span>
        </button>

        <p className="text-[11px] text-[#9ca3af] mt-4 font-sans">
          Monday, 28 December 2026 &bull; Edoor
        </p>
      </div>
    </div>
  );
};
