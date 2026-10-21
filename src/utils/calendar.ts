import { EngagementData } from '../data/defaultConfig';

export function getGoogleCalendarUrl(data: EngagementData): string {
  const dateStr = data.event.date.replace(/-/g, '');
  // 11:30 AM IST = 06:00 UTC
  const startIso = `${dateStr}T060000Z`;
  const endIso = `${dateStr}T100000Z`;

  const title = encodeURIComponent(`${data.groom.fullName} & ${data.bride.fullName}'s Engagement Ceremony`);
  const details = encodeURIComponent(
    `Engagement Ceremony of ${data.groom.fullName} and ${data.bride.fullName}.\n\n` +
    `Date & Time: ${data.event.fullDate} at ${data.event.time}\n` +
    `Venue: ${data.venue.name}, ${data.venue.address}\n\n` +
    `Contacts: ${data.contacts.map(c => `${c.name}: ${c.phone}`).join(', ')}`
  );
  const location = encodeURIComponent(`${data.venue.name}, ${data.venue.address}`);

  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startIso}/${endIso}&details=${details}&location=${location}`;
}
