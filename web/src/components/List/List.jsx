import './list.css';

const list = ({ data }) => {
  return (
    <div className="list">
      <h1>{data.name}</h1>
      {/* if null return something to indicate  */}
      <p>Desc: {data.description}</p>
      <p>Language: {data.language}</p>
      <p>Fork Count: {data.forks_count}</p>
      <p>Date Created: {data.created_at}</p>
    </div>
  );
};

export default list;
