import {useState} from 'react';
import {createId} from './createId';

const defaultTags = [
  {id: createId(), name: '衣'},
  {id: createId(), name: '食'},
  {id: createId(), name: '住'},
  {id: createId(), name: '行'},
];
//自定义hook
const useTags = () => {
  const [tags,setTags] = useState<{ id: number,name: string}[]>(defaultTags);
  return {
    tags,
    setTags
  }
};

export {useTags};


//tag: string => {id: number,name: string}
