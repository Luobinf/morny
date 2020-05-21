import styled from 'styled-components';
import React, {useState} from 'react';
import generateOutput from './generateOutput';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  > .output {
    background: white;
    font-size: 36px;
    line-height: 72px;
    text-align: right;
    padding: 0 16px;
    box-shadow: inset 0 0 5px rgba(0,0,0,0.25);
  }
  > .pad {
    > button {
      float: left;
      width: 25%;
      height: 64px;
      &.ok {
        height: 128px;
        float: right;
      }
      &.zero {
      width: 50%;
      }
      &:nth-child(1) {
        background: #f2f2f2;
      }
      &:nth-child(2),&:nth-child(5) {
        background: #ededed;
      }
      &:nth-child(3),&:nth-child(6),&:nth-child(9) {
        background: #d3d3d3;
      }
      &:nth-child(4),&:nth-child(7),&:nth-child(10) {
        background: #c1c1c1;
      }
      &:nth-child(8),&:nth-child(11),&:nth-child(13) {
        background: #b8b8b8;
      }
      &:nth-child(12) {
        background: #a9a9a9;
      }
      &:nth-child(14) {
        background: #9a9a9a;
      }
    }
  }
`;

type Props = {
  value: number,
  onChange: (value: number) => void,
  onOk: () => void
}

const NumberPadSection: React.FC<Props> = (props) => {
  // const [output,_setOutput] = useState(props.value.toString());
  const output = props.value.toString();
  let value;
  const setOutput = (output: string) => {
    if(output.length > 16) {
      value = parseFloat(output.slice(0,16));
    } else if(output.length === 0) {
      value = 0;
    } else {
      value = parseFloat(output);
    }
    props.onChange(value);
  };
  const pad = [1,2,3,'删除',4,5,6,'清空',7,8,9,'OK',0,'.'];
  const handleButton = (e: React.MouseEvent<HTMLDivElement>) => {
    const text = (e.target as HTMLButtonElement).textContent;
    console.log(text);
    if(text === null) return;
    if(text === 'OK') {
      props.onOk();
      return;
    }
    if('0123456789.'.split('').concat(['删除','清空']).indexOf(text) >= 0) {
      // console.log(text)
      setOutput(generateOutput(text,output));
    }
  };
  return (
    <Wrapper>
      <div className="output">
        {output}
      </div>
      <div className="pad clearfix " onClick={handleButton}>
        {
          pad.map(p => {
            if(p === 'OK') {
              return <button className="ok">OK</button>
            }
            if(p === 0) {
              return <button className="zero">0</button>
            }
            if(p === '.') {
              return <button className="dot">.</button>
            }
            return  <button>{p}</button>
          })
        }
      </div>
    </Wrapper>
  );
};
export default NumberPadSection;
