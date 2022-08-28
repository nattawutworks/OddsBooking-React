import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Layout from './layout/layout';
import ApplicationRoute from './application.route';

function App() {
  return (
      <BrowserRouter>
        <Layout>
          <ApplicationRoute/>
        </Layout>
      </BrowserRouter>
  );
}

export default App;
