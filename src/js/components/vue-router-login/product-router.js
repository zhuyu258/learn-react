import React from "react"
import { Redirect, Route } from  'react-router-dom'
import userInfo from "./userInfo"

/*
  登录权限的实现
  封装Route,需要登录权限的路由，使用封装之后的route,判断用户是否登录，如果没有登录则重定向到登录页，否则就跳到相应的组件
*/

export default function ProductRouter({component:Component,...rest}){

  return (
    <>
      <Route {...rest} render={val=>{
        return userInfo.userInfo ? <Component /> : <Redirect to={{
          pathname: "/RouterLoginHome/Login",
          search: `?page=${val.location.pathname}`
        }}/>
      }}></Route>

    </>
  )
}
