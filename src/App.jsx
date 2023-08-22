import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import UserPage from './components/Pages/Users/User'
import PhotosPage from './components/Pages/Photos/Photos';
import HeaderNav from './components/Pages/HeaderNav'
import UserDetails from './components/Pages/Users/UserDetails';
import './App.css'
function App() {
  return (
    <>
    <HeaderNav/>
    <Container>
      <Routes>
        <Route path='/' element={<UserPage />}/>
        <Route path='/users' element={<UserPage />}/>
        <Route path='/photos' element={<PhotosPage />}/>
        <Route path='/users/:id' element={<UserDetails />}/>
      </Routes>
    </Container>
    </>
  );
}

export default App;
