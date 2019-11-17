import React from 'react';
// import ReactDOM from 'react-dom';
import { TabBar } from 'antd-mobile';
import AppHome from './AppHome'
import AppMy from './AppMy'
import AppNear from './AppNear'
export default class AppTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'home',
    };
  }
  render() {
    return (
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
        >
          <TabBar.Item
            title="首页"
            key="Life"
            icon={<i style={{fontSize:22}} className='iconfont icon-home'></i>
            }
            selectedIcon={
                <i style={{fontSize:22}} className='iconfont icon-home'></i>
            }
            selected={this.state.selectedTab === 'home'}
            onPress={() => {
              this.setState({
                selectedTab: 'blueTab',
              });
            }}
          >
            {/* 首页 */}
            <AppHome/>
          </TabBar.Item>
          <TabBar.Item
            icon={<i style={{fontSize:22}} className='iconfont icon-shangcheng'></i>
          }
          selectedIcon={
              <i style={{fontSize:22}} className='iconfont icon-shangcheng'></i>
          }
            title="商城"
            key="Koubei"
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
              });
            }}
          >
            {/* 商城 */}
            <AppMy/>
          </TabBar.Item>
          <TabBar.Item
             icon={<i style={{fontSize:22}} className='iconfont icon-shouye'></i>
            }
            selectedIcon={
                <i style={{fontSize:22}} className='iconfont icon-shouye'></i>
            }
            title="Friend"
            key="Friend"
            dot
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
              });
            }}
          >
            {/* 灵感 */}
          </TabBar.Item>
          <TabBar.Item
            icon={<i style={{fontSize:22}} className='iconfont icon-linggan'></i>
          }
          selectedIcon={
              <i style={{fontSize:22}} className='iconfont icon-linggan'></i>
          }
            title="灵感"
            key="my"
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'yellowTab',
              });
            }}
          >
            {/* 我的 */}
            <AppNear/>
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}