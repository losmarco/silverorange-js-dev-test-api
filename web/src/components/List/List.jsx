const list = ({ data }) => {
  return (
    <div>
      <h1>{data.name}</h1>
      {/* if null return something to indicate  */}
      <p>{data.description}</p>
      <p>{data.language}</p>
      <p>{data.forks_count}</p>
      <p>{data.created_at}</p>
    </div>
  );
};

export default list;
