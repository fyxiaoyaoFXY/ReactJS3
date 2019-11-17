import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile';
import { SearchBar, Button, WhiteSpace} from 'antd-mobile';
import { Carousel, WingBlank } from 'antd-mobile';
import { Grid } from 'antd-mobile';
const data = Array.from(new Array(4)).map((_val, i) => ({
  icon: '../img/cap.png',
  text: `name${i}`,
}));

const data1 = Array.from(new Array(10)).map(() => ({
  icon: '../img/tubiao.png',
}));


export default class AppMy extends Component {
  state = {
    data: ['1', '2', '3'],
    imgHeight: 176,
  }
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ['1', '2', '3'],
      });
    }, 100);
  }

  render() {
    return (
      <div>
        <NavBar style={{background:'#3fcccb'}}
                    mode="dark"
                    >商城</NavBar>
        <SearchBar style={{float:'top',opacity:'0.4'}} placeholder="输入关键字搜索" maxLength={8} />
        <div style={{width:'100%'}}>
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
                src={`../img/banner.png`}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
        </div>
        <Grid data={data1}
          columnNum={5}
          renderItem={dataItem => (
            <div style={{height:'70px'}}>
              <img src={dataItem.icon} style={{ width: '50px', height: '50px' }} alt="" />
              <div style={{ color: '#888', fontSize: '14px', marginTop: '12px' }}>
                <span>桌</span>
              </div>
            </div>
          )}
        />
        <Grid data={data}
          columnNum={2}
          renderItem={dataItem => (
            <div style={{height:'70px'}}>
              <img src={dataItem.icon} style={{ width: '120px', height: '120px' }} alt="" />
              <div style={{ color: '#888', fontSize: '12px', marginTop: '12px' }}>
                <span>Top Art Studio 欧式风格精细...</span>
              </div>
            </div>
          )}
        />
        {/* <div style={{width:'100%',background:'#eee'}}>
            <div style={{width:'45%',background:'#eee','margin-left':'10px',display:'block'}}>
              <img src='../cap.png' style={{'margin-left':'10px','margin-top':'10px'}}/>
            </div>
            <div style={{width:'45%',background:'#eee','margin-left':'10px'}}>
              <img src='../cap.png' style={{'margin-top':'10px'}}/>            
              </div>
        </div>
        <div style={{'font-size':'12px','padding-left':'3px'}}>
        <p>Top Art Studio 欧式风格精细...Top Art Studio 欧式风格精细...</p>
        <p>￥39.95</p> */}


        {/* </div> */}
      </div>
    )
  }
}
