(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{168:function(e,t,i){},171:function(e,t,i){"use strict";i.r(t);var n=i(0),a=i.n(n),p=i(9),r=i.n(p),g=i(15),l=i(16),m=i(18),c=i(17),s=i(19),o=i(10),h=function(e){function t(){var e,i;Object(g.a)(this,t);for(var n=arguments.length,a=new Array(n),p=0;p<n;p++)a[p]=arguments[p];return(i=Object(m.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(a)))).state={data:["1","2"],imgHeight:176},i}return Object(s.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.setState({data:["1","2"]})}),100)}},{key:"render",value:function(){var e=this;return a.a.createElement("div",null,a.a.createElement(o.d,{style:{background:"#3fcccb"},mode:"dark"},"\u4f4f\u5427\u5bb6\u5c45"),a.a.createElement(o.h,null,a.a.createElement(o.a,{autoplay:!0,infinite:!0,beforeChange:function(e,t){return console.log("slide from ".concat(e," to ").concat(t))},afterChange:function(e){return console.log("slide to",e)}},this.state.data.map((function(t){return a.a.createElement("a",{key:t,href:"http://www.alipay.com",style:{display:"inline-block",width:"100%",height:e.state.imgHeight}},a.a.createElement("img",{src:"../img/".concat(t,".jpg"),alt:"",style:{width:"100%",height:"200px",verticalAlign:"top"},onLoad:function(){window.dispatchEvent(new Event("resize")),e.setState({imgHeight:"auto"})}}))})))),a.a.createElement("div",{style:{width:"100%",height:"140px",background:"#eeeeee","margin-top":"20px"}},a.a.createElement("img",{src:"../img/zj1.png",style:{width:"100px",height:"100px","margin-left":"15px","margin-top":"20px"}}),a.a.createElement("img",{src:"../img/zj2.png",style:{width:"100px",height:"100px","margin-left":"15px","margin-top":"20px"}}),a.a.createElement("img",{src:"../img/zj3.png",style:{width:"100px",height:"100px","margin-left":"15px","margin-top":"20px"}})),a.a.createElement("div",{style:{width:"100%",height:"40px"}},a.a.createElement("div",{style:{width:"5px",height:"20px",background:"#3fcccb","margin-top":"20px",display:"block"}}),"\u70ed\u70b9\u63a8\u8350",a.a.createElement("img",{src:"../img/last.png",style:{width:"100%"}})))}}]),t}(n.Component),x=Array.from(new Array(4)).map((function(e,t){return{icon:"../img/cap.png",text:"name".concat(t)}})),d=Array.from(new Array(10)).map((function(){return{icon:"../img/tubiao.png"}})),f=function(e){function t(){var e,i;Object(g.a)(this,t);for(var n=arguments.length,a=new Array(n),p=0;p<n;p++)a[p]=arguments[p];return(i=Object(m.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(a)))).state={data:["1","2","3"],imgHeight:176},i}return Object(s.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.setState({data:["1","2","3"]})}),100)}},{key:"render",value:function(){var e=this;return a.a.createElement("div",null,a.a.createElement(o.d,{style:{background:"#3fcccb"},mode:"dark"},"\u5546\u57ce"),a.a.createElement(o.e,{style:{float:"top",opacity:"0.4"},placeholder:"\u8f93\u5165\u5173\u952e\u5b57\u641c\u7d22",maxLength:8}),a.a.createElement("div",{style:{width:"100%"}},a.a.createElement(o.a,{autoplay:!0,infinite:!0,beforeChange:function(e,t){return console.log("slide from ".concat(e," to ").concat(t))},afterChange:function(e){return console.log("slide to",e)}},this.state.data.map((function(t){return a.a.createElement("a",{key:t,href:"http://www.alipay.com",style:{display:"inline-block",width:"100%",height:e.state.imgHeight}},a.a.createElement("img",{src:"../img/banner.png",alt:"",style:{width:"100%",verticalAlign:"top"},onLoad:function(){window.dispatchEvent(new Event("resize")),e.setState({imgHeight:"auto"})}}))})))),a.a.createElement(o.b,{data:d,columnNum:5,renderItem:function(e){return a.a.createElement("div",{style:{height:"70px"}},a.a.createElement("img",{src:e.icon,style:{width:"50px",height:"50px"},alt:""}),a.a.createElement("div",{style:{color:"#888",fontSize:"14px",marginTop:"12px"}},a.a.createElement("span",null,"\u684c")))}}),a.a.createElement(o.b,{data:x,columnNum:2,renderItem:function(e){return a.a.createElement("div",{style:{height:"70px"}},a.a.createElement("img",{src:e.icon,style:{width:"120px",height:"120px"},alt:""}),a.a.createElement("div",{style:{color:"#888",fontSize:"12px",marginTop:"12px"}},a.a.createElement("span",null,"Top Art Studio \u6b27\u5f0f\u98ce\u683c\u7cbe\u7ec6...")))}}))}}]),t}(n.Component),y=function(e){function t(){var e,i;Object(g.a)(this,t);for(var n=arguments.length,p=new Array(n),r=0;r<n;r++)p[r]=arguments[r];return(i=Object(m.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(p)))).renderContent=function(e){return a.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#fff"}},a.a.createElement("p",null,"Content of ",e.title))},i}return Object(s.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement(o.d,{style:{background:"#3fcccb"},mode:"dark",rightContent:[a.a.createElement(o.c,{key:"0",type:"search",style:{marginRight:"16px"}})]},"\u7075\u611f"),a.a.createElement(o.g,{style:{background:"#eee"},tabs:[{title:"\u63a8\u8350"},{title:"\u51ac\u5b63"},{title:"\u5b9c\u5bb6"},{title:"\u5c0f\u6e05\u65b0"},{title:"\u5c0f\u6237\u578b"},{title:"\u4e2a\u6027\u8272\u5f69"},{title:"\u7b80\u7ea6"},{title:"\u6e29\u6696"},{title:"\u5f3a\u608d"}],renderTabBar:function(e){return a.a.createElement(o.g.DefaultTabBar,Object.assign({},e,{page:5}))}},a.a.createElement("div",{style:{width:"100%",background:"#eee"}},a.a.createElement("img",{src:"../img/sp.png",style:{height:"160px",width:"160px","margin-left":"13px","margin-top":"10px"}}),a.a.createElement("img",{src:"../img/sp.png",style:{height:"160px",width:"160px","margin-left":"13px","margin-top":"10px"}}),a.a.createElement("img",{src:"../img/sp.png",style:{height:"160px",width:"160px","margin-left":"13px","margin-top":"10px"}}),a.a.createElement("img",{src:"../img/sp.png",style:{height:"160px",width:"160px","margin-left":"13px","margin-top":"10px"}}),a.a.createElement("img",{src:"../img/sp.png",style:{height:"160px",width:"160px","margin-left":"13px","margin-top":"10px"}}),a.a.createElement("img",{src:"../img/sp.png",style:{height:"160px",width:"160px","margin-left":"13px","margin-top":"10px"}})),a.a.createElement("div",{style:{width:"100%",background:"#eee"}},a.a.createElement("img",{src:"../img/sp.png",style:{height:"160px",width:"160px","margin-left":"13px","margin-top":"10px"}}),a.a.createElement("img",{src:"../img/sp.png",style:{height:"160px",width:"160px","margin-left":"13px","margin-top":"10px"}}),a.a.createElement("img",{src:"../img/sp.png",style:{height:"160px",width:"160px","margin-left":"13px","margin-top":"10px"}}),a.a.createElement("img",{src:"../img/sp.png",style:{height:"160px",width:"160px","margin-left":"13px","margin-top":"10px"}}),a.a.createElement("img",{src:"../img/sp.png",style:{height:"160px",width:"160px","margin-left":"13px","margin-top":"10px"}}),a.a.createElement("img",{src:"../img/sp.png",style:{height:"160px",width:"160px","margin-left":"13px","margin-top":"10px"}})),a.a.createElement("div",{style:{width:"100%",background:"#eee"}},a.a.createElement("img",{src:"../img/sp.png",style:{height:"160px",width:"160px","margin-left":"13px","margin-top":"10px"}}),a.a.createElement("img",{src:"../img/sp.png",style:{height:"160px",width:"160px","margin-left":"13px","margin-top":"10px"}}),a.a.createElement("img",{src:"../img/sp.png",style:{height:"160px",width:"160px","margin-left":"13px","margin-top":"10px"}}),a.a.createElement("img",{src:"../img/sp.png",style:{height:"160px",width:"160px","margin-left":"13px","margin-top":"10px"}}),a.a.createElement("img",{src:"../img/sp.png",style:{height:"160px",width:"160px","margin-left":"13px","margin-top":"10px"}}),a.a.createElement("img",{src:"../img/sp.png",style:{height:"160px",width:"160px","margin-left":"13px","margin-top":"10px"}})),a.a.createElement("div",{style:{width:"100%",background:"#eee"}},a.a.createElement("img",{src:"../img/sp.png",style:{height:"160px",width:"160px","margin-left":"13px","margin-top":"10px"}}),a.a.createElement("img",{src:"../img/sp.png",style:{height:"160px",width:"160px","margin-left":"13px","margin-top":"10px"}}),a.a.createElement("img",{src:"../img/sp.png",style:{height:"160px",width:"160px","margin-left":"13px","margin-top":"10px"}}),a.a.createElement("img",{src:"../img/sp.png",style:{height:"160px",width:"160px","margin-left":"13px","margin-top":"10px"}}),a.a.createElement("img",{src:"../img/sp.png",style:{height:"160px",width:"160px","margin-left":"13px","margin-top":"10px"}}),a.a.createElement("img",{src:"../img/sp.png",style:{height:"160px",width:"160px","margin-left":"13px","margin-top":"10px"}})),a.a.createElement("div",{style:{width:"100%",background:"#eee"}},a.a.createElement("img",{src:"../img/sp.png",style:{height:"160px",width:"160px","margin-left":"13px","margin-top":"10px"}}),a.a.createElement("img",{src:"../img/sp.png",style:{height:"160px",width:"160px","margin-left":"13px","margin-top":"10px"}}),a.a.createElement("img",{src:"../img/sp.png",style:{height:"160px",width:"160px","margin-left":"13px","margin-top":"10px"}}),a.a.createElement("img",{src:"../img/sp.png",style:{height:"160px",width:"160px","margin-left":"13px","margin-top":"10px"}}),a.a.createElement("img",{src:"../img/sp.png",style:{height:"160px",width:"160px","margin-left":"13px","margin-top":"10px"}}),a.a.createElement("img",{src:"../img/sp.png",style:{height:"160px",width:"160px","margin-left":"13px","margin-top":"10px"}})),a.a.createElement("div",{style:{width:"100%",background:"#eee"}},a.a.createElement("img",{src:"../img/sp.png",style:{height:"160px",width:"160px","margin-left":"13px","margin-top":"10px"}}),a.a.createElement("img",{src:"../img/sp.png",style:{height:"160px",width:"160px","margin-left":"13px","margin-top":"10px"}}),a.a.createElement("img",{src:"../img/sp.png",style:{height:"160px",width:"160px","margin-left":"13px","margin-top":"10px"}}),a.a.createElement("img",{src:"../img/sp.png",style:{height:"160px",width:"160px","margin-left":"13px","margin-top":"10px"}}),a.a.createElement("img",{src:"../img/sp.png",style:{height:"160px",width:"160px","margin-left":"13px","margin-top":"10px"}}),a.a.createElement("img",{src:"../img/sp.png",style:{height:"160px",width:"160px","margin-left":"13px","margin-top":"10px"}})),a.a.createElement("div",{style:{width:"100%",background:"#eee"}},a.a.createElement("img",{src:"../img/sp.png",style:{height:"160px",width:"160px","margin-left":"13px","margin-top":"10px"}}),a.a.createElement("img",{src:"../img/sp.png",style:{height:"160px",width:"160px","margin-left":"13px","margin-top":"10px"}}),a.a.createElement("img",{src:"../img/sp.png",style:{height:"160px",width:"160px","margin-left":"13px","margin-top":"10px"}}),a.a.createElement("img",{src:"../img/sp.png",style:{height:"160px",width:"160px","margin-left":"13px","margin-top":"10px"}}),a.a.createElement("img",{src:"../img/sp.png",style:{height:"160px",width:"160px","margin-left":"13px","margin-top":"10px"}}),a.a.createElement("img",{src:"../img/sp.png",style:{height:"160px",width:"160px","margin-left":"13px","margin-top":"10px"}})),a.a.createElement("div",{style:{width:"100%",background:"#eee"}},a.a.createElement("img",{src:"../img/sp.png",style:{height:"160px",width:"160px","margin-left":"13px","margin-top":"10px"}}),a.a.createElement("img",{src:"../img/sp.png",style:{height:"160px",width:"160px","margin-left":"13px","margin-top":"10px"}}),a.a.createElement("img",{src:"../img/sp.png",style:{height:"160px",width:"160px","margin-left":"13px","margin-top":"10px"}}),a.a.createElement("img",{src:"../img/sp.png",style:{height:"160px",width:"160px","margin-left":"13px","margin-top":"10px"}}),a.a.createElement("img",{src:"../img/sp.png",style:{height:"160px",width:"160px","margin-left":"13px","margin-top":"10px"}}),a.a.createElement("img",{src:"../img/sp.png",style:{height:"160px",width:"160px","margin-left":"13px","margin-top":"10px"}})),a.a.createElement("div",{style:{width:"100%",background:"#eee"}},a.a.createElement("img",{src:"../img/sp.png",style:{height:"160px",width:"160px","margin-left":"13px","margin-top":"10px"}}),a.a.createElement("img",{src:"../img/sp.png",style:{height:"160px",width:"160px","margin-left":"13px","margin-top":"10px"}}),a.a.createElement("img",{src:"../img/sp.png",style:{height:"160px",width:"160px","margin-left":"13px","margin-top":"10px"}}),a.a.createElement("img",{src:"../img/sp.png",style:{height:"160px",width:"160px","margin-left":"13px","margin-top":"10px"}}),a.a.createElement("img",{src:"../img/sp.png",style:{height:"160px",width:"160px","margin-left":"13px","margin-top":"10px"}}),a.a.createElement("img",{src:"../img/sp.png",style:{height:"160px",width:"160px","margin-left":"13px","margin-top":"10px"}})),a.a.createElement("div",{style:{width:"100%",background:"#eee"}},a.a.createElement("img",{src:"../img/sp.png",style:{height:"160px",width:"160px","margin-left":"13px","margin-top":"10px"}}),a.a.createElement("img",{src:"../img/sp.png",style:{height:"160px",width:"160px","margin-left":"13px","margin-top":"10px"}}),a.a.createElement("img",{src:"../img/sp.png",style:{height:"160px",width:"160px","margin-left":"13px","margin-top":"10px"}}),a.a.createElement("img",{src:"../img/sp.png",style:{height:"160px",width:"160px","margin-left":"13px","margin-top":"10px"}}),a.a.createElement("img",{src:"../img/sp.png",style:{height:"160px",width:"160px","margin-left":"13px","margin-top":"10px"}}),a.a.createElement("img",{src:"../img/sp.png",style:{height:"160px",width:"160px","margin-left":"13px","margin-top":"10px"}}))))}}]),t}(n.Component),u=function(e){function t(e){var i;return Object(g.a)(this,t),(i=Object(m.a)(this,Object(c.a)(t).call(this,e))).state={selectedTab:"home"},i}return Object(s.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement("div",{style:{position:"fixed",height:"100%",width:"100%",top:0}},a.a.createElement(o.f,{unselectedTintColor:"#949494",tintColor:"#33A3F4",barTintColor:"white"},a.a.createElement(o.f.Item,{title:"\u9996\u9875",key:"Life",icon:a.a.createElement("i",{style:{fontSize:22},className:"iconfont icon-home"}),selectedIcon:a.a.createElement("i",{style:{fontSize:22},className:"iconfont icon-home"}),selected:"home"===this.state.selectedTab,onPress:function(){e.setState({selectedTab:"blueTab"})}},a.a.createElement(h,null)),a.a.createElement(o.f.Item,{icon:a.a.createElement("i",{style:{fontSize:22},className:"iconfont icon-shangcheng"}),selectedIcon:a.a.createElement("i",{style:{fontSize:22},className:"iconfont icon-shangcheng"}),title:"\u5546\u57ce",key:"Koubei",selected:"redTab"===this.state.selectedTab,onPress:function(){e.setState({selectedTab:"redTab"})}},a.a.createElement(f,null)),a.a.createElement(o.f.Item,{icon:a.a.createElement("i",{style:{fontSize:22},className:"iconfont icon-shouye"}),selectedIcon:a.a.createElement("i",{style:{fontSize:22},className:"iconfont icon-shouye"}),title:"Friend",key:"Friend",dot:!0,selected:"greenTab"===this.state.selectedTab,onPress:function(){e.setState({selectedTab:"greenTab"})}}),a.a.createElement(o.f.Item,{icon:a.a.createElement("i",{style:{fontSize:22},className:"iconfont icon-linggan"}),selectedIcon:a.a.createElement("i",{style:{fontSize:22},className:"iconfont icon-linggan"}),title:"\u7075\u611f",key:"my",selected:"yellowTab"===this.state.selectedTab,onPress:function(){e.setState({selectedTab:"yellowTab"})}},a.a.createElement(y,null))))}}]),t}(a.a.Component),E=function(e){function t(){return Object(g.a)(this,t),Object(m.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement(u,null))}}]),t}(n.Component),w=(i(168),i(40)),b=i(88),v="del_item",k="add_todo_item",j="change_input_value",O="login_sucess",T=[1,2,3];var S="todolist";var C={loginname:"",score:0};var z=Object(w.b)({todo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return[].concat(Object(b.a)(e),[t.value]);case v:return e.filter((function(e,i){return t.index!==i}));default:return e}},changeValue:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return t.value;default:return e}},login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return console.log(t),t.value;default:return e}}}),I=i(87);Object(w.c)(z,Object(w.a)(I.a)),i(170);r.a.render(a.a.createElement(E,null),document.getElementById("root"))},89:function(e,t,i){e.exports=i(171)}},[[89,1,2]]]);
//# sourceMappingURL=main.197d4e28.chunk.js.map