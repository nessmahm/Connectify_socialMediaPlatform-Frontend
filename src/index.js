import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import SignUp from './pages/Sign/SignUp'
import SignIn from './pages/Sign/SignIn'
import reportWebVitals from './reportWebVitals';
import './styles/style.css'
import './styles/elements.css'
import {BrowserRouter as Router , Route , Routes } from 'react-router-dom'
import FullHeader from './components/header/FullHeader'
import Profil from "./pages/Profil/Profil";
import Home from "./pages/Home/Home";
import Settings from "./pages/Settings/Settings";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Router>
          <FullHeader/>
          <Routes>
              <Route path="/signup" element = {<SignUp/>} />
              <Route path="/signin" element = {<SignIn/>} />
              <Route path="/profil" element = {<Profil/>} />
              <Route path="/home" element = {<Home/>} />
              <Route path="/settings" element = {<Settings/>} />
          </Routes>
      </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
