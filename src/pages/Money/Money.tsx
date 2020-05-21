import Layout from '../../components/Layout';
import React, {useState} from 'react';
import TagSection from './TagSection';
import NoteSection from './NoteSection';
import CategorySection from './CategorySection';
import NumberPadSection from './NumberPadSection';

type Category = '-' | '+';

function Money() {
  const [selected,setSelected] = useState({
    tags: [] as string[],
    note: '',
    category: '-' as Category,
    amount: 0
  });
  return (
    <Layout>
      {selected.tags.join(',')}
      {selected.note}
      {selected.category}
      {selected.amount}
      <TagSection value={selected.tags} onChange={ (tags) => setSelected({
        ...selected,   //useState和setState是不一样的不会合并之前的数据
        tags: tags
      })}/>
      <NoteSection value={selected.note} onChange={(note) => setSelected({
        ...selected,
        note: note
      })}/>
      <CategorySection value={selected.category} onChange={(category) => setSelected({
        ...selected,
        category
      })}/>
      <NumberPadSection value={selected.amount} onChange={(amount) => setSelected({
        ...selected,
        amount
      })} onOk={() => {}}
      />
    </Layout>
  );
}

export default Money;
