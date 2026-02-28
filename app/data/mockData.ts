import { faker } from '@faker-js/faker';

faker.seed(42);

export interface Service {
  serviceName: string;
  username: string;
  followers: number;
  dailyChange: number;
  logoSrc: string;
  logoAlt: string;
  borderClass: string;
}

interface UserData {
  id: string;
  totalFollowers: number;
  services: Service[];
}

export const userData: UserData = {
  id: faker.string.uuid(),
  totalFollowers: faker.number.int({ min: 30, max: 100_000_000 }),
  services: [
    {
      serviceName: 'facebook',
      borderClass: 'border-facebook',
      logoSrc: '/brand-icons/icon-facebook.svg',
      logoAlt: 'Facebook',
      username: `@${faker.internet.username()}`,
      followers: faker.number.int({ min: 0, max: 100_000_000 }),
      dailyChange: faker.number.int({ min: -100_000, max: 100_000 }),
    },
    {
      serviceName: 'twitter',
      borderClass: 'border-twitter',
      logoSrc: '/brand-icons/icon-twitter.svg',
      logoAlt: 'Twitter',
      username: `@${faker.internet.username()}`,
      followers: faker.number.int({ min: 0, max: 100_000_000 }),
      dailyChange: faker.number.int({ min: -100_000, max: 100_000 }),
    },
    {
      serviceName: 'instagram',
      borderClass: 'border-instagram',
      logoSrc: '/brand-icons/icon-instagram.svg',
      logoAlt: 'Instagram',
      username: `@${faker.internet.username()}`,
      followers: faker.number.int({ min: 0, max: 100_000_000 }),
      dailyChange: faker.number.int({ min: -100_000, max: 100_000 }),
    },
    {
      serviceName: 'youtube',
      borderClass: 'border-youtube',
      logoSrc: '/brand-icons/icon-youtube.svg',
      logoAlt: 'Youtube',
      username: `${faker.person.firstName()} ${faker.person.lastName()[0]}.`,
      followers: faker.number.int({ min: 0, max: 100_000_000 }),
      dailyChange: faker.number.int({ min: -100_000, max: 100_000 }),
    },
  ],
};