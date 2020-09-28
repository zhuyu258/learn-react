import React, { Component } from "react"
import {
  withRouter,
} from 'react-router-dom'

class RouteGuard extends Component{

  constructor(props){
    super(props)
  }

  componentDidMount() {
    // listen监听路由的变化，发生在路由跳转前的那一刻
    this.props.history.listen((location,action)=>{
      if(this.props.onChange){
        const prev = this.props.location
        this.props.onChange(prev,location,action)
      }
    })
  }


  render(){
    return this.props.children
  }
}

export default withRouter(RouteGuard)
