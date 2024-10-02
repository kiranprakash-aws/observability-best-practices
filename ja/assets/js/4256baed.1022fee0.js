"use strict";(self.webpackChunkobservability_best_practices=self.webpackChunkobservability_best_practices||[]).push([[168],{23803:(a,n,e)=>{e.r(n),e.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var t=e(74848),i=e(28453);const s={},o="Amazon Managed Grafana",r={id:"guides/cost/cost-visualization/amazon-grafana",title:"Amazon Managed Grafana",description:"Amazon Managed Grafana \u306e\u30b3\u30b9\u30c8\u3068\u4f7f\u7528\u72b6\u6cc1\u306e\u30d3\u30b8\u30e5\u30a2\u30eb\u306b\u3088\u308a\u3001\u500b\u3005\u306e AWS \u30a2\u30ab\u30a6\u30f3\u30c8\u3001AWS \u30ea\u30fc\u30b8\u30e7\u30f3\u3001\u7279\u5b9a\u306e Grafana \u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3001\u304a\u3088\u3073 Admin\u3001Editor\u3001Viewer \u30e6\u30fc\u30b6\u30fc\u306e\u30e9\u30a4\u30bb\u30f3\u30b9\u30b3\u30b9\u30c8\u306e\u6d1e\u5bdf\u3092\u5f97\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/guides/cost/cost-visualization/amazon-grafana.md",sourceDirName:"guides/cost/cost-visualization",slug:"/guides/cost/cost-visualization/amazon-grafana",permalink:"/observability-best-practices/ja/docs/guides/cost/cost-visualization/amazon-grafana",draft:!1,unlisted:!1,editUrl:"https://github.com/aws-observability/observability-best-practices/docs/guides/cost/cost-visualization/amazon-grafana.md",tags:[],version:"current",frontMatter:{},sidebar:"guides",previous:{title:"Amazon CloudWatch",permalink:"/observability-best-practices/ja/docs/guides/cost/cost-visualization/amazon-cloudwatch"},next:{title:"Amazon Managed Service for Prometheus",permalink:"/observability-best-practices/ja/docs/guides/cost/cost-visualization/amazon-prometheus"}},c={},l=[];function d(a){const n={a:"a",h1:"h1",li:"li",ol:"ol",p:"p",...(0,i.R)(),...a.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"amazon-managed-grafana",children:"Amazon Managed Grafana"}),"\n",(0,t.jsx)(n.p,{children:"Amazon Managed Grafana \u306e\u30b3\u30b9\u30c8\u3068\u4f7f\u7528\u72b6\u6cc1\u306e\u30d3\u30b8\u30e5\u30a2\u30eb\u306b\u3088\u308a\u3001\u500b\u3005\u306e AWS \u30a2\u30ab\u30a6\u30f3\u30c8\u3001AWS \u30ea\u30fc\u30b8\u30e7\u30f3\u3001\u7279\u5b9a\u306e Grafana \u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3001\u304a\u3088\u3073 Admin\u3001Editor\u3001Viewer \u30e6\u30fc\u30b6\u30fc\u306e\u30e9\u30a4\u30bb\u30f3\u30b9\u30b3\u30b9\u30c8\u306e\u6d1e\u5bdf\u3092\u5f97\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u30b3\u30b9\u30c8\u3068\u4f7f\u7528\u72b6\u6cc1\u30c7\u30fc\u30bf\u3092\u8996\u899a\u5316\u304a\u3088\u3073\u5206\u6790\u3059\u308b\u306b\u306f\u3001\u30ab\u30b9\u30bf\u30e0 Athena \u30d3\u30e5\u30fc\u3092\u4f5c\u6210\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u958b\u59cb\u3059\u308b\u524d\u306b\u3001[Implementation overview][cid-implement] \u306b\u8a18\u8f09\u3055\u308c\u3066\u3044\u308b CUR (\u30b9\u30c6\u30c3\u30d7 #1) \u3092\u4f5c\u6210\u3057\u3001AWS Confirmation Template (\u30b9\u30c6\u30c3\u30d7 #2) \u3092\u30c7\u30d7\u30ed\u30a4\u3057\u305f\u3053\u3068\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u6b21\u306b\u3001\u4ee5\u4e0b\u306e\u30af\u30a8\u30ea\u3092\u4f7f\u7528\u3057\u3066\u3001\u65b0\u3057\u3044 Amazon Athena ",(0,t.jsx)(n.a,{href:"https://athena-in-action.workshop.aws/30-basics/303-create-view.html",children:"view"})," \u3092\u4f5c\u6210\u3057\u307e\u3059\u3002\u3053\u306e\u30af\u30a8\u30ea\u306f\u3001Organization \u5185\u306e\u3059\u3079\u3066\u306e AWS \u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u308f\u305f\u308b Amazon Managed Grafana \u306e\u30b3\u30b9\u30c8\u3068\u4f7f\u7528\u72b6\u6cc1\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002"]}),"\n",(0,t.jsx)(n.p,{children:'CREATE OR REPLACE VIEW "grafana_cost" AS\nSELECT\nline_item_usage_type\n, line_item_resource_id\n, line_item_operation\n, line_item_usage_account_id\n, month\n, year\n, "sum"(line_item_usage_amount) "Usage"\n, "sum"(line_item_unblended_cost) cost\nFROM\ndatabase.tablename #replace database.tablename with your database and table name\nWHERE ("line_item_product_code" = \'AmazonGrafana\')\nGROUP BY 1, 2, 3, 4, 5, 6'}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Athena \u3092\u30c7\u30fc\u30bf\u30bd\u30fc\u30b9\u3068\u3057\u3066\u4f7f\u7528\u3059\u308b\u3053\u3068\u3067\u3001\u30d3\u30b8\u30cd\u30b9\u8981\u4ef6\u306b\u5408\u308f\u305b\u3066 Amazon Managed Grafana \u307e\u305f\u306f Amazon QuickSight \u3067\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u3092\u69cb\u7bc9\u3067\u304d\u307e\u3059\u3002\u307e\u305f\u3001\u4f5c\u6210\u3057\u305f Athena \u30d3\u30e5\u30fc\u306b\u5bfe\u3057\u3066\u76f4\u63a5 ",(0,t.jsx)(n.a,{href:"https://docs.aws.amazon.com/athena/latest/ug/querying-athena-tables.html",children:"SQL \u30af\u30a8\u30ea"})," \u3092\u5b9f\u884c\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002"]})]})}function u(a={}){const{wrapper:n}={...(0,i.R)(),...a.components};return n?(0,t.jsx)(n,{...a,children:(0,t.jsx)(d,{...a})}):d(a)}},28453:(a,n,e)=>{e.d(n,{R:()=>o,x:()=>r});var t=e(96540);const i={},s=t.createContext(i);function o(a){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof a?a(n):{...n,...a}}),[n,a])}function r(a){let n;return n=a.disableParentContext?"function"==typeof a.components?a.components(i):a.components||i:o(a.components),t.createElement(s.Provider,{value:n},a.children)}}}]);