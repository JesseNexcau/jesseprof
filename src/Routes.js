import React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';

import Header from './pages/components/Header'

import Home from './pages/Home/Home';
import Partners from './pages/Partners/Partners';
import Rules from './pages/Rules/Rules';

export default () => {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/partners" element={<Partners />}></Route>
        <Route exact path="/rules" element={<Rules />}></Route>
      </Routes>
    </>
  );
}