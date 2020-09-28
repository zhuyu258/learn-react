import { createStore, bindActionCreators, applyMiddleware } from "redux"
import logger from 'redux-logger'  // 打印日志的中间件
import thunk from 'redux-thunk'  // 在redux中使用异步函数的中间件
import createSagaMiddleware  from 'redux-saga' // 在redux中使用sage中间件处理异步函数
import rootSageTask from './saga/index'
import * as numberAction from "./action/number-action"
import type from "./action/action-type"
import reducer from './reducer'

/*
  执行过程：
  action: 指定执行的描述
  dispatch: 分发action
  store: 仓库
  reducer: 改变state状态
  state: 状态
  createStore：用于创建仓库

  通过dispatch将action分发到store中
  store中自动会根据action执行reducer来改变状态
*/

/*
  reducer 是一个普通的函数,用来改变状态的函数
  @param state 之前的状态
  @param action 描述要做什么
  一个仓库有且仅有一个reducer,为了方便管理reducer单独放在一个文件夹中；
  reducer调用时机：
    1. 通过dispatch分发action的时候会执行reducer
    2. 通过createStore创建仓库的时候会调用reducer初始化状态
  注意：
    reducer必须是一个纯函数，纯函数有利于测试和调试，有利于获取改变之前的值，
    纯函数：不能直接改变参数，不能由异步操作，不能对外部造成影响

  一个项目中可以划分多个reducer,但是最终要合并多个reducer为一个reducer,可以自实现合并
  也可以通过reduc提供的combineReducers进行合并
*/

// 小型项目中直接使用action
// function reducer(state, action){
//   if(action.type === 'increate'){
//     return state + 1
//   }else if(action.type === 'decreate'){
//     return state - 1
//   }
//   return state
// }

// 大型项目中通过单独的创建action文件使用action
// function reducer(state, action){
//   if(action.type === type.INCREATE){
//     return state + action.payload
//   }else if(action.type === type.DECREATE){
//     return state - 1
//   }
//   return state
// }

/*
  createStore 创建创库 指定reducer和初始state 通过applyMiddleware使用中间件
  返回创库对象
*/
// const store = createStore(reducer,10,applyMiddleware(thunk,logger))  // 使用thunk中间件
const sageMid = createSagaMiddleware() // 启动Sage
const store = createStore(reducer,10,applyMiddleware(sageMid,thunk,logger)) // 使用saga中间件
sageMid.run(rootSageTask) // 执行sage任务
/*
  创建action
  就是一个对象 指定type和payload附加数据
  1. action是一个平面对象，它的__proto_指向的是Object.prototype
  2. action中必须要有type属性，该属性用于指定描述操作的类型，但是没有对type类型做出限制
  3. 在大型项目中，为了方便维护，需要将action的type类型单独放在一个文件中eg: action-type.js
  4. 为了方便传递action,通常会通过函数来创建action,并且此函数为纯函数（不影响外部数据，不能是异步）
  5. 为了方便使用函数action来分发action,redux提供了如下函数
      bindActionCreators
      接收两个参数:
        - actions 一个对象，指定多个action，通常是一个action函数的模块
        - dispatch 分发函数
      返回一个对象，此对象包含了第一个参数中的所有Action,可以直接调用这些action来触发分发
*/

const action = {
  type: 'increate'
}

/*
 通过dispatch  action分发到store中
*/
// 字面量创建Action的形式
// store.dispatch(action)

// action函数的形式
store.dispatch(numberAction.getIncreateAction(2))
// store.dispatch(numberAction.getDecreateAction)

// 通过bindActionCreators来给指定的action绑定分发函数，返回一个对象，此对象中包含了numberAction中所有的action
const bindActions = bindActionCreators(numberAction,store.dispatch)
bindActions.getIncreateAction(2) // 直接使用numberAction中的action,自动触发分发

export default store

/*
 redux-saga  中间件

 saga任务：
  saga任务就是一个生成器函数，当这个生成器函数执行完成，那么Saga中间件就执行结束了

 saga指令：
  saga指令就是一个个函数
  1. take: [阻塞]监听指定action的变化，并且返回变化之后的action，只监听一次，然后继续往后执行
  2. all:  [阻塞]执行所有的sage任务，等待所有的任务都执行完成才会继续往下执行，大型saga任务中划分比较细，
           用all进行汇总所有的任务
           传递一个数组，数组中的每一项是迭代器
  3. takeEvery: [不会阻塞]监听指定的Action变化，变化之后执行回调函数,并且是一直监听，所以会导致sage任务不能结束
  4. delay: [阻塞] 指定时间之后执行
  5. put: [不会阻塞] 用于触发action和dispath一样
  6. call: [可能会阻塞] 用于异步函数的执行,ajax请求数据
  7. apply: [可能会阻塞] 用于异步函数的执行，ajax请求数据
    和call区别：
        call:传递的参数可以是数组，可以是对象
          eg:
            call(fn,参数1，参数2...)
            call([self(可选),fn],参数1，参数2...)
            call({content:self,callBack:fn},参数1，参数2...)
              self: 传递给函数内部使用的this
              fn: 一个 Generator 函数, 或者返回 Promise 的普通函数
        apply：传递的参数
          eg:
            apply(self,fn,[...参数])
    注意：
      如果call和apply中的异步函数返回reject失败，那么saga内部会使用throw抛出错误，
      所以一般都会使用try cathch进行捕获
  8. select: 获取当前仓库中的store数据
  9. cps: [可能阻塞] 用于处理传统的异步回调
  10. fork: 开启一个新的任务(相当于开启一个新的线程)和之前的任务同时进行，不会阻塞，
            该函数需要传递一个生成器，并且返回一个task对象
  11. cancel:取消一个或多个任务，可以不传递参数，表示取消当前任务
  12. takeLastest: 和taskEvery一样，只不过在每次开始的时候会自动取消掉之前的任务
  13. cancelled: 判断当前任务是否被取消掉
  14. race: [阻塞] 竞赛，传递多个指令，当其中一条指令结束之后就会终止其他指令的执行

*/

/*
  react-redux
  用于连接react和redux
  1. connect(mapStateToProps,mapDispatchToProps)(组件)
      返回一个高阶组件，用于连接仓库和组件
      参数：
       -. mapStateToProps(state，传递的数据)
          映射Store中的属性到组件中，函数返回的对象中的属性会传递到组件中
       -. mapDispatchToProps(dispatch，传递的数据)
          映射store中的dispatch到组件中，函数传递的对象中的属性会传递到组件中
       如果不传递mapDispatchToProps，组件可以接受一个dispatch属性

*/
