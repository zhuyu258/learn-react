/*
   mixin的作用：
      实现所有组件之间的共有方法
      组件之间公共的方法可以提取到minxin中
      mixin中也有生命周期

   使用：
      cnpm install --save react-mixin@2
      导入 import ReactMinxin from "react-mixin";
      导入minxin页面 import minxin from "./minxin"
      //minxin挂载到当前组件中
      ReactMinxin(Children.prototype,publicMethods);
      //使用minxin中的方法
      publicMethods.tip()
*/


 const publicMethods = {
   tip(){
     console.log("minxin中的方法")
   }
 }

export default publicMethods;
