import React from 'react';
import Layout from '../../components/Layout';
import {useTags} from '../../lib/useTags';
import styled from 'styled-components';
import Icon from '../../components/Icon';
import {Link} from 'react-router-dom';
import {Button} from '../../components/Button';
import {Center} from '../../components/Center';
import {Space} from '../../components/Space';

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

function Tags() {
  const {tags} = useTags();
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
        <Button>删除标签</Button>
        <Space/>
      </Center>

    </Layout>
  );
}

export default Tags;
