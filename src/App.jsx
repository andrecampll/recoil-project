import React from 'react';
import { RecoilRoot } from 'recoil';

import CharacterCounter from './components/CharacterCounter';
import GlobalStyle from './styles/global';

function App() {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <CharacterCounter />
    </RecoilRoot>
  );
}

export default App;
