//1. 所有的事件函数都放在constructor函数中，初始化的时候只执行一次，放到jsx中，当数据改变的时候就要渲染一次

    constructor(){

      this.a = this.a.bind(this)
    }
    a(){  //事件函数

    }

//2. setState函数执行是异步的，一定时间内多次修改可以合并执行一次

//3.shouldComponentUpdate(nextProps,nextState){ return false/true } 判断当前数据和nextProps/nextState是否一样，从而实现
//  判断数据是否被修改，修改就返回true继续执行下面的生命周期，否则就返回false阻止继续执行


/*4. render(){}  组件挂载的时候执行，当数据改变的时候都会执行这个函数，所以如果有些东西只执行一次，最好不要放在这里，放在只执行一次
                的生命周期函数中componentDidMount

      componentDidMount(){ ajax数据的请求放在这里 }   组件被挂载之后执行
*/
