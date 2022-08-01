import{g as O,a as Y,b as Z,_ as E,X as ee,c as oe,f as te,d as ae,e as U}from"./common.c7e4875a.js";import{d as le,r as p,g as w,I as se,o as l,c as s,q as u,A,t as b,a as t,F as x,z as C,B as m,D as B,x as ne,C as X,v as M,w as ie}from"./vendor.c0962c27.js";const T=()=>O({query:`
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
    `}).then(i=>i.data.data.fields.data),re=h=>O({variables:h,query:`
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
    `}).then(v=>v.data),de=h=>O({variables:h,query:`
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
    `}).then(v=>v.data),ce=t("h1",null,"Campos",-1),pe={key:1,class:"row mt-5"},ue={class:"col-12 col-md-6"},me={class:"row"},ve=t("div",{class:"col-12"},[t("p",null,"Dados do(a) respons\xE1vel pelo(a) aluno(a)"),t("hr")],-1),ge=["onClick"],_e={class:"toggle-checkbox"},he=["value"],ye={key:0,class:"col-12 mb-3"},fe=t("label",{class:"toggle-checkbox"},[t("input",{type:"checkbox",disabled:""}),t("div",{class:"toggle-text toggle-required"},"Endere\xE7o")],-1),be=[fe],$e={class:"col-12"},Ee={class:"col-12 col-md-6 mt-5 mt-md-0"},ke={class:"row"},we=t("div",{class:"col-12"},[t("p",null,"Dados do(a) aluno(a)"),t("hr")],-1),xe=["onClick"],Ce={class:"toggle-checkbox"},Te=["value"],Oe={class:"col-12"},qe={key:0,class:"col-12"},Se=t("h3",null,"Op\xE7\xF5es",-1),Ve={class:"w-100 mr-2"},De={class:"mr-2"},Fe={class:"d-flex align-items-start"},Ne=le({__name:"FieldsPage",setup(h){const{loader:i,data:v,loading:q}=Y([]),k=p(),{loader:S,loading:V}=Z(k),y=p(),D=p({name:null,weight:0}),F=p({id:null,name:null,group:null,type:null,internal:!1,options:[],deleteOptions:[]}),g=p({id:null,name:null,group:null,type:null,internal:!1,options:[],deleteOptions:[]}),r=p(!1),z=p(te()),I=w(()=>v.value.filter(e=>e.group==="RESPONSIBLE")),R=w(()=>v.value.filter(e=>e.group==="STUDENT")),P=w(()=>({fields:[{label:"T\xEDtulo da pergunta",name:"name",type:"TEXT",containerClass:"col-12",rules:"required"},{label:"Tipo da resposta",name:"type",type:"SELECT",options:z.value,containerClass:"col-12",disabled:g.value.id?!0:void 0,rules:"required",searchable:!1}],buttons:[{type:"submit",label:"Salvar",class:"btn btn-block btn-primary",containerClass:"",block:!0,bind:{"data-test":"btn-save-field"}}],buttonsContainer:{class:""}})),L=e=>{g.value={...F.value,group:e,options:[],type:"TEXT"},r.value=!0},G=(e,a)=>{const{options:n}=e;let o=[{...D.value}];n&&(n.push({...D.value}),o=n),a({...e,options:o})},N=e=>{g.value={...F.value,...e},r.value=!0},j=e=>{k.value={title:"Erro ao criar o campo",description:"Aconteceu um erro ao criar o campo, por favor tente novamente em alguns instantes."},S(()=>re(e)).then(()=>{r.value=!1,i(T)})},H=e=>{k.value={title:"Erro ao editar o campo",description:"Aconteceu um erro ao editar o campo, por favor tente novamente em alguns instantes."},S(()=>de(e)).then(()=>{r.value=!1,i(T)}),V.value=!0},J=e=>{e.options&&e.options.forEach(a=>{const n=a;n.weight=Number(a.weight)}),e.id?H(e):j(e)},K=(e,a,n)=>{const o=e.options[a],{options:d,deleteOptions:c}=e;d.splice(a,1),o.id&&(c==null||c.push(o.id)),n({...e,options:d,deleteOptions:c})},Q=()=>{var e;g.value.options.length<2&&y.value&&((e=y.value)==null||e.setOverflowVisible(!0))},W=()=>{var e;y.value&&((e=y.value)==null||e.setOverflowVisible(!1))};return se(()=>i(T)),(e,a)=>{const n=ne("tooltip");return l(),s("main",null,[ce,u(q)?(l(),A(ae,{key:0,class:"mt-5",items:20})):b("",!0),u(q)?b("",!0):(l(),s("div",pe,[t("div",ue,[t("div",me,[ve,(l(!0),s(x,null,C(u(I),o=>(l(),s("div",{key:o.id,class:"col-12 col-sm-6 col-md-12 col-lg-6 mb-3","data-test":"wrapper-checkbox",onClick:d=>N(o)},[t("label",_e,[t("input",{type:"checkbox",disabled:"",value:o.id},null,8,he),t("div",{class:X([{"toggle-required":o.required},"toggle-text"])},M(o.name),3)])],8,ge))),128)),u(I).length?(l(),s("div",ye,be)):b("",!0),t("div",$e,[m(E,{"data-test":"btn-add-field-responsible",label:"Adicionar novo campo","no-caps":"","no-wrap":"",color:"primary",class:"w-100",icon:"mdi-plus",size:"lg",onClick:a[0]||(a[0]=o=>L("RESPONSIBLE"))})])])]),t("div",Ee,[t("div",ke,[we,(l(!0),s(x,null,C(u(R),o=>(l(),s("div",{key:o.id,class:"col-12 col-sm-6 col-md-12 col-lg-6 mb-3",onClick:d=>N(o)},[t("label",Ce,[t("input",{type:"checkbox",disabled:"",value:o.id},null,8,Te),t("div",{class:X([{"toggle-required":o.required},"toggle-text"])},M(o.name),3)])],8,xe))),128)),t("div",Oe,[m(E,{"data-test":"btn-add-field-student",label:"Adicionar novo campo","no-caps":"","no-wrap":"",color:"primary",class:"w-100",icon:"mdi-plus",size:"lg",onClick:a[1]||(a[1]=o=>L("STUDENT"))})])])])])),m(oe,{ref_key:"fieldsModal",ref:y,modelValue:r.value,"onUpdate:modelValue":a[2]||(a[2]=o=>r.value=o),"no-footer":"",title:(g.value.id?"Editar ":"Novo ")+"Campo"},{body:B(()=>[r.value?(l(),A(ee,{key:0,loading:u(V),schema:u(P),"initial-values":{...g.value},onSubmit:J,"onOpen:options":Q,"onClose:options":W},{default:B(({values:o,errors:d,setValues:c})=>[o.type==="SELECT"||o.type==="MULTI_SELECT"||o.type==="RADIO"?(l(),s("div",qe,[Se,(l(!0),s(x,null,C(o.options,(f,_)=>(l(),s("div",{key:_,class:"d-flex justify-content-between"},[t("div",Ve,[m(U,{modelValue:f.name,"onUpdate:modelValue":$=>f.name=$,name:`options[${_}].name`,"container-class":"form-group",type:"TEXT",rules:"required",errors:!!d[`options[${_}].name`]},null,8,["modelValue","onUpdate:modelValue","name","errors"])]),t("div",De,[m(U,{modelValue:f.weight,"onUpdate:modelValue":$=>f.weight=$,name:`options[${_}].weight`,"container-class":"form-group",type:"TEXT",rules:"required|numeric",errors:!!d[`options[${_}].weight`]},null,8,["modelValue","onUpdate:modelValue","name","errors"])]),t("div",Fe,[ie(m(E,{"no-caps":"","no-wrap":"",class:"w-100 h-75 flex-row text-danger border-danger",icon:"mdi-trash-can-outline",onClick:$=>K(o,_,c)},null,8,["onClick"]),[[n,"Remover Op\xE7\xE3o",void 0,{"start-bottom":!0}]])])]))),128)),m(E,{"no-caps":"","no-wrap":"",outline:"",color:"primary",class:"w-100 mb-4",label:"Adicionar op\xE7\xE3o",onClick:f=>G(o,c)},null,8,["onClick"])])):b("",!0)]),_:1},8,["loading","schema","initial-values"])):b("",!0)]),_:1},8,["modelValue","title"])])}}});export{Ne as default};
