import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css'

class Contanter extends Component {

  static propTypes = {
    imgSrcArr: PropTypes.arrayOf(PropTypes.string).isRequired,
    imgWidth: PropTypes.number.isRequired,
    imgHeight: PropTypes.number.isRequired,
    fragmentTimer: PropTypes.number.isRequired,
  }

  //获取contanter的ref
  contanterRef = el =>{
    this.contanter = el
  }

  //切换到具体索引下的动画 动画的实现通过marginLeft的距离
  switchTo(index){
    if(index < 0){
      index = 0
    }else if(index > this.props.imgSrcArr.lenght - 1){
      index = this.props.imgSrcArr.lenght - 1
    }
    //移动到的目标距离marginLEft
    let targetVal = -index * this.props.imgWidth
    //当前的marginLeft
    let curLeft = parseFloat(getComputedStyle(this.contanter).marginLeft)
    //移动的距离
    let totalDis = targetVal - curLeft
    // 每次移动的时间单位
    let minTime = 100
    // 移动的总时间 除以每次移动的时间单位 计算出一共要移动几次
    let num = Math.ceil(this.props.fragmentTimer/minTime)
    // 移动的距离 除以 一共要移动几次 计算出时间单位移动的距离
    let dis = totalDis/num
    //当前移动的次数
    let curNum = 0
    clearInterval(this.timer)
    this.timer = setInterval(()=>{
      curNum++
      curLeft += dis
      this.contanter.style.marginLeft = curLeft + 'px'
      if(curNum === num){
        this.contanter.style.marginLeft = targetVal + 'px'
        clearInterval(this.timer)
      }
    },minTime)



  }

  render() {
    let {imgSrcArr, imgWidth, imgHeight} = this.props
    let imgArr = imgSrcArr.map((item,index)=>{
      return <img style={{ width:imgWidth,height: imgHeight  }}
                  key={item + index} className="item" src={item}
            alt="" />
    })
    return (
      <div ref={this.contanterRef} className="contanter" style={{
        width: imgWidth * imgSrcArr.length,
        height: imgHeight
      }}>
        {imgArr}
      </div>
    );
  }
}

export default Contanter;
