import{g as o,Z as p,$ as l,K as y}from"../../common.7bcb253c.js";const m=()=>o({query:`
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
    `}).then(s=>s.data.data.processes.data),h=t=>o({variables:t,query:`
      mutation deleteProcess($id: ID!) {
        process: deleteProcess(id: $id) {
          id
        }
      }
    `}).then(a=>({errors:a.data.errors,process:a.data.data.process})),f=t=>o({variables:t,query:`
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
    `}).then(a=>a.data.data.process),$=t=>o({variables:{input:t},query:`
      mutation save(
        $input: ProcessInput!
      ) {
        process: saveProcess(
          input: $input
        ) {
          id
        }
      }
    `}).then(a=>a.data.data.process),q=t=>o({variables:t,query:`
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
    `}),A=t=>o({variables:t,query:`
      mutation copyProcess($id: ID!) {
        process: copyProcess(id: $id) {
          id
        }
      }
    `}).then(a=>({errors:a.data.errors,process:a.data.data.process})),v=t=>o({variables:t,query:`
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
    `}).then(a=>{const{process:r}=a.data.data,e=r.grades.map(d=>d.id),i=r.periods.map(d=>d.id);return{...r,grades:e,periods:i,schoolYear:r.schoolYear.id}}),b=()=>o({query:`
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
    `}).then(s=>({courses:s.data.data.courses.data.map(r=>({...r,grades:r.grades.data})),periods:s.data.data.periods.data,schoolYears:s.data.data.schoolYears.data})),I=t=>o({variables:t,query:`
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
    `}).then(a=>{const r=a.data.data.process.stages.map(e=>({...e,startAt:p(e.startAt),endAt:p(e.endAt),startHourAt:l(e.startHourAt),endHourAt:l(e.endHourAt)}));return{process:{id:a.data.data.process.id,name:a.data.data.process.name},stages:r}}),P=()=>o({query:`
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
    `}).then(s=>{const a=s.data.data.processes.data.map(e=>e.schoolYear.year).filter((e,i,d)=>d.indexOf(e)===i).map(e=>({key:e,label:e})).sort((e,i)=>i.key-e.key),r=[];return s.data.data.processes.data.forEach(e=>{e.stages.forEach(i=>{r.push(i.status)})}),{processes:s.data.data.processes.data.sortBy("name"),years:a,status:r.filter((e,i,d)=>d.indexOf(e)===i).map(e=>({key:e,label:y(e).toUpperCase()})).sortBy("label")}}),S=t=>o({variables:t,query:`
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
    `}).then(a=>a.data.data.process),w=t=>o({variables:t,query:`
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
    `}).then(a=>({errors:a.data.errors,rejectInBatch:a.data.data.rejectInBatch})),D=t=>o({query:`
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
    `,variables:t}).then(a=>{const r=a.data.data.fields.data.map(d=>{const c=a.data.data.process.fields.find(u=>u.field.id===d.id),n={...d,priority:!1,open:!1,checked:d.required,weight:0,order:99};return c&&(n.checked=!0,n.weight=c.weight,n.required=c.required,n.order=c.order,n.priority=c.weight!==0),n}),e=r.filter(d=>d.group==="RESPONSIBLE").sortBy("order"),i=r.filter(d=>d.group==="STUDENT").sortBy("order");return{process:a.data.data.process,responsibleFields:e,studentFields:i}}),B=t=>o({variables:t,query:`
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
    `});export{v as a,b,D as c,B as d,q as e,I as f,P as g,A as h,w as i,S as j,m as l,$ as p,h as r,f as s};
