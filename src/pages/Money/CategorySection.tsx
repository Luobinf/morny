import styled from 'styled-components';

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

export default CategorySection;
