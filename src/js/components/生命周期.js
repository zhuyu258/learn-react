

/*
   1. constructor  被废弃
       同一个组件对象只会创建一次
       避免构造函数中使用setState

   1. componentWillMount(){}  被废弃
        组件将要被挂载的时候执行,
        正常情况下只执行一次，特殊情况下可能被执行多次

   2.  render(){}   经常使用
          生成虚拟DOM，并且挂载到虚拟DOM树上，组件挂载的时候执行，当数据改变
          的时候都会执行这个函数，所以如果有些东西只执行一次，最好不要放在这里，
          放在只执行一次的生命周期函数中componentDidMount
          禁止使用setState会导致无线循环


   2. componentDidMount(){ ajax数据的请求放在这里 }  常用
          组件被挂载之后执行，只执行一次，通常网络请求，启动计时器
          等一开始需要的操作

   state 和 props数据的更新
   4.shouldComponentUpdate(nextProps,nextState)  常用
     { return false/true }
       组件更新是否更新 ，通过true或false指定，
       默认情况下，直接返回true

   5.componentWillUpdate(){}  不常用
        shouldComponentUpdate返回true就执行这步，
        组件更新之前 ，然后执行render()

   6.componentDidUpdata(){}  不常用
          组件更新之后，往往此函数中操作DOM

   7.componentWillReceiveProps(){}  不常用
         父组件传递的数据更新的时候，子组件的这个方法会执行，
         初始化的时候不执行，不推荐使用

   8.componentWillUnmount(){}  常用
          组件将要被移出的时候

   新生命周期
   1. getDerivedStateFromProps
        通过参数可以获取新的属性和状态
        该函数是静态的
        该函数的返回值会覆盖掉组件状态
        该函数几乎是没有什么用

   2. getSnapshotBeforeUpdate
        真实的DOM构建完成，但是还未实际渲染到页面中
        在该函数中，通常用于实现一些附加的dom操作
        该函数的返回值，会作为componentDidUpdate的第三个参数
*/

//子组件中使用shouldComponentUpdate,可以优化性能

  shouldComponentUpdate(nextProps,nextState){
    if(nextProps.父组件数据属性名 != this.props.父组件数据属性名){  //判断传递的数据是否改变
      return true  //改变就继续往下执行下面的生命周期
    }
    return false;
  }
