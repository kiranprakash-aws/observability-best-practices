"use strict";(self.webpackChunkobservability_best_practices=self.webpackChunkobservability_best_practices||[]).push([[2006],{8467:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var o=t(74848),r=t(28453);const s={},i="Pushing Metrics from EKS to Prometheus",a={id:"patterns/ampagentless",title:"Pushing Metrics from EKS to Prometheus",description:"When running containerized workloads on Amazon Elastic Kubernetes Service (EKS), you can leverage AWS Managed Prometheus (AMP) to collect and analyze metrics from your applications and infrastructure. AMP simplifies the deployment and management of Prometheus-compatible monitoring by providing a fully managed Prometheus-compatible monitoring solution.",source:"@site/docs/patterns/ampagentless.md",sourceDirName:"patterns",slug:"/patterns/ampagentless",permalink:"/observability-best-practices/docs/patterns/ampagentless",draft:!1,unlisted:!1,editUrl:"https://github.com/aws-observability/observability-best-practices/docs/patterns/ampagentless.md",tags:[],version:"current",frontMatter:{},sidebar:"patterns",previous:{title:"CloudWatch Container Insights",permalink:"/observability-best-practices/docs/patterns/adoteksfargate"},next:{title:"APM with Application Signals",permalink:"/observability-best-practices/docs/patterns/apmappsignals"}},c={},l=[{value:"Configuring Managed Prometheus Collector",id:"configuring-managed-prometheus-collector",level:2},{value:"Additional Considerations",id:"additional-considerations",level:2}];function d(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"pushing-metrics-from-eks-to-prometheus",children:"Pushing Metrics from EKS to Prometheus"}),"\n",(0,o.jsx)(n.p,{children:"When running containerized workloads on Amazon Elastic Kubernetes Service (EKS), you can leverage AWS Managed Prometheus (AMP) to collect and analyze metrics from your applications and infrastructure. AMP simplifies the deployment and management of Prometheus-compatible monitoring by providing a fully managed Prometheus-compatible monitoring solution."}),"\n",(0,o.jsx)(n.p,{children:"To push metrics from your EKS containerized workloads to AMP, you can use the Managed Prometheus Collector configuration. The Managed Prometheus Collector is a component of AMP that scrapes metrics from your applications and services and sends them to the AMP workspace for storage and analysis."}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.img,{alt:"EKS AMP",src:t(21329).A+"",width:"1520",height:"722"}),"\n",(0,o.jsx)(n.em,{children:"Figure 1: Sending metrics from EKS to AMP"})]}),"\n",(0,o.jsx)(n.h2,{id:"configuring-managed-prometheus-collector",children:"Configuring Managed Prometheus Collector"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Enable AMP Workspace"}),": First, ensure that you have an AMP workspace created in your AWS account. If you haven't set up an AMP workspace yet, follow the AWS documentation to create one."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Configure Managed Prometheus Collector"}),': Within your AMP workspace, navigate to the "Managed Prometheus Collectors" section and create a new collector configuration.']}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Define Scrape Configuration"}),": In the collector configuration, specify the targets from which the collector should scrape metrics. For EKS workloads, you can define a Kubernetes service discovery configuration that allows the collector to dynamically discover and scrape metrics from your Kubernetes Pods and Services."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Example Kubernetes service discovery configuration:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"kubernetes_sd_configs:\n  - role: pod\n    namespaces:\n      names:\n        - namespace1\n        - namespace2\n"})}),"\n",(0,o.jsx)(n.p,{children:"This configuration instructs the collector to scrape metrics from Pods running in the namespace1 and namespace2 Kubernetes namespaces."}),"\n",(0,o.jsxs)(n.ol,{start:"4",children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Configure Prometheus Annotations"}),": To enable metric collection from your containerized workloads, you need to annotate your Kubernetes Pods or Services with the appropriate Prometheus annotations. These annotations provide information about the metrics endpoint and other configuration settings.\nExample Prometheus annotations:"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:'annotations:\n  prometheus.io/scrape: "true"\n  prometheus.io/port: "8080"\n  prometheus.io/path: "/metrics"\n'})}),"\n",(0,o.jsx)(n.p,{children:"These annotations indicate that the Prometheus collector should scrape metrics from the /metrics endpoint on port 8080 of the Pod or Service."}),"\n",(0,o.jsxs)(n.ol,{start:"5",children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Deploy Workloads with Instrumentation"}),": Deploy your containerized workloads to EKS, ensuring that they expose the appropriate metrics endpoints and include the necessary Prometheus annotations. You can use tools like Minikube, Helm, or AWS Cloud Development Kit (CDK) to deploy and manage your EKS workloads."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Verify Metric Collection"}),": Once the Managed Prometheus Collector is configured and your workloads are deployed, you should see the collected metrics appearing in the AMP workspace. You can use the AMP query editor to explore and visualize the metrics from your EKS workloads."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"additional-considerations",children:"Additional Considerations"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Authentication and Authorization: AMP supports various authentication and authorization mechanisms, including IAM roles and service accounts, to secure access to your monitoring data."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Integration with AWS Observability Services: You can integrate AMP with other AWS observability services, such as AWS CloudWatch and AWS X-Ray, for comprehensive observability across your AWS environment."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"By leveraging the Managed Prometheus Collector in AMP, you can efficiently collect and analyze metrics from your EKS containerized workloads without the need to manage and scale the underlying Prometheus infrastructure. AMP provides a fully managed and scalable solution for monitoring your EKS applications and infrastructure."})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},21329:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/eksamp-53a8699d6d15a3fd561f92eed37985b1.png"},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var o=t(96540);const r={},s=o.createContext(r);function i(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);