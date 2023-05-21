import{i as r,j as t}from"./styled-components.browser.esm-6601e423.js";import{u,E as x}from"./useCartActions-305c9884.js";import{S as f}from"./Stepper-497e0c30.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./http-3f82c7b7.js";import"./index-8ce4a492.js";import"./cartItemsState-c9e7f9a2.js";const g=""+new URL("cart-c412e74f.svg",import.meta.url).href,j=r.div`
  display: flex;
  flex-direction: column;
`,P=r.div`
  flex: 1;
  padding: 18px 8px;
  padding-bottom: 0;
`,h=r.img`
  background: gray;
  aspect-ratio: 1 / 1;
  object-fit: cover;
`,I=r.div`
  display: flex;
  flex: 1;

  & > *:last-child {
    margin-left: auto;
  }
`,y=r.p`
  font-size: 16px;
`,C=r.p`
  font-size: 20px;

  &::after {
    content: '원';
    padding-left: 8px;
  }
`,_=r.div`
  padding: 18px 0px;
`,v=r.button`
  padding: 0 10px 10px 10px;
`,c=o=>{const{product:e}=o,{findCartItemByProductId:m,setQuantity:i}=u(),a=m(e.id);return t.jsxs(j,{children:[t.jsx(h,{src:e.imageUrl,alt:e.name}),t.jsxs(I,{children:[t.jsxs(P,{children:[t.jsx(y,{children:e.name}),t.jsx(C,{children:e.price.toLocaleString("ko-KR")})]}),t.jsx(_,{children:a===null?t.jsx(v,{onClick:()=>i(e,1),children:t.jsx("img",{alt:"카트",src:g})}):t.jsx(f,{min:0,value:a.quantity,onChange:l=>i(e,l)})})]})]})};try{c.displayName="ProductListItem",c.__docgenInfo={description:"",displayName:"ProductListItem",props:{product:{defaultValue:null,description:"",name:"product",required:!0,type:{name:"Product"}}}}}catch{}const L=r.div`
  width: 300px;
`,w={title:"ProductItem",component:c,decorators:[o=>t.jsx(L,{children:t.jsx(o,{})})]},n={args:{product:{id:1,name:"아이크",imageUrl:x,price:1e3}}};var s,d,p;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    product: {
      id: 1,
      name: '아이크',
      imageUrl: ExampleProduct,
      price: 1000
    }
  }
}`,...(p=(d=n.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const z=["Default"];export{n as Default,z as __namedExportsOrder,w as default};
//# sourceMappingURL=ProductListItem.stories-ca5be038.js.map
