import React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';

import Home from './pages/Home/Home';


export default () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>

      </Routes>
    </>
  );
}