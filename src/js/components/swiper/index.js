import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';
import Contanter from './contanter';
import Arrow from './arrow';
import Dot from './dot';

class Swiper extends Component {

  static defaultProps = {
    imgSrcArr: [],
    imgWidth: 600,
    imgHeight: 400,
    fragmentTimer: 600,
    isAuto: true,
    autoTimer: 2000
  }

  static propTypes = {
    imgSrcArr: PropTypes.arrayOf(PropTypes.string).isRequired,
    imgWidth: PropTypes.number.isRequired,
    imgHeight: PropTypes.number.isRequired,
    isAuto: PropTypes.bool,
    autoTimer: PropTypes.number,
    fragmentTimer: PropTypes.number,
  }
  //定义并初始化属性
  state = {
    index: 0  //当前第几张图片的索引
  }

  componentDidMount(){
    this.props.isAuto && this.autoMove()
  }
  componentWillUnmount(){
    clearInterval(this.timer)
  }
  //自动轮播
  autoMove = ()=>{
    this.timer = setInterval(()=>{
        let index = this.state.index
        index = (index + 1)%this.props.imgSrcArr.length
        this.moveDot(index)
    },this.props.autoTimer)
  }

  //通过ref获取到Contanter类的实例对象
  Contanter = el =>{
    this.ContanterRef = el
  }
  //点击左右箭头切换上下张
  moveTo = (val) => {
    const { imgSrcArr } = this.props
    let currIndex = this.state.index
    if(val === 'left'){
      currIndex--;
      if(currIndex < 0){
        currIndex = imgSrcArr.length - 1
      }
    }else{
      currIndex++;
      if(currIndex > imgSrcArr.length - 1){
        currIndex = 0
      }
    }
    this.setState({
      index: currIndex
    })
    //调用contanter实例下的方法进行切换
    this.ContanterRef.switchTo(currIndex)
  }

  //点击点
  moveDot = index =>{
    this.setState({
      index: index
    })
    this.ContanterRef.switchTo(index)
  }

  render() {
    let {imgSrcArr, imgWidth, imgHeight,fragmentTimer} = this.props
    return (
      <div className="swiperWrap"
            style={{
              width: imgWidth,
              height: imgHeight
            }}
            onMouseEnter={()=>{
              clearInterval(this.timer)
            }}
            onMouseLeave={()=>{
              this.props.isAuto && this.autoMove()
            }}
      >
        <Contanter
          ref={this.Contanter}
          imgSrcArr={imgSrcArr}
          imgWidth={imgWidth}
          imgHeight={imgHeight}
          fragmentTimer={fragmentTimer}
        />
       <Arrow moveTo={this.moveTo} />
       <Dot len={imgSrcArr.length} cur={this.state.index} move={this.moveDot}/>
      </div>
    );
  }
}

export default Swiper;
