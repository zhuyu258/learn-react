import React,{ useEffect } from "react"
import {
  Switch,
  Route,
  Router,
  withRouter
} from 'react-router-dom'


class BeforeRouter extends React.Component{
  constructor(props){
    super(props)
  }
  componentDidMount(){
    const prevpathname = this.props.location.pathname
    this.props.history.listen((location,msg)=>{
      // console.log(`从${prevpathname}进入${location.pathname}`)
    })
  }

  render(){
    return (
      this.props.children
    )
  }

}

export default withRouter(BeforeRouter)
