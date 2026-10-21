import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

interface RSVPSectionProps {
  coupleNames: string;
}

export const RSVPSection: React.FC<RSVPSectionProps> = ({ coupleNames }) => {
  const [name, setName] = useState('');
  const [attending, setAttending] = useState<'yes' | 'no'>('yes');
  const [guests, setGuests] = useState(2);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    setIsSubmitted(true);
  };

  return (
    <div className="mx-4 sm:mx-6 my-5 p-5 sm:p-6 bg-[#fdfbf7] rounded-2xl border border-[#d4af37]/40 shadow-xs">
      <div className="text-center mb-3">
        <span className="font-marcellus text-[10px] uppercase tracking-widest text-[#8c6d23] font-bold block">
          Simple RSVP
        </span>
        <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1f2923] mt-0.5">
          Will you be joining {coupleNames}?
        </h3>
      </div>

      {isSubmitted ? (
        <div className="text-center py-5 bg-[#f5efe6] rounded-xl border border-[#d4af37]/30">
          <CheckCircle2 className="w-8 h-8 text-[#8c6d23] mx-auto mb-2" />
          <h4 className="font-serif text-lg font-bold text-[#1f2923]">Thank you, {name}!</h4>
          <p className="text-xs text-[#55695c] mt-1">
            {attending === 'yes'
              ? `We look forward to celebrating with you and your party of ${guests}!`
              : 'Thank you for letting us know. You will be in our thoughts and prayers!'}
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3.5 pt-2">
          <div>
            <label className="block text-xs font-semibold text-[#3b4d41] mb-1 font-sans">
              Your Full Name
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Anand & Family"
              className="w-full px-3.5 py-2.5 rounded-xl border border-[#d4af37]/40 bg-white text-xs text-[#1f2923] focus:outline-none focus:ring-2 focus:ring-[#8c6d23]/50 shadow-inner"
            />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => setAttending('yes')}
              className={`py-2 px-3 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                attending === 'yes'
                  ? 'bg-[#8c6d23] text-white border-[#8c6d23] shadow-xs'
                  : 'bg-white text-[#55695c] border-[#d4af37]/40 hover:bg-[#faf6ed]'
              }`}
            >
              Joyfully Attending
            </button>
            <button
              type="button"
              onClick={() => setAttending('no')}
              className={`py-2 px-3 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                attending === 'no'
                  ? 'bg-[#8c6d23] text-white border-[#8c6d23] shadow-xs'
                  : 'bg-white text-[#55695c] border-[#d4af37]/40 hover:bg-[#faf6ed]'
              }`}
            >
              With Regrets
            </button>
          </div>

          {attending === 'yes' && (
            <div>
              <label className="block text-xs font-semibold text-[#3b4d41] mb-1 font-sans">
                Number of Guests
              </label>
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => setGuests(num)}
                    className={`flex-1 py-1.5 rounded-lg border text-xs font-bold transition-all cursor-pointer ${
                      guests === num
                        ? 'bg-[#8c6d23] text-white border-[#8c6d23]'
                        : 'bg-white text-[#55695c] border-[#d4af37]/40 hover:bg-[#faf6ed]'
                    }`}
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>
          )}

          <button
            type="submit"
            className="w-full mt-2 py-2.5 rounded-xl bg-[#1f2923] hover:bg-[#2b3a32] text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-sm transition-all active:scale-95 cursor-pointer"
          >
            <Send className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Confirm RSVP</span>
          </button>
        </form>
      )}
    </div>
  );
};
