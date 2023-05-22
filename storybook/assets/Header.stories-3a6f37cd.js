import{j as e,i as n}from"./styled-components.browser.esm-65bc2296.js";import{c as h}from"./cartItemsState-2aec6f64.js";import{B as f}from"./Badge-c3c16766.js";import{R as x,r as g}from"./index-8db94870.js";import{b as _}from"./http-b339b6dc.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-8ce4a492.js";const y=""+new URL("home-icon-d5623918.svg",import.meta.url).href;class i extends x.Component{constructor(t){super(t),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}render(){const{fallback:t,children:a}=this.props,{hasError:o}=this.state;return o?t:a}}try{i.displayName="ErrorBoundary",i.__docgenInfo={description:"",displayName:"ErrorBoundary",props:{fallback:{defaultValue:null,description:"",name:"fallback",required:!1,type:{name:"ReactNode"}}}}}catch{}const E=r=>{const{state:t,children:a}=r,o=_(t);return a(o)},c=r=>{const{errorElement:t,loadingElement:a,state:o,children:u}=r;return e.jsx(i,{fallback:t,children:e.jsx(g.Suspense,{fallback:a,children:e.jsx(E,{state:o,children:u})})})};try{c.displayName="AwaitRecoilState",c.__docgenInfo={description:"",displayName:"AwaitRecoilState",props:{loadingElement:{defaultValue:null,description:"",name:"loadingElement",required:!1,type:{name:"ReactNode"}},errorElement:{defaultValue:null,description:"",name:"errorElement",required:!1,type:{name:"ReactNode"}},state:{defaultValue:null,description:"",name:"state",required:!0,type:{name:"RecoilState<T>"}}}}}catch{}const j=n.header`
  width: 100%;
  height: 80px;

  background: #333;
  color: white;
`,w=n.div`
  display: flex;
  align-items: stretch;
  justify-content: space-between;

  margin: 0 auto;
  padding: 0 24px;

  height: 100%;
  max-width: 1300px;
`,R=n.button`
  display: flex;
  align-items: center;
  gap: 12px;

  color: inherit;
`,N=n.h1`
  font-size: 40px;
  font-weight: 900;
`,S=n.nav`
  display: flex;
  gap: 24px;

  padding: 4px 24px;
`,b=n.button`
  display: flex;
  align-items: center;
  gap: 6px;

  font-size: 24px;
  font-weight: 500;
`,l=r=>{const{onNavigate:t}=r;return e.jsx(j,{children:e.jsxs(w,{children:[e.jsxs(R,{onClick:()=>t("/"),children:[e.jsx("img",{alt:"홈",src:y,width:44}),e.jsx(N,{children:"SHOP"})]}),e.jsx(S,{children:e.jsxs(b,{onClick:()=>t("/cart"),children:["장바구니"," ",e.jsx(c,{state:h,children:a=>e.jsx(f,{show:a.length>0,children:a.length})})]})})]})})};try{l.displayName="Header",l.__docgenInfo={description:"",displayName:"Header",props:{onNavigate:{defaultValue:null,description:"",name:"onNavigate",required:!0,type:{name:"(to: string) => void"}}}}}catch{}const A={title:"Header",component:l},s={};var d,p,m;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(m=(p=s.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const I=["Default"];export{s as Default,I as __namedExportsOrder,A as default};
//# sourceMappingURL=Header.stories-3a6f37cd.js.map
