import Layout from '../../components/Layout';
import React from 'react';
import TagSection from './TagSection';
import NoteSection from './NoteSection';
import CategorySection from './CategorySection';
import NumberPadSection from './NumberPadSection';

function Money() {
  return (
    <Layout>
      <TagSection/>
      <NoteSection/>
      <CategorySection/>
      <NumberPadSection/>
    </Layout>
  );
}

export default Money;
