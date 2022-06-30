import List from './List';

const SortedList = ({ data }) => {
  //sort creation date by earliest
  const sortedDataByDate = data.sort((a, b) => {
    return new Date(a.created_at) - new Date(b.created_at);
  });
  //render
  return sortedDataByDate.map((e) => {
    return <List key={e.id} data={e} />;
  });
};

export default SortedList;
