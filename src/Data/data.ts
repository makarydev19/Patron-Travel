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
