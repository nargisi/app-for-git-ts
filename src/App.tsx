import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import InitialPage from './components/InitialPage/InitialPage';

function App() {
  return (
    <div className="page">
      <Routes>
        <Route path="/" element={<InitialPage />} />
      </Routes>
    </div>
  );
}

export default App;
