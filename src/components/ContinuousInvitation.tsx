import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  MapPin, 
  Phone, 
  Navigation, 
  Eye, 
  CalendarCheck,
  Heart,
  Sparkles
} from 'lucide-react';
import { EngagementData } from '../data/defaultConfig';
import { getGoogleCalendarUrl } from '../utils/calendar';

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

          <p className="font-marcellus text-xs tracking-[0.25em] text-[#914d60] uppercase font-semibold">
            {data.event.title}
          </p>

          <p className="font-script text-3xl sm:text-4xl text-[#a85c6f] mt-1">
            {data.event.subtitle}
          </p>

          {/* Decorative Divider */}
          <div className="flex items-center justify-center gap-2.5 my-3">
            <span className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#e6bdc8]"></span>
            <span className="text-[#c98e9d] text-xs">🌸</span>
            <span className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#e6bdc8]"></span>
          </div>

          {/* Sacred Scripture */}
          <div className="my-3 px-3.5 py-2.5 bg-[#fcf2f4] rounded-xl border border-[#f0cbd4]/60 max-w-sm mx-auto">
            <p className="font-serif text-xs sm:text-sm text-[#5a3845] italic leading-relaxed">
              {data.event.scripture}
            </p>
            <p className="text-[10px] text-[#914d60] font-marcellus tracking-wider mt-0.5 font-bold uppercase">
              {data.event.scriptureRef}
            </p>
          </div>

          <p className="text-xs sm:text-sm text-[#614552] leading-relaxed max-w-sm mx-auto mt-2">
            {data.event.message}
          </p>
        </div>

        {/* COUPLE WATERCOLOR PORTRAIT (CLEAN WITHOUT CAPTION OVERLAY) */}
        <div className="px-6 py-2 flex justify-center">
          <div className="relative w-full max-w-[280px] sm:max-w-[310px] aspect-[4/3.8] rounded-2xl overflow-hidden shadow-md border-2 border-[#eed4db] bg-[#fff6f8]">
            <img
              src="/assets/aistudio/poppycouple2_9c5c3d87.jpg"
              alt="Akhil and Sneha"
              className="w-full h-full object-cover object-top filter saturate-[1.03] contrast-[1.02]"
              onError={(e) => {
                const target = e.currentTarget;
                if (!target.src.includes('poppycouple2.jpg')) {
                  target.src = '/poppycouple2.jpg';
                }
              }}
            />
            {/* Soft inner vignette border */}
            <div className="absolute inset-0 ring-1 ring-inset ring-[#c98e9d]/20 pointer-events-none rounded-2xl"></div>
          </div>
        </div>

        {/* COUPLE NAMES (Title Case) */}
        <div className="px-6 sm:px-10 pt-5 pb-6 text-center">
          
          {/* Subtle Blossom Accent Badge */}
          <div className="inline-flex items-center justify-center gap-2 mb-3.5 px-3 py-1 bg-[#fcedf0] rounded-full border border-[#f0cbd4] text-[#a85c6f] shadow-xs">
            <span className="font-serif font-bold text-sm tracking-wider">A</span>
            <Heart className="w-3.5 h-3.5 fill-[#a85c6f] text-[#a85c6f]" />
            <span className="font-serif font-bold text-sm tracking-wider">S</span>
          </div>

          {/* GROOM */}
          <div className="mb-2">
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#2d1b24] tracking-tight">
              {data.groom.fullName}
            </h1>
            <p className="text-xs sm:text-sm text-[#614552] font-medium mt-0.5">
              Son of <strong className="text-[#2d1b24]">{data.groom.parents}</strong>
            </p>
            <p className="text-[11px] text-[#914d60] font-marcellus tracking-wider mt-0.5">
              📍 {data.groom.location}
            </p>
          </div>

          {/* Elegant Script Ampersand */}
          <div className="my-1.5 flex items-center justify-center">
            <span className="font-script text-3xl sm:text-4xl text-[#b36e7f]">&amp;</span>
          </div>

          {/* BRIDE */}
          <div className="mt-1">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2d1b24] tracking-tight">
              {data.bride.fullName}
            </h2>
            <p className="text-xs sm:text-sm text-[#614552] font-medium mt-0.5">
              Daughter of <strong className="text-[#2d1b24]">{data.bride.parents}</strong>
            </p>
            <p className="text-[11px] text-[#914d60] font-marcellus tracking-wider mt-0.5">
              📍 {data.bride.location}
            </p>
          </div>
        </div>

        {/* SECTION 1: CEREMONY DATE, TIME & LIVE COUNTDOWN (WITH CUTE PRETTY ANIMATIONS) */}
        <div className="relative mx-4 sm:mx-6 my-4 p-5 sm:p-6 bg-gradient-to-b from-[#fdf7f8] to-[#fbf0f2] rounded-2xl border border-[#eed4db] text-center shadow-xs overflow-hidden transition-all duration-300 hover:shadow-md">
          
          {/* Subtle Corner Floating Flower Accent */}
          <span className="absolute -top-1 -right-1 text-sm select-none opacity-60 animate-gentle-sway pointer-events-none">
            🌸
          </span>

          <div className="flex items-center justify-center gap-1.5 text-xs font-semibold text-[#914d60] uppercase tracking-wider mb-1.5 font-marcellus">
            <Calendar className="w-3.5 h-3.5 text-[#b36e7f] animate-gentle-sway" />
            <span>Ceremony Date &amp; Time</span>
          </div>

          <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2d1b24] mt-1 tracking-tight leading-snug">
            {data.event.fullDate}
          </h3>
          <p className="text-sm font-semibold text-[#8e485a] mt-1">
            {data.event.time} Onwards
          </p>

          {/* Countdown Clock (Cute Floating Interactive Digit Cards) */}
          <div className="mt-4 pt-4 border-t border-[#f0cbd4]/70">
            {timeLeft.isPast ? (
              <p className="font-serif text-base text-[#914d60] italic py-2">
                Today is our joyful engagement day! 🌸
              </p>
            ) : (
              <div className="grid grid-cols-4 gap-2 sm:gap-3 max-w-sm mx-auto">
                
                {/* Days */}
                <div className="group bg-white py-2.5 px-1 sm:px-2 rounded-xl border border-[#eed4db] shadow-xs flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-[#dca8b5] cursor-default">
                  <span className="font-serif text-xl sm:text-2xl font-bold text-[#2d1b24] leading-tight group-hover:text-[#a85c6f] transition-colors">
                    {timeLeft.days}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-[#914d60] font-medium mt-0.5">
                    Days
                  </span>
                </div>

                {/* Hours */}
                <div className="group bg-white py-2.5 px-1 sm:px-2 rounded-xl border border-[#eed4db] shadow-xs flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-[#dca8b5] cursor-default">
                  <span className="font-serif text-xl sm:text-2xl font-bold text-[#2d1b24] leading-tight group-hover:text-[#a85c6f] transition-colors">
                    {String(timeLeft.hours).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-[#914d60] font-medium mt-0.5">
                    Hours
                  </span>
                </div>

                {/* Mins */}
                <div className="group bg-white py-2.5 px-1 sm:px-2 rounded-xl border border-[#eed4db] shadow-xs flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-[#dca8b5] cursor-default">
                  <span className="font-serif text-xl sm:text-2xl font-bold text-[#2d1b24] leading-tight group-hover:text-[#a85c6f] transition-colors">
                    {String(timeLeft.minutes).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-[#914d60] font-medium mt-0.5">
                    Mins
                  </span>
                </div>

                {/* Secs (With Cute Soft Pulse Ring) */}
                <div className="group relative bg-white py-2.5 px-1 sm:px-2 rounded-xl border border-[#eed4db] shadow-xs flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-[#dca8b5] cursor-default overflow-hidden">
                  <span className="font-serif text-xl sm:text-2xl font-bold text-[#b36e7f] leading-tight transition-transform duration-200 group-hover:scale-105">
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-[#914d60] font-medium mt-0.5 flex items-center justify-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#b36e7f] animate-pulse"></span>
                    Secs
                  </span>
                </div>

              </div>
            )}
          </div>

          {/* Add to Google Calendar Button (Cute Shimmer & Gentle Lift) */}
          <div className="flex justify-center mt-5 pt-1">
            <a
              href={getGoogleCalendarUrl(data)}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-[#fcf0f3] border border-[#e8c7d0] text-[#7d3b4d] text-xs font-semibold rounded-xl transition-all duration-300 cursor-pointer shadow-xs hover:shadow-md hover:-translate-y-0.5 active:scale-95"
            >
              <CalendarCheck className="w-4 h-4 text-[#a85c6f] transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
              <span>Add to Google Calendar</span>
              <Sparkles className="w-3 h-3 text-[#d8a8b4] opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </div>

        {/* SECTION 2: VENUE: MENSA CHRISTI, EDOOR (WITH CUTE PIN BOBBING & INTERACTION) */}
        <div className="relative mx-4 sm:mx-6 my-4 p-5 sm:p-6 bg-white rounded-2xl border border-[#eed4db] shadow-xs transition-all duration-300 hover:shadow-md overflow-hidden">
          
          {/* Subtle Corner Blossom Accent */}
          <span className="absolute -top-1 -right-1 text-sm select-none opacity-50 animate-float pointer-events-none">
            🌸
          </span>

          <div className="flex items-start gap-3.5">
            
            {/* Cute Bobbing Pin Badge */}
            <div className="relative w-10 h-10 rounded-xl bg-[#fcedf0] border border-[#f0cbd4] flex items-center justify-center text-[#a85c6f] shrink-0 animate-pin-bob shadow-2xs">
              <MapPin className="w-5 h-5 text-[#a85c6f]" />
              {/* Soft ambient pulse ring */}
              <div className="absolute -inset-1 rounded-xl border border-[#f0cbd4]/60 animate-ping pointer-events-none" style={{ animationDuration: '3s' }}></div>
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

              {/* Action Buttons: Cute Interactive Micro-motions */}
              <div className="flex flex-wrap items-center gap-2.5 mt-4 pt-3 border-t border-[#f5e3e7]">
                
                {/* Open in Google Maps */}
                <a
                  href={data.venue.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 px-4 py-2 bg-[#b36e7f] hover:bg-[#a0596b] text-white text-xs font-medium rounded-xl shadow-xs transition-all duration-300 cursor-pointer hover:shadow-md hover:-translate-y-0.5 active:scale-95"
                >
                  <Navigation className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  <span>Open in Google Maps</span>
                </a>

                {/* View Map Preview Toggle */}
                <button
                  onClick={() => setShowMapEmbed(!showMapEmbed)}
                  type="button"
                  className="group inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#fbf0f3] hover:bg-[#f6e1e6] text-[#7d3b4d] text-xs font-medium rounded-xl transition-all duration-300 cursor-pointer border border-[#eed4db] active:scale-95"
                >
                  <Eye className="w-3.5 h-3.5 text-[#a85c6f] transition-transform duration-300 group-hover:scale-115" />
                  <span>{showMapEmbed ? 'Hide Map' : 'View Map Preview'}</span>
                </button>

              </div>

              {/* Embedded Map */}
              {showMapEmbed && (
                <div className="mt-3.5 rounded-xl overflow-hidden border border-[#eed4db] aspect-[16/9] w-full shadow-inner animate-in fade-in duration-300">
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

        {/* SECTION 3: CONTACT INFO (2 CONTACTS WITH CUTE LIFT & PHONE WIGGLE) */}
        <div className="relative mx-4 sm:mx-6 my-4 p-5 sm:p-6 bg-white rounded-2xl border border-[#eed4db] shadow-xs transition-all duration-300 hover:shadow-md overflow-hidden">
          
          {/* Subtle Corner Blossom Accent */}
          <span className="absolute -top-1 -right-1 text-sm select-none opacity-50 animate-gentle-sway pointer-events-none">
            🌸
          </span>

          <div className="text-center mb-3">
            <span className="font-marcellus text-[10px] uppercase tracking-widest text-[#914d60] font-bold block">
              Contact &bull; Edoor
            </span>
            <h3 className="font-serif text-lg font-bold text-[#2d1b24]">
              For Directions &amp; Assistance
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
            {data.contacts.map((contact, i) => (
              <div
                key={i}
                className="group p-4 bg-[#fdf7f8] border border-[#eed4db] rounded-xl text-xs flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-[#dca8b5] hover:shadow-sm"
              >
                <div>
                  <span className="block font-bold text-[#2d1b24] text-sm group-hover:text-[#a85c6f] transition-colors">
                    {contact.name}
                  </span>
                  <span className="block text-[11px] text-[#8e485a] font-medium mt-0.5">
                    {contact.label}
                  </span>
                  <span className="block text-xs font-semibold text-[#664b56] mt-1">
                    {contact.phone}
                  </span>
                </div>

                <div className="mt-3.5 pt-2.5 border-t border-[#f5e3e7]">
                  <a
                    href={`tel:${contact.phone.replace(/\s+/g, '')}`}
                    className="hover-wiggle w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 bg-[#b36e7f] hover:bg-[#a0596b] text-white font-medium rounded-lg transition-all duration-300 cursor-pointer text-xs active:scale-95 shadow-xs hover:shadow-sm"
                  >
                    <Phone className="w-3.5 h-3.5 phone-icon transition-transform duration-300" />
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
            {data.groom.fullName} &amp; {data.bride.fullName}
          </p>
        </div>

      </main>
    </div>
  );
};
