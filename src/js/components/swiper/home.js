import React, { Component } from 'react';
import Swiper from './index'

class SwiperHome extends Component {


  render() {
    return (
      <>
        <p>轮播图</p>
        <Swiper
          imgSrcArr={['http://img4.imgtn.bdimg.com/it/u=2350302849,3323337377&fm=26&gp=0.jpg',
                      'http://img0.imgtn.bdimg.com/it/u=452966427,3842240659&fm=26&gp=0.jpg',
                      'http://img3.imgtn.bdimg.com/it/u=309842420,1506146809&fm=26&gp=0.jpg',
                      'http://img0.imgtn.bdimg.com/it/u=112693113,3147345699&fm=26&gp=0.jpg',
                      'http://img4.imgtn.bdimg.com/it/u=2350302849,3323337377&fm=26&gp=0.jpg'
                    ]}
          imgWidth={600}
          imgHeight={400}
          isAuto
        />
      </>
    );
  }
}

export default SwiperHome;
