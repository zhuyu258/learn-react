import reducer from "./reducer"
import { createStore } from "redux"
import {addUserInfoAction} from "./action/userInfo-action"

const state = createStore(reducer)
state.dispatch(addUserInfoAction({id:123,name:'test'}))
