import { faker } from '@faker-js/faker';

faker.seed(42);

export interface ServiceOverview {
  serviceName: string;
  username: string;
  totalFollowers: number;
  followersChange: number;
}

export interface ServiceDetail {
  serviceName: string;
  detail: {
    label: string;
    value: number;
    change: number;
  }[];
}

interface UserData {
  id: string;
  totalFollowers: number;
  serviceOverview: ServiceOverview[];
  serviceDetail: ServiceDetail[];
}

export const userData: UserData = {
  id: faker.string.uuid(),
  totalFollowers: faker.number.int({ min: 30, max: 100_000_000 }),
  serviceOverview: [
    {
      serviceName: 'facebook',
      username: `@${faker.internet.username()}`,
      totalFollowers: faker.number.int({ min: 0, max: 100_000_000 }),
      followersChange: faker.number.int({ min: -100_000, max: 100_000 }),
    }, {
      serviceName: 'twitter',
      username: `@${faker.internet.username()}`,
      totalFollowers: faker.number.int({ min: 0, max: 100_000_000 }),
      followersChange: faker.number.int({ min: -100_000, max: 100_000 }),
    },
    {
      serviceName: 'instagram',
      username: `@${faker.internet.username()}`,
      totalFollowers: faker.number.int({ min: 0, max: 100_000_000 }),
      followersChange: faker.number.int({ min: -100_000, max: 100_000 }),
    }, {
      serviceName: 'youtube',
      username: `${faker.person.firstName()} ${faker.person.lastName()[0]}.`,
      totalFollowers: faker.number.int({ min: 0, max: 100_000_000 }),
      followersChange: faker.number.int({ min: -100_000, max: 100_000 }),
    },
  ],
  serviceDetail: [
    {
      serviceName: 'facebook',
      detail: [{
        label: 'Page Views',
        value: faker.number.int({ min: 0, max: 100_000 }),
        change: faker.number.int({ min: -100_000, max: 100_000 }),
      },
      {
        label: 'Likes',
        value: faker.number.int({ min: 0, max: 100_000 }),
        change: faker.number.int({ min: -100_000, max: 100_000 }),
      }],
    },
    {
      serviceName: 'instagram',
      detail: [
        {
          label: 'Likes',
          value: faker.number.int({ min: 0, max: 100_000 }),
          change: faker.number.int({ min: -100_000, max: 100_000 }),
        }, {
          label: 'Profile Views',
          value: faker.number.int({ min: 0, max: 100_000 }),
          change: faker.number.int({ min: -100_000, max: 100_000 }),
        },
      ],
    },
    {
      serviceName: 'twitter',
      detail: [{
        label: 'Retweets',
        value: faker.number.int({ min: 0, max: 100_000 }),
        change: faker.number.int({ min: -100_000, max: 100_000 }),
      },
      {
        label: 'Likes',
        value: faker.number.int({ min: 0, max: 100_000 }),
        change: faker.number.int({ min: -100_000, max: 100_000 }),
      }]
    },
    {
      serviceName: 'youtube',
      detail: [{
        label: 'Likes',
        value: faker.number.int({ min: 0, max: 100_000 }),
        change: faker.number.int({ min: -100_000, max: 100_000 }),
      }, {
        label: 'Total Views',
        value: faker.number.int({ min: 0, max: 100_000 }),
        change: faker.number.int({ min: -100_000, max: 100_000 }),
      }],
    },
  ],
};