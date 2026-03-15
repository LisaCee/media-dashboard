import { faker } from '@faker-js/faker';

faker.seed(42);

export interface Service {
  serviceName: string;
  username: string;
  totalFollowers: number;
  followersChange: number;
  views: number;
  viewsChange: number;
  likes: number;
  likesChange: number;
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
      totalFollowers: faker.number.int({ min: 0, max: 100_000_000 }),
      followersChange: faker.number.int({ min: -100_000, max: 100_000 }),
      views: faker.number.int({ min: 0, max: 100_000 }),
      viewsChange: faker.number.int({ min: -100_000, max: 100_000 }),
      likes: faker.number.int({ min: 0, max: 100_000 }),
      likesChange: faker.number.int({ min: -100_000, max: 100_000 }),
    },
    {
      serviceName: 'twitter',
      username: `@${faker.internet.username()}`,
      totalFollowers: faker.number.int({ min: 0, max: 100_000_000 }),
      followersChange: faker.number.int({ min: -100_000, max: 100_000 }),
      views: faker.number.int({ min: 0, max: 100_000 }),
      viewsChange: faker.number.int({ min: -100_000, max: 100_000 }),
      likes: faker.number.int({ min: 0, max: 100_000 }),
      likesChange: faker.number.int({ min: -100_000, max: 100_000 }),
    },
    {
      serviceName: 'instagram',
      username: `@${faker.internet.username()}`,
      totalFollowers: faker.number.int({ min: 0, max: 100_000_000 }),
      followersChange: faker.number.int({ min: -100_000, max: 100_000 }),
      views: faker.number.int({ min: 0, max: 100_000 }),
      viewsChange: faker.number.int({ min: -100_000, max: 100_000 }),
      likes: faker.number.int({ min: 0, max: 100_000 }),
      likesChange: faker.number.int({ min: -100_000, max: 100_000 }),
    },
    {
      serviceName: 'youtube',
      username: `${faker.person.firstName()} ${faker.person.lastName()[0]}.`,
      totalFollowers: faker.number.int({ min: 0, max: 100_000_000 }),
      followersChange: faker.number.int({ min: -100_000, max: 100_000 }),
      views: faker.number.int({ min: 0, max: 100_000 }),
      viewsChange: faker.number.int({ min: -100_000, max: 100_000 }),
      likes: faker.number.int({ min: 0, max: 100_000 }),
      likesChange: faker.number.int({ min: -100_000, max: 100_000 }),
    },
  ],
};