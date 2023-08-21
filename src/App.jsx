import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import UserPage from './components/Pages/Users/User'
import PhotosPage from './components/Pages/Photos/Photos';
import './App.css'

function App() {
  return (
    <>
    <div className='Container'>
      <nav>
          <ul>
            <li>
              <a href="/users">Users</a>
            </li>
            <li>
              <a href="/photos">Photos</a>
            </li>
          </ul>
        </nav>
    </div>
      

      <Routes>
        <Route path='/users' element={<UserPage />}/>
        <Route path='/photos' element={<PhotosPage />}/>
      </Routes>

    </>
  );
}

export default App;
