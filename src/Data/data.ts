// Destinations Cards Images
import card1 from '../assets/images/Card1.jpg';
import card2 from '../assets/images/Card2.jpg';
import card3 from '../assets/images/Card3.jpg';
import card4 from '../assets/images/Card4.jpg';
import card5 from '../assets/images/cover2.jpg';

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
    image: card1,
    title: 'Destination 1',
  },
  {
    image: card2,
    title: 'Destination 2',
  },
  {
    image: card3,
    title: 'Destination 3',
  },
  {
    image: card4,
    title: 'Destination 4',
  },
  {
    image: card5,
    title: 'Destination 5',
  },
];
