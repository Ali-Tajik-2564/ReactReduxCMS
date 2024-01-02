import React from 'react';
import Headers from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import { useRoutes } from 'react-router-dom';
import router from './router';

import './App.css';

function App() {
  const route = useRoutes(router);
  return (
    <>
      <Headers />
      <div class="container px-0">
        <main class="main">
          <div class="row justify-content-between mx-0">
            <Sidebar />

            {route}
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
