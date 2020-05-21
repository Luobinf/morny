import styled from 'styled-components';
import React, {useRef, useState} from 'react';

const Wrapper = styled.section`
  background: #f5f5f5;
  padding: 0 16px;
  > label {
    display: flex;
    align-items: center;
    > span {
      margin-right: 16px;
      white-space: nowrap;
    }
    > input {
      display: block;
      width: 100%;
      height: 72px;
      background: none;
      border: none;
    }
  }
`;

type Props = {
  value: string,
  onChange: (note: string) => void
}

const NoteSection: React.FunctionComponent<Props> = (props) => {
  // const [note,setNote] = useState('');
  const note = props.value;
  const inputRef = useRef<HTMLInputElement>(null);
  const handleChange = () => {
    if(inputRef.current !== null) {
      props.onChange(inputRef.current.value);
      // console.log(note);
    }
  };
  return (
    <Wrapper>
      <label>
        <span>备注</span>
        <input
          type="text"
          placeholder="在这里输入备注"
          defaultValue={note}
          ref={inputRef}
          onChange={handleChange}
        />
      </label>
    </Wrapper>
  );
};

export default NoteSection;
