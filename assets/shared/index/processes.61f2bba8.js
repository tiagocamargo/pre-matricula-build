var f=Object.defineProperty,$=Object.defineProperties;var q=Object.getOwnPropertyDescriptors;var u=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var y=(e,t,a)=>t in e?f(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,p=(e,t)=>{for(var a in t||(t={}))A.call(t,a)&&y(e,a,t[a]);if(u)for(var a of u(t))v.call(t,a)&&y(e,a,t[a]);return e},l=(e,t)=>$(e,q(t));import{g as o,e as I,H as g,I as m}from"../../common.017a279d.js";const S=()=>o({query:`
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
    `}).then(t=>t.data.data.processes.data),w=e=>o({variables:e,query:`
      mutation deleteProcess($id: ID!) {
        process: deleteProcess(id: $id) {
          id
        }
      }
    `}).then(a=>({errors:a.data.errors,process:a.data.data.process})),D=e=>o({variables:e,query:`
      query process($id: ID!) {
        process(id: $id) {
          id
          name
          schoolYear {
            year
          }
          stages {
            id
            type
            name
            startAt
            endAt
            status
          }
          grades {
            id
            name
            startBirth
            endBirth
          }
          periods {
            id
            name
          }
          schools {
            id
            name
            latitude
            longitude
          }
          fields {
            id
            order
            field {
              id
              name
              group
              type
              internal
              options {
                id
                key: id
                name
                label: name
              }
            }
            required
            weight
          }
          vacancies {
            school
            period
            grade
            total
            available
          }
        }
      }
    `}).then(a=>a.data.data.process),B=e=>o({variables:{input:e},query:`
      mutation save(
        $input: ProcessInput!
      ) {
        process: saveProcess(
          input: $input
        ) {
          id
        }
      }
    `}).then(a=>a.data.data.process),Y=e=>o({variables:e,query:`
      mutation save(
        $id: ID!
        $stages: [ProcessStageInput!]!
      ) {
        process: saveProcessStages(
            id: $id
            stages: $stages
        ) {
          id
        }
      }
    `}),k=e=>o({variables:e,query:`
      mutation copyProcess($id: ID!) {
        process: copyProcess(id: $id) {
          id
        }
      }
    `}).then(a=>({errors:a.data.errors,process:a.data.data.process})),F=e=>o({variables:e,query:`
      query process($id: ID!) {
        process(id:$id) {
          id
          name
          active
          messageFooter
          gradeAgeRangeLink
          forceSuggestedGrade
          showPriorityProtocol
          allowResponsibleSelectMapAddress
          schoolYear {
            id
          }
          grades {
            id
          }
          periods {
            id
          }
        }
      }
    `}).then(a=>{const{process:r}=a.data.data,s=r.grades.map(d=>d.id),i=r.periods.map(d=>d.id);return l(p({},r),{grades:s,periods:i,schoolYear:r.schoolYear.id})}),j=()=>o({query:`
      {
        courses(first:100) {
          data {
            id
            name
            grades(first:100) {
              data {
                id
                name
              }
            }
          }
        }
        periods(first:100) {
          data {
            id
            name
          }
        }
        schoolYears(first:100) {
          data {
            key: id
            label: year
          }
        }
      }
    `}).then(t=>({courses:t.data.data.courses.data.map(r=>l(p({},r),{grades:r.grades.data})),periods:t.data.data.periods.data,schoolYears:t.data.data.schoolYears.data})),H=e=>o({variables:e,query:`
      query ProcessStages($id: ID!) {
        process(id: $id) {
          id
          name
          stages {
            id
            type
            radius
            startAt
            endAt
            startHourAt: startAt
            endHourAt: endAt
            observation
            renewalAtSameSchool
            allowWaitingList
          }
        }
      }
    `}).then(a=>{const r=a.data.data.process.stages.map(s=>l(p({},s),{startAt:g(s.startAt),endAt:g(s.endAt),startHourAt:m(s.startHourAt),endHourAt:m(s.endHourAt)}));return{process:{id:a.data.data.process.id,name:a.data.data.process.name},stages:r}}),E=()=>o({query:`
      query {
        processes (
          first: 100
        ) {
          data {
            id
            key: id
            label: name
            name
            active
            schoolYear {
              year
            }
            stages {
              id
              type
              name
              startAt
              endAt
              status
            }
          }
        }
      }
    `}).then(t=>{const a=t.data.data.processes.data.map(s=>s.schoolYear.year).filter((s,i,d)=>d.indexOf(s)===i).map(s=>({key:s,label:s})).sort((s,i)=>i.key-s.key),r=[];return t.data.data.processes.data.forEach(s=>{s.stages.forEach(i=>{r.push(i.status)})}),{processes:t.data.data.processes.data.sortBy("name"),years:a,status:r.filter((s,i,d)=>d.indexOf(s)===i).map(s=>({key:s,label:I(s).toUpperCase()})).sortBy("label")}}),R=e=>o({variables:e,query:`
      query process($id: ID!) {
        process(id: $id) {
          id
          name
          schoolYear {
            year
          }
          stages {
            id
            type
            name
            startAt
            endAt
            status
            observation
            totalWaitingPreRegistrations
          }
          periods {
            id
            name
          }
          fields {
            id
            field {
              name
              group
              type
            }
            required
            weight
          }
        }
      }
    `}).then(a=>a.data.data.process),x=e=>o({variables:e,query:`
      mutation rejectInBatch(
        $id: ID!
        $stageId: ID!
        $justification: String
      ) {
        rejectInBatch(
          id: $id
          stageId: $stageId
          justification: $justification
        )
      }
    `}).then(a=>({errors:a.data.errors,rejectInBatch:a.data.data.rejectInBatch})),C=e=>o({query:`
      query ProcessFields($id: ID!) {
        process(id: $id) {
          id
          name
          fields {
            field {
              id
            }
            required
            weight
            order
          }
        }
        fields(first: 100) {
          data {
            id
            name
            type
            group
            required
            mandatory: required
            internal
            options {
              id
              name
            }
          }
        }
      }
    `,variables:e}).then(a=>{const r=a.data.data.fields.data.map(d=>{const c=a.data.data.process.fields.find(h=>h.field.id===d.id),n=l(p({},d),{priority:!1,open:!1,checked:d.required,weight:0,order:99});return c&&(n.checked=!0,n.weight=c.weight,n.required=c.required,n.order=c.order,n.priority=c.weight!==0),n}),s=r.filter(d=>d.group==="RESPONSIBLE").sortBy("order"),i=r.filter(d=>d.group==="STUDENT").sortBy("order");return{process:a.data.data.process,responsibleFields:s,studentFields:i}}),L=e=>o({variables:e,query:`
      mutation saveProcessFields(
        $id: ID!
        $fields: [ProcessFieldInput!]!
      ) {
        process: saveProcessFields(
          id: $id
          fields: $fields
        ) {
          id
        }
      }
    `});export{F as a,j as b,C as c,L as d,Y as e,H as f,E as g,R as h,k as i,x as j,S as l,B as p,w as r,D as s};
