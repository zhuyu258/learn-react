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
import UseLayoutEffect from './useLayoutEffect'
import UseImperativeHandle from './useImperativeHandle'


import {
    Route,
  } from 'react-router-dom'

function LearnHook(props){

    return (
        <>
            <Layout headerElem={<Header/>} assideElem={<Asside />}>
                <Route component={ Summary } exact path="/LearnHook/LearnHookSummary"></Route>
                <Route component={ LearnUseState } exact path="/LearnHook/learnUseState"></Route>
                <Route component={ LearnUseEffect } exact path="/LearnHook/learnUseEffect"></Route>
                <Route component={ MyHooks } exact path="/LearnHook/myHooks"></Route>
                <Route component={ UseReducer } exact path="/LearnHook/useReducer"></Route>
                <Route component={ ContextHook } exact path="/LearnHook/contextHook"></Route>
                <Route component={ CallBackHook } exact path="/LearnHook/callBackHook"></Route>
                <Route component={ MemoHook } exact path="/LearnHook/memoHook"></Route>
                <Route component={ UseRef } exact path="/LearnHook/useRef"></Route>
                <Route component={ UseLayoutEffect } exact path="/LearnHook/useLayoutEffect"></Route>
                <Route component={ UseImperativeHandle } exact path="/LearnHook/useImperativeHandle"></Route>
            </Layout>
        </>
    )
}

export default  LearnHook
