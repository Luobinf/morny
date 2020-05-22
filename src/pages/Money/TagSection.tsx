import styled from 'styled-components';
import React, {useState} from 'react';
import {useTags} from '../../lib/useTags';
import {createId} from '../../lib/createId';

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
  value: number [],
  onChange: (selected: number[]) => void
}

const TagSection: React.FunctionComponent<Props> = (props) => {
  // const [tags,setTags] = useState<string[]>(['衣','食','住','行']);
  const {tags,setTags} = useTags();
  const selectedTagIds = props.value;
  const handleAddTag = () => {
    const tagName = window.prompt('新标签的名称为');
    if(tagName !== null) {
      setTags([...tags,{
        id: createId(),
        name: tagName
      }]);
    }
  };
  const handleToggleTag = (tagId: number) => {
    if(selectedTagIds.indexOf(tagId) >= 0) {
      props.onChange(selectedTagIds.filter(t => t !== tagId));
    } else {
      props.onChange([...selectedTagIds,tagId]);
    }
  };
  return (
    <Wrapper>
      <ol>
        {
          tags.map(tag =>
            <li
              key={tag.id}
              onClick={() => {handleToggleTag(tag.id)}}
              className={selectedTagIds.indexOf(tag.id) >=0 ? 'active' : ''}
            >
              {tag.name}
            </li>
          )
        }
      </ol>
      <button onClick={handleAddTag}>新增标签</button>
    </Wrapper>
  );
};

export default TagSection;
