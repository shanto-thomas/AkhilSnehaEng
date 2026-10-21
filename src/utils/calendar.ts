import { EngagementData } from '../data/defaultConfig';

export function getGoogleCalendarUrl(data: EngagementData): string {
  const dateStr = data.event.date.replace(/-/g, '');
  // 11:30 AM IST = 06:00 UTC
  const startIso = `${dateStr}T060000Z`;
  const endIso = `${dateStr}T100000Z`;

  const title = encodeURIComponent(`${data.groom.fullName} & ${data.bride.fullName}'s Engagement Ceremony`);
  const details = encodeURIComponent(
    `Solemn Betrothal Ceremony of ${data.groom.fullName} and ${data.bride.fullName}.\n\n` +
    `Date & Time: ${data.event.fullDate} at ${data.event.time}\n` +
    `Venue: ${data.venue.name}, ${data.venue.hall}, ${data.venue.address}\n\n` +
    `Contacts: ${data.contacts.map(c => `${c.name}: ${c.phone}`).join(', ')}`
  );
  const location = encodeURIComponent(`${data.venue.name}, ${data.venue.hall}, ${data.venue.address}`);

  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startIso}/${endIso}&details=${details}&location=${location}`;
}

export function downloadIcsFile(data: EngagementData): void {
  const dateStr = data.event.date.replace(/-/g, '');
  const startIso = `${dateStr}T060000Z`;
  const endIso = `${dateStr}T100000Z`;

  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Akhil and Sneha//Engagement Invitation//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:engagement-${dateStr}@akhilsneha.wedding`,
    `DTSTAMP:${startIso}`,
    `DTSTART:${startIso}`,
    `DTEND:${endIso}`,
    `SUMMARY:${data.groom.fullName} & ${data.bride.fullName}'s Engagement Ceremony`,
    `DESCRIPTION:Solemn Betrothal Ceremony of ${data.groom.fullName} and ${data.bride.fullName} at ${data.venue.name}.`,
    `LOCATION:${data.venue.name}\\, ${data.venue.hall}\\, ${data.venue.address}`,
    'STATUS:CONFIRMED',
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'Akhil-Sneha-Engagement.ics');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
}
