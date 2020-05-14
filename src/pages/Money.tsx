import Layout from '../components/Layout';
import React from 'react';
import styled from 'styled-components';

const TagSection = styled.section`
  background: #ffffff;
`;

const NoteSection = styled.section`

`;

const CategorySection = styled.section`

`;

const NumberPadSection = styled.section`

`;

const TagList = styled.ol`
  > li {
  background: #d9d9d9;
  border-radius: 18px;
  display: inline-block;
  }
`;

function Money() {
  return (
    <Layout>
      <TagSection>
        <TagList>
          <li>衣</li>
          <li>食</li>
          <li>住</li>
          <li>行</li>
        </TagList>
        <button>新增标签</button>
      </TagSection>
      <NoteSection>
        <label>
          <span>备注</span>
          <input type="text"/>
        </label>
      </NoteSection>
      <CategorySection>
        <ul>
          <li>支出</li>
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
