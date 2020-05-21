import styled from 'styled-components';
import React, {useState} from 'react';

const Wrapper = styled.section`
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
      &.active {
      background: #f60;
      }
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

type Props = {
  value: string [],
  onChange: (selected: string[]) => void
}

const TagSection: React.FunctionComponent<Props> = (props) => {
  const [tags,setTags] = useState<string[]>(['衣','食','住','行']);
  const selectedTags = props.value;
  const handleAddTag = () => {
    const tagName = window.prompt('新标签的名称为');
    if(tagName !== null) {
      setTags([...tags,tagName]);
    }
  };
  const handleToggleTag = (tag: string) => {
    if(selectedTags.indexOf(tag) >= 0) {
      props.onChange(selectedTags.filter( t => t !== tag));
    } else {
      props.onChange([...selectedTags,tag]);
    }
  };
  return (
    <Wrapper>
      <ol>
        {
          tags.map(tag =>
            <li
              key={tag}
              onClick={() => {handleToggleTag(tag)}}
              className={selectedTags.indexOf(tag) >=0 ? 'active' : ''}
            >
              {tag}
            </li>
          )
        }
      </ol>
      <button onClick={handleAddTag}>新增标签</button>
    </Wrapper>
  );
};

export default TagSection;
