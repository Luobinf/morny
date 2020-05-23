import React from 'react';
import {useTags} from '../../lib/useTags';
import {useParams} from 'react-router';
import Layout from '../../components/Layout';
import Icon from '../../components/Icon';
import {Button} from '../../components/Button';
import styled from 'styled-components';
import {Input} from '../../components/Input';
import {Center} from '../../components/Center';
import {Space} from '../../components/Space';

const Topbar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 20px;
  padding: 14px;
  background: white;
`;
const InputWrapper = styled.div`
  background: white;
  padding: 14px 16px;
  margin-top: 8px;
`;

const TagEdit: React.FC = () => {
  const { tags, updateTag } = useTags();
  let { id } = useParams();  //id为string类型
  let tag = tags.filter(tag => tag.id === parseInt(id))[0];
  return (
    <Layout>
      <Topbar>
        <Icon name="left"/>
        <span>编辑标签</span>
        <Icon />
      </Topbar>
      <InputWrapper>
        <Input
          label="标签名"
          type="text" placeholder="标签名"
          value={tag.name}
          onChange={ (e) => {
            updateTag(tag.id,{name: e.target.value});
          }}
        />
      </InputWrapper>
      <Center>
        <Space/>
        <Button>删除标签</Button>
        <Space/>
      </Center>
    </Layout>
  );
};

export { TagEdit };


