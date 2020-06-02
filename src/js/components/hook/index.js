import React from "react"
import Layout from '../router/Student/component/layout'
import LearnUseState from './useState'
import LearnUseEffect from './useEffect'
import Header from './header'
import Asside from './asside'
import Summary from './Summary'
import MyHooks from './myHooks/index'
import UseReducer from './useReducer/index'
import ContextHook from './useContext'
import CallBackHook from './useCallback'
import MemoHook from './useMemo'
import UseRef from './useRef'


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
                <Route component={ ContextHook } exact path="/contextHook"></Route>
                <Route component={ CallBackHook } exact path="/callBackHook"></Route>
                <Route component={ MemoHook } exact path="/memoHook"></Route>
                <Route component={ UseRef } exact path="/useRef"></Route>
            </Layout>
        </>
    )
}

export default  LearnHook
