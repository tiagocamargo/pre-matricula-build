import{d as _,u as m,E as u,o as f,k as h,p as s,b as o,l as t,O as b,v as a,P as x,y as v,Q as k,Y as y}from"../../vendor.1f347d3d.js";import{i as r,_ as g,k as w,c as C}from"../../common.017a279d.js";const P={class:"col-12"},B={class:"text-h5 text-primary"},F=o("p",{class:"mb-0 text-black-80 text-size-10 font-hind text-uppercase"}," Insira o n\xFAmero do protocolo ",-1),N={class:"row"},V={class:"col-12 col-md-8 mb-md-0"},$=o("span",{class:"protocol-hashtag"},"#",-1),q={class:"col-12 col-md-4 pt-3 pt-md-0"},z={class:"text-muted pt-3 pt-md-0"},E=y(" Onde encontro o protocolo? "),D=_({__name:"ProtocolConsult",props:{title:{default:""}},setup(c){const l=m(),n=e=>{l.push({name:"protocol.status",params:{id:e.protocol}})};return(e,O)=>{const i=u("router-link");return f(),h(C,{onSubmit:n},{default:s(p=>[o("div",P,[t(w,{bordered:""},{default:s(()=>[t(r,{class:"pl-4 pr-4 pt-3 p-0"},{default:s(()=>[o("h5",B,b(c.title),1)]),_:1}),t(r,{class:"pl-4 pr-4 pb-3 p-0"},{default:s(()=>[F,o("div",N,[o("div",V,[t(a(x),{as:"div",rules:"required",class:"position-relative mb-3",name:"protocol"},{default:s(({field:d})=>[o("input",v(d,{class:["form-control pl-4 mr-3",{"is-invalid":!!p.errors.protocol}]}),null,16),$,t(a(k),{name:"protocol",class:"validator-rule-error"})]),_:2},1024)]),o("div",q,[t(g,{label:"Pesquisar",color:"primary",type:"submit","no-caps":"","no-wrap":"",class:"w-100",style:{"font-size":"1.2em"}})])]),o("p",z,[t(i,{to:"/onde-encontro-o-protocolo",class:"text-black-80 font-hind text-underline mb-0"},{default:s(()=>[E]),_:1})])]),_:2},1024)]),_:2},1024)])]),_:1})}}});export{D as _};
