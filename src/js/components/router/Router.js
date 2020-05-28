/*
  路由组件
      React.Router 为我们提供了两个重要的组件

  1.Router组件
     它本身不做任何展示，仅提供路由模式配置，另外，
     该组件会产生一个上下文，上下文中会提供一些实用
     的对象和方法，供其他相关组件使用

     1. HashRouter: 该组件使用hash模式匹配
     2. BrowserRouter：该组件使用BrowserHistory
                       模式匹配
     通常情况下，Router组件只有一个，将该组件包裹在整个页面

  2.Route组件
    根据不同的地址，展示不同的组件

    重要属性：
      1. path: 匹配的路径
         1. 默认情况下，不区分大小写，可以设置sensitive属性
            为true来区分大小写

         2. 默认情况下，只有匹配初始目录，如果要精确匹配，
            设置exact属性为true

         3. 如果不写path,则会匹配任意路径

      2. component: 匹配成功后要显示的组件

      3. children
         1. 传递React元素，无论是否匹配，一定会显示，并且会忽略
            component属性

         2. 传递一个函数，该函数有多个参数，这些参数来自于上下文，
            该函数返回react元素，则一定会显示返回的元素，并且忽略
            component属性

  3. Switch组件
       写到Switch组件中的Route组件，当匹配到第一个Route后。会立即
       停止继续往下匹配；

       由于Switch组件会循环子元素，去寻找匹配的元素，所以在Switch
       中不能写Route之外的其他组件

  4. 路由信息
        Router组件会创建一个上下文，并且向上下文注入一些信息，
        该上下文对开发者是隐藏的，Route组件若匹配到了地址，则会
        将这些上下文中的信息作为属性传递对应的组件

     4.1 history对象
         提供了一些操作路由的方法
         push(url,state)：将指定的新地址入栈，(历史记录栈)
           url:新的地址
           state:可选，附带的状态数据
         replace(url,state): 将指定的新地址替换掉当前的地址
           url:新的地址
           state:可选，附带的状态数据
         go() 与window.history对象中的go一样
         forward() 与window.history对象中的forward一样
         goBack() 回到上一个路径

     4.2 location对象
          hash: ""  //接收通过hash传递的数据
          key: "urvqw6"
          pathname: "/B" //路径
          search: ""  //接收通过search传递的数据
          state: "b的状态"  //接收通过state传递的数据
         记录了上个页面地址中的相关信息
         通常使用第三方库 query-string 用来解析地址栏中的数据

     4.3 match对象
          存储了当前地址相关的匹配信息
          path: 当前路由中设置的路径
          params: 当前路径中的参数
          url: 当前显示的路径
          isEaxct: 当前路径和路由配置的路径是否是精确匹配

     4.4 向某个页面传递数据的方式
           1. 使用state,在push或replace
           2. 使用search,将参数放在？后
           3. 利用hash,把数据填写到hash后
           4. params,配置路由的时候设置在路径中
              eg: <Route path='/news/:year/:month' />
                或<Route path='/news-:year-:month' /> 可以是任意连接符
                或<Route path='/news/:year?/:month?' />参数是可选的
                或<Route path='/news/:year(正则)/:month(正则)' />
                或<Route path='/news/:year(正则)/:month(正则)/*' />
                或<Route path="['/news','/news/:year','/news/:year']" /> 可以是数组，匹配数组中任一路径
                

     4.5 后代组件中使用路由
           1. 向后代组件中传递props
           2. 使用React-router提供的高阶组件withRouter,包装要使用的组件，
              该组件会返回一个新的组件，新组件将向提供的组件中注入路由信息









*/
