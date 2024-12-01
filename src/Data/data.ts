import card1 from '../assets/images/pexels-basiciggy-9297973.jpg';

export interface PageLink {
  name: string;
  path: string;
}

export const pageLinks: PageLink[] = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'About Us',
    path: '/aboutUs',
  },
  {
    name: 'Services',
    path: '/services',
  },
  {
    name: 'Contact Us',
    path: '/contactUs',
  },
];

export interface LandingContent {
  num: number;
  title: string;
  subtitle: string;
}

export const landingContent: LandingContent[] = [
  {
    num: 1,
    title: 'Choose Place, activity and time',
    subtitle:
      'Every Can choose a root and activity according to his tasts and possibilities',
  },
  {
    num: 2,
    title: 'Find people who have the same...',
    subtitle:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, eaque perspiciatis inventore id excepturi mollitia qui aperiam fugit, quae consectetur eligendi tenetur sunt pariatur illum? Qui in delectus quod amet.',
  },
  {
    num: 3,
    title: 'Start chat and offer to go on...',
    subtitle:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, eaque perspiciatis inventore id excepturi mollitia qui aperiam fugit, quae consectetur eligendi tenetur sunt pariatur illum? Qui in delectus quod amet.',
  },
];

// Destinations Cards

export const destinations = [
  {
    image: { card1 },
    title: 'City 1',
  },
  {
    image: 'https://source.unsplash.com/random/800x600?city2',
    title: 'City 2',
  },
  {
    image: 'https://source.unsplash.com/random/800x600?city3',
    title: 'City 3',
  },
  {
    image: 'https://source.unsplash.com/random/800x600?city4',
    title: 'City 4',
  },
  {
    image: 'https://source.unsplash.com/random/800x600?city5',
    title: 'City 5',
  },
];
