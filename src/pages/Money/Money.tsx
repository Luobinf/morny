import Layout from '../../components/Layout';
import React, {useState} from 'react';
import TagSection from './TagSection';
import NoteSection from './NoteSection';
import CategorySection from './CategorySection';
import NumberPadSection from './NumberPadSection';

type Category = '-' | '+';

function Money() {
  const [selected,setSelected] = useState({
    tagIds: [] as number[],
    note: '',
    category: '-' as Category,
    amount: 0
  });
  const onChange = (obj: Partial <typeof selected>) => {
    setSelected({
      ...selected, //useState和setState是不一样的不会合并之前的数据
      ...obj
    })
  };
  return (
    <Layout>
      <TagSection value={selected.tagIds} onChange={(tagIds) => onChange({tagIds})}/>
      <NoteSection value={selected.note} onChange={(note) => onChange({note})}/>
      <CategorySection value={selected.category} onChange={(category) => onChange({category})}/>
      <NumberPadSection value={selected.amount} onChange={(amount) => onChange({amount})} onOk={() => {}}
      />
    </Layout>
  );
}

export default Money;
