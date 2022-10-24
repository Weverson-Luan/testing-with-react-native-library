/* eslint-disable prettier/prettier */
import {api} from '../api';
import {apiBaseConfig} from '../config.axios';
import {users} from '../mocks';

describe('Test Service Users', () => {
  describe('get all users', () => {
    it('when it calls user API it should return all available users', async () => {
      const spyFn = jest
        .spyOn(apiBaseConfig, 'get')
        .mockImplementation(() => Promise.resolve({data: users}));
      const allUsers = await api.getUsers();

      expect(spyFn).toBeCalledTimes(1);
      expect(allUsers).toEqual(users);
    });
  });
});
