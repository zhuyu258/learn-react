import React from "react"
import Layout from '../router/Student/component/layout'
import LearnUseState from './useState'
import LearnUseEffect from './useEffect'
import Header from './header'
import Asside from './asside'
import Summary from './Summary'
import MyHooks from './myHooks/index'
import UseReducer from './useReducer/index'

import {
    Route,
  } from 'react-router-dom'

function LearnHook(props){

    return (
        <>
            <Layout headerElem={<Header/>} assideElem={<Asside />}>
                <Route component={ Summary } exact path="/LearnHookSummary"></Route>
                <Route component={ LearnUseState } exact path="/learnUseState"></Route>
                <Route component={ LearnUseEffect } exact path="/learnUseEffect"></Route>
                <Route component={ MyHooks } exact path="/myHooks"></Route>
                <Route component={ UseReducer } exact path="/useReducer"></Route>
            </Layout>
        </>
    )
}

export default  LearnHook