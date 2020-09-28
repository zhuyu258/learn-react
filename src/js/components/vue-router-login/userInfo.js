export default {
  userInfo: false,
  login: function(){
    console.log(this)
    this.userInfo = true
  },
  loginOut: function(){
    this.userInfo = false
  }
}
