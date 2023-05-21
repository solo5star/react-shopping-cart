import{i as r,j as e}from"./styled-components.browser.esm-6601e423.js";const c=""+new URL("arrow-down-0c15572d.svg",import.meta.url).href,m=""+new URL("arrow-up-ad3b06b0.svg",import.meta.url).href,x=r.div`
  display: flex;
  align-items: stretch;
  width: 68px;
  height: 26px;
`,f=r.input`
  flex: 1;
  width: 100%;
  border: 1px solid #e5e5e5;
  text-align: center;
  font-size: 12px;

  outline: none;
`,d=r.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 50%;
  font-size: 10px;
  border: 1px solid #e5e5e5;
  cursor: pointer;
`,u=i=>{const{min:a,max:s,value:o,onChange:n}=i,l=p=>()=>{const t=o+(p==="increase"?1:-1);a!==void 0&&t<a||s!==void 0&&t>s||n==null||n(t)};return e.jsxs(x,{children:[e.jsx(f,{value:o,readOnly:!0}),e.jsxs("div",{children:[e.jsx(d,{onClick:l("increase"),children:e.jsx("img",{alt:"증가",src:m,width:"5"})}),e.jsx(d,{onClick:l("decrease"),children:e.jsx("img",{alt:"감소",src:c,width:"5"})})]})]})};try{u.displayName="Stepper",u.__docgenInfo={description:"",displayName:"Stepper",props:{min:{defaultValue:null,description:"",name:"min",required:!1,type:{name:"number"}},max:{defaultValue:null,description:"",name:"max",required:!1,type:{name:"number"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: number) => void)"}}}}}catch{}export{u as S};
//# sourceMappingURL=Stepper-497e0c30.js.map
