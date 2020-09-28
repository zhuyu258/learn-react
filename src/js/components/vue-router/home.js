import React from "react"
import {
  Switch,
  Route,
  Router,
  withRouter
} from 'react-router-dom'
import RouterConfig from "./router.config.js"
import { setRoute } from "./utils"
import Link from "./vueLink"

export default function Home(props){

  function go(page){
    props.history.push(page)
  }

  return (
    <>
      <Link to={{name:"news"}}>新闻</Link>
      <p onClick={()=>{go("/VueRoter/music")}}>音乐</p>
      {
        setRoute(RouterConfig,'/VueRoter')
      }
    </>
  )
}
