import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  MapPin, 
  Phone, 
  MessageCircle, 
  Clock, 
  Navigation, 
  Eye, 
  CalendarCheck,
  Volume2,
  VolumeX,
  Heart
} from 'lucide-react';
import { EngagementData } from '../data/defaultConfig';
import { getGoogleCalendarUrl, downloadIcsFile } from '../utils/calendar';
import { romanticAudio } from '../utils/audioHymn';
import { RSVPSection } from './RSVPSection';

interface ContinuousInvitationProps {
  data: EngagementData;
}

export const ContinuousInvitation: React.FC<ContinuousInvitationProps> = ({
  data,
}) => {
  // Audio state
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

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

  const toggleAudio = () => {
    if (isPlayingAudio) {
      romanticAudio.stop();
      setIsPlayingAudio(false);
    } else {
      romanticAudio.play();
      setIsPlayingAudio(true);
    }
  };

  return (
    <div className="relative min-h-screen py-8 sm:py-12 px-3 sm:px-6 flex flex-col items-center justify-start bg-[#f7f4ee] text-[#1f2923]">
      
      {/* Soft Ambient Damask Background */}
      <div className="fixed inset-0 pointer-events-none opacity-25 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:28px_28px] -z-10"></div>

      {/* TOP FLOATING MUSIC BAR */}
      <div className="w-full max-w-lg mb-4 flex items-center justify-between px-2 text-xs">
        <button
          onClick={toggleAudio}
          type="button"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 hover:bg-white text-[#55695c] border border-[#d4af37]/40 shadow-xs transition-colors cursor-pointer"
        >
          {isPlayingAudio ? (
            <>
              <Volume2 className="w-3.5 h-3.5 text-[#8c6d23] animate-pulse" />
              <span>Playing Ceremony Melody</span>
            </>
          ) : (
            <>
              <VolumeX className="w-3.5 h-3.5 text-[#88988d]" />
              <span>Play Melody</span>
            </>
          )}
        </button>

        <span className="font-marcellus text-[10px] uppercase tracking-widest text-[#8c6d23]">
          Betrothal Invitation
        </span>
      </div>

      {/* CONTINUOUS LUXURY IVORY & GOLD STATIONERY CARD */}
      <main className="w-full max-w-lg mx-auto bg-[#fdfbf7] rounded-[2rem] shadow-xl shadow-[#15231c]/10 border border-[#d4af37]/40 overflow-hidden relative">
        
        {/* Subtle Gold Corner Accents */}
        <div className="absolute top-3.5 left-3.5 text-[#d4af37] text-xs select-none pointer-events-none">
          ✦
        </div>
        <div className="absolute top-3.5 right-3.5 text-[#d4af37] text-xs select-none pointer-events-none">
          ✦
        </div>
        <div className="absolute bottom-3.5 left-3.5 text-[#d4af37] text-xs select-none pointer-events-none">
          ✦
        </div>
        <div className="absolute bottom-3.5 right-3.5 text-[#d4af37] text-xs select-none pointer-events-none">
          ✦
        </div>

        {/* HEADER SECTION */}
        <div className="pt-10 pb-5 px-6 sm:px-10 text-center bg-gradient-to-b from-[#f9f5ed] to-[#fdfbf7] relative">
          
          {/* Holy Cross & Monogram */}
          <div className="inline-flex items-center justify-center mb-3">
            <div className="w-12 h-12 rounded-full bg-[#f4ece0] border border-[#d4af37]/50 flex items-center justify-center text-[#8c6d23] shadow-xs">
              <span className="font-serif text-lg font-bold">✟</span>
            </div>
          </div>

          <p className="font-marcellus text-xs tracking-[0.3em] text-[#8c6d23] uppercase font-semibold">
            {data.event.title}
          </p>

          <p className="font-script text-2xl sm:text-3xl text-[#55695c] mt-1">
            {data.event.subtitle}
          </p>

          {/* Decorative Divider */}
          <div className="flex items-center justify-center gap-2.5 my-3">
            <span className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#d4af37]"></span>
            <span className="text-[#8c6d23] text-xs">✦</span>
            <span className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#d4af37]"></span>
          </div>

          {/* Sacred Scripture */}
          <div className="my-3 px-3 py-2 bg-[#f6eee2] rounded-xl border border-[#d4af37]/30 max-w-sm mx-auto">
            <p className="font-serif text-xs sm:text-sm text-[#465b4e] italic leading-relaxed">
              {data.event.scripture}
            </p>
            <p className="text-[10px] text-[#8c6d23] font-marcellus tracking-wider mt-0.5 font-bold uppercase">
              {data.event.scriptureRef}
            </p>
          </div>

          <p className="text-xs sm:text-sm text-[#55695c] leading-relaxed max-w-sm mx-auto mt-3">
            {data.event.message}
          </p>
        </div>

        {/* COUPLE WATERCOLOR ARTWORK */}
        <div className="px-6 py-2 flex justify-center">
          <div className="relative w-full max-w-[280px] sm:max-w-[310px] aspect-[4/3.8] rounded-2xl overflow-hidden shadow-md border-2 border-[#d4af37]/50 bg-[#fbf8f2]">
            <img
              src="/assets/aistudio/poppycouple2_9c5c3d87.jpg"
              alt="Akhil and Sneha"
              className="w-full h-full object-cover object-top filter saturate-[1.03] contrast-[1.02]"
              onError={(e) => {
                e.currentTarget.src = '/public/assets/aistudio/poppycouple2_9c5c3d87.jpg';
              }}
            />
            {/* Elegant Caption Badge */}
            <div className="absolute bottom-2 left-2 right-2 py-1 px-2.5 rounded-lg bg-[#15231c]/80 backdrop-blur-xs text-white text-center text-[10px] font-marcellus tracking-wider">
              Akhil &amp; Sneha &bull; Betrothal
            </div>
          </div>
        </div>

        {/* COUPLE NAMES */}
        <div className="px-6 sm:px-10 pt-5 pb-6 text-center">
          
          {/* Monogram Badge A & S */}
          <div className="inline-flex items-center justify-center gap-2 mb-3.5 px-3 py-1 bg-[#f4ece0] rounded-full border border-[#d4af37]/50 text-[#8c6d23] shadow-xs">
            <span className="font-serif font-bold text-sm tracking-wider">A</span>
            <Heart className="w-3.5 h-3.5 fill-[#8c6d23] text-[#8c6d23]" />
            <span className="font-serif font-bold text-sm tracking-wider">S</span>
          </div>

          {/* GROOM */}
          <div className="mb-2">
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#1f2923] tracking-tight">
              {data.groom.fullName}
            </h1>
            <p className="text-xs sm:text-sm text-[#55695c] font-medium mt-0.5">
              Son of <strong className="text-[#1f2923]">{data.groom.parents}</strong>
            </p>
            <p className="text-[11px] text-[#8c6d23] font-marcellus tracking-wider mt-0.5">
              📍 {data.groom.location}
            </p>
          </div>

          {/* Elegant Script Ampersand */}
          <div className="my-1.5 flex items-center justify-center">
            <span className="font-script text-3xl sm:text-4xl text-[#8c6d23]">&amp;</span>
          </div>

          {/* BRIDE */}
          <div className="mt-1">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1f2923] tracking-tight">
              {data.bride.fullName}
            </h2>
            <p className="text-xs sm:text-sm text-[#55695c] font-medium mt-0.5">
              Daughter of <strong className="text-[#1f2923]">{data.bride.parents}</strong>
            </p>
            <p className="text-[11px] text-[#8c6d23] font-marcellus tracking-wider mt-0.5">
              📍 {data.bride.location}
            </p>
          </div>
        </div>

        {/* DATE, TIME & LIVE COUNTDOWN */}
        <div className="mx-4 sm:mx-6 my-4 p-5 sm:p-6 bg-gradient-to-b from-[#f9f5ed] to-[#f4ece0] rounded-2xl border border-[#d4af37]/40 text-center shadow-xs">
          <div className="flex items-center justify-center gap-1.5 text-xs font-semibold text-[#8c6d23] uppercase tracking-wider mb-1.5 font-marcellus">
            <Calendar className="w-3.5 h-3.5 text-[#8c6d23]" />
            <span>Date &amp; Time</span>
          </div>

          <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1f2923] mt-1 tracking-tight leading-snug">
            {data.event.fullDate}
          </h3>
          <p className="text-sm font-semibold text-[#8c6d23] mt-1">
            {data.event.time} Onwards
          </p>

          {/* Countdown Clock */}
          <div className="mt-4 pt-4 border-t border-[#d4af37]/30">
            {timeLeft.isPast ? (
              <p className="font-serif text-base text-[#8c6d23] italic py-2">
                Today is our joyful betrothal day! ✦
              </p>
            ) : (
              <div className="grid grid-cols-4 gap-2 sm:gap-3 max-w-sm mx-auto">
                <div className="bg-white py-2.5 px-1 sm:px-2 rounded-xl border border-[#d4af37]/40 shadow-xs flex flex-col items-center justify-center">
                  <span className="font-serif text-xl sm:text-2xl font-bold text-[#1f2923] leading-tight">
                    {timeLeft.days}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-[#8c6d23] font-medium mt-0.5">
                    Days
                  </span>
                </div>

                <div className="bg-white py-2.5 px-1 sm:px-2 rounded-xl border border-[#d4af37]/40 shadow-xs flex flex-col items-center justify-center">
                  <span className="font-serif text-xl sm:text-2xl font-bold text-[#1f2923] leading-tight">
                    {String(timeLeft.hours).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-[#8c6d23] font-medium mt-0.5">
                    Hours
                  </span>
                </div>

                <div className="bg-white py-2.5 px-1 sm:px-2 rounded-xl border border-[#d4af37]/40 shadow-xs flex flex-col items-center justify-center">
                  <span className="font-serif text-xl sm:text-2xl font-bold text-[#1f2923] leading-tight">
                    {String(timeLeft.minutes).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-[#8c6d23] font-medium mt-0.5">
                    Mins
                  </span>
                </div>

                <div className="bg-white py-2.5 px-1 sm:px-2 rounded-xl border border-[#d4af37]/40 shadow-xs flex flex-col items-center justify-center">
                  <span className="font-serif text-xl sm:text-2xl font-bold text-[#b8543f] leading-tight">
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-[#8c6d23] font-medium mt-0.5">
                    Secs
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Calendar Sync Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-5 pt-1">
            <a
              href={getGoogleCalendarUrl(data)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-white hover:bg-[#faf6ed] border border-[#d4af37]/40 text-[#1f2923] text-xs font-semibold rounded-xl transition-all cursor-pointer shadow-xs active:scale-95"
            >
              <CalendarCheck className="w-3.5 h-3.5 text-[#8c6d23]" />
              <span>Google Calendar</span>
            </a>

            <button
              onClick={() => downloadIcsFile(data)}
              type="button"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-white hover:bg-[#faf6ed] border border-[#d4af37]/40 text-[#1f2923] text-xs font-semibold rounded-xl transition-all cursor-pointer shadow-xs active:scale-95"
            >
              <Clock className="w-3.5 h-3.5 text-[#8c6d23]" />
              <span>Apple / Outlook (.ics)</span>
            </button>
          </div>
        </div>

        {/* VENUE & LOCATION */}
        <div className="mx-4 sm:mx-6 my-4 p-5 sm:p-6 bg-white rounded-2xl border border-[#d4af37]/40 shadow-xs">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#f4ece0] border border-[#d4af37]/40 flex items-center justify-center text-[#8c6d23] shrink-0">
              <MapPin className="w-5 h-5" />
            </div>

            <div className="flex-1">
              <span className="font-marcellus text-[10px] uppercase tracking-widest text-[#8c6d23] font-bold block">
                Ceremony &amp; Celebration Venue
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#1f2923] mt-0.5">
                {data.venue.name}
              </h3>
              <p className="text-xs font-semibold text-[#8c6d23] mt-0.5">
                {data.venue.hall}
              </p>
              <p className="text-xs text-[#55695c] mt-1 leading-relaxed">
                {data.venue.address}
              </p>
              <p className="text-[11px] text-[#718779] mt-0.5 italic">
                Landmark: {data.venue.landmark}
              </p>

              {/* Action Buttons for Location */}
              <div className="flex flex-wrap items-center gap-2.5 mt-4 pt-3 border-t border-[#f0e6d6]">
                <a
                  href={data.venue.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#8c6d23] hover:bg-[#775c1d] text-white text-xs font-medium rounded-xl shadow-xs transition-all cursor-pointer active:scale-95"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Open in Google Maps</span>
                </a>

                <button
                  onClick={() => setShowMapEmbed(!showMapEmbed)}
                  type="button"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#f9f5ed] hover:bg-[#f2ebd9] text-[#1f2923] text-xs font-medium rounded-xl transition-colors cursor-pointer border border-[#d4af37]/30"
                >
                  <Eye className="w-3.5 h-3.5 text-[#8c6d23]" />
                  <span>{showMapEmbed ? 'Hide Map' : 'View Map Preview'}</span>
                </button>
              </div>

              {/* Embedded Map */}
              {showMapEmbed && (
                <div className="mt-3.5 rounded-xl overflow-hidden border border-[#d4af37]/40 aspect-[16/9] w-full shadow-inner">
                  <iframe
                    title="Venue Location Map"
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

        {/* ORDER OF THE MORNING (SCHEDULE) */}
        <div className="mx-4 sm:mx-6 my-4 p-5 sm:p-6 bg-[#fdfbf7] rounded-2xl border border-[#d4af37]/40 shadow-xs">
          <div className="text-center mb-4">
            <span className="font-marcellus text-[10px] uppercase tracking-widest text-[#8c6d23] font-bold block">
              Order of the Morning
            </span>
            <h3 className="font-serif text-xl font-bold text-[#1f2923]">
              Program &amp; Schedule
            </h3>
          </div>

          <div className="space-y-3.5">
            {data.schedule.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 text-xs">
                <span className="font-bold text-[#8c6d23] min-w-[68px] shrink-0 font-sans">
                  {item.time}
                </span>
                <div className="flex-1">
                  <span className="font-bold text-[#1f2923] block">{item.title}</span>
                  <span className="text-[#55695c] text-[11px] leading-relaxed block mt-0.5">
                    {item.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SIMPLE RSVP */}
        <RSVPSection coupleNames="Akhil &amp; Sneha" />

        {/* CONTACT INFO */}
        <div className="mx-4 sm:mx-6 my-4 p-5 sm:p-6 bg-white rounded-2xl border border-[#d4af37]/40 shadow-xs">
          <div className="text-center mb-3">
            <span className="font-marcellus text-[10px] uppercase tracking-widest text-[#8c6d23] font-bold block">
              Contact &bull; Edoor
            </span>
            <h3 className="font-serif text-lg font-bold text-[#1f2923]">
              For Directions &amp; Assistance
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
            {data.contacts.map((contact, i) => (
              <div
                key={i}
                className="p-3 bg-[#fdfbf7] border border-[#d4af37]/30 rounded-xl text-xs flex flex-col justify-between h-full"
              >
                <div className="min-h-[72px] flex flex-col justify-start">
                  <span className="block font-bold text-[#1f2923] text-xs leading-snug">
                    {contact.name}
                  </span>
                  <span className="block text-[11px] text-[#8c6d23] font-medium mt-0.5">
                    {contact.label}
                  </span>
                  <span className="block text-[11px] sm:text-xs font-semibold text-[#55695c] mt-auto pt-1 tracking-tight">
                    {contact.phone}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-1.5 mt-3 pt-2.5 border-t border-[#f0e6d6] w-full">
                  <a
                    href={`https://wa.me/${contact.phone.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full min-w-0 h-7.5 inline-flex items-center justify-center gap-1 py-1 px-1 bg-[#25d366] hover:bg-[#20ba5a] text-white font-medium rounded-lg transition-colors cursor-pointer text-[10.5px] shadow-2xs active:scale-95 overflow-hidden"
                  >
                    <MessageCircle className="w-3 h-3 shrink-0" />
                    <span className="truncate">WhatsApp</span>
                  </a>
                  <a
                    href={`tel:${contact.phone.replace(/\s+/g, '')}`}
                    className="w-full min-w-0 h-7.5 inline-flex items-center justify-center gap-1 py-1 px-1 bg-[#8c6d23] hover:bg-[#775c1d] text-white font-medium rounded-lg transition-colors cursor-pointer text-[10.5px] shadow-2xs active:scale-95 overflow-hidden"
                  >
                    <Phone className="w-3 h-3 shrink-0" />
                    <span className="truncate">Call</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CARD FOOTER */}
        <div className="pt-6 pb-8 text-center bg-gradient-to-b from-[#f9f5ed] to-[#f4ece0] border-t border-[#d4af37]/40 text-xs">
          <p className="font-script text-2xl sm:text-3xl text-[#8c6d23] mb-1">
            With Love &amp; Happiness
          </p>
          <p className="font-serif text-base font-bold text-[#1f2923]">
            {data.groom.fullName} &amp; {data.bride.fullName}
          </p>
          <p className="text-[11px] text-[#55695c] mt-0.5">
            Mathai &amp; Thoppil Families &bull; Edoor
          </p>
        </div>

      </main>
    </div>
  );
};
