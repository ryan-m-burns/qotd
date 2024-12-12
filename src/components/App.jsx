import '../styles/App.css';
import Header from './Header';
import Quote from './Quote';
import Footer from './Footer';

import { getYear } from '../utilities/dates';
import { useEffect } from 'react';

function App() {
  const appInfo = {
    title: 'Quote of the Day',
    author: 'Ryan Burns',
    copyright: getYear()
  };

  useEffect(() => {
    document.title = appInfo.title;
  }, [appInfo.title]);

  return (
    <div className="App">
      <Header title={appInfo.title} />
      <Quote />
      <Footer copyright={appInfo.copyright} author={appInfo.author} />
    </div>
  );
}

export default App;
