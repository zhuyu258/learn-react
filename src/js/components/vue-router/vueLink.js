import React from 'react';
import {
  Link
} from 'react-router-dom'
import RouterConfig from "./router.config.js"

export default function VueLink({to,...reset}){
  let path = ''
  if(to.name && typeof to.name === 'string'){
    to.pathname = getPathNamebyName(to,"/VueRoter",RouterConfig)
    if(to.pathname === undefined){
      throw new Error('Link的name'+to.name+"无效")
    }
  }
  console.log(to)
  return (<Link to={to} {...reset} ></Link>)
}

function getPathNamebyName(to,baseUrl,RouterConfig){
  for (let item of RouterConfig) {
    let path = baseUrl + item.path
    path = path.replace(/\/\//g,"/")
    if(item.name === to.name){
      return path
    }else{
      if(Array.isArray(item.children)){
        return getPathNamebyName(to,path,item.children)
      }
    }
  }
  return undefined
}
