import{g as S,a as $,o as M,i as B,n as F,e as k,_ as L,m as T,U as G,V as U,W as j,Y as I}from"./common.0943b71f.js";import{d as O,r as l,g as v,H as P,o as A,c as X,a as t,A as n,C as d,Z as Y,p as h,z as H,t as y,s as K}from"./vendor.f3d58d0b.js";const W=()=>S({query:`
      {
        processes(
          first: 100
          active: true
        ) {
          data {
            id
            name
            stages {
              id
              type
              name
              startAt
              endAt
              status
            }
            schoolYear {
              year
            }
            grades {
              id
              name
            }
          }
        }
      }
    `}).then(u=>u.data.data.processes.data.filter(c=>c.stages.length)),Z=g=>S({variables:g,query:`
      query vacancies(
        $processes: [ID!]
      ) {
        vacancies(
          processes: $processes
        ) {
          process
          grade
          school
          period
        }
        schools(
          first: 100
          processes: $processes
        ) {
          data {
            id
            name
            lat: latitude
            lng: longitude
            area_code
            phone
          }
        }
      }
    `}).then(c=>({vacancies:c.data.data.vacancies,schools:c.data.data.schools.data.map(i=>({...i,position:{lat:i.lat,lng:i.lng}}))})),J={class:"row mt-3"},Q={class:"row"},R={class:"col-12"},ee=t("h2",{class:"title-find-school"},"Consultar escola",-1),ae=["onSubmit"],se={class:"mt-2"},te={class:"d-flex justify-content-between"},oe={class:"d-flex align-items-center mt-3"},le={class:"row"},ne={class:"col-12 mt-5"},ce={class:"card"},re=t("div",{class:"col-12 small text-uppercase"},"Escola",-1),ie={class:"col-12"},de=t("div",{class:"col-12 small text-uppercase mt-2"},"Telefone",-1),ue={class:"col-12"},ge=O({__name:"SchoolFind",setup(g){const{loader:u,data:c}=$([]),{loader:i}=$(),b=l([]),x=l([]),r=M(),C=v(()=>r.map.config),w=l(r.map.center.lat),V=l(r.map.center.lng),N=l(r.map.zoom),f=l(!1),m=l(null),p=l(I()),_=l(),E=l(),q=v(()=>{const a=[],s=[];return c.value.forEach(e=>{e.grades.forEach(o=>{s.indexOf(o.id)===-1&&(s.push(o.id),a.push({key:o.id,label:o.name}))})}),a.sort((e,o)=>e.label>o.label?1:-1)}),z=v(()=>x.value.filter(a=>a.id).filter(a=>{const s=b.value.filter(e=>Number(e.school)===Number(a.id));return _.value?s.find(e=>Number(e.grade)===Number(_.value)):!0}).filter(a=>a.lat&&a.lng).map(a=>({...a,title:a.name,position:new google.maps.LatLng(a.lat,a.lng)})));(()=>{u(()=>W()).then(a=>{i(()=>Z({processes:a.map(s=>s.id)})).then(s=>{b.value=s.vacancies,x.value=s.schools})})})();const D=()=>{var s;if(!m.value)return;const a=[m.value,r.entity.city,r.entity.state].filter(e=>e).join(", ");f.value=!0,(s=E.value)==null||s.geocode({address:a},(e,o)=>{o==="OK"&&e&&(w.value=e[0].geometry.location.lat(),V.value=e[0].geometry.location.lng(),p.value.position=e[0].geometry.location)}).finally(()=>{f.value=!1})};return P(()=>{E.value=new google.maps.Geocoder}),(a,s)=>(A(),X("div",null,[t("div",J,[n(B)]),t("div",Q,[t("div",R,[ee,n(T,{flat:"",class:"bg-primary mt-4"},{default:d(()=>[n(F,null,{default:d(()=>[t("form",{onSubmit:Y(D,["prevent"])},[n(k,{modelValue:m.value,"onUpdate:modelValue":s[0]||(s[0]=e=>m.value=e),label:"Endere\xE7o","label-class":"form-label-bg-blue",name:"address",type:"TEXT",placeholder:"Digite o seu endere\xE7o (rua e n\xFAmero)","container-class":"w-100"},null,8,["modelValue"]),t("div",se,[t("div",te,[n(k,{id:"grade",modelValue:_.value,"onUpdate:modelValue":s[1]||(s[1]=e=>_.value=e),label:"S\xE9rie","label-class":"form-label-bg-blue",name:"grade",type:"SELECT",options:h(q),placeholder:"Selecione a s\xE9rie","container-class":"mr-3 w-100",searchable:""},null,8,["modelValue","options"]),t("div",oe,[n(L,{"data-test":"btn-search-school",loading:f.value,type:"submit",icon:"fa-search",class:"w-100 bg-primary-light text-primary flex-row",style:{height:"45px"},"loading-normal":""},null,8,["loading"])])])])],40,ae)]),_:1})]),_:1})])]),t("div",le,[t("div",ne,[t("div",ce,[n(j,{config:h(C),lat:w.value,lng:V.value,zoom:N.value,style:{height:"400px"}},{default:d(({map:e})=>[p.value.position?(A(),H(G,{key:0,map:e,marker:p.value},{default:d(()=>[t("strong",null,y(p.value.title),1)]),_:2},1032,["map","marker"])):K("",!0),n(U,{markers:h(z),map:e},{default:d(({marker:o})=>[t("div",null,[re,t("div",ie,y(o.name),1),de,t("div",ue,y(`(${o.area_code}) ${o.phone}`),1)])]),_:2},1032,["markers","map"])]),_:1},8,["config","lat","lng","zoom"])])])])]))}});export{ge as default};
