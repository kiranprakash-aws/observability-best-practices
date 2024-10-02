"use strict";(self.webpackChunkobservability_best_practices=self.webpackChunkobservability_best_practices||[]).push([[2554],{7708:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var s=n(74848),a=n(28453);const i={},r="Big Data Observability on AWS",o={id:"patterns/sparkbigdata",title:"Big Data Observability on AWS",description:"This diagram illustrates a best practice pattern for implementing observability in a Spark big data workflow on AWS. The pattern leverages various AWS services to collect, process, and analyze logs and metrics generated by Spark jobs.",source:"@site/docs/patterns/sparkbigdata.md",sourceDirName:"patterns",slug:"/patterns/sparkbigdata",permalink:"/observability-best-practices/docs/patterns/sparkbigdata",draft:!1,unlisted:!1,editUrl:"https://github.com/aws-observability/observability-best-practices/docs/patterns/sparkbigdata.md",tags:[],version:"current",frontMatter:{},sidebar:"patterns",previous:{title:"Observability with OpenTelemetry",permalink:"/observability-best-practices/docs/patterns/otel"},next:{title:"VPC Flow Logs for Network Observability",permalink:"/observability-best-practices/docs/patterns/vpcflowlogs"}},l={},c=[{value:"Workflow",id:"workflow",level:2},{value:"Observability Components",id:"observability-components",level:2},{value:"Amazon EMR",id:"amazon-emr",level:3},{value:"Amazon CloudWatch",id:"amazon-cloudwatch",level:3},{value:"EMR EC2 Instances",id:"emr-ec2-instances",level:3},{value:"Best Practices",id:"best-practices",level:2}];function d(e){const t={em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"big-data-observability-on-aws",children:"Big Data Observability on AWS"}),"\n",(0,s.jsx)(t.p,{children:"This diagram illustrates a best practice pattern for implementing observability in a Spark big data workflow on AWS. The pattern leverages various AWS services to collect, process, and analyze logs and metrics generated by Spark jobs."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.img,{alt:"Spark Bigdata",src:n(19267).A+"",width:"1230",height:"748"}),"\n",(0,s.jsx)(t.em,{children:"Figure 1: Spark Big Data observability"})]}),"\n",(0,s.jsx)(t.h2,{id:"workflow",children:"Workflow"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Users"})," submit Spark jobs to an ",(0,s.jsx)(t.strong,{children:"Amazon EMR"})," cluster."]}),"\n",(0,s.jsxs)(t.li,{children:["The ",(0,s.jsx)(t.strong,{children:"Amazon EMR"})," cluster runs the Spark job, which distributes the workload across the cluster using ",(0,s.jsx)(t.strong,{children:"Apache Spark"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["During the execution of the Spark job, logs and metrics are generated and collected by ",(0,s.jsx)(t.strong,{children:"Amazon CloudWatch"})," and ",(0,s.jsx)(t.strong,{children:"Amazon EMR"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"observability-components",children:"Observability Components"}),"\n",(0,s.jsx)(t.h3,{id:"amazon-emr",children:"Amazon EMR"}),"\n",(0,s.jsx)(t.p,{children:"Amazon EMR is a managed service that simplifies running big data frameworks like Apache Spark on AWS. It provides a scalable and cost-effective platform for processing large volumes of data."}),"\n",(0,s.jsx)(t.h3,{id:"amazon-cloudwatch",children:"Amazon CloudWatch"}),"\n",(0,s.jsx)(t.p,{children:"Amazon CloudWatch is a monitoring and observability service that collects and tracks metrics, logs, and events from various AWS resources and applications. In this pattern, CloudWatch is used to:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Collect logs and metrics from the ",(0,s.jsx)(t.strong,{children:"EMR EC2 instances"})," running the Spark job."]}),"\n",(0,s.jsxs)(t.li,{children:["Publish the collected logs to ",(0,s.jsx)(t.strong,{children:"Amazon CloudWatch Logs"})," for centralized log management and analysis."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"emr-ec2-instances",children:"EMR EC2 Instances"}),"\n",(0,s.jsxs)(t.p,{children:["The Spark job runs on EMR EC2 instances, which are the compute nodes of the EMR cluster. These instances generate logs and metrics that are collected by the ",(0,s.jsx)(t.strong,{children:"CloudWatch Agent"})," and sent to Amazon CloudWatch."]}),"\n",(0,s.jsx)(t.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,s.jsx)(t.p,{children:"To ensure effective observability of Spark big data workloads on AWS, consider the following best practices:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Centralized Log Management"}),": Use Amazon CloudWatch Logs to centralize the collection, storage, and analysis of logs generated by Spark jobs and EMR instances. This allows for easy troubleshooting and monitoring of the Spark workflow."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Metrics Collection"}),": Leverage the CloudWatch Agent to collect relevant metrics from the EMR EC2 instances, such as CPU utilization, memory usage, and disk I/O. These metrics provide insights into the performance and health of the Spark job."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Dashboards and Alarms"}),": Create CloudWatch dashboards to visualize key metrics and logs in real-time. Set up CloudWatch alarms to notify and alert when specific thresholds or anomalies are detected, enabling proactive monitoring and incident response."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Log Analytics"}),": Utilize Amazon CloudWatch Logs Insights or integrate with other log analytics tools to perform ad-hoc queries, troubleshoot issues, and gain valuable insights from the collected logs."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Performance Optimization"}),": Continuously monitor and analyze the performance of Spark jobs using the collected metrics and logs. Identify bottlenecks, optimize resource allocation, and tune Spark configurations to improve the efficiency and performance of the big data workload."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"By implementing this observability pattern and following best practices, organizations can effectively monitor, troubleshoot, and optimize their Spark big data workloads on AWS, ensuring reliable and efficient data processing at scale."})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},19267:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/spark-b5747c0c2850608c7dc378be1f937fbc.png"},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var s=n(96540);const a={},i=s.createContext(a);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);