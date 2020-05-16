import styled from 'styled-components';
import React, {useState} from 'react';

const Wrapper = styled.section`
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

const CategorySection: React.FunctionComponent = () => {
  const categoryMap = {'-': '支出','+': '收入'};
  type x = typeof categoryMap
  const [categoryList] = useState<('-' | '+')[]>(['-','+']);
  const [category,setCategory] = useState<string>('-');  // + 表示收入 - 表示支出
  return (
    <Wrapper>
      <ul>
        {
          categoryList.map( c =>
            <li
              className={category === c ? 'active' : ''}
              onClick={() => {setCategory(c)}}
            >
              {categoryMap[c]}
            </li>
          )
        }
      </ul>
    </Wrapper>
  );
};

export default CategorySection;
