import React from "react"
import {
  Switch,
  Route,
  Router,
  withRouter
} from 'react-router-dom'
import BeforeRouter from "./beforeRouter0"
import News from "./page/news"
import Music from "./page/music"
import Details from "./page/details"

export default function Home(props){

  function go(page){
    props.history.push(page)
  }

  return (
    <>
      <p onClick={()=>{go("/VueBeforeEnterRoter/news")}}>新闻</p>
      <p onClick={()=>{go("/VueBeforeEnterRoter/music")}}>音乐</p>
      <BeforeRouter>
        <Route path='/VueBeforeEnterRoter/music' key="2" component={Music} />
        <Route path='/VueBeforeEnterRoter/news' key="1" component={News} />
        <Route path='/VueBeforeEnterRoter/news/details/:id' key="3" component={Details} />
      </BeforeRouter>
    </>
  )
}
