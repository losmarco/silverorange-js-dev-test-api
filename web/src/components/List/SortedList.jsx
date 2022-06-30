import List from './List';

const SortedList = ({ data, lang }) => {
  //sort creation date by earliest
  const sortedDataByDate = data.sort((a, b) => {
    return new Date(a.created_at) - new Date(b.created_at);
  });

  const filteredList = sortedDataByDate.filter((e) => {
    return e.language === lang;
  });

  //default render
  if (lang === '') {
    return sortedDataByDate.map((e) => {
      return <List key={e.id} data={e} />;
    });
  } //render filtered lang("PHP", "TS"...)
  else {
    return filteredList.map((e) => {
      return <List key={e.id} data={e} />;
    });
  }
};

export default SortedList;
