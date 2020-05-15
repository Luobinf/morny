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

export default TagSection;
