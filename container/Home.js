// import React, { Component } from 'react'
// import {Link,Route} from 'react-router-dom';  
// import All from './All';
// import jinghua from './jinghua';
// import share from './share'
// import ask from './ask'
// import money from './money'
// import test from './test'
// export default class home extends Component {
//     render() {
//         let {url}=this.props.match.url;
//         return (
//             <div>
//                 <div className="header2">
//                     <div className="choose"><Link to='/home/all/1'>全部</Link></div>
//                     <div className="choose"><Link to='/home/jinghua/1'>精华</Link></div>
//                     <div className="choose"><Link to='/home/share/1'>分享</Link></div>
//                     <div className="choose"><Link to='/home/ask/1'>问答</Link></div>
//                     <div className="choose"><Link to='/home/money/1'>招聘</Link></div>
//                     <div className="choose"><Link to='/home/test/1'>客户端测试</Link></div>

//                 </div>

//                 <div>
//                     <Route path='/home/all/:id' component={All}/>
//                     <Route path='/home/jinghua/:id' component={jinghua}/>
//                     <Route path='/home/share/:id' component={share}/>
//                     <Route path='/home/ask/:id' component={ask}/>
//                     <Route path='/home/money/:id' component={money}/>
//                     <Route path='/home/test/:id' component={test}/>

//                 </div>
//             </div>
//         )
//     }
// }

import React, { Component } from 'react'

export default class Home extends Component {
    constructor(){
        super();
        //设置属性
        this.btns=[
            {title:'全部',tab:'all'},
            {title:'精华',tab:'good'},
            {title:'分享',tab:'share'},
            {title:'招聘',tab:'job'},
            {title:'问答',tab:'ask'},
        ]
        this.state={
            data:[],
            tab:'all'
        }
    }
    componentDidMount(){
        fetch('https://cnodejs.org/api/v1/topics?tab=all&&page='+page)
            .then((res)=>res.json())
             .then((res)=>{
                this.setState({
                    data:res.data
                })
            
            })  
    }
    getData=(tab,page)=>{
        this.setState({
            tab:tab
        })
        fetch('https://cnodejs.org/api/v1/topics?tab='+tab+"&page="+page)
            .then((res)=>res.json())
             .then((res)=>{
                this.setState({
                    data:res.data
                })
            })  
    }
    render() {
        return (
            <div>
                <div>
                    {
                        this.btns.map(item=>(
                            <button onClick={()=>this.getData(item.tab)} key={index}>{item.title}</button>
                        ))
                    }
                </div>
                <div>
                    {
                        this.state.data.map(item=>{
                            <li key={item.id}>
                                <img style={{width:30}} src={item.author.avatar_url}/>
                                <span>{item.reply_count}</span>
                                <span>{item.visit_count}</span>
                                <span>{item.title}</span>

                            </li>
                        })
                    }
                </div>
                <div>
                    {
                        [1,2,3,4,5,6,7,8,9,10].map(item=>(
                            <button onClick={()=>this.getData(this,state.tab,item)}>
                            </button>
                        ))
                    }
                </div>
            </div>
        )
    }
}

