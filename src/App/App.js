import React from 'react';
import {Route} from 'react-router-dom'

import './../common/style/style.css'
import './../common/style/styleFlex.css'

import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'
import FullPageNews from './Tabs/FullPageNews/FullPageNews'
import Favorites from './Tabs/Favorites/Favorites'


const App = () =>{
  return(

    <div>
      <div className='headerPosition'>
        <Header />
      </div>
      <Route exact path = '/' component = {Main}></Route>
      <Route 
      path = '/news/:id'
      render = {props=><FullPageNews {...props}/>}></Route>
      <Route 
      path = '/favorites'
      component = {Favorites}></Route>
      <Footer />
    </div>
  )
}


export default App;
