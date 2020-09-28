import React from 'react'
import { Provider } from 'react-redux'
import Store from '../../../redux/index'
import Counter from './counter'

export default function reduxHome(){
  return <>
    <Provider store={Store}>
      <Counter />
    </Provider>
  </>
}
