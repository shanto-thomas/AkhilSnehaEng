export interface EngagementData {
  groom: {
    name: string;
    fullName: string;
    parents: string;
    contact: string;
  };
  bride: {
    name: string;
    fullName: string;
    parents: string;
    contact: string;
  };
  event: {
    title: string;
    subtitle: string;
    date: string; // YYYY-MM-DD
    time: string;
    fullDate: string;
    quote: string;
    message: string;
  };
  venue: {
    name: string;
    address: string;
    landmark: string;
    googleMapsUrl: string;
    embedMapUrl: string;
  };
  contacts: {
    label: string;
    name: string;
    relation: string;
    phone: string;
  }[];
}

export const defaultEngagementData: EngagementData = {
  groom: {
    name: 'Akhil',
    fullName: 'Akhil Mathew',
    parents: 'Mathai M & Molly Mathai',
    contact: '+91 89438 43827',
  },
  bride: {
    name: 'Sneha',
    fullName: 'Sneha Sabu',
    parents: 'Sabu Thoppil & Leena Sabu',
    contact: '+91 62354 51944',
  },
  event: {
    title: 'Engagement Celebration',
    subtitle: 'Together With Our Families',
    date: '2026-12-28',
    time: '11:30 AM',
    fullDate: 'Monday, 28 December 2026',
    quote: '“You are my today and all of my tomorrows. Two lives, two hearts, joined in love.”',
    message: 'With immense joy and love in our hearts, we invite you to celebrate our engagement ceremony as we exchange rings and begin our journey to forever.',
  },
  venue: {
    name: 'Mensa Christi',
    address: 'Edoor, Kannur District, Kerala 670704',
    landmark: 'Edoor Town, near Iritty',
    googleMapsUrl: 'https://maps.google.com/?q=Mensa+Christi,+Edoor,+Kannur,+Kerala',
    embedMapUrl: 'https://www.google.com/maps?q=Mensa+Christi,+Edoor,+Kannur,+Kerala&output=embed',
  },
  contacts: [
    {
      label: 'Groom’s Family',
      name: 'Mathai M (Father)',
      relation: 'Edoor',
      phone: '+91 89438 43827',
    },
    {
      label: 'Bride’s Family',
      name: 'Sabu Thoppil (Father)',
      relation: 'Edoor',
      phone: '+91 62354 51944',
    },
  ],
};
