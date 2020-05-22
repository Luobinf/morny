import React from 'react';
import Layout from '../../components/Layout';
import {useTags} from '../../lib/useTags';
import styled from 'styled-components';
import Icon from '../../components/Icon';
import {Link} from 'react-router-dom';

const TagList = styled.ol`
  font-size: 16px;
  background: white;
  > li {
    border-bottom: 1px solid #d5d5d9;
    margin-left: 10px;
    > a {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 16px 10px 0;
      line-height: 20px;
    }
  }
`;

const Button = styled.button`
  font-size: 18px;
  border: none;
  padding: 8px 12px;
  background: skyblue;
  border-radius: 4px;
  color: white;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Space = styled.div`
  width: 100%;
  height: 16px;
`;

function Tags() {
  const {tags} = useTags();
  // console.log(tags);
  // debugger
  return (
    <Layout>
      <TagList>
        {
          tags.map(tag => {
            return (
              <li key={tag.id}>
                <Link to={'/tags/' + tag.id}>
                  <span className="one-line">{tag.name}</span>
                  <Icon name="right"/>
                </Link>
              </li>
            );
          })
        }
      </TagList>
      <Center>
        <Space/>
        <Button>新建标签</Button>
        <Space/>
      </Center>
    </Layout>
  );
}

export default Tags;
