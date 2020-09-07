import React from 'react'
import { useRecoilState } from 'recoil';

import { textState } from '../atoms/text';

import CharacterCount from './CharacterCount';

import { Input } from './styles';

function TextInput() {
  const [text, setText] = useRecoilState(textState);

  const onChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <Input type="text" value={text} onChange={onChange} />
      <br />
      Echo: {text}
    </div>
  );
}

function CharacterCounter() {
  return (
    <div>
      <TextInput />
      <CharacterCount />
    </div>
  )
}

export default CharacterCounter
