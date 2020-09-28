import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'
import Details from "./page/details"
import Music from "./page/music"
import News from "./page/news"
// import RouteGuard from "./routeGuard"

class WatchRoute extends React.Component {



  render(){
    return (
      <></>
      // <>
      //  <ul>
      //   <li><Link to="/WatchRoute/news" >监听路由变化详解</Link></li>
      //   <li><Link to="/WatchRoute/music" >音乐</Link></li>
      //  </ul>
      //   <RouteGuard
      //     getUserConfirmation={(prev,location,action,msg,commit,unBlock)=>{
      //       console.log(`路由阻塞从${prev.pathname}到${location.pathname}，阻止信息${msg}`)
      //       commit(true) // 不阻塞跳转
      //     }}
      //     listenHandle={(prev,location,action,unListen)=>{
      //       console.log(`路由变化从${prev.pathname}到${location.pathname}`)
      //     }}
      //   >
      //     <Switch>
      //       <Route path="/WatchRoute/news" component={News}></Route>
      //       <Route path="/WatchRoute/music" component={Music}></Route>
      //       <Route path="/WatchRoute/details" component={Details}></Route>
      //     </Switch>
      //   </RouteGuard>
      // </>
    )
  }
}

export default WatchRoute
