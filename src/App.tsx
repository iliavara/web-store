import React from 'react';
import './App.css';
import { Route, Routes } from "react-router";
import { BrowserRouter, Navigate } from "react-router-dom";
import Landing from './pages/Landing';
import Layout from './components/Layout';


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
            </Routes>
    </BrowserRouter>
  );
}

export default App;
