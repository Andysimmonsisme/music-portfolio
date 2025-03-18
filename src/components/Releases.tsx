import axios from 'axios';
import { useEffect, useState } from 'react';

const Releases = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('/.netlify/functions/releases') 
      .then(response => setData(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
    </div>
  );
};

export default Releases;
