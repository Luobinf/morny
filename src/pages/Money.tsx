import Layout from '../components/Layout';
import React from 'react';
import styled from 'styled-components';

const TagSection = styled.section`
  background: #ffffff;
  padding: 16px;
  > ol {
     margin: 0 -12px;
     > li {
      background: #d9d9d9;
      border-radius: 18px;
      display: inline-block;
      padding: 3px 16px;
      margin: 8px 12px;
    }
  }
  > button {
    background: none;
    border: none;
    padding: 2px 4px;
    border-bottom: 1px solid #333;
    color: #666;
    margin-top: 10px;
  }
`;

const NoteSection = styled.section`
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

const CategorySection = styled.section`
  > ul {
    display: flex;
    background: #c4c4c4;
    > li {
      width: 50%;
      font-size: 24px;
      padding: 16px 0;
      text-align: center;
      position: relative;
      &.active::after {
        content: '';
        display: block;
        height: 3px;
        background: #333;
        position: absolute;
        width: 100%;
        left: 0;
        bottom: 0;
      }
    }
  }
`;

const NumberPadSection = styled.section`

`;


function Money() {
  return (
    <Layout>
      <TagSection>
        <ol>
          <li>衣</li>
          <li>食</li>
          <li>住</li>
          <li>行</li>
        </ol>
        <button>新增标签</button>
      </TagSection>
      <NoteSection>
        <label>
          <span>备注</span>
          <input type="text" placeholder="在这里输入备注" />
        </label>
      </NoteSection>
      <CategorySection>
        <ul>
          <li className="active">支出</li>
          <li>收入</li>
        </ul>
      </CategorySection>
      <NumberPadSection>
        <div>
          100
        </div>
        <div>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>0</button>
          <button>.</button>
        </div>
      </NumberPadSection>
    </Layout>
  );
}

export default Money;
