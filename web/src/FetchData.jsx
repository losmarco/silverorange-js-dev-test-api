import { useState, useEffect } from 'react';

import SortedList from './components/List/SortedList';
const API = 'http://localhost:4000/repos';

function FetchData() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      setHasError(false);

      try {
        const res = await fetch(API);
        const json = await res.json();
        setData(json);
      } catch (error) {
        setHasError(true);
      }
      setIsLoading(false);
    };

    getData();
  }, []);

  return (
    <>
      {hasError && (
        <p>
          Something went wrong, <br />
          try again later 😞
        </p>
      )}

      {/* Display Loading state or <List/> */}
      {isLoading ? `Loading...` : <SortedList data={data} />}
    </>
  );
}

export default FetchData;
