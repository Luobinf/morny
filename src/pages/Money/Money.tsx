import Layout from '../../components/Layout';
import React from 'react';
import TagSection from './TagSection';
import NoteSection from './NoteSection';
import CategorySection from './CategorySection';
import NumberPadSection from './NumberPadSection';

function Money() {
  return (
    <Layout>
      <TagSection>
        <ol>
          <li>衣</li>
          <li>食</li>
          <li>住</li>
          <li>行</li>
        </ol>
        <button>新增标签</button>
      </TagSection>
      <NoteSection>
        <label>
          <span>备注</span>
          <input type="text" placeholder="在这里输入备注" />
        </label>
      </NoteSection>
      <CategorySection>
        <ul>
          <li className="active">支出</li>
          <li>收入</li>
        </ul>
      </CategorySection>
      <NumberPadSection>
        <div className="output">
          100
        </div>
        <div className="pad clearfix ">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>删除</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>清空</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button className="ok">OK</button>
          <button className="zero">0</button>
          <button className="dot">.</button>
        </div>
      </NumberPadSection>
    </Layout>
  );
}

export default Money;
