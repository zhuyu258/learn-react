import React from 'react'
import { connect } from 'react-redux'
import { getIncreateAction, getDecreateAction} from '../../../redux/action/number-action'
import Store from '../../../redux/index'


function Counter (props) {
  return <div>
    <p>{props.number}</p>
    <p onClick={props.add}>加1</p>
    <p onClick={props.reduce}>减1</p>
  </div>
}


function mapDispatchToProps(dispatch){
  return {
    add(){
      dispatch(getIncreateAction(1))
    },
    reduce(){
      dispatch(getDecreateAction(1))
    }
  }
}

function mapStateToProps(state){
  return {
    number: state.number
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter) // 连接Store和组件

// 自实现connect
// export default class CounterContainer extends React.Component{
//   constructor(props){
//     super(props)
//     this.state = mapStateToProps(Store.getState())
//     Store.subscribe(()=>{ // 监听store的变化更新数据
//       this.setState(mapStateToProps(Store.getState()))
//     })
//   }
//   render(){
//     const events = mapDispatchToProps(Store.dispatch)
//     return <Counter {...this.state} {...events} />
//   }
// }
