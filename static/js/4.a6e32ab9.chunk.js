(this.webpackJsonpdogs=this.webpackJsonpdogs||[]).push([[4],{159:function(a,t,e){a.exports={graph:"UserStatsGraphs_graph__2bddX",graphItem:"UserStatsGraphs_graphItem__oGECz",total:"UserStatsGraphs_total__1cJaQ"}},287:function(a,t,e){"use strict";e.r(t);var s=e(1),r=e(0),n=e.n(r),c=e(159),l=e.n(c),o=e(291),i=e(289),m=e(292);t.default=function(a){var t=a.data,e=n.a.useState([]),r=Object(s.a)(e,2),c=r[0],p=r[1],u=n.a.useState(0),f=Object(s.a)(u,2),d=f[0],h=f[1];return n.a.useEffect((function(){var a=t.map((function(a){return{x:a.title,y:Number(a.acessos)}}));h(t.map((function(a){var t=a.acessos;return Number(t)})).reduce((function(a,t){return a+t}),0)),p(a)}),[t]),n.a.createElement("section",{className:"".concat(l.a.graph," animeLeft")},n.a.createElement("div",{className:"".concat(l.a.total," ").concat(l.a.graphItem)},n.a.createElement("p",null,"Acessos: ",d)),n.a.createElement("div",{className:l.a.graphItem},n.a.createElement(o.a,{data:c,innerRadius:50,padding:{top:20,bottom:20,left:80,right:80},style:{data:{fillOpacity:.9,stroke:"#fff",strokeWidth:2},labels:{fontSize:14,fill:"#333"}}})),n.a.createElement("div",{className:l.a.graphItem},n.a.createElement(i.a,null,n.a.createElement(m.a,{alignment:"start",data:c}))))}}}]);
//# sourceMappingURL=4.a6e32ab9.chunk.js.map