export interface EngagementData {
  groom: {
    name: string;
    fullName: string;
    parents: string;
    location: string;
    contact: string;
  };
  bride: {
    name: string;
    fullName: string;
    parents: string;
    location: string;
    contact: string;
  };
  event: {
    title: string;
    subtitle: string;
    date: string; // YYYY-MM-DD
    time: string;
    fullDate: string;
    scripture: string;
    scriptureRef: string;
    message: string;
  };
  venue: {
    name: string;
    hall: string;
    address: string;
    landmark: string;
    googleMapsUrl: string;
    embedMapUrl: string;
  };
  schedule: {
    time: string;
    title: string;
    description: string;
  }[];
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
    fullName: 'AKHIL MATHEW',
    parents: 'Mathai M & Molly Mathai',
    location: 'Edoor',
    contact: '+91 94474 12345',
  },
  bride: {
    name: 'Sneha',
    fullName: 'SNEHA SABU',
    parents: 'Sabu Thoppil & Leena Sabu',
    location: 'Edoor',
    contact: '+91 94952 67890',
  },
  event: {
    title: 'Solemn Christian Betrothal',
    subtitle: 'Together With Our Families',
    date: '2026-12-28',
    time: '11:30 AM',
    fullDate: 'Monday, 28 December 2026',
    scripture: '“Therefore what God has joined together, let no one separate.”',
    scriptureRef: 'Mark 10:9',
    message: 'With the abundant blessings of Almighty God and our beloved parents, we cordially invite your gracious presence and heartfelt prayers as we pledge our vows of holy betrothal and exchange rings.',
  },
  venue: {
    name: 'St. Mary’s Auditorium',
    hall: 'Sanctuary & Celebration Hall',
    address: 'Edoor, Kannur District, Kerala 670704',
    landmark: 'Edoor Town, near Iritty',
    googleMapsUrl: 'https://maps.google.com/?q=St.+Mary\'s+Auditorium,+Edoor,+Kannur,+Kerala',
    embedMapUrl: 'https://www.google.com/maps?q=St.+Mary\'s+Auditorium,+Edoor,+Kannur,+Kerala&output=embed',
  },
  schedule: [
    {
      time: '10:30 AM',
      title: 'Arrival & Welcome Drinks',
      description: 'Welcoming of families & guests with traditional tender coconut & refreshments',
    },
    {
      time: '11:15 AM',
      title: 'Auspicious Ring Exchange (Nischayam)',
      description: 'Ceremonial ring exchange and formal solemn betrothal blessings by elders & clergy',
    },
    {
      time: '12:00 PM',
      title: 'Felicitations & Photos',
      description: 'Cake cutting and formal photo session with family and friends on the floral stage',
    },
    {
      time: '12:45 PM',
      title: 'Celebratory Grand Feast (Sadya & Buffet)',
      description: 'Traditional celebratory feast and dining in the main banquet hall',
    },
  ],
  contacts: [
    {
      label: 'Groom’s Family',
      name: 'Mathai M (Father)',
      relation: 'Edoor',
      phone: '+91 94474 12345',
    },
    {
      label: 'Bride’s Family',
      name: 'Sabu Thoppil (Father)',
      relation: 'Edoor',
      phone: '+91 94952 67890',
    },
    {
      label: 'Youth Coordinator',
      name: 'Anand (Brother)',
      relation: 'Edoor',
      phone: '+91 94470 54321',
    },
  ],
};
