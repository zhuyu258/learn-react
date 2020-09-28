import React,{ useEffect } from "react"
import {
  Switch,
  Route,
  Router,
  withRouter
} from 'react-router-dom'


function BeforeRouter(props){

  const prevPathname = props.location.pathname

  useEffect(()=>{
    listenRoute()
  },[])

  function listenRoute(){
    // 监听地址的变化  location是目标地址信息，msg是跳转的方式
    props.history.listen((location,msg)=>{
      console.log(`从${prevPathname}进入${location.pathname}`)
    })
  }

  return (
    props.children
  )
}


export default withRouter(BeforeRouter)
