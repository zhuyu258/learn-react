import React from "react"
import {
  Switch,
  Route,
  Router,
  withRouter
} from 'react-router-dom'

export function setRoute(configObj,baseUrl){
  return configObj.map((item,index)=>{
    const { children, component:Component, path:newPathName, ...reset } = item
    let pathName = baseUrl + newPathName
    pathName = pathName.replace( /\/\//g,"/")
    console.log(pathName,Component)
    const routeArr = <Route key={index}  {...reset} path={pathName}
              render={(val)=>{
                return (
                  <Component {...val} >
                    {item.children ? setRoute(item.children,pathName) : <></>}
                  </Component>
                )
              }}
           ></Route>

    return <Switch>
            { routeArr }
           </Switch>
  })
}
