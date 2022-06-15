var T=Object.defineProperty,G=Object.defineProperties;var O=Object.getOwnPropertyDescriptors;var N=Object.getOwnPropertySymbols;var X=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var S=(n,s,t)=>s in n?T(n,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[s]=t,v=(n,s)=>{for(var t in s||(s={}))X.call(s,t)&&S(n,t,s[t]);if(N)for(var t of N(s))j.call(s,t)&&S(n,t,s[t]);return n},h=(n,s)=>G(n,O(s));import{g as q,a as A,n as I,k as P,C as U,D as K,m as Y,i as H,X as C,_ as J,E as Q,F as R}from"./common.017a279d.js";import{d as W,r as c,c as y,t as Z,a as ee,b as l,l as i,p as m,v as b,o as D,N as ae,k as se,O as x,m as te}from"./vendor.1f347d3d.js";import"./@vueuse/core.ebf6af6e.js";import"./vue-the-mask.7c8603ed.js";import"./flatpickr.cab88106.js";import"./froala-editor.fa4daa16.js";const oe=()=>q({query:`
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
    `}).then(s=>s.data.data.processes.data.filter(t=>t.stages.length)),le=n=>q({variables:n,query:`
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
    `}).then(t=>({vacancies:t.data.data.vacancies,schools:t.data.data.schools.data.map(u=>h(v({},u),{position:{lat:u.lat,lng:u.lng}}))}));const ne={class:"row mt-3"},re={class:"row"},ce={class:"col-12"},ie=l("h2",{class:"title-find-school"},"Consultar escola",-1),de=["onSubmit"],ue={class:"mt-2"},me={class:"d-flex justify-content-between"},pe={class:"d-flex align-items-center mt-3"},ge={class:"row"},_e={class:"col-12 mt-5"},fe={class:"card"},ve=l("div",{class:"col-12 small text-uppercase"},"Escola",-1),he={class:"col-12"},ye=l("div",{class:"col-12 small text-uppercase mt-2"},"Telefone",-1),be={class:"col-12"},Ae=W({__name:"SchoolFind",setup(n){const{loader:s,data:t}=A([]),{loader:u}=A(),w=c([]),E=c([]),d=I(),F=y(()=>d.map.config),k=c(d.map.center.lat),V=c(d.map.center.lng),M=c(d.map.zoom),f=c(!1),p=c(null),g=c(K()),_=c(),$=c(),z=y(()=>{const a=[],o=[];return t.value.forEach(e=>{e.grades.forEach(r=>{o.indexOf(r.id)===-1&&(o.push(r.id),a.push({key:r.id,label:r.name}))})}),a.sort((e,r)=>e.label>r.label?1:-1)}),B=y(()=>E.value.filter(a=>a.id).filter(a=>{const o=w.value.filter(e=>Number(e.school)===Number(a.id));return _.value?o.find(e=>Number(e.grade)===Number(_.value)):!0}).filter(a=>a.lat&&a.lng).map(a=>h(v({},a),{title:a.name,position:new google.maps.LatLng(a.lat,a.lng)})));(()=>{s(()=>oe()).then(a=>{u(()=>le({processes:a.map(o=>o.id)})).then(o=>{w.value=o.vacancies,E.value=o.schools})})})();const L=()=>{var o;if(!p.value)return;const a=[p.value,d.entity.city,d.entity.state].filter(e=>e).join(", ");f.value=!0,(o=$.value)==null||o.geocode({address:a},(e,r)=>{r==="OK"&&e&&(k.value=e[0].geometry.location.lat(),V.value=e[0].geometry.location.lng(),g.value.position=e[0].geometry.location)}).finally(()=>{f.value=!1})};return Z(()=>{$.value=new google.maps.Geocoder}),(a,o)=>(D(),ee("div",null,[l("div",ne,[i(Y)]),l("div",re,[l("div",ce,[ie,i(P,{flat:"",class:"bg-primary mt-4"},{default:m(()=>[i(H,null,{default:m(()=>[l("form",{onSubmit:ae(L,["prevent"])},[i(C,{modelValue:p.value,"onUpdate:modelValue":o[0]||(o[0]=e=>p.value=e),label:"Endere\xE7o","label-class":"form-label-bg-blue",name:"address",type:"TEXT",placeholder:"Digite o seu endere\xE7o (rua e n\xFAmero)","container-class":"w-100"},null,8,["modelValue"]),l("div",ue,[l("div",me,[i(C,{id:"grade",modelValue:_.value,"onUpdate:modelValue":o[1]||(o[1]=e=>_.value=e),label:"S\xE9rie","label-class":"form-label-bg-blue",name:"grade",type:"SELECT",options:b(z),placeholder:"Selecione a s\xE9rie","container-class":"mr-3 w-100",searchable:""},null,8,["modelValue","options"]),l("div",pe,[i(J,{"data-test":"btn-search-school",loading:f.value,type:"submit",icon:"fa-search",class:"w-100 bg-primary-light text-primary flex-row",style:{height:"45px"},"loading-normal":""},null,8,["loading"])])])])],40,de)]),_:1})]),_:1})])]),l("div",ge,[l("div",_e,[l("div",fe,[i(U,{config:b(F),lat:k.value,lng:V.value,zoom:M.value,style:{height:"400px"}},{default:m(({map:e})=>[g.value.position?(D(),se(Q,{key:0,map:e,marker:g.value},{default:m(()=>[l("strong",null,x(g.value.title),1)]),_:2},1032,["map","marker"])):te("",!0),i(R,{markers:b(B),map:e},{default:m(({marker:r})=>[l("div",null,[ve,l("div",he,x(r.name),1),ye,l("div",be,x(`(${r.area_code}) ${r.phone}`),1)])]),_:2},1032,["markers","map"])]),_:1},8,["config","lat","lng","zoom"])])])])]))}});export{Ae as default};
