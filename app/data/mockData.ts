import { faker } from '@faker-js/faker';

faker.seed(42);

export const userData = {
  id: faker.string.uuid(),
  totalFollowers: faker.number.int({ min: 30, max: 100000 }),
  services: {
    facebook: {
      username: `@${faker.internet.username()}`,
      followers: faker.number.int({ min: 30, max: 100000 }),
      dailyChange: faker.number.int({ min: -1000, max: 1000 }),
    },
  },
};
