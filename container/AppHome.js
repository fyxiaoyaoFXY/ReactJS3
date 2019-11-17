import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile';
import { Carousel, WingBlank } from 'antd-mobile';


export default class AppHome extends Component {
  //轮播图
  state = {
    data: ['1', '2'],
    imgHeight: 176,
  }
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ['1', '2'],
      });
    }, 100);
  }
  render() {
    return (
      <div>
        <NavBar style={{background:'#3fcccb'}}
          mode="dark"
        >住吧家居</NavBar>
        <WingBlank>
        <Carousel
          autoplay={true}
          infinite
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >
          {this.state.data.map(val => (
            <a
              key={val}
              href="http://www.alipay.com"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={`../${val}.jpg`}
                alt=""
                style={{ width: '100%', height:'200px',verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
      </WingBlank>
      <div style={{width:'100%',height:'140px',background:'#eeeeee','margin-top':'20px'}}>
          <img src='../zj1.png' style={{width:'100px',height:'100px','margin-left':'15px','margin-top':'20px'}}/>
          <img src='../zj2.png' style={{width:'100px',height:'100px','margin-left':'15px','margin-top':'20px'}}/>
          <img src='../zj3.png' style={{width:'100px',height:'100px','margin-left':'15px','margin-top':'20px'}}/>
      </div>
      <div style={{width:'100%',height:'40px'}}>
        <div style={{width:'5px',height:'20px',background:'#3fcccb','margin-top':'20px',display:'block'}}></div>
        热点推荐
        <img src='../last.png' style={{width:'100%'}}/>
      </div>
      {/* <img src='../last.png'/> */}
      </div>
    )
  }
}
