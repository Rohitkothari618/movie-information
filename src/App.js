import { useEffect } from 'react';
import './App.css';
import { fetchMoiveApi } from './utils/api';

function App() {
  useEffect(() => {
    getMovieData();
  }, []);
  const getMovieData = (url, params) => {
    try {
      fetchMoiveApi('/movie/popular').then(({ data }) => {
        console.log(data);
      });
    } catch (err) {
      console.log(err, 'This is comming from here');
    }
  };
  return <div className=''>Hello React app</div>;
}

export default App;
