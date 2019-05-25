import React from 'react';
import {Route} from 'react-router-dom'

import './../common/style/style.css'
import './../common/style/styleFlex.css'

import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'
import FullPageNews from './Main/MainMain/FullPageNews'


const App = () =>{
  return(

    <div>
      <Header />
      <Route exact path = '/' component = {Main}></Route>
      <Route 
      path = '/news/:id'
      render = {props=><FullPageNews {...props}/>}></Route>
      <Footer />
    </div>
  )
}


export default App;
