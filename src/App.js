import React from 'react';
import MainPage from './pages/MainPage';
import { BrowserRouter as Router, } from 'react-router-dom'

function App() {
  return (
    <React.Fragment>
      <Router>
        <MainPage />
      </Router>
    </React.Fragment>
  );
}

export default App;
