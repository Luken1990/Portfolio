import { useState } from 'react';
import { Home } from './page/homepage/Home';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
