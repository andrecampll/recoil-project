import { selector } from 'recoil';

import { usernamesList } from '../index';

export const charCountState = selector({
  key: 'charCountState',
  get: ({ get }) => {
    const text = get(usernamesList);

    return text.length;
  }
});
