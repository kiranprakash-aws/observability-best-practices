"use strict";(self.webpackChunkobservability_best_practices=self.webpackChunkobservability_best_practices||[]).push([[7852],{46841:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var t=i(74848),o=i(28453);const r={},a="Monitoring ECS Workloads",s={id:"patterns/ecsampamg",title:"Monitoring ECS Workloads",description:"Introduction",source:"@site/docs/patterns/ecsampamg.md",sourceDirName:"patterns",slug:"/patterns/ecsampamg",permalink:"/observability-best-practices/docs/patterns/ecsampamg",draft:!1,unlisted:!1,editUrl:"https://github.com/aws-observability/observability-best-practices/docs/patterns/ecsampamg.md",tags:[],version:"current",frontMatter:{},sidebar:"patterns",previous:{title:"APM with Application Signals",permalink:"/observability-best-practices/docs/patterns/apmappsignals"},next:{title:"EKS Monitoring with AWS Open source service",permalink:"/observability-best-practices/docs/patterns/eksampamg"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Architecture Overview",id:"architecture-overview",level:2},{value:"Key Components",id:"key-components",level:2},{value:"ECS Task",id:"ecs-task",level:3},{value:"Sample Application",id:"sample-application",level:3},{value:"AWS Distro for OpenTelemetry (ADOT) Collector",id:"aws-distro-for-opentelemetry-adot-collector",level:3},{value:"AWS X-Ray",id:"aws-x-ray",level:3},{value:"Amazon Managed Service for Prometheus",id:"amazon-managed-service-for-prometheus",level:3},{value:"Data Flow",id:"data-flow",level:2},{value:"Benefits",id:"benefits",level:2},{value:"Implementation Considerations",id:"implementation-considerations",level:2},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const n={em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"monitoring-ecs-workloads",children:"Monitoring ECS Workloads"}),"\n",(0,t.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsx)(n.p,{children:"In the world of containerized applications, effective monitoring is crucial for maintaining reliability and performance. This document outlines an advanced monitoring solution for Amazon Elastic Container Service (ECS) workloads, leveraging AWS Distro for OpenTelemetry (ADOT), AWS X-Ray, and Amazon Managed Service for Prometheus."}),"\n",(0,t.jsx)(n.h2,{id:"architecture-overview",children:"Architecture Overview"}),"\n",(0,t.jsx)(n.p,{children:"The monitoring architecture centers around an ECS task that hosts both the application and an ADOT collector. This setup enables comprehensive data collection directly from the application environment."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{alt:"ECS AMP",src:i(93267).A+"",width:"2042",height:"690"}),"\n",(0,t.jsx)(n.em,{children:"Figure 1: Sending metrics from ECS to AMP and X-Ray"})]}),"\n",(0,t.jsx)(n.h2,{id:"key-components",children:"Key Components"}),"\n",(0,t.jsx)(n.h3,{id:"ecs-task",children:"ECS Task"}),"\n",(0,t.jsx)(n.p,{children:"The ECS task serves as the foundational unit, encapsulating the application and monitoring components."}),"\n",(0,t.jsx)(n.h3,{id:"sample-application",children:"Sample Application"}),"\n",(0,t.jsx)(n.p,{children:"A containerized application runs within the ECS task, representing the workload to be monitored."}),"\n",(0,t.jsx)(n.h3,{id:"aws-distro-for-opentelemetry-adot-collector",children:"AWS Distro for OpenTelemetry (ADOT) Collector"}),"\n",(0,t.jsx)(n.p,{children:"The ADOT collector, deployed alongside the application, acts as a central aggregation point for telemetry data. It collects both metrics and traces from the application."}),"\n",(0,t.jsx)(n.h3,{id:"aws-x-ray",children:"AWS X-Ray"}),"\n",(0,t.jsx)(n.p,{children:"X-Ray receives trace data from the ADOT collector, providing detailed insights into request flows and service dependencies."}),"\n",(0,t.jsx)(n.h3,{id:"amazon-managed-service-for-prometheus",children:"Amazon Managed Service for Prometheus"}),"\n",(0,t.jsx)(n.p,{children:"This service stores and manages the metrics collected by the ADOT collector, offering a scalable solution for metric storage and querying."}),"\n",(0,t.jsx)(n.h2,{id:"data-flow",children:"Data Flow"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"The sample application generates telemetry data during its operation."}),"\n",(0,t.jsx)(n.li,{children:"The ADOT collector, running in the same ECS task, collects this data from the application."}),"\n",(0,t.jsx)(n.li,{children:"Trace data is forwarded to AWS X-Ray for distributed tracing analysis."}),"\n",(0,t.jsx)(n.li,{children:"Metrics are sent to Amazon Managed Service for Prometheus for storage and later analysis."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"benefits",children:"Benefits"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Comprehensive Monitoring"}),": Captures both metrics and traces, providing a holistic view of application performance."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Scalability"}),": Leverages managed services to handle large volumes of telemetry data."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Integration"}),": Seamlessly works with ECS and other AWS services."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Reduced Operational Overhead"}),": Utilizes managed services, minimizing the need for infrastructure management."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"implementation-considerations",children:"Implementation Considerations"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Proper IAM roles and permissions must be configured for the ECS task to allow data transmission to X-Ray and Prometheus."}),"\n",(0,t.jsx)(n.li,{children:"Resource allocation within the ECS task should account for both the application and the ADOT collector."}),"\n",(0,t.jsx)(n.li,{children:"Consider implementing log collection alongside metrics and traces for a complete observability solution."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,t.jsx)(n.p,{children:"This architecture provides a robust monitoring solution for ECS workloads, combining the power of OpenTelemetry with AWS managed services. It enables deep insights into application performance and behavior, facilitating quick problem resolution and informed decision-making for containerized environments."})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},93267:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/ecs-ef5ab3ec836f1f02a6f3aa3dd9c60783.png"},28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>s});var t=i(96540);const o={},r=t.createContext(o);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);