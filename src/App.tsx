import React from 'react';
import './App.css';
import { Route, Routes } from "react-router";
import { BrowserRouter, Navigate } from "react-router-dom";
import Landing from './pages/Landing';
import Layout from './components/Layout';
import Cart from './pages/Cart';


function App() {
  return (
    <BrowserRouter>
          <Routes>
            {/* web side */}
            {/* landing screen */}
            <Route
              path="/"
              element={
                <Layout>
                  <Landing />
                </Layout>
              }
            />
            <Route
              path="/cart"
              element={
                <Layout>
                  <Cart />
                </Layout>
              }
            />
            </Routes>
    </BrowserRouter>
  );
}

export default App;
