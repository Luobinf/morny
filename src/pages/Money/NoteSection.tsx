import styled from 'styled-components';
import React, {ChangeEventHandler, useRef, useState} from 'react';
import {Input} from '../../components/Input';

const Wrapper = styled.section`
  background: #f5f5f5;
  padding: 0 16px;
`;

type Props = {
  value: string,
  onChange: (note: string) => void
}

const NoteSection: React.FunctionComponent<Props> = (props) => {
  // const [note,setNote] = useState('');
  const note = props.value;
  // const inputRef = useRef<HTMLInputElement>(null);
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    props.onChange(e.target.value);
  };
  return (
    <Wrapper>
      <Input label="备注" value={note} onChange={handleChange} placeholder="请输入备注"/>
    </Wrapper>
  );
};

export default NoteSection;
