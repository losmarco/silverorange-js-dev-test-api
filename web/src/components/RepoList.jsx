import { useState } from 'react';

import SortedList from './List/SortedList';
import Filter from './Filter';

const RepoList = ({ data }) => {
  const [lang, setLang] = useState('');

  return (
    <>
      <Filter data={data} setLang={setLang} />
      <SortedList data={data} lang={lang} />
    </>
  );
};

export default RepoList;
