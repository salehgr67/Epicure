import React from 'react';
// import './App.css';
import { BrowserRouter, Router,  } from 'react-router-dom';
// import MobileHomePageHomePage from './PagesComponent/MobileHomePage/MobileHomePage';
import MobileHomePage from './PagesComponent/MobileHomePage/MobileHomePage';
import { DesktopHomePage } from './PagesComponent/DesktopHomePage/DesktopHomePage';


function App() {
  return(
    <div>
      {/* {window.matchMedia('(min-width : 600px)').matches ? <MobileHomePage /> : <DesktopHomePage />} */}
      {/* <HomePage /> */}
      {window.matchMedia('(max-width : 600px)').matches ? <MobileHomePage/> : <DesktopHomePage />}
    </div>
  )
}

export default App;
