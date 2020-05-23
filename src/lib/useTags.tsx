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
  const findTag = (id: number) => tags.filter(tag => tag.id === id)[0];
  const updateTag = (id: number,obj: {name: string}) => {
    let tagIndex = -1;
    tags.forEach( (item, index) => {
      if(item.id === id) {
        tagIndex = index;
      }
    });
    const deepCloneTags = JSON.parse(JSON.stringify(tags)); //React不推荐直接修改原有的数据
    deepCloneTags.splice(tagIndex,1,{id:id,name: obj.name});
    setTags(deepCloneTags);
  };
  return {
    tags,
    setTags,
    findTag,
    updateTag
  };
};

export {useTags};

