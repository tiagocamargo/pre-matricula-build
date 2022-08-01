import{g as s,a0 as d}from"../../common.c7e4875a.js";import{m as n}from"../../vendor.c0962c27.js";const p=a=>s({variables:a,query:`
      query process($id: ID!) {
        stage: processByStage(id: $id) {
          id
          renewalAtSameSchool
          allowWaitingList
          radius
          type
          status
          process {
            id
            name
            messageFooter
            gradeAgeRangeLink
            forceSuggestedGrade
            showPriorityProtocol
            allowResponsibleSelectMapAddress
            schoolYear {
              year
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
      }
    `}).then(e=>e.data.data.stage),u=a=>{const t=d(a.type,a.student,a.year);return s(t).then(e=>e.data.data.match)},g=a=>s({variables:{input:a},query:`
      mutation NewPreRegistration(
        $input: PreRegistrationInput!
      ) {
        preregistrations: newPreRegistration(
         input: $input
        ) {
          id
          protocol
          code
          type
          date
          position
          school {
            id
            name
            area_code
            phone
          }
        }
      }
    `}).then(e=>({errors:e.data.errors,preregistrations:e.data.data.preregistrations})),m=a=>s({variables:a,query:`
      mutation acceptPreRegistrations(
        $ids: [ID!]!,
        $classroom: ID!
      ) {
        acceptPreRegistrations(ids: $ids, classroom: $classroom) {
          id
          student {
            name
          }
        }
      }
    `}).then(e=>({errors:e.data.errors,acceptPreRegistrations:e.data.data.acceptPreRegistrations})),y=a=>s({variables:a,query:`
      mutation rejectPreRegistrations(
        $ids: [ID!]!
        $justification: String
      ) {
        rejectPreRegistrations(
          ids: $ids
          justification: $justification
        ) {
          id
        }
      }
    `}).then(e=>({errors:e.data.errors,rejectPreRegistrations:e.data.data.rejectPreRegistrations})),h=a=>s({variables:a,query:`
      mutation summonPreRegistrations(
        $ids: [ID!]!
        $justification: String
      ) {
        summonPreRegistrations(
          ids: $ids
          justification: $justification
        ) {
          id
        }
      }
    `}).then(e=>({errors:e.data.errors,summonPreRegistrations:e.data.data.summonPreRegistrations})),$=a=>s({variables:a,query:`
      query classroomsByPreregistration(
        $school: ID!
        $grade: ID!
        $year: Int!
      ) {
        classrooms: classroomsByPreregistration(
          school: $school
          grade: $grade
          year: $year
          first: 100
        ) {
          data {
            key:id
            label:name
            period {
              name
            }
            available
          }
        }
      }
    `}).then(e=>e.data.data.classrooms.data.map(r=>({key:r.key,label:`${r.label}/${r.period.name} (vagas: ${r.available})`}))),b=a=>s({variables:a,query:`
      mutation sendProtocolsByEmail(
        $preregistrations: [ID!]!
        $email: String!
      ) {
        success: sendProtocolsByEmail(
          preregistrations: $preregistrations
          email: $email
        )
      }
    `}).then(e=>e.data.data.success),f=a=>s({variables:a,query:`
      query preregistrations(
        $first: Int
        $page: Int
        $search: String
        $process: ID
        $school: ID
        $schools: [ID!]
        $grade: ID
        $period: ID
        $type: PreRegistrationType
        $status: PreRegistrationStatus
        $sort: PreRegistrationSort
        $year: Int
      ) {
        processes(
          year: $year
        ) {
          data {
            id
            vacancies: totalVacancies
            total: totalPreRegistrations
            accepted: totalAcceptedPreRegistrations
            rejected: totalRejectedPreRegistrations
            waiting: totalWaitingPreRegistrations
          }
        }
        preregistrations(
          first: $first
          page: $page
          search: $search
          process: $process
          school: $school
          schools: $schools
          grade: $grade
          period: $period
          type: $type
          status: $status
          sort: $sort
          year: $year
        ) {
          paginatorInfo {
            count
            currentPage
            lastPage
            perPage
            total
          }
          data {
            id
            type
            protocol
            status
            student {
              name
            }
            grade {
              name
            }
            period {
              name
            }
            school {
              name
            }
            schoolYear {
              year
            }
            position
            waiting {
              id
              type
              status
              position
              student {
                name
              }
              period {
                name
              }
              school {
                name
              }
              schoolYear {
                year
              }
            }
            parent {
              id
              type
              status
              position
              student {
                name
              }
              period {
                name
              }
              school {
                name
              }
              schoolYear {
                year
              }
            }
          }
        }
      }
    `}).then(e=>{const r=e.data.data.processes.data.reduce((o,i)=>({vacancies:o.vacancies+i.vacancies,total:o.total+i.total,accepted:o.accepted+i.accepted,rejected:o.rejected+i.rejected,waiting:o.waiting+i.waiting}),{vacancies:0,total:0,accepted:0,rejected:0,waiting:0});return{errors:Boolean(e.data.errors),stats:r,preregistrations:e.data.data.preregistrations.data,paginator:e.data.data.preregistrations.paginatorInfo}}),P=a=>s({variables:a,query:`
      query all(
        $schools: [ID!]
      ) {
        grades(first: 100) {
          data {
            id
            name
            key: id
            label: name
          }
        }
        periods(first: 100) {
          data {
            id
            name
          }
        }
        schools(
          first: 100
          schools: $schools
        ) {
          data {
            id
            name
            key: id
            label: name
          }
        }
        processes(first: 100) {
          data {
            id
            name
            key: id
            label: name
            totalPreRegistrations
            schoolYear {
              year
            }
          }
        }
      }
    `}).then(e=>({grades:e.data.data.grades.data,periods:e.data.data.periods.data,processes:e.data.data.processes.data,schools:e.data.data.schools.data})),R=a=>s({variables:a,query:`
      mutation acceptPreRegistrations($ids: [ID!]!, $classroom: ID!) {
        acceptPreRegistrations(ids: $ids, classroom: $classroom) {
          id
        }
      }
    `}).then(e=>e.data.errors),_=a=>s({variables:a,query:`
      mutation rejectPreRegistrations(
        $ids: [ID!]!
        $justification: String
      ) {
        rejectPreRegistrations(
          ids: $ids
          justification: $justification
        ) {
          id
        }
      }
    `}),j=a=>s({variables:a,query:`
      mutation returnToWaitPreRegistrations(
        $ids: [ID!]!
      ) {
        returnToWaitPreRegistrations(
          ids: $ids
        ) {
          id
        }
      }
    `}),I=a=>s({variables:a,query:`
      mutation summonPreRegistrations(
        $ids: [ID!]!
        $justification: String
      ) {
        summonPreRegistrations(
          ids: $ids
          justification: $justification
        ) {
          id
        }
      }
    `}).then(e=>e.data.errors),q=a=>s({variables:a,query:`
      query preregistrationByProtocol(
        $protocol: String!
      ) {
        preregistration: preregistrationByProtocol(protocol: $protocol) {
          id
          date
          protocol
          status
          type
          observation
          grade {
            id
            name
            course {
              name
            }
          }
          period {
            id
            name
          }
          school {
            id
            name
          }
          classroom {
            id
            name
          }
          position
          waiting {
            id
            protocol
            school {
              id
              name
            }
            position
          }
          parent {
            id
            protocol
            school {
              id
              name
            }
            position
          }
          student {
            student_name: name
            student_date_of_birth: dateOfBirth
            student_cpf: cpf
            student_rg: rg
            student_marital_status: maritalStatus
            student_place_of_birth: placeOfBirth
            student_birth_certificate: birthCertificate
            student_gender: gender
            student_email: email
            student_phone: phone
            student_mobile: mobile
          }
          responsible {
            responsible_name: name
            responsible_date_of_birth: dateOfBirth
            responsible_cpf: cpf
            responsible_rg: rg
            responsible_marital_status: maritalStatus
            responsible_place_of_birth: placeOfBirth
            responsible_gender: gender
            responsible_email: email
            responsible_phone: phone
            responsible_mobile: mobile
            responsible_address: addresses {
              postalCode
              address
              number
              neighborhood
              city
              manualChangeLocation
            }
          }
          relationType
          fields {
            id
            value
            field {
              id
              name
              internal
              group
            }
          }
          process {
            id
            name
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
            schoolYear {
              year
            }
          }
        }
      }
    `}).then(e=>e.data.data.preregistration),v=a=>n.get("/pre-matricula-export",{params:a,responseType:"blob"}).then(t=>t.data),B=a=>n.get("/pre-matricula-report",{params:a,responseType:"blob"}).then(t=>t.data);export{u as a,g as b,m as c,y as d,h as e,f,$ as g,P as h,v as i,R as j,_ as k,p as l,j as m,q as n,I as o,b as p,B as t};
