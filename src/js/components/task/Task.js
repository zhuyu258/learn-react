import React, { Component,PureComponent } from 'react';
import TypeProps from 'prop-types'

/*

  1. 纯组件,用于避免不必要的渲染(运行render),从而提高效率
  优化：
      如果一个组件的属性和状态，都没有发生变化，那么这个
      组件就没有必要重新渲染

  纯组件是一个组件，如果某个组件继承自该组件，则该组件
  的shouldComponentUpdate会进行优化，对属性和状态进行浅比较
  如果相等则不会重新渲染

  类组件中继承PureComponent使得当前组件为纯组件

  函数组件中使用React.memo使得当前组件为纯组件

  注意：
      1. PureComponent进行浅比较
        1. 为了效率尽量使用PureComponent
        2. 不要改动之前的状态，永远是创建一个新的状态覆盖之前
           的状态，再改变状态中的数据
      2. 对于函数组件使用React.memo函数制作纯组件

      1.PureComponent的实现原理

        //浅比较，只比较对象的属性值是否相等 手动实现PureComonent的浅比较
          ObjectEqual(obj1,obj2){
            for (var variable in obj1) {
              if (!Object.is(obj1[variable],obj2[variable])) {
                return false
              }
            }
            return true
          }
          // 如果属性和状态都没有变化就不重新渲染 手动实现PureComonent
          shouldComponentUpdate(nextProps,nextState){
            if(this.ObjectEqual(this.props,nextProps) && this.ObjectEqual(this.state,nextState)){
              return false
            }
            return true
          }

        2.React.memo的实现原理
        function Memo(funcCom){
          return class Memo extends PureComponent{
            render(){
              return <funcCom {}...this.props} />
            }
          }
        }

*/

// 函数组件
function Task(props){
  let { name, isFinished } = props
  return (
    <li style={{color: isFinished ? 'green' : 'red'}}>
      {name}
    </li>
  );
}
Task.propTypes = {
  name: TypeProps.string.isRequired,
  isFinished: TypeProps.bool.isRequired
}
//函数组件使用React.memo()创建纯组件
export default React.memo(Task)

// React.memo的实现原理
function Memo(funcCom){
  return class Memo extends PureComponent{
    render(){
      return <funcCom {...this.props} />
    }
  }
}

// 类组件
// class Task extends Component {
//   static propTypes = {
//     name: TypeProps.string.isRequired,
//     isFinished: TypeProps.bool.isRequired
//   }
//
//  // 浅比较，只比较对象的属性值是否相等 手动实现PureComonent的浅比较
//   ObjectEqual(obj1,obj2){
//     for (var variable in obj1) {
//       if (!Object.is(obj1[variable],obj2[variable])) {
//         return false
//       }
//     }
//     return true
//   }
//   // 如果属性和状态都没有变化就不重新渲染 手动实现PureComonent
//   shouldComponentUpdate(nextProps,nextState){
//     if(this.ObjectEqual(this.props,nextProps) && this.ObjectEqual(this.state,nextState)){
//       return false
//     }
//     return true
//   }
//
//   render() {
//     console.log('task render')
//     let { name, isFinished } = this.props
//     return (
//       <li style={{color: isFinished ? 'green' : 'red'}}>
//         {name}
//       </li>
//     );
//   }
// }
//
// export default Task;
