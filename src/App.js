import NavigationBar from './components/common/NavigationBar';
import Home from './components/Home';
import './App.css';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import {BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (
   
    <BrowserRouter>
    <NavigationBar  />
    <Routes>
    <Route path='/' element={<Home />} />
    </Routes>
    </BrowserRouter>

  );
}

export default App;
