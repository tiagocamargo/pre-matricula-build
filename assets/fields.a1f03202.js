var ne=Object.defineProperty,ie=Object.defineProperties;var re=Object.getOwnPropertyDescriptors;var P=Object.getOwnPropertySymbols;var de=Object.prototype.hasOwnProperty,ce=Object.prototype.propertyIsEnumerable;var j=(n,l,s)=>l in n?ne(n,l,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[l]=s,c=(n,l)=>{for(var s in l||(l={}))de.call(l,s)&&j(n,s,l[s]);if(P)for(var s of P(l))ce.call(l,s)&&j(n,s,l[s]);return n},x=(n,l)=>ie(n,re(l));import{g as S,a as ue,u as pe,_ as $,b as G,f as me,X as H,c as ve}from"./common.017a279d.js";import{_ as _e}from"./shared/fields/processes.4f0309cc.js";import{d as ge,r as u,c as C,t as he,a as r,v as h,k as J,m as w,b as t,F as T,j as O,l as p,p as V,A as fe,o as i,n as K,O as q,D as ye}from"./vendor.1f347d3d.js";import"./@vueuse/core.ebf6af6e.js";import"./vue-the-mask.7c8603ed.js";import"./flatpickr.cab88106.js";import"./froala-editor.fa4daa16.js";const D=()=>S({query:`
      query fields {
        fields(first: 100) {
          data {
            id
            name
            internal
            required
            group
            type
            options {
              id
              name
              weight
            }
          }
        }
      }
    `}).then(l=>l.data.data.fields.data),be=n=>S({variables:n,query:`
      mutation createField(
        $type: FieldType!
        $group: GroupType!
        $name: String!
        $options: [FieldOptionInput!]
      ) {
        resource: createField(
          input: {
            type: $type
            group: $group
            name: $name
            options: $options
          }
        ) {
          id
          name
        }
      }
    `}).then(s=>s.data),$e=n=>S({variables:n,query:`
      mutation updateField(
        $id: ID!
        $type: FieldType
        $group: GroupType
        $name: String
        $options: [FieldOptionInput!]
        $deleteOptions: [ID!]
      ) {
        resource: updateField(
          input: {
            id: $id
            type: $type
            group: $group
            name: $name
            options: $options
            deleteOptions: $deleteOptions
          }
        ) {
          id
          name
        }
      }
    `}).then(s=>s.data),we=t("h1",null,"Campos",-1),ke={key:1,class:"row mt-5"},Ee={class:"col-12 col-md-6"},xe={class:"row"},Ce=t("div",{class:"col-12"},[t("p",null," Dados do(a) respons\xE1vel pelo(a) aluno(a) "),t("hr")],-1),Te=["onClick"],Oe={class:"toggle-checkbox"},Ve=["value"],qe={key:0,class:"col-12 mb-3"},De=t("label",{class:"toggle-checkbox"},[t("input",{type:"checkbox",disabled:""}),t("div",{class:"toggle-text toggle-required"}," Endere\xE7o ")],-1),Se=[De],Fe={class:"col-12"},Ue={class:"col-12 col-md-6 mt-5 mt-md-0"},Le={class:"row"},Ne=t("div",{class:"col-12"},[t("p",null," Dados do(a) aluno(a) "),t("hr")],-1),Ie=["onClick"],Ae={class:"toggle-checkbox"},Xe=["value"],Be={class:"col-12"},Me={key:0,class:"col-12"},Re=t("h3",null,"Op\xE7\xF5es",-1),ze={class:"w-100 mr-2"},Pe={class:"mr-2"},je={class:"d-flex align-items-start"},Ge={class:"row mt-4"},He={class:"col-6 offset-3"},to=ge({__name:"FieldsPage",setup(n){const{loader:l,data:s,loading:F}=ue([]),{loader:U,loading:L}=pe(),y=u(),N=u({name:null,weight:0,id:null}),I=u({id:null,name:null,group:null,type:null,internal:!1,options:[],deleteOptions:[]}),m=u({id:null,name:null,group:null,type:null,internal:!1,options:[],deleteOptions:[]}),v=u(!1),Q=u(me()),k=u(!1),A=u(""),X=u(""),B=C(()=>s.value.filter(e=>e.group==="RESPONSIBLE")),W=C(()=>s.value.filter(e=>e.group==="STUDENT")),Y=C(()=>({fields:[{label:"T\xEDtulo da pergunta",name:"name",type:"TEXT",value:m.value.name,containerClass:"col-12",rules:"required"},{label:"Tipo da resposta",name:"type",type:"SELECT",value:m.value.type,options:Q.value,containerClass:"col-12",disabled:m.value.id?!0:void 0,rules:"required",searchable:!1}],buttons:[{type:"submit",label:"Salvar",class:"btn btn-block btn-primary",containerClass:"",block:!0,bind:{"data-test":"btn-save-field"}}],buttonsContainer:{class:""}})),M=e=>{m.value=x(c({},I.value),{group:e,options:[],type:"TEXT"}),v.value=!0},Z=(e,a)=>{const{options:d}=e;let o=[c({},N.value)];d&&(d.push(c({},N.value)),o=d),a(x(c({},e),{options:o}))},R=e=>{m.value=c(c({},I.value),e),v.value=!0},z=e=>{k.value=!0,A.value=`Erro ao ${e} o campo`,X.value=`Aconteceu um erro ao ${e} o campo, por favor tente novamente em alguns instantes.`},ee=e=>{U(()=>be(e)).then(()=>{v.value=!1,l(D)}).catch(()=>{z("criar")})},oe=e=>{U(()=>$e(e)).then(()=>{v.value=!1,l(D)}).catch(()=>{z("editar")}),L.value=!0},te=e=>{e.options&&e.options.forEach(a=>{const d=a;d.weight=Number(a.weight)}),e.id?oe(e):ee(e)},le=(e,a,d)=>{const o=e.options[a],{options:_,deleteOptions:g}=e;_.splice(a,1),o.id&&(g==null||g.push(o.id)),d(x(c({},e),{options:_,deleteOptions:g}))},ae=()=>{var e;m.value.options.length<2&&y.value&&((e=y.value)==null||e.setOverflowVisible(!0))},se=()=>{var e;y.value&&((e=y.value)==null||e.setOverflowVisible(!1))};return he(()=>l(D)),(e,a)=>{const d=fe("tooltip");return i(),r("main",null,[we,h(F)?(i(),J(_e,{key:0,class:"mt-5",items:20})):w("",!0),h(F)?w("",!0):(i(),r("div",ke,[t("div",Ee,[t("div",xe,[Ce,(i(!0),r(T,null,O(h(B),o=>(i(),r("div",{key:o.id,class:"col-12 col-sm-6 col-md-12 col-lg-6 mb-3","data-test":"wrapper-checkbox",onClick:_=>R(o)},[t("label",Oe,[t("input",{type:"checkbox",disabled:"",value:o.id},null,8,Ve),t("div",{class:K([{"toggle-required":o.required},"toggle-text"])},q(o.name),3)])],8,Te))),128)),h(B).length?(i(),r("div",qe,Se)):w("",!0),t("div",Fe,[p($,{"data-test":"btn-add-field-responsible",label:"Adicionar novo campo","no-caps":"","no-wrap":"",color:"primary",class:"w-100",icon:"mdi-plus",size:"lg",onClick:a[0]||(a[0]=o=>M("RESPONSIBLE"))})])])]),t("div",Ue,[t("div",Le,[Ne,(i(!0),r(T,null,O(h(W),o=>(i(),r("div",{key:o.id,class:"col-12 col-sm-6 col-md-12 col-lg-6 mb-3",onClick:_=>R(o)},[t("label",Ae,[t("input",{type:"checkbox",disabled:"",value:o.id},null,8,Xe),t("div",{class:K([{"toggle-required":o.required},"toggle-text"])},q(o.name),3)])],8,Ie))),128)),t("div",Be,[p($,{"data-test":"btn-add-field-student",label:"Adicionar novo campo","no-caps":"","no-wrap":"",color:"primary",class:"w-100",icon:"mdi-plus",size:"lg",onClick:a[1]||(a[1]=o=>M("STUDENT"))})])])])])),p(G,{ref_key:"fieldsModal",ref:y,modelValue:v.value,"onUpdate:modelValue":a[2]||(a[2]=o=>v.value=o),"no-footer":"",title:(m.value.id?"Editar ":"Novo ")+"Campo"},{body:V(()=>[v.value?(i(),J(ve,{key:0,loading:h(L),schema:h(Y),"initial-values":c({},m.value),onSubmit:te,"onOpen:options":ae,"onClose:options":se},{default:V(({values:o,errors:_,setValues:g})=>[o.type==="SELECT"||o.type==="MULTI_SELECT"||o.type==="RADIO"?(i(),r("div",Me,[Re,(i(!0),r(T,null,O(o.options,(b,f)=>(i(),r("div",{key:f,class:"d-flex justify-content-between"},[t("div",ze,[p(H,{modelValue:b.name,"onUpdate:modelValue":E=>b.name=E,name:`options[${f}].name`,"container-class":"form-group",type:"TEXT",rules:"required",errors:!!_[`options[${f}].name`]},null,8,["modelValue","onUpdate:modelValue","name","errors"])]),t("div",Pe,[p(H,{modelValue:b.weight,"onUpdate:modelValue":E=>b.weight=E,name:`options[${f}].weight`,"container-class":"form-group",type:"TEXT",rules:"required|numeric",errors:!!_[`options[${f}].weight`]},null,8,["modelValue","onUpdate:modelValue","name","errors"])]),t("div",je,[ye(p($,{"no-caps":"","no-wrap":"",class:"w-100 h-75 flex-row text-danger border-danger",icon:"mdi-trash-can-outline",onClick:E=>le(o,f,g)},null,8,["onClick"]),[[d,"Remover Op\xE7\xE3o",void 0,{"start-bottom":!0}]])])]))),128)),p($,{"no-caps":"","no-wrap":"",outline:"",color:"primary",class:"w-100 mb-4",label:"Adicionar op\xE7\xE3o",onClick:b=>Z(o,g)},null,8,["onClick"])])):w("",!0)]),_:1},8,["loading","schema","initial-values"])):w("",!0)]),_:1},8,["modelValue","title"]),p(G,{modelValue:k.value,"onUpdate:modelValue":a[4]||(a[4]=o=>k.value=o),title:A.value,"icon-left":"status-red","title-class":"text-danger","no-footer":""},{body:V(()=>[t("span",null,q(X.value),1),t("div",Ge,[t("div",He,[p($,{class:"w-100",color:"primary",label:"Entendi","no-caps":"","no-wrap":"",onClick:a[3]||(a[3]=o=>k.value=!1)})])])]),_:1},8,["modelValue","title"])])}}});export{to as default};
