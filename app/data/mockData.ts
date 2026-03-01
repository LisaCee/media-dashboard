import { faker } from '@faker-js/faker';

faker.seed(42);

export interface Service {
  serviceName: string;
  username: string;
  followers: number;
  followersChange: number;
  views: number;
  viewsChange: number;
  likes: number;
  likesChange: number;
  borderClass: string;
  logoSrc: string;
  logoAlt: string;
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
      username: `@${faker.internet.username()}`,
      followers: faker.number.int({ min: 0, max: 100_000_000 }),
      followersChange: faker.number.int({ min: -100_000, max: 100_000 }),
      views: faker.number.int({ min: 0, max: 100_000 }),
      viewsChange: faker.number.int({ min: -100_000, max: 100_000 }),
      likes: faker.number.int({ min: 0, max: 100_000 }),
      likesChange: faker.number.int({ min: -100_000, max: 100_000 }),
      borderClass: 'border-facebook',
      logoSrc: '/brand-icons/icon-facebook.svg',
      logoAlt: 'Facebook',
    },
    {
      serviceName: 'twitter',
      username: `@${faker.internet.username()}`,
      followers: faker.number.int({ min: 0, max: 100_000_000 }),
      followersChange: faker.number.int({ min: -100_000, max: 100_000 }),
      views: faker.number.int({ min: 0, max: 100_000 }),
      viewsChange: faker.number.int({ min: -100_000, max: 100_000 }),
      likes: faker.number.int({ min: 0, max: 100_000 }),
      likesChange: faker.number.int({ min: -100_000, max: 100_000 }),
      borderClass: 'border-twitter',
      logoSrc: '/brand-icons/icon-twitter.svg',
      logoAlt: 'Twitter',
    },
    {
      serviceName: 'instagram',
      username: `@${faker.internet.username()}`,
      followers: faker.number.int({ min: 0, max: 100_000_000 }),
      followersChange: faker.number.int({ min: -100_000, max: 100_000 }),
      views: faker.number.int({ min: 0, max: 100_000 }),
      viewsChange: faker.number.int({ min: -100_000, max: 100_000 }),
      likes: faker.number.int({ min: 0, max: 100_000 }),
      likesChange: faker.number.int({ min: -100_000, max: 100_000 }),
      borderClass: 'border-instagram',
      logoSrc: '/brand-icons/icon-instagram.svg',
      logoAlt: 'Instagram',
    },
    {
      serviceName: 'youtube',
      username: `${faker.person.firstName()} ${faker.person.lastName()[0]}.`,
      followers: faker.number.int({ min: 0, max: 100_000_000 }),
      followersChange: faker.number.int({ min: -100_000, max: 100_000 }),
      views: faker.number.int({ min: 0, max: 100_000 }),
      viewsChange: faker.number.int({ min: -100_000, max: 100_000 }),
      likes: faker.number.int({ min: 0, max: 100_000 }),
      likesChange: faker.number.int({ min: -100_000, max: 100_000 }),
      borderClass: 'border-youtube',
      logoSrc: '/brand-icons/icon-youtube.svg',
      logoAlt: 'Youtube',
    },
  ],
};