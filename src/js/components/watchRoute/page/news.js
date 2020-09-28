import React from 'react'

export default function News(props){
  function go(page){
    props.history.push(page)
  }
  return(
    <>
      <prev>
        1. listen
            添加一个监听器，监听路由的变化，当路由发生变化的时候，会执行回调函数
            参数： 一个函数
            参数中的参数：
                -location: 跳转到的页面的信息
                -action: 跳转的方式
            函数会返回一个取消监听的函数，通过执行这个函数可以取消对路由的监听
            执行时机：在页面发生跳转之前，可以通过props获取当前页面路由的信息

            使用：
              cosnt unListen = this.props.history.listen((location,action)=>{})

        2. block
            阻塞路由的变化(页面的跳转)
            参数：
                一个字符串，或者一个函数返回一个字符串
                如果是函数，函数接收两个参数
                  -location: 跳转到的页面的信息
                  -action: 跳转的方式
            使用：
              this.props.history.block('传递信息')
              或
              this.props.history.block((location,action)=>'')

        2. getUserConfirmation
            参数：函数
            参数中的参数：
              -msg: 接收block传递的信息
              -callBack: 继续往下执行的函数并且回调函数要传递true则跳转，否则阻塞

            使用:
              this.props.history.block('传递信息')


            注意：它需要和block配合使用，单独使用无效

      </prev>
      <p onClick={()=>{go('/WatchRoute/details')}}>进入详情</p>
    </>
  )
}
