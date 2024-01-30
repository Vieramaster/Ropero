import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './header/header'
import Home from './home-page/home'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Home/>  
    </React.StrictMode>,
)
