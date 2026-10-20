import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  MapPin, 
  Phone, 
  Navigation, 
  Eye, 
  CalendarCheck,
  Heart
} from 'lucide-react';
import { EngagementData } from '../data/defaultConfig';
import { getGoogleCalendarUrl } from '../utils/calendar';
import coupleImg from '../assets/couple.jpg';

interface ContinuousInvitationProps {
  data: EngagementData;
}

export const ContinuousInvitation: React.FC<ContinuousInvitationProps> = ({
  data,
}) => {
  // Countdown state
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isPast: false,
  });

  // Map preview toggle
  const [showMapEmbed, setShowMapEmbed] = useState(false);

  useEffect(() => {
    // 28 Dec 2026, 11:30 AM IST (+05:30)
    const eventDateTime = new Date(`${data.event.date}T11:30:00+05:30`).getTime();

    const calculateCountdown = () => {
      const now = new Date().getTime();
      const difference = eventDateTime - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isPast: false });
    };

    calculateCountdown();
    const interval = setInterval(calculateCountdown, 1000);
    return () => clearInterval(interval);
  }, [data.event.date]);

  return (
    <div className="relative min-h-screen py-8 sm:py-14 px-3 sm:px-6 flex flex-col items-center justify-start bg-gradient-to-b from-[#fbf5f6] via-[#f8eff1] to-[#f4e8eb] text-[#3d2730]">
      
      {/* Soft Ambient Blossom Aura */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-full max-w-3xl h-96 bg-gradient-to-b from-[#f7e2e6]/40 via-[#f4d6dc]/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -left-20 w-80 h-80 bg-[#f7dbe1]/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-[#f3d3da]/30 rounded-full blur-3xl"></div>

        {/* Delicate floating petals */}
        <span className="absolute top-16 left-10 text-xl opacity-50 animate-sakura-1 select-none">🌸</span>
        <span className="absolute top-1/3 right-10 text-2xl opacity-40 animate-sakura-2 select-none">🌸</span>
        <span className="absolute top-2/3 left-12 text-lg opacity-60 animate-sakura-1 select-none">🌸</span>
        <span className="absolute bottom-20 right-14 text-xl opacity-50 animate-sakura-2 select-none">🌸</span>
      </div>

      {/* LUXURY DUSTY ROSE & BLUSH CONTINUOUS INVITATION CARD */}
      <main className="w-full max-w-lg mx-auto bg-white/95 backdrop-blur-sm rounded-[2rem] shadow-xl shadow-[#614552]/8 border border-[#eed4db] overflow-hidden relative">
        
        {/* Subtle Rosette Corner Accents */}
        <div className="absolute top-3.5 left-3.5 text-[#d8a8b4] text-xs select-none pointer-events-none">
          ✦
        </div>
        <div className="absolute top-3.5 right-3.5 text-[#d8a8b4] text-xs select-none pointer-events-none">
          ✦
        </div>
        <div className="absolute bottom-3.5 left-3.5 text-[#d8a8b4] text-xs select-none pointer-events-none">
          ✦
        </div>
        <div className="absolute bottom-3.5 right-3.5 text-[#d8a8b4] text-xs select-none pointer-events-none">
          ✦
        </div>

        {/* INVITATION HEADER */}
        <div className="pt-10 pb-5 px-6 sm:px-10 text-center bg-gradient-to-b from-[#fdf7f8] via-[#fffafd] to-white relative">
          
          {/* Subtle Blossom Monogram */}
          <div className="inline-flex items-center justify-center mb-3">
            <div className="w-12 h-12 rounded-full bg-[#fcedf0] border border-[#f0cbd4] flex items-center justify-center text-[#a85c6f] shadow-xs animate-float">
              <span className="text-xl select-none">🌸</span>
            </div>
          </div>

          <p className="font-marcellus text-xs tracking-[0.28em] text-[#914d60] uppercase font-semibold">
            {data.event.title}
          </p>

          <p className="font-script text-2xl sm:text-3xl text-[#a85c6f] mt-1">
            {data.event.subtitle}
          </p>

          {/* Gentle Divider */}
          <div className="flex items-center justify-center gap-2.5 my-3">
            <span className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#e6bdc8]"></span>
            <span className="text-[#c98e9d] text-xs">🌸</span>
            <span className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#e6bdc8]"></span>
          </div>

          <p className="text-xs sm:text-sm text-[#614552] leading-relaxed max-w-sm mx-auto">
            {data.event.message}
          </p>
        </div>

        {/* COUPLE WATERCOLOR PORTRAIT (MEDIUM SIZE) */}
        <div className="px-6 py-2 flex justify-center">
          <div className="relative w-full max-w-[280px] sm:max-w-[310px] aspect-[4/3.8] rounded-2xl overflow-hidden shadow-md border-2 border-[#eed4db] bg-[#fff6f8]">
            <img
              src={coupleImg}
              onError={(e) => {
                const target = e.currentTarget;
                if (!target.src.includes('poppycouple2.jpg')) {
                  target.src = '/poppycouple2.jpg';
                }
              }}
              alt="Akhil and Sneha"
              className="w-full h-full object-cover object-top filter saturate-[1.03] contrast-[1.02]"
              loading="eager"
            />
            {/* Soft inner vignette border */}
            <div className="absolute inset-0 ring-1 ring-inset ring-[#c98e9d]/20 pointer-events-none rounded-2xl"></div>
          </div>
        </div>

        {/* COUPLE NAMES (Title Case) */}
        <div className="px-6 sm:px-10 pt-5 pb-6 text-center">
          
          {/* Monogram Badge A & S */}
          <div className="inline-flex items-center justify-center gap-2 mb-3.5 px-3 py-1 bg-[#fbf0f3] rounded-full border border-[#f0d0d8] text-[#8e485a] shadow-xs">
            <span className="font-serif font-bold text-sm tracking-wider">A</span>
            <Heart className="w-3.5 h-3.5 fill-[#b36e7f] text-[#b36e7f]" />
            <span className="font-serif font-bold text-sm tracking-wider">S</span>
          </div>

          {/* GROOM */}
          <div className="mb-2">
            <h1 className="font-serif-cormorant text-3xl sm:text-4xl font-bold text-[#2d1b24] tracking-tight">
              Akhil Mathew
            </h1>
            <p className="text-xs sm:text-sm text-[#6b4e58] font-medium mt-0.5">
              Son of <strong className="text-[#2d1b24]">{data.groom.parents}</strong>
            </p>
          </div>

          {/* Elegant Script Ampersand */}
          <div className="my-1 flex items-center justify-center">
            <span className="font-script text-3xl sm:text-4xl text-[#b36e7f]">&amp;</span>
          </div>

          {/* BRIDE */}
          <div className="mt-1">
            <h2 className="font-serif-cormorant text-3xl sm:text-4xl font-bold text-[#2d1b24] tracking-tight">
              Sneha Sabu
            </h2>
            <p className="text-xs sm:text-sm text-[#6b4e58] font-medium mt-0.5">
              Daughter of <strong className="text-[#2d1b24]">{data.bride.parents}</strong>
            </p>
          </div>
        </div>

        {/* ROMANTIC QUOTE BANNER */}
        <div className="mx-4 sm:mx-6 my-2 p-3.5 sm:p-4 bg-[#fbf2f4] rounded-2xl border border-[#eed4db] text-center">
          <p className="font-serif-cormorant text-base sm:text-lg text-[#7d3b4d] italic leading-relaxed">
            {data.event.quote}
          </p>
        </div>

        {/* DATE, TIME & LIVE COUNTDOWN (PERFECT PADDING & RESPONSIVE LAYOUT) */}
        <div className="mx-4 sm:mx-6 my-4 p-5 sm:p-6 bg-gradient-to-b from-[#fdf7f9] to-[#fbf1f4] rounded-2xl border border-[#eed4db] text-center shadow-xs">
          <div className="flex items-center justify-center gap-1.5 text-xs font-semibold text-[#8e485a] uppercase tracking-wider mb-1.5 font-marcellus">
            <Calendar className="w-3.5 h-3.5 text-[#a85c6f]" />
            <span>Date &amp; Time</span>
          </div>

          <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2d1b24] mt-1 tracking-tight leading-snug">
            {data.event.fullDate}
          </h3>
          <p className="text-sm font-semibold text-[#8e485a] mt-1">
            {data.event.time} Onwards
          </p>

          {/* Countdown Clock with responsive grid and comfortable padding */}
          <div className="mt-4 pt-4 border-t border-[#eed4db]">
            {timeLeft.isPast ? (
              <p className="font-serif text-base text-[#8e485a] italic py-2">
                Today is our joyful engagement day! 🌸
              </p>
            ) : (
              <div className="grid grid-cols-4 gap-2 sm:gap-3 max-w-sm mx-auto">
                <div className="bg-white py-2.5 px-1 sm:px-2 rounded-xl border border-[#edd5dc] shadow-xs flex flex-col items-center justify-center">
                  <span className="font-serif text-xl sm:text-2xl font-bold text-[#2d1b24] leading-tight">
                    {timeLeft.days}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-[#8e485a] font-medium mt-0.5">
                    Days
                  </span>
                </div>

                <div className="bg-white py-2.5 px-1 sm:px-2 rounded-xl border border-[#edd5dc] shadow-xs flex flex-col items-center justify-center">
                  <span className="font-serif text-xl sm:text-2xl font-bold text-[#2d1b24] leading-tight">
                    {String(timeLeft.hours).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-[#8e485a] font-medium mt-0.5">
                    Hours
                  </span>
                </div>

                <div className="bg-white py-2.5 px-1 sm:px-2 rounded-xl border border-[#edd5dc] shadow-xs flex flex-col items-center justify-center">
                  <span className="font-serif text-xl sm:text-2xl font-bold text-[#2d1b24] leading-tight">
                    {String(timeLeft.minutes).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-[#8e485a] font-medium mt-0.5">
                    Mins
                  </span>
                </div>

                <div className="bg-white py-2.5 px-1 sm:px-2 rounded-xl border border-[#edd5dc] shadow-xs flex flex-col items-center justify-center">
                  <span className="font-serif text-xl sm:text-2xl font-bold text-[#a0596b] leading-tight">
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-[#8e485a] font-medium mt-0.5">
                    Secs
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Add to Google Calendar Button */}
          <div className="flex justify-center mt-5 pt-1">
            <a
              href={getGoogleCalendarUrl(data)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-[#fcf0f3] border border-[#e8c7d0] text-[#7d3b4d] text-xs font-semibold rounded-xl transition-all cursor-pointer shadow-xs active:scale-95"
            >
              <CalendarCheck className="w-4 h-4 text-[#a85c6f]" />
              <span>Add to Google Calendar</span>
            </a>
          </div>
        </div>

        {/* VENUE DETAILS: MENSA CHRISTI (BALANCED PADDING) */}
        <div className="mx-4 sm:mx-6 my-4 p-5 sm:p-6 bg-white rounded-2xl border border-[#eed4db] shadow-xs">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#fcedf0] border border-[#f0cbd4] flex items-center justify-center text-[#a85c6f] shrink-0">
              <MapPin className="w-5 h-5" />
            </div>

            <div className="flex-1">
              <span className="font-marcellus text-[10px] uppercase tracking-widest text-[#914d60] font-bold block">
                Ceremony &amp; Celebration Venue
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#2d1b24] mt-0.5">
                {data.venue.name}
              </h3>
              <p className="text-xs text-[#5a424e] mt-1 leading-relaxed">
                {data.venue.address}
              </p>
              <p className="text-[11px] text-[#785a67] mt-0.5 italic">
                Landmark: {data.venue.landmark}
              </p>

              {/* Action Buttons: Soft Dusty Rose Styling */}
              <div className="flex flex-wrap items-center gap-2.5 mt-4 pt-3 border-t border-[#f5e3e7]">
                <a
                  href={data.venue.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-[#b36e7f] hover:bg-[#a0596b] text-white text-xs font-medium rounded-xl shadow-xs transition-all cursor-pointer active:scale-95"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Open in Google Maps</span>
                </a>

                <button
                  onClick={() => setShowMapEmbed(!showMapEmbed)}
                  type="button"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2.5 bg-[#fbf0f3] hover:bg-[#f6e1e6] text-[#7d3b4d] text-xs font-medium rounded-xl transition-colors cursor-pointer border border-[#eed4db]"
                >
                  <Eye className="w-3.5 h-3.5 text-[#a85c6f]" />
                  <span>{showMapEmbed ? 'Hide Map' : 'View Map Preview'}</span>
                </button>
              </div>

              {/* Embedded Map */}
              {showMapEmbed && (
                <div className="mt-3.5 rounded-xl overflow-hidden border border-[#eed4db] aspect-[16/9] w-full shadow-inner">
                  <iframe
                    title="Mensa Christi Venue Map"
                    src={data.venue.embedMapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* CONTACT INFO: 2 CONTACTS WITH CALL BUTTONS ONLY */}
        <div className="mx-4 sm:mx-6 my-4 p-5 sm:p-6 bg-white rounded-2xl border border-[#eed4db] shadow-xs">
          <div className="text-center mb-3">
            <span className="font-marcellus text-[10px] uppercase tracking-widest text-[#914d60] font-bold block">
              Contact &bull; Edoor
            </span>
            <h3 className="font-serif text-lg font-bold text-[#2d1b24]">
              For Directions &amp; Assistance
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            {data.contacts.map((contact, i) => (
              <div
                key={i}
                className="p-3.5 bg-[#fdf7f8] border border-[#eed4db] rounded-xl text-xs flex flex-col justify-between"
              >
                <div>
                  <span className="block font-bold text-[#2d1b24] text-sm">{contact.name}</span>
                  <span className="block text-[11px] text-[#8e485a] font-medium">{contact.label}</span>
                  <span className="block text-xs font-semibold text-[#664b56] mt-1">{contact.phone}</span>
                </div>

                <div className="mt-3 pt-2 border-t border-[#f5e3e7]">
                  {/* Call Button: Soft Dusty Rose */}
                  <a
                    href={`tel:${contact.phone.replace(/\s+/g, '')}`}
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2 bg-[#b36e7f] hover:bg-[#a0596b] text-white font-medium rounded-lg transition-colors cursor-pointer text-xs active:scale-95 shadow-xs"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CARD FOOTER */}
        <div className="pt-6 pb-8 text-center bg-gradient-to-b from-[#fdf7f8] to-[#fbf1f4] border-t border-[#eed4db] text-xs">
          <p className="font-script text-2xl sm:text-3xl text-[#a85c6f] mb-1">
            With Love &amp; Happiness
          </p>
          <p className="font-serif text-base font-bold text-[#2d1b24]">
            Akhil Mathew &amp; Sneha Sabu
          </p>
        </div>

      </main>
    </div>
  );
};
