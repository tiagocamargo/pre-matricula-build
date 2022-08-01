import{h as s,u as n}from"./common.c7e4875a.js";import{d as c,r as i,o as u,c as d,a as l,u as m}from"./vendor.c0962c27.js";const g=()=>s.get("/auth/login",{withCredentials:!0}).then(e=>e.data),h=["innerHTML"],_=c({__name:"Login",setup(e){const a=m(),o=i("Logando.."),{loader:t}=n();return t(g).then(r=>{if(!r)throw new Error;a.push({name:"preregistrations"})}).catch(()=>{o.value=`
      O login de acesso no <strong>Pr\xE9-matr\xEDcula Digital</strong> \xE9 exclusivo para secret\xE1rios e diretores escolares,
      ou gestores da Secretaria de Educa\xE7\xE3o.
      <br>
      No momento, para acessar o sistema voc\xEA deve estar logado no i-Educar.
    `}),(r,p)=>(u(),d("main",null,[l("div",{class:"text-center",innerHTML:o.value},null,8,h)]))}});export{_ as default};
