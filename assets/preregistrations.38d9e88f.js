var qe=Object.defineProperty,Ye=Object.defineProperties;var Xe=Object.getOwnPropertyDescriptors;var Ie=Object.getOwnPropertySymbols;var Ke=Object.prototype.hasOwnProperty,Qe=Object.prototype.propertyIsEnumerable;var Oe=(v,E,d)=>E in v?qe(v,E,{enumerable:!0,configurable:!0,writable:!0,value:d}):v[E]=d,J=(v,E)=>{for(var d in E||(E={}))Ke.call(E,d)&&Oe(v,d,E[d]);if(Ie)for(var d of Ie(E))Qe.call(E,d)&&Oe(v,d,E[d]);return v},je=(v,E)=>Ye(v,Xe(E));import{d as pe,c as V,o as s,a as n,b as e,N as de,v as l,n as W,F as H,j as q,O as r,m as u,r as c,t as Le,k as D,p as ee,l as b,D as X,G as ye,C as Ze,Y as se,w as Ee,a2 as De,R as Me,u as ze,a0 as Fe,f as Be,E as et,A as tt,W as ot}from"./vendor.1f347d3d.js";import{a as F,X as z,_ as I,b as xe,l as ge,n as We,k as lt,w as st,x as Ne,i as at,y as be,z as nt,t as it,v as rt}from"./common.017a279d.js";import{g as Ge,c as ct,d as dt,e as ut,f as mt,h as pt,i as vt,j as ht,k as ft,m as _t,n as gt}from"./shared/prepregistrations-subscription/preregistrations.93faf1b1.js";import{u as bt}from"./@vueuse/core.ebf6af6e.js";import{_ as yt}from"./shared/preregistrations/vacancy.e136e44e.js";const Et={class:"paginator"},xt={key:0,class:"d-flex list-unstyled"},wt=["onClick"],kt=pe({__name:"Pagination",props:{paginatorInfo:null},emits:["page"],setup(v){const E=v,d=V(()=>{var w,k;const i={firstPage:1,lastPage:((w=E.paginatorInfo)==null?void 0:w.lastPage)||1,current:((k=E.paginatorInfo)==null?void 0:k.currentPage)||1,first:null,last:null,prev:null,next:null,pages:[]};i.first=i.current-3,i.last=i.current+3,i.prev=i.current-1,i.next=i.current+1,i.first<i.firstPage&&(i.first=i.firstPage),i.last>i.lastPage&&(i.last=i.lastPage),i.prev<i.firstPage&&(i.prev=i.firstPage),i.next>i.lastPage&&(i.next=i.lastPage);for(let j=i.first;j<=i.last;j+=1)i.pages.push(j);return i});return(i,w)=>(s(),n("nav",Et,[v.paginatorInfo?(s(),n("ul",xt,[e("li",{class:W([{disabled:l(d).current===l(d).firstPage},"page-item"])},[e("a",{class:"btn btn-outline-primary",href:"javascript:void(0)",onClick:w[0]||(w[0]=de(k=>i.$emit("page",l(d).firstPage),["prevent"]))},"\xAB")],2),e("li",{class:W([{disabled:l(d).current===l(d).prev},"page-item"])},[e("a",{class:"btn btn-outline-primary",href:"javascript:void(0)",onClick:w[1]||(w[1]=de(k=>i.$emit("page",l(d).prev),["prevent"]))},"\u2039")],2),(s(!0),n(H,null,q(l(d).pages,k=>(s(),n("li",{key:k,class:"page-item"},[e("a",{class:W([{active:l(d).current===k},"btn btn-outline-primary"]),href:"javascript:void(0)",onClick:de(j=>i.$emit("page",k),["prevent"])},r(k),11,wt)]))),128)),e("li",{class:W([{disabled:l(d).current===l(d).next},"page-item"])},[e("a",{class:"btn btn-outline-primary",href:"javascript:void(0)",onClick:w[2]||(w[2]=de(k=>i.$emit("page",l(d).next),["prevent"]))},"\u203A")],2),e("li",{class:W([{disabled:l(d).current===l(d).lastPage},"page-item"])},[e("a",{class:"btn btn-outline-primary",href:"javascript:void(0)",onClick:w[3]||(w[3]=de(k=>i.$emit("page",l(d).lastPage),["prevent"]))},"\xBB")],2)])):u("",!0)]))}}),$t={key:0},Tt={class:"m-auto",style:{"max-width":"740px"}},Ct={key:0,class:"mt-4 text-danger font-weight-bold"},St=se(" Tem certeza que deseja indeferir as pr\xE9-matr\xEDculas? "),Rt=e("hr",null,null,-1),Pt=[St,Rt],At={key:1,class:"mt-4 font-weight-bold"},Vt=se(" Selecione a turma que deseja matricular os(as) alunos(as) para completar o deferimento das pr\xE9-matr\xEDculas dos(as) alunos(as). "),Nt=e("hr",null,null,-1),It={key:2,class:"mt-4 font-weight-bold"},Ot=se(" Tem certeza que deseja convocar os respons\xE1veis desta(s) pr\xE9-matr\xEDcula(s)? "),jt=e("hr",null,null,-1),Dt=[Ot,jt],Mt={key:3,class:"form-group"},Bt=e("label",{class:"form-label"},"Observa\xE7\xF5es (opcional)",-1),Ut={key:4,class:"form-group"},Lt=e("label",{class:"form-label"},"Justificativa (opcional)",-1),zt={key:5},Ft={class:"text-danger"},Wt=["innerHTML"],Gt={class:"d-flex justify-content-center mt-4"},Ht={key:1},Jt={key:2},qt={key:0,class:"mt-4 font-weight-bold"},Yt={key:1,class:"mt-4 font-weight-bold"},Xt={key:2,class:"mt-4 font-weight-bold"},Kt={key:3,class:"mt-4"},Qt={class:"text-danger"},Zt=["innerHTML"],eo={class:"row justify-content-center d-flex mt-4"},to=pe({__name:"PreRegistrationBatch",props:{filter:null,preregistrations:null,step:null,processYear:null,modelValue:{type:Boolean}},emits:["load"],setup(v,{emit:E}){const d=v,{loader:i}=F(),{loader:w}=F(),{loader:k}=F(),{loader:j,data:S}=F(),M=c(),Y=c(),N=c(!1),a=c(!1),B=c(),T=c(),R=c(!1),P=c(0),A=bt(d,"modelValue"),K=V(()=>{switch(d.step){case"REJECT":return"Indeferimento em lote";case"ACCEPT":return"Deferimento em lote";case"SUMMON":return"Convoca\xE7\xE3o em lote";default:return""}});Le(()=>{A.value&&d.step==="ACCEPT"&&te()});const m=()=>{A.value=!1,M.value=null,S.value=[],Y.value=void 0,N.value=!1,a.value=!1,B.value=null,T.value=null,R.value=!1,P.value=0},Q=()=>{m(),E("load")},g=()=>{R.value,i(()=>ct({ids:d.preregistrations,classroom:Y.value})).then(({errors:C,acceptPreRegistrations:x})=>{C&&C.length&&(a.value=!0,B.value="N\xE3o foi poss\xEDvel realizar o deferimento de todos os(as) alunos(as)",T.value=C.map($=>{var O;return(O=$.extensions)==null?void 0:O.message}).join("<br>")),x&&(N.value=!0,P.value=x.length)}).finally(()=>{R.value=!1})},U=()=>{R.value=!0,w(()=>dt({ids:d.preregistrations,justification:M.value})).then(({errors:C,rejectPreRegistrations:x})=>{if(C&&C.length){a.value=!0,B.value=C[0].message,T.value=C.map($=>{var O;return(O=$.extensions)==null?void 0:O.message}).join("<br>");return}x&&(N.value=!0,P.value=x.length)}).finally(()=>{R.value=!1})},Z=()=>{R.value=!0,k(()=>ut({ids:d.preregistrations,justification:M.value})).then(({errors:C,summonPreRegistrations:x})=>{C&&C.length&&(a.value=!0,B.value="N\xE3o foi poss\xEDvel realizar a convoca\xE7\xE3o de todos os(as) respons\xE1veis(as)",T.value=C.map($=>{var O;return(O=$.extensions)==null?void 0:O.message}).join("<br>")),x&&(N.value=!0,P.value=x.length)}).finally(()=>{R.value=!1})},te=()=>{S.value=[],j(()=>Ge({school:d.filter.school,grade:d.filter.grade,year:d.processYear}))};return(C,x)=>(s(),D(xe,{modelValue:l(A),"onUpdate:modelValue":x[3]||(x[3]=$=>Ze(A)?A.value=$:null),large:!0,title:l(K),"overflow-visible":!N.value&&v.step==="ACCEPT","no-footer":""},{body:ee(()=>[v.preregistrations&&N.value===!1?(s(),n("div",$t,[e("div",Tt,[v.step==="REJECT"?(s(),n("div",Ct,Pt)):u("",!0),v.step==="ACCEPT"?(s(),n("div",At,[Vt,Nt,b(z,{modelValue:Y.value,"onUpdate:modelValue":x[0]||(x[0]=$=>Y.value=$),"container-class":"col-12 form-group mt-3",rules:"required",label:"Para qual turma deseja designar os(as) alunos(as)?",name:"classroom",type:"SELECT",options:l(S)},null,8,["modelValue","options"])])):u("",!0),v.step==="SUMMON"?(s(),n("div",It,Dt)):u("",!0),v.step==="SUMMON"?(s(),n("div",Mt,[Bt,X(e("textarea",{"onUpdate:modelValue":x[1]||(x[1]=$=>M.value=$),class:"form-control",rows:"3"},null,512),[[ye,M.value]])])):u("",!0),v.step==="REJECT"?(s(),n("div",Ut,[Lt,X(e("textarea",{"onUpdate:modelValue":x[2]||(x[2]=$=>M.value=$),class:"form-control",rows:"3"},null,512),[[ye,M.value]])])):u("",!0),a.value?(s(),n("div",zt,[e("h2",Ft,r(B.value),1),e("span",{innerHTML:T.value},null,8,Wt)])):u("",!0),e("div",Gt,[v.step==="SUMMON"?(s(),D(I,{key:0,label:"Convocar respons\xE1veis",loading:R.value,color:"summon",outline:"",class:"ml-3 pmd-custom",icon:"pmd-summon","no-caps":"","no-wrap":"","loading-normal":"",onClick:Z},null,8,["loading"])):u("",!0),v.step==="REJECT"?(s(),D(I,{key:1,label:"Indeferir pr\xE9-matr\xEDculas",loading:R.value,color:"rejected",outline:"",class:"ml-3 pmd-custom",icon:"pmd-rejected","no-caps":"","no-wrap":"","loading-normal":"",onClick:U},null,8,["loading"])):u("",!0),v.step==="ACCEPT"?(s(),D(I,{key:2,label:"Deferir pr\xE9-matr\xEDculas",loading:R.value,color:"accepted",outline:"",class:"ml-3 pmd-custom",icon:"pmd-accepted","no-caps":"","no-wrap":"","loading-normal":"",onClick:g},null,8,["loading"])):u("",!0)])])])):N.value===!1?(s(),n("div",Ht," Carregando.. ")):u("",!0),v.preregistrations&&N.value===!0?(s(),n("div",Jt,[v.step==="ACCEPT"?(s(),n("div",qt,r(P.value)+" matr\xEDcula(s) deferida(s) com sucesso ",1)):u("",!0),v.step==="REJECT"?(s(),n("div",Yt,r(P.value)+" matr\xEDcula(s) indeferida(s) com sucesso ",1)):u("",!0),v.step==="SUMMON"?(s(),n("div",Xt,r(P.value)+" matr\xEDcula(s) convocada(s) com sucesso ",1)):u("",!0),a.value?(s(),n("div",Kt,[e("h2",Qt,r(B.value),1),e("span",{innerHTML:T.value},null,8,Zt)])):u("",!0),e("div",eo,[b(I,{class:"ml-3 mr-3 w-50",color:"success",label:"Fechar","no-caps":"","no-wrap":"",onClick:Q})])])):u("",!0)]),_:1},8,["modelValue","title","overflow-visible"]))}}),oo={class:"table table-striped table-vcenter"},lo=pe({__name:"Table",props:{cols:{default:9}},setup(v){return(E,d)=>(s(),n("table",oo,[e("thead",null,[e("tr",null,[(s(!0),n(H,null,q(v.cols,i=>(s(),n("th",{key:i+"-skeleton-table-col",class:W({"w-1":i===1})},[i===1?(s(),D(ge,{key:0,width:"16px",height:"16px",square:"",class:"mt-2"})):(s(),D(ge,{key:1,type:"text"}))],2))),128))])]),e("tbody",null,[(s(),n(H,null,q(10,i=>e("tr",{key:i+"-skeleton-table-row"},[(s(!0),n(H,null,q(v.cols,w=>(s(),n("td",{key:w+"-skeleton-table-cell",class:W({"w-1":w===1})},[w===1?(s(),D(ge,{key:0,width:"16px",height:"16px",square:"",class:"mt-2"})):(s(),D(ge,{key:1,type:"text"}))],2))),128))])),64))])]))}});var Ue=function(v,E,d,i){var w=typeof i!="undefined"?[i,v]:[v],k=new Blob(w,{type:d||"application/octet-stream"});if(typeof window.navigator.msSaveBlob!="undefined")window.navigator.msSaveBlob(k,E);else{var j=window.URL&&window.URL.createObjectURL?window.URL.createObjectURL(k):window.webkitURL.createObjectURL(k),S=document.createElement("a");S.style.display="none",S.href=j,S.setAttribute("download",E),typeof S.download=="undefined"&&S.setAttribute("target","_blank"),document.body.appendChild(S),S.click(),setTimeout(function(){document.body.removeChild(S),window.URL.revokeObjectURL(j)},200)}};const so=e("h1",null,"Pr\xE9-matr\xEDculas",-1),ao={class:"row m-0 mt-1 filter-gutters mb-md-3"},no={class:"row m-0 filter-gutters mt-md-4"},io={class:"d-flex m-0 mt-3 filter-gutters flex-column flex-lg-row"},ro={class:"d-flex flex-grow-1"},co={class:"d-flex justify-content-end flex-grow-1 mt-2 mt-md-0"},uo={class:"d-flex flex-column flex-lg-row mb-4"},mo={class:"mb-3 mb-lg-0"},po=e("option",{value:null},"Ordenar por:",-1),vo=["value"],ho={class:"ml-lg-auto"},fo={class:"align-items-baseline d-flex font-hind mb-2"},_o=e("div",{class:"mr-2"}," Mostrar ",-1),go={class:"mr-2"},bo=e("div",null," registros por p\xE1gina ",-1),yo={key:1,class:"table table-responsive table-striped table-vcenter"},Eo={class:"w-1"},xo={class:"custom-control custom-checkbox"},wo=e("label",{class:"custom-control-label",for:"allChecked"},null,-1),ko=e("th",null,"Status",-1),$o=e("th",null,"Protocolo",-1),To=e("th",null,"Nome do(a) aluno(a)",-1),Co=e("th",null,"Escola",-1),So=e("th",null,"Posi\xE7\xE3o",-1),Ro=e("th",null,"S\xE9rie",-1),Po=e("th",null,"Turno",-1),Ao=e("th",null,"Tipo",-1),Vo={key:0},No=e("td",{colspan:"9"},"Nenhum resultado.",-1),Io=[No],Oo={class:"w-1"},jo={class:"custom-control custom-checkbox"},Do=["id","value"],Mo=["for"],Bo=["onClick"],Uo={key:0},Lo={class:"align-top"},zo={key:1},Fo={class:"align-top"},Wo={key:0},Go={class:"align-top"},Ho={key:1},Jo={class:"align-top"},qo={key:2,class:"row justify-content-center mt-4"},Yo={class:"col-12 col-lg-3"},Xo={class:"text-justify"},Ko={class:"row mt-4"},Qo={class:"col-6 offset-3"},Zo={class:"row"},el={class:"row"},tl={class:"col-12"},ol=pe({__name:"PreRegistrationList",setup(v){const{loader:E}=F(),{loader:d}=F(),i=We(),w=ze(),k=Fe(),j=c(),S=c(!1),M=c(!1),Y=c(null),N=c(!1),a=c(),B=c(!1),T=c([]),R=c(),P=c(),A=c([]),K=c({search:"",process:null,school:null,period:null,grade:null,type:null,status:null,canAcceptInBatch:!1,sort:null,year:null,schools:null}),m=c({search:"",process:null,school:null,period:null,grade:null,type:null,status:null,sort:null,canAcceptInBatch:!1,year:null,schools:null}),Q=c([]),g=c([]),U=c([]),Z=c([]),te=c(["REGISTRATION","REGISTRATION_RENEWAL","WAITING_LIST"]),C=c(["REJECTED","ACCEPTED","WAITING","SUMMONED","IN_CONFIRMATION"]),x=c(),$=c(),O=c(!1),ve=c([]),ae=c(25),ne=c([{key:25,label:25},{key:50,label:50},{key:100,label:100},{key:200,label:200},{key:400,label:400}]),oe=c(!0),ie=c(!1),le=c({template:1,showStudentShortName:!0}),we=V(()=>T.value.length===0),he=V(()=>m.value.canAcceptInBatch?T.value.length===0:!0),ke=V(()=>T.value.length===0),$e=V(()=>{let _=[];return m.value.year&&(_=Q.value.filter(t=>t.schoolYear.year===m.value.year)),_}),Te=V(()=>{const _={key:null,label:"Nenhum"},t=te.value.map(y=>({key:y,label:ue(y)}));return t.unshift(_),t}),Ce=V(()=>{const _={key:null,label:"Nenhum"},t=Z.value.map(y=>({key:y.id,label:y.name}));return t.unshift(_),t}),fe=V(()=>{const _={key:null,label:"Nenhum"},t=C.value.map(y=>({key:y,label:Ne(y)}));return t.unshift(_),t}),Se=V(()=>oe.value===!1&&A.value.length===0),Re=()=>{S.value=!0,Be.get("/pre-matricula-export",{params:m.value,responseType:"blob"}).then(_=>{Ue(_.data,"pre-matricula.csv")}).finally(()=>{S.value=!1})},Pe=()=>{const _=Q.value.find(t=>t.id===m.value.process);Y.value=_.schoolYear.year,a.value="ACCEPT",N.value=!0},_e=()=>{a.value="REJECT",N.value=!0},Ae=()=>{a.value="SUMMON",N.value=!0},p=_=>{oe.value=!0;const t=je(J({},m.value),{page:_});Object.keys(t).forEach(y=>{(!t[y]||t[y]==="")&&delete t[y]}),i.auth.user&&i.auth.user.level>=4&&(t.schools=i.auth.user.schools),E(()=>mt(J({first:Number(ae.value)},t))).then(y=>{if(y.errors)return;R.value=y.stats,A.value=y.preregistrations,P.value=y.paginator,T.value=[];const{process:ce,school:o,grade:L}=m.value;ce&&o&&L&&(m.value.canAcceptInBatch=!0)}).finally(()=>{oe.value=!1})},f=_=>{_.target.checked||(B.value=!1),T.value.length===A.value.length&&(B.value=!0)},h=_=>{_.target.checked?T.value=A.value.map(y=>y.id):T.value=[]},re=()=>{m.value=J({},K.value),p(1)},Ve=()=>{const{process:_}=m.value;if(!_){x.value="Aten\xE7\xE3o!",$.value="Selecione um processo.",O.value=!0;return}const t=J({},m.value);Object.assign(t,J({},le.value)),M.value=!0,Be.get("/pre-matricula-report",{params:t,responseType:"blob"}).then(y=>{Ue(y.data,"pre-matricula.pdf")}).finally(()=>{M.value=!1,ie.value=!1}).catch(()=>{x.value="Aten\xE7\xE3o!",$.value="N\xE3o foi poss\xEDvel emitir o relat\xF3rio. Verifique os filtros e tente novamente.",O.value=!0})},ue=_=>{switch(_){case"REGISTRATION":return"Matr\xEDcula";case"REGISTRATION_RENEWAL":return"Rematr\xEDcula";case"WAITING_LIST":default:return"Lista de espera"}},G=_=>{switch(_){case"REGISTRATION":return"badge-blue";case"REGISTRATION_RENEWAL":return"badge-cyan";case"WAITING_LIST":default:return"badge-yellow"}},me=_=>{w.push({name:"preregistration.modal",params:{protocol:_}})};return(()=>{const _={};i.auth.user&&i.auth.user.level>=4&&(_.schools=i.auth.user.schools),d(()=>pt(_)).then(t=>{Q.value=t.processes.sortBy("name"),g.value=t.schools.sortBy("name"),U.value=t.grades.sortBy("name"),Z.value=t.periods.sortBy("name");const y=[],ce=[];t.processes.forEach(L=>{L.totalPreRegistrations>0?y.push(L.schoolYear.year):ce.push(L.schoolYear.year)}),y.sort().reverse();const o=y[0];ve.value=y.concat(ce).filter((L,He,Je)=>Je.indexOf(L)===He).map(L=>({key:L,label:L})).sortBy("key").reverse(),o&&(m.value.year=o),g.value.length===1&&(m.value.school=g.value[0].id),p(1)})})(),Ee(k,_=>{p(_.query.page||1)},{deep:!0}),Ee(ae,()=>{P.value&&p(P.value.currentPage)},{deep:!0}),(_,t)=>{const y=et("router-view"),ce=tt("tooltip");return s(),n("main",null,[so,b(yt,{stats:R.value},null,8,["stats"]),b(lt,{class:"bg-primary mb-5"},{default:ee(()=>[b(at,{class:"pl-2 pr-2"},{default:ee(()=>[e("form",{onSubmit:t[13]||(t[13]=de(o=>p(1),["prevent"]))},[e("div",ao,[b(z,{modelValue:m.value.search,"onUpdate:modelValue":t[0]||(t[0]=o=>m.value.search=o),"container-class":"col-12 col-md-4 mb-2 mb-md-0",name:"search",placeholder:"Nome do(a) aluno(a)",type:"TEXT"},null,8,["modelValue"]),b(z,{modelValue:m.value.year,"onUpdate:modelValue":t[1]||(t[1]=o=>m.value.year=o),"container-class":"col-12 col-md-2 mb-2 mb-md-0",name:"year",placeholder:"Filtrar ano",type:"SELECT",options:ve.value},null,8,["modelValue","options"]),b(z,{modelValue:m.value.process,"onUpdate:modelValue":t[2]||(t[2]=o=>m.value.process=o),"container-class":"col-12 col-md-3 mb-2 mb-md-0",name:"process",placeholder:"Filtrar por processo",type:"SELECT",options:l($e),searchable:"",onChange:t[3]||(t[3]=o=>m.value.canAcceptInBatch=!1)},null,8,["modelValue","options"]),b(z,{modelValue:m.value.type,"onUpdate:modelValue":t[4]||(t[4]=o=>m.value.type=o),"container-class":"col-12 col-md-3 mb-2 mb-md-0",name:"type",placeholder:"Filtrar por tipo",type:"SELECT",options:l(Te)},null,8,["modelValue","options"])]),e("div",no,[b(z,{modelValue:m.value.school,"onUpdate:modelValue":t[5]||(t[5]=o=>m.value.school=o),"container-class":"col-12 col-md-3 mb-2 mb-md-0",name:"school",placeholder:"Filtrar por escola",type:"SELECT",options:g.value,searchable:"",onChange:t[6]||(t[6]=o=>m.value.canAcceptInBatch=!1)},null,8,["modelValue","options"]),b(z,{modelValue:m.value.grade,"onUpdate:modelValue":t[7]||(t[7]=o=>m.value.grade=o),"container-class":"col-12 col-md-3 mb-2 mb-md-0",name:"grade",placeholder:"Filtrar por s\xE9rie",type:"SELECT",options:U.value,searchable:"",onChange:t[8]||(t[8]=o=>m.value.canAcceptInBatch=!1)},null,8,["modelValue","options"]),b(z,{modelValue:m.value.period,"onUpdate:modelValue":t[9]||(t[9]=o=>m.value.period=o),"container-class":"col-12 col-md-3 mb-2 mb-md-0",name:"period",placeholder:"Filtrar por turno",type:"SELECT",options:l(Ce)},null,8,["modelValue","options"]),b(z,{modelValue:m.value.status,"onUpdate:modelValue":t[10]||(t[10]=o=>m.value.status=o),"container-class":"col-12 col-md-3 mb-2 mb-md-0",name:"status",placeholder:"Filtrar por status",type:"SELECT",options:l(fe)},null,8,["modelValue","options"])]),e("div",io,[e("div",ro,[b(I,{label:"Emitir relat\xF3rio",color:"white",outline:"",class:"ml-2","no-caps":"","no-wrap":"",icon:"mdi-note-text-outline","loading-normal":"",onClick:t[11]||(t[11]=o=>ie.value=!0)})]),e("div",co,[b(I,{label:"Limpar",color:"white",flat:"",class:"mr-3","no-caps":"","no-wrap":"",onClick:re}),b(I,{label:"Buscar",color:"white",outline:"",class:"mr-2","no-caps":"","no-wrap":"",loading:oe.value,"loading-normal":"",onClick:t[12]||(t[12]=o=>p(1))},null,8,["loading"])])])],32)]),_:1})]),_:1}),e("div",uo,[e("div",mo,[X(e("select",{"onUpdate:modelValue":t[14]||(t[14]=o=>m.value.sort=o),class:"custom-select",onChange:t[15]||(t[15]=o=>p(1))},[po,(s(!0),n(H,null,q(l(st)(),o=>(s(),n("option",{key:o.key,value:o.key},r(o.label),9,vo))),128))],544),[[De,m.value.sort]])]),e("div",ho,[b(I,{label:"Convocar respons\xE1veis",disable:l(ke),color:"summon",outline:"",class:"ml-0 ml-lg-3 mb-2 mb-lg-0 pmd-custom",icon:"pmd-summon","no-caps":"","no-wrap":"",onClick:Ae},null,8,["disable"]),b(I,{label:"Indeferir pr\xE9-matr\xEDcula",disable:l(we),color:"rejected",outline:"",class:"ml-0 ml-lg-3 mb-2 mb-lg-0 pmd-custom",icon:"pmd-rejected","no-caps":"","no-wrap":"",onClick:_e},null,8,["disable"]),b(I,{label:"Deferir pr\xE9-matr\xEDcula",disable:l(he),color:"accepted",outline:"",class:"ml-0 ml-lg-3 mb-2 mb-lg-0 pmd-custom",icon:"pmd-accepted","no-caps":"","no-wrap":"",onClick:Pe},null,8,["disable"])])]),e("div",fo,[_o,e("div",go,[X(e("select",{"onUpdate:modelValue":t[16]||(t[16]=o=>ae.value=o),class:"form-control form-control-sm"},[(s(!0),n(H,null,q(ne.value,o=>(s(),n("option",{key:o.key},r(o.label),1))),128))],512),[[De,ae.value]])]),bo]),oe.value?(s(),D(lo,{key:0})):(s(),n("table",yo,[e("thead",null,[e("tr",null,[e("th",Eo,[e("div",xo,[X(e("input",{id:"allChecked","onUpdate:modelValue":t[17]||(t[17]=o=>B.value=o),type:"checkbox",class:"custom-control-input",onChange:h},null,544),[[Me,B.value]]),wo])]),ko,$o,To,Co,So,Ro,Po,Ao])]),e("tbody",null,[l(Se)?(s(),n("tr",Vo,Io)):(s(!0),n(H,{key:1},q(A.value,o=>(s(),n("tr",{key:o.id},[e("td",Oo,[e("div",jo,[X(e("input",{id:`checkbox-${o.id}`,"onUpdate:modelValue":t[18]||(t[18]=L=>T.value=L),value:o.id,type:"checkbox",class:"custom-control-input",onChange:f},null,40,Do),[[Me,T.value]]),e("label",{for:`checkbox-${o.id}`,class:"custom-control-label"},null,8,Mo)])]),e("td",null,[X(e("span",{class:W(l(be)(o.status))},null,2),[[ce,l(Ne)(o.status),void 0,{"bottom-start":!0}]])]),e("td",null,[e("a",{href:"javascript:void(0)",onClick:L=>me(o.protocol)}," #"+r(o.protocol),9,Bo)]),e("td",null,r(o.student.name),1),e("td",null,[se(r(o.school.name)+" ",1),o.waiting?(s(),n("div",Uo,[e("small",Lo,r(o.waiting.school.name),1),e("span",{class:W(l(be)(o.waiting.status))},null,2)])):u("",!0),o.parent?(s(),n("div",zo,[e("small",Fo,r(o.parent.school.name),1),e("span",{class:W(l(be)(o.parent.status))},null,2)])):u("",!0)]),e("td",null,[se(r(o.position)+"\xBA ",1),o.waiting?(s(),n("div",Wo,[e("small",Go,r(o.waiting.position)+"\xBA ",1)])):u("",!0),o.parent?(s(),n("div",Ho,[e("small",Jo,r(o.parent.position)+"\xBA ",1)])):u("",!0)]),e("td",null,r(o.grade?o.grade.name:"-"),1),e("td",null,r(o.period?o.period.name:"-"),1),e("td",null,[e("span",{class:W([G(o.type),"badge"])},r(ue(o.type)),3)])]))),128))])])),b(kt,{"paginator-info":P.value,onPage:t[19]||(t[19]=o=>p(o))},null,8,["paginator-info"]),P.value&&P.value.total?(s(),n("div",qo,[e("div",Yo,[b(I,{label:"Exportar",loading:S.value,class:"w-100",color:"primary","no-caps":"","no-wrap":"","loading-normal":"",onClick:Re},null,8,["loading"])])])):u("",!0),N.value?(s(),D(to,{key:3,modelValue:N.value,"onUpdate:modelValue":t[20]||(t[20]=o=>N.value=o),filter:m.value,preregistrations:T.value,"process-year":Y.value,step:a.value,onLoad:p},null,8,["modelValue","filter","preregistrations","process-year","step"])):u("",!0),b(xe,{modelValue:O.value,"onUpdate:modelValue":t[22]||(t[22]=o=>O.value=o),"no-footer":"",title:x.value,"title-class":"text-danger"},{body:ee(()=>[e("div",Xo,r($.value),1),e("div",Ko,[e("div",Qo,[b(I,{label:"Entendi",color:"primary",class:"w-100","no-caps":"","no-wrap":"",onClick:t[21]||(t[21]=o=>O.value=!1)})])])]),_:1},8,["modelValue","title"]),b(xe,{ref_key:"fieldsModal",ref:j,modelValue:ie.value,"onUpdate:modelValue":t[27]||(t[27]=o=>ie.value=o),"no-footer":"",title:"Emitir Relat\xF3rio","is-overflow-visible":""},{body:ee(()=>[e("div",Zo,[b(z,{id:"reportModel",modelValue:le.value.template,"onUpdate:modelValue":t[23]||(t[23]=o=>le.value.template=o),label:"Modelo",rules:"required",name:"reportModel",type:"SELECT","allow-clear":!1,searchable:!1,options:l(nt)(),placeholder:"Selecione o modelo","container-class":"col-12 form-group","onOpen:options":t[24]||(t[24]=o=>j.value.setOverflowVisible(!0)),"onClose:options":t[25]||(t[25]=o=>j.value.setOverflowVisible(!1))},null,8,["modelValue","options"]),b(z,{modelValue:le.value.showStudentShortName,"onUpdate:modelValue":t[26]||(t[26]=o=>le.value.showStudentShortName=o),name:"showStudentShortName","container-class":"col-12 form-group",label:"Exibir apenas iniciais do nome do candidato?",type:"CHECKBOX"},null,8,["modelValue"])])]),footer:ee(()=>[e("div",el,[e("div",tl,[b(I,{loading:M.value,color:"primary",class:"w-100",label:"Emitir relat\xF3rio","no-caps":"","no-wrap":"",onClick:Ve},null,8,["loading"])])])]),_:1},8,["modelValue"]),b(y)])}}});var Xs=Object.freeze(Object.defineProperty({__proto__:null,default:ol},Symbol.toStringTag,{value:"Module"}));const ll={class:"m-auto",style:{"max-width":"740px"}},sl={key:0,class:"mt-4 text-danger font-weight-bold"},al=se(" Tem certeza que deseja indeferir a pr\xE9-matr\xEDcula? "),nl=e("hr",null,null,-1),il=[al,nl],rl={key:1,class:"mt-4 font-weight-bold"},cl=se(" Selecione a turma que deseja matricular o(a) aluno(a) para completar o deferimento da pr\xE9-matr\xEDcula do(a) aluno(a). "),dl=e("hr",null,null,-1),ul=[cl,dl],ml={key:2},pl=e("div",{class:"mt-4 text-danger font-weight-bold"}," Indeferido ",-1),vl={class:"row mt-4"},hl={class:"col-6"},fl=e("dt",{class:"font-hind font-size-10"}," Justificativa do indeferimento ",-1),_l=e("hr",null,null,-1),gl={key:3},bl=e("div",{class:"mt-4 font-weight-bold",style:{color:"#1900B4"}}," Em convoca\xE7\xE3o ",-1),yl={class:"row mt-4"},El={class:"col-12"},xl=e("dt",{class:"font-hind font-size-10"}," Observa\xE7\xF5es ",-1),wl=e("hr",null,null,-1),kl={key:4},$l=e("div",{class:"mt-4 text-success font-weight-bold"}," Deferido ",-1),Tl={class:"row mt-4"},Cl={class:"col-6"},Sl=e("dt",{class:"font-hind font-size-10"}," Escola ",-1),Rl={key:0,class:"col-6"},Pl=e("dt",{class:"font-hind font-size-10"}," Turma ",-1),Al=e("hr",null,null,-1),Vl={class:"row mt-4"},Nl={class:"col-6"},Il=e("dt",{class:"font-hind font-size-10"}," Posi\xE7\xE3o ",-1),Ol={class:"col-6"},jl=e("dt",{class:"font-hind font-size-10"}," Tipo ",-1),Dl={class:"col-6"},Ml=e("dt",{class:"font-hind font-size-10"}," S\xE9rie ",-1),Bl={class:"col-6"},Ul=e("dt",{class:"font-hind font-size-10"}," Turno ",-1),Ll={class:"col-12"},zl=e("dt",{class:"font-hind font-size-10"}," Fase escolar ",-1),Fl={class:"col-12"},Wl=e("dt",{class:"font-hind font-size-10"}," Escola ",-1),Gl={class:"col-12"},Hl=e("dt",{class:"font-hind font-size-10"}," Data da solicita\xE7\xE3o ",-1),Jl={key:5,class:"row"},ql={key:0,class:"col-12 mb-3"},Yl={class:"alert badge-yellow"},Xl=e("strong",null," Este aluno tamb\xE9m est\xE1 em lista de espera: ",-1),Kl={class:"row mt-3"},Ql={class:"col-2 mb-0"},Zl=e("dt",{class:"font-hind font-size-10"}," Protocolo ",-1),es={class:"col-2 mb-0"},ts=e("dt",{class:"font-hind font-size-10"}," Posi\xE7\xE3o ",-1),os={class:"col-8 mb-0"},ls=e("dt",{class:"font-hind font-size-10"}," Escola ",-1),ss={key:1,class:"col-12 mb-3"},as={class:"alert badge-blue"},ns=e("strong",null," Este(a) aluno(a) tamb\xE9m possui uma outra solicita\xE7\xE3o de matr\xEDcula: ",-1),is={class:"row mt-3"},rs={class:"col-2 mb-0"},cs=e("dt",{class:"font-hind font-size-10"}," Protocolo ",-1),ds={class:"col-2 mb-0"},us=e("dt",{class:"font-hind font-size-10"}," Posi\xE7\xE3o ",-1),ms={class:"col-8 mb-0"},ps=e("dt",{class:"font-hind font-size-10"}," Escola ",-1),vs={class:"font-hind font-size-10"},hs=e("h3",{class:"font-hind-18-primary mt-4"}," Dados do(a) respons\xE1vel pelo(a) aluno(a) ",-1),fs=e("hr",null,null,-1),_s={class:"row"},gs={class:"col-6"},bs=e("dt",{class:"font-hind font-size-10"}," Rela\xE7\xE3o com o(a) aluno(a) ",-1),ys={class:"row"},Es={class:"font-hind font-size-10"},xs={class:"col-6"},ws=e("dt",{class:"font-hind font-size-10"}," Endere\xE7o ",-1),ks={class:"col-6"},$s=e("dt",{class:"font-hind font-size-10"}," N\xFAmero ",-1),Ts={key:0,class:"col-6"},Cs=e("dt",{class:"font-hind font-size-10"}," Complemento ",-1),Ss={class:"col-6"},Rs=e("dt",{class:"font-hind font-size-10"}," Bairro ",-1),Ps={class:"col-6"},As=e("dt",{class:"font-hind font-size-10"}," Cidade ",-1),Vs={key:7,class:"form-group"},Ns=e("label",{class:"form-label"},"Observa\xE7\xF5es (opcional)",-1),Is={key:8,class:"form-group"},Os=e("label",{class:"form-label"},"Justificativa (opcional)",-1),js={key:9,class:"mt-4 font-weight-bold"},Ds={class:"row"},Ms={key:10},Bs={class:"text-danger"},Us=["innerHTML"],Ls={class:"d-flex flex-column flex-lg-row justify-content-center"},zs=pe({__name:"PreRegistrationModal",setup(v){const E=ot("$filters"),{loader:d,loading:i}=F(),{loader:w,loading:k}=F(),{loader:j,loading:S}=F(),{loader:M,data:Y}=F([]),{loader:N,data:a}=F({}),{loader:B,loading:T}=F(),R=We(),P=Fe(),A=ze(),K=c({responsible:[],student:[]}),m=c({}),Q=c({}),g=c("SHOW"),U=c(),Z=c(),te=c(!1),C=c(),x=c(),$=c(!0),O=V(()=>R.isAdmin),ve=V(()=>R.isCoordinator),ae=V(()=>R.isSecretary),ne=V(()=>Object.keys(a.value).length===0),oe=V(()=>(g.value==="SHOW"||g.value==="ACCEPT")&&a.value.status!=="ACCEPTED"),ie=V(()=>(O.value||ve.value||ae.value)&&a.value.status!=="WAITING"&&g.value==="SHOW"),le=V(()=>(g.value==="SHOW"||g.value==="REJECT")&&(a.value.status==="WAITING"||a.value.status==="SUMMONED")),we=V(()=>(g.value==="SHOW"||g.value==="SUMMON")&&a.value.status==="WAITING"),he=(p,f)=>f==="STUDENT"?p.filter(Q.value[p.key]):p.filter(m.value[p.key]),ke=()=>{g.value==="SHOW"?g.value="ACCEPT":g.value==="ACCEPT"&&d(()=>ht({ids:[a.value.id],classroom:Z.value})).then(p=>{var f;if(p&&p.length){te.value=!0,C.value=p[0].message,x.value=(f=p[0].extensions)==null?void 0:f.message;return}A.push({name:"preregistrations"})})},$e=()=>{g.value==="SHOW"?(U.value=void 0,g.value="REJECT"):g.value==="REJECT"&&w(()=>ft({ids:[a.value.id],justification:U.value})).then(()=>{A.push({name:"preregistrations"})})},Te=()=>{j(()=>_t({ids:[a.value.id]})).then(()=>{A.push({name:"preregistrations"})})},Ce=()=>{M(()=>Ge({period:a.value.period.id,school:a.value.school.id,grade:a.value.grade.id,year:a.value.process.schoolYear.year}))},fe=p=>{A.push({name:"preregistration.modal",params:{protocol:p}})},Se=p=>{switch(p){case"REGISTRATION":return"Matr\xEDcula";case"REGISTRATION_RENEWAL":return"Rematr\xEDcula";case"WAITING_LIST":default:return"Lista de espera"}},Re=p=>{switch(p){case"REGISTRATION":return"badge-blue";case"REGISTRATION_RENEWAL":return"badge-cyan";case"WAITING_LIST":default:return"badge-yellow"}},Pe=p=>{var f;return(f=R.relationTypes.find(h=>h.key===p))==null?void 0:f.label},_e=p=>{a.value={},N(()=>vt({protocol:p})).then(f=>{const{fields:h,data:re}=it(f.process),{fields:Ve,data:ue}=rt(f.process);f.fields.filter(G=>G.field.group==="RESPONSIBLE").forEach(G=>{const me=`field_${G.field.id}`;re[me]=G.value}),f.fields.filter(G=>G.field.group==="STUDENT").forEach(G=>{const me=`field_${G.field.id}`;ue[me]=G.value}),K.value.responsible=h.sortBy("order"),m.value=J(J({},re),f.responsible),K.value.student=Ve.sortBy("order"),Q.value=J(J({},ue),f.student),Ce()})},Ae=()=>{g.value==="SHOW"?(U.value=void 0,g.value="SUMMON"):B(()=>gt({ids:[a.value.id],justification:U.value})).then(p=>{p&&p.length&&(te.value=!0,C.value="N\xE3o foi poss\xEDvel realizar a convoca\xE7\xE3o de todos os(as) respons\xE1veis(as)",x.value=p.map(f=>{var h;return(h=f.extensions)==null?void 0:h.message}).join("<br>"))}).finally(()=>{A.push({name:"preregistrations"})})};return Ee(P,()=>{_e(P.params.protocol)},{deep:!0}),Ee($,p=>{p||A.push({name:"preregistrations"})}),Le(()=>_e(P.params.protocol)),(p,f)=>(s(),D(xe,{modelValue:$.value,"onUpdate:modelValue":f[5]||(f[5]=h=>$.value=h),"title-class":"font-hind-18-primary text-uppercase text-primary",title:l(ne)?"":l(a).student.student_name,"icon-right":l(be)(l(ne)?"":l(a).status),"tooltip-icon":l(Ne)(l(ne)?"":l(a).status),"initial-loading":l(ne),large:!0,"loading-text":"",onCloseModal:f[6]||(f[6]=h=>p.$router.push({name:"preregistrations"}))},{body:ee(()=>[e("div",ll,[g.value==="REJECT"?(s(),n("div",sl,il)):u("",!0),g.value==="ACCEPT"?(s(),n("div",rl,ul)):u("",!0),l(a).status==="REJECTED"?(s(),n("div",ml,[pl,e("div",vl,[e("dl",hl,[fl,e("dd",null,r(l(a).observation),1)])]),_l])):u("",!0),l(a).status==="SUMMONED"&&l(a).observation?(s(),n("div",gl,[bl,e("div",yl,[e("dl",El,[xl,e("dd",null,r(l(a).observation),1)])]),wl])):u("",!0),l(a).status==="ACCEPTED"?(s(),n("div",kl,[$l,e("div",Tl,[e("dl",Cl,[Sl,e("dd",null,r(l(a).school.name),1)]),l(a).classroom?(s(),n("dl",Rl,[Pl,e("dd",null,r(l(a).classroom.name),1)])):u("",!0)]),Al])):u("",!0),e("div",Vl,[e("dl",Nl,[Il,e("dd",null,r(l(a).position)+"\xBA ",1)]),e("dl",Ol,[jl,e("dd",null,[e("span",{class:W([Re(l(a).type),"badge"])},r(Se(l(a).type)),3)])]),e("dl",Dl,[Ml,e("dd",null,r(l(a).grade.name),1)]),e("dl",Bl,[Ul,e("dd",null,r(l(a).period.name),1)]),e("dl",Ll,[zl,e("dd",null,r(l(a).grade.course.name),1)]),e("dl",Fl,[Wl,e("dd",null,r(l(a).school.name),1)]),e("dl",Gl,[Hl,e("dd",null,r(l(E).formatDateTime(l(a).date)),1)])]),g.value==="SHOW"?(s(),n("div",Jl,[l(a).waiting?(s(),n("div",ql,[e("div",Yl,[Xl,e("div",Kl,[e("dl",Ql,[Zl,e("dd",null,[e("a",{href:"javascript:void(0)",onClick:f[0]||(f[0]=h=>fe(l(a).waiting.protocol))}," #"+r(l(a).waiting.protocol),1)])]),e("dl",es,[ts,e("dd",null,r(l(a).waiting.position)+"\xBA ",1)]),e("dl",os,[ls,e("dd",null,r(l(a).waiting.school.name),1)])])])])):u("",!0),l(a).parent?(s(),n("div",ss,[e("div",as,[ns,e("div",is,[e("dl",rs,[cs,e("dd",null,[e("a",{href:"javascript:void(0)",onClick:f[1]||(f[1]=h=>fe(l(a).parent.protocol))}," #"+r(l(a).parent.protocol),1)])]),e("dl",ds,[us,e("dd",null,r(l(a).parent.position)+"\xBA ",1)]),e("dl",ms,[ps,e("dd",null,r(l(a).parent.school.name),1)])])])])):u("",!0),(s(!0),n(H,null,q(K.value.student,h=>(s(),n("dl",{key:h.id,class:"col-6"},[e("dt",vs,r(h.field.name),1),e("dd",null,r(he(h,"STUDENT")),1)]))),128))])):u("",!0),g.value==="SHOW"?(s(),n(H,{key:6},[hs,fs,e("div",_s,[e("dl",gs,[bs,e("dd",null,r(Pe(l(a).relationType)),1)])]),e("div",ys,[(s(!0),n(H,null,q(K.value.responsible,h=>(s(),n("dl",{key:h.id,class:"col-6"},[e("dt",Es,r(h.field.name),1),e("dd",null,r(he(h,"RESPONSIBLE")),1)]))),128))]),(s(!0),n(H,null,q(l(a).responsible.responsible_address,(h,re)=>(s(),n("div",{key:re,class:"row"},[e("dl",xs,[ws,e("dd",null,r(h.address),1)]),e("dl",ks,[$s,e("dd",null,r(h.number),1)]),h.complement?(s(),n("dl",Ts,[Cs,e("dd",null,r(h.complement),1)])):u("",!0),e("dl",Ss,[Rs,e("dd",null,r(h.neighborhood),1)]),e("dl",Ps,[As,e("dd",null,r(h.city),1)])]))),128))],64)):u("",!0),g.value==="SUMMON"?(s(),n("div",Vs,[Ns,X(e("textarea",{"onUpdate:modelValue":f[2]||(f[2]=h=>U.value=h),class:"form-control",rows:"3"},null,512),[[ye,U.value]])])):u("",!0),g.value==="REJECT"?(s(),n("div",Is,[Os,X(e("textarea",{"onUpdate:modelValue":f[3]||(f[3]=h=>U.value=h),class:"form-control",rows:"3"},null,512),[[ye,U.value]])])):u("",!0),g.value==="ACCEPT"?(s(),n("div",js,[e("div",Ds,[b(z,{modelValue:Z.value,"onUpdate:modelValue":f[4]||(f[4]=h=>Z.value=h),"container-class":"col-12",name:"classroom",rules:"required",label:"Para qual turma deseja designar o aluno(a)?",type:"SELECT",options:l(Y)},null,8,["modelValue","options"])])])):u("",!0),te.value?(s(),n("div",Ms,[e("h2",Bs,r(C.value),1),e("span",{innerHTML:x.value},null,8,Us)])):u("",!0)])]),footer:ee(()=>[e("div",Ls,[l(we)?(s(),D(I,{key:0,loading:l(T),color:"summon",outline:"",class:"ml-3 mr-3 mb-3 mb-lg-0",label:"Convocar respons\xE1veis",icon:"pmd-summon","no-wrap":"","no-caps":"","loading-normal":"",onClick:Ae},null,8,["loading"])):u("",!0),l(le)?(s(),D(I,{key:1,loading:l(k),color:"rejected",outline:"",class:"ml-3 mr-3 mb-3 mb-lg-0",label:"Indeferir pr\xE9-matr\xEDcula",icon:"pmd-rejected","no-wrap":"","no-caps":"","loading-normal":"",onClick:$e},null,8,["loading"])):u("",!0),l(ie)?(s(),D(I,{key:2,loading:l(S),color:"to-wait",outline:"",class:"ml-3 mr-3 mb-3 mb-lg-0",label:"Voltar para em espera",icon:"pmd-to-wait","no-wrap":"","no-caps":"","loading-normal":"",onClick:Te},null,8,["loading"])):u("",!0),l(oe)?(s(),D(I,{key:3,loading:l(i),color:"accepted",outline:"",class:"ml-3 mr-3 mb-3 mb-lg-0",label:"Deferir pr\xE9-matr\xEDcula",icon:"pmd-accepted","no-wrap":"","no-caps":"","loading-normal":"",onClick:ke},null,8,["loading"])):u("",!0)])]),_:1},8,["modelValue","title","icon-right","tooltip-icon","initial-loading"]))}});var Ks=Object.freeze(Object.defineProperty({__proto__:null,default:zs},Symbol.toStringTag,{value:"Module"}));export{Xs as P,Ks as a};
