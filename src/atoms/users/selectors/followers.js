import { selector } from 'recoil';

import { usernamesList } from '../index';

import api from '../../../services/api';

export const charCountState = selector({
  key: 'charCountState',
  get: async ({ get }) => {
    const text = get(usernamesList);

    return text.length;
  }
});
