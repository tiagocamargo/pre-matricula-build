import{a as h,m as V,l as u,X as A,_ as $,b as M}from"./common.017a279d.js";import{l as w,r as j,p as T}from"./shared/index/notices.a7d9abf1.js";import{d as E,a as _,b as e,l as s,v as l,m as g,o as c,r as x,c as C,k as D,p as O,O as P}from"./vendor.1f347d3d.js";const B={class:"row mt-3"},F={key:0,class:"row"},H={class:"col-12 col-lg-10 offset-lg-1"},L=e("h2",{class:"title-find-school"},"Avisos",-1),U={class:"mt-4"},X=["innerHTML"],z=E({__name:"NoticeShow",setup(y){const{data:o,loader:d}=h({id:null,text:null});return d(w).then(v=>{v||(o.value={id:null,text:null})}),(v,f)=>(c(),_("div",null,[e("div",B,[s(V)]),l(o)?(c(),_("div",F,[e("div",H,[L,e("div",U,[e("p",{"data-test":"notice-section",innerHTML:l(o).text||"Nenhum aviso cadastrado"},null,8,X)])])])):g("",!0)]))}});var ve=Object.freeze(Object.defineProperty({__proto__:null,default:z},Symbol.toStringTag,{value:"Module"}));const I={class:"row mt-5"},R={class:"col-12 col-lg-10 offset-lg-1"},q=e("h2",{class:"title-find-school"},"Avisos",-1),G={class:"mt-4"},J={class:"mt-4"},K={class:"col-12 col-lg-10 offset-lg-1 mt-5"},Q={class:"d-flex flex-row-reverse"},W=E({__name:"PageEditNotices",setup(y){return(o,d)=>(c(),_("div",null,[e("div",I,[e("div",R,[q,e("div",G,[s(u,{type:"text"}),s(u,{type:"text"}),s(u,{type:"text",width:"60%"})]),e("div",J,[s(u,{height:"260px"})])]),e("div",K,[e("div",Q,[s(u,{height:"50px",width:"155px",type:"btn"})])])])]))}}),Y={key:1},Z={class:"row mt-5"},ee={class:"col-12 col-lg-10 offset-lg-1"},oe=e("h2",{class:"title-find-school"},"Avisos",-1),te=e("div",{class:"mt-4"},[e("p",{class:"font-hind text-justify"}," Ao inserir conte\xFAdo no editor de texto abaixo a mensagem ser\xE1 apresentada na tela inicial de incri\xE7\xF5es para os respons\xE1veis na se\xE7\xE3o Avisos, respeitando a formata\xE7\xE3o definida. Use o espa\xE7o para inserir orienta\xE7\xF5es aos respons\xE1veis no processo de pr\xE9-matr\xEDcula do munic\xEDpio. ")],-1),se={class:"mt-4"},le={class:"mt-2 col-12 col-lg-10 offset-lg-1 p-0"},ae={class:"d-flex justify-content-end"},ie={class:"text-justify"},ne={class:"row mt-4"},ce={class:"col-6 offset-3"},de=E({__name:"NoticeEdit",setup(y){const{data:o,loading:d,loader:v}=h({id:null,text:null}),{loader:f,loading:p}=h(),i=x(!1),r=x(""),n=x("danger"),b=C(()=>n.value==="danger"?"Erro!":"Sucesso!"),N=()=>{const{id:a,text:t}=o.value;!a&&!t||(o.value.text?k():S())},S=()=>{const{id:a}=o.value;f(()=>j({id:a})).then(({errors:t})=>{t?(n.value="danger",r.value="N\xE3o foi remover o aviso. Por favor, entre em contato com o suporte.",i.value=!0):(n.value="success",r.value="Aviso removido com sucesso!",i.value=!0,o.value.id=null)}).finally(()=>{p.value=!1})},k=()=>{f(()=>T(o.value)).then(({errors:a,id:t})=>{a?(n.value="danger",r.value="N\xE3o foi poss\xEDvel salvar o aviso. Por favor, entre em contato com o suporte.",i.value=!0):(n.value="success",r.value="Aviso salvo com sucesso!",i.value=!0,o.value.id=t)}).finally(()=>{p.value=!1})};return v(w).then(a=>{a||(o.value={id:null,text:null})}),(a,t)=>(c(),_("div",null,[l(d)?(c(),D(W,{key:0})):g("",!0),!l(d)&&l(o)?(c(),_("div",Y,[e("div",Z,[e("div",ee,[oe,te,e("div",se,[s(A,{modelValue:l(o).text,"onUpdate:modelValue":t[0]||(t[0]=m=>l(o).text=m),"container-class":"col-12 p-0",name:"text",type:"RICH_TEXT"},null,8,["modelValue"])])])]),e("div",le,[e("div",ae,[s($,{loading:l(p),label:"Salvar",color:"primary",class:"w-100 col-12 col-md-2","no-caps":"","no-wrap":"","loading-normal":"",onClick:N},null,8,["loading"])])]),s(M,{modelValue:i.value,"onUpdate:modelValue":t[2]||(t[2]=m=>i.value=m),title:l(b),"title-class":`text-${n.value}`,"no-footer":""},{body:O(()=>[e("div",ie,P(r.value),1),e("div",ne,[e("div",ce,[s($,{class:"w-100",color:"primary",label:"Entendi","no-caps":"","no-wrap":"",onClick:t[1]||(t[1]=m=>i.value=!1)})])])]),_:1},8,["modelValue","title","title-class"])])):g("",!0)]))}});var me=Object.freeze(Object.defineProperty({__proto__:null,default:de},Symbol.toStringTag,{value:"Module"}));export{ve as N,me as a};