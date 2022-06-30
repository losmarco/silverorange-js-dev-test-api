const Filter = ({ data, setLang }) => {
  const langList = [];

  //Get list of language
  data.filter((e) => {
    return langList.push(e.language);
  });

  //Remove duplicate strings
  const filteredLangList = [...new Set(langList)];

  //Render List(button)
  const list = filteredLangList.map((elm, index) => (
    <button key={index} onClick={() => setLang(elm)}>
      {elm}
    </button>
  ));

  return <div>{list}</div>;
};

export default Filter;
