import{h as s,u as n}from"./common.017a279d.js";import{d as i,u as c,r as u,o as d,a as l,b as m}from"./vendor.1f347d3d.js";import"./@vueuse/core.ebf6af6e.js";import"./vue-the-mask.7c8603ed.js";import"./flatpickr.cab88106.js";import"./froala-editor.fa4daa16.js";const p=()=>s.get("/auth/login",{withCredentials:!0}).then(e=>e.data),g=["innerHTML"],w=i({__name:"Login",setup(e){const t=c(),o=u("Logando.."),{loader:a}=n();return a(p).then(r=>{if(!r)throw new Error;t.push({name:"preregistrations"})}).catch(()=>{o.value=`
      O login de acesso no <strong>Pr\xE9-matr\xEDcula Digital</strong> \xE9 exclusivo para secret\xE1rios e diretores escolares,
      ou gestores da Secretaria de Educa\xE7\xE3o.
      <br>
      No momento, para acessar o sistema voc\xEA deve estar logado no i-Educar.
    `}),(r,h)=>(d(),l("main",null,[m("div",{class:"text-center",innerHTML:o.value},null,8,g)]))}});export{w as default};
