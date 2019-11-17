import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile';
import { Tabs, WhiteSpace } from 'antd-mobile';

export default class AppNear extends Component {
    renderContent = tab =>
    (<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
      <p>Content of {tab.title}</p>
    </div>);
    render() {
        const tabs = [
            { title: '推荐' },
            { title: '冬季' },
            { title: '宜家' },
            { title: '小清新' },
            { title: '小户型' },
            { title: '个性色彩' },
            { title: '简约' },
            { title: '温暖' },
            { title: '强悍' },
          ];
        return (
            <div>
                <NavBar style={{background:'#3fcccb'}}
                    mode="dark"
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                       
                      ]}
                    >灵感</NavBar>
                    <Tabs style={{background:'#eee'}} tabs={tabs} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={5} />}>
                        <div style={{width:'100%',background:'#eee'}}>
                            <img src='../sp.png' style={{height:'160px',width:'160px','margin-left':'13px','margin-top':'10px'}}/>
                            <img src='../sp.png' style={{height:'160px',width:'160px','margin-left':'13px','margin-top':'10px'}}/>
                            <img src='../sp.png' style={{height:'160px',width:'160px','margin-left':'13px','margin-top':'10px'}}/>
                            <img src='../sp.png' style={{height:'160px',width:'160px','margin-left':'13px','margin-top':'10px'}}/>
                            <img src='../sp.png' style={{height:'160px',width:'160px','margin-left':'13px','margin-top':'10px'}}/>
                            <img src='../sp.png' style={{height:'160px',width:'160px','margin-left':'13px','margin-top':'10px'}}/>
                        </div>
                        <div style={{width:'100%',background:'#eee'}}>
                            <img src='../sp.png' style={{height:'160px',width:'160px','margin-left':'13px','margin-top':'10px'}}/>
                            <img src='../sp.png' style={{height:'160px',width:'160px','margin-left':'13px','margin-top':'10px'}}/>
                            <img src='../sp.png' style={{height:'160px',width:'160px','margin-left':'13px','margin-top':'10px'}}/>
                            <img src='../sp.png' style={{height:'160px',width:'160px','margin-left':'13px','margin-top':'10px'}}/>
                            <img src='../sp.png' style={{height:'160px',width:'160px','margin-left':'13px','margin-top':'10px'}}/>
                            <img src='../sp.png' style={{height:'160px',width:'160px','margin-left':'13px','margin-top':'10px'}}/>
                        </div><div style={{width:'100%',background:'#eee'}}>
                            <img src='../sp.png' style={{height:'160px',width:'160px','margin-left':'13px','margin-top':'10px'}}/>
                            <img src='../sp.png' style={{height:'160px',width:'160px','margin-left':'13px','margin-top':'10px'}}/>
                            <img src='../sp.png' style={{height:'160px',width:'160px','margin-left':'13px','margin-top':'10px'}}/>
                            <img src='../sp.png' style={{height:'160px',width:'160px','margin-left':'13px','margin-top':'10px'}}/>
                            <img src='../sp.png' style={{height:'160px',width:'160px','margin-left':'13px','margin-top':'10px'}}/>
                            <img src='../sp.png' style={{height:'160px',width:'160px','margin-left':'13px','margin-top':'10px'}}/>
                        </div><div style={{width:'100%',background:'#eee'}}>
                            <img src='../sp.png' style={{height:'160px',width:'160px','margin-left':'13px','margin-top':'10px'}}/>
                            <img src='../sp.png' style={{height:'160px',width:'160px','margin-left':'13px','margin-top':'10px'}}/>
                            <img src='../sp.png' style={{height:'160px',width:'160px','margin-left':'13px','margin-top':'10px'}}/>
                            <img src='../sp.png' style={{height:'160px',width:'160px','margin-left':'13px','margin-top':'10px'}}/>
                            <img src='../sp.png' style={{height:'160px',width:'160px','margin-left':'13px','margin-top':'10px'}}/>
                            <img src='../sp.png' style={{height:'160px',width:'160px','margin-left':'13px','margin-top':'10px'}}/>
                        </div><div style={{width:'100%',background:'#eee'}}>
                            <img src='../sp.png' style={{height:'160px',width:'160px','margin-left':'13px','margin-top':'10px'}}/>
                            <img src='../sp.png' style={{height:'160px',width:'160px','margin-left':'13px','margin-top':'10px'}}/>
                            <img src='../sp.png' style={{height:'160px',width:'160px','margin-left':'13px','margin-top':'10px'}}/>
                            <img src='../sp.png' style={{height:'160px',width:'160px','margin-left':'13px','margin-top':'10px'}}/>
                            <img src='../sp.png' style={{height:'160px',width:'160px','margin-left':'13px','margin-top':'10px'}}/>
                            <img src='../sp.png' style={{height:'160px',width:'160px','margin-left':'13px','margin-top':'10px'}}/>
                        </div><div style={{width:'100%',background:'#eee'}}>
                            <img src='../sp.png' style={{height:'160px',width:'160px','margin-left':'13px','margin-top':'10px'}}/>
                            <img src='../sp.png' style={{height:'160px',width:'160px','margin-left':'13px','margin-top':'10px'}}/>
                            <img src='../sp.png' style={{height:'160px',width:'160px','margin-left':'13px','margin-top':'10px'}}/>
                            <img src='../sp.png' style={{height:'160px',width:'160px','margin-left':'13px','margin-top':'10px'}}/>
                            <img src='../sp.png' style={{height:'160px',width:'160px','margin-left':'13px','margin-top':'10px'}}/>
                            <img src='../sp.png' style={{height:'160px',width:'160px','margin-left':'13px','margin-top':'10px'}}/>
                        </div><div style={{width:'100%',background:'#eee'}}>
                            <img src='../sp.png' style={{height:'160px',width:'160px','margin-left':'13px','margin-top':'10px'}}/>
                            <img src='../sp.png' style={{height:'160px',width:'160px','margin-left':'13px','margin-top':'10px'}}/>
                            <img src='../sp.png' style={{height:'160px',width:'160px','margin-left':'13px','margin-top':'10px'}}/>
                            <img src='../sp.png' style={{height:'160px',width:'160px','margin-left':'13px','margin-top':'10px'}}/>
                            <img src='../sp.png' style={{height:'160px',width:'160px','margin-left':'13px','margin-top':'10px'}}/>
                            <img src='../sp.png' style={{height:'160px',width:'160px','margin-left':'13px','margin-top':'10px'}}/>
                        </div><div style={{width:'100%',background:'#eee'}}>
                            <img src='../sp.png' style={{height:'160px',width:'160px','margin-left':'13px','margin-top':'10px'}}/>
                            <img src='../sp.png' style={{height:'160px',width:'160px','margin-left':'13px','margin-top':'10px'}}/>
                            <img src='../sp.png' style={{height:'160px',width:'160px','margin-left':'13px','margin-top':'10px'}}/>
                            <img src='../sp.png' style={{height:'160px',width:'160px','margin-left':'13px','margin-top':'10px'}}/>
                            <img src='../sp.png' style={{height:'160px',width:'160px','margin-left':'13px','margin-top':'10px'}}/>
                            <img src='../sp.png' style={{height:'160px',width:'160px','margin-left':'13px','margin-top':'10px'}}/>
                        </div><div style={{width:'100%',background:'#eee'}}>
                            <img src='../sp.png' style={{height:'160px',width:'160px','margin-left':'13px','margin-top':'10px'}}/>
                            <img src='../sp.png' style={{height:'160px',width:'160px','margin-left':'13px','margin-top':'10px'}}/>
                            <img src='../sp.png' style={{height:'160px',width:'160px','margin-left':'13px','margin-top':'10px'}}/>
                            <img src='../sp.png' style={{height:'160px',width:'160px','margin-left':'13px','margin-top':'10px'}}/>
                            <img src='../sp.png' style={{height:'160px',width:'160px','margin-left':'13px','margin-top':'10px'}}/>
                            <img src='../sp.png' style={{height:'160px',width:'160px','margin-left':'13px','margin-top':'10px'}}/>
                        </div><div style={{width:'100%',background:'#eee'}}>
                            <img src='../sp.png' style={{height:'160px',width:'160px','margin-left':'13px','margin-top':'10px'}}/>
                            <img src='../sp.png' style={{height:'160px',width:'160px','margin-left':'13px','margin-top':'10px'}}/>
                            <img src='../sp.png' style={{height:'160px',width:'160px','margin-left':'13px','margin-top':'10px'}}/>
                            <img src='../sp.png' style={{height:'160px',width:'160px','margin-left':'13px','margin-top':'10px'}}/>
                            <img src='../sp.png' style={{height:'160px',width:'160px','margin-left':'13px','margin-top':'10px'}}/>
                            <img src='../sp.png' style={{height:'160px',width:'160px','margin-left':'13px','margin-top':'10px'}}/>
                        </div>
                        

                    </Tabs>
            </div>
        )
    }
}
