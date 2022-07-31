import { getFormGroupUtilityClass } from '@mui/material';
import { useEffect } from 'react';
import './App.css';
import Feed from './components/Feed';
import { getFromRSS } from './services/fetchArticles';

const App = () => {

  // useEffect(() => {
  //   getFromRSS();
  // })

  return (
    <div className="App-header">
      <Feed />
    </div>
  );
};

export default App;
