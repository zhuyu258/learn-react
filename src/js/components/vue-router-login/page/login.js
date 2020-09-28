import React from "react"
import qs from "query-string"
import userInfo from "../userInfo"

export default function Login(props){

  function loginBtn(){
    console.log(props)
    const query = qs.parse(props.location.search)
    console.log(query.page)
    userInfo.login()

    if(query.page){
      props.history.push(query.page)
    }else{
      props.history.push("/RouterLoginHome/Home")
    }

  }

  return <>
    <p>登录页面</p>
    <button onClick={loginBtn}>登录</button>
  </>
}
