import{i as e,j as t}from"./styled-components.browser.esm-6601e423.js";import{u}from"./useCartActions-81d7baab.js";import{S as g}from"./Stepper-497e0c30.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./http-8318f289.js";import"./index-8ce4a492.js";import"./cartItemsState-8dfe1b1a.js";const x=""+new URL("delete-3475d2bd.svg",import.meta.url).href,f=e.div`
  display: flex;
  gap: 20px;

  width: 100%;
`,h=e.img`
  width: 140px;
  height: 140px;

  background: gray;
  aspect-ratio: 1 / 1;
  object-fit: cover;
`,y=e.h1`
  flex: 1;

  font-size: 20px;
  font-weight: 400;
  color: #333333;
`,j=e.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 20px;
`,I=e.h2`
  &::after {
    content: '원';
  }
`,C=e.button``,a=n=>{const{quantity:i,product:r}=n,{setQuantity:s}=u(),d=l=>{s(r,Math.max(1,l))};return t.jsxs(f,{children:[t.jsx(h,{src:r.imageUrl}),t.jsx(y,{children:r.name}),t.jsxs(j,{children:[t.jsx(C,{onClick:()=>s(r,0),children:t.jsx("img",{src:x,alt:"삭제"})}),t.jsx(g,{value:i,onChange:d}),t.jsx(I,{children:(r.price*i).toLocaleString("ko")})]})]})};try{a.displayName="CartItemListItem",a.__docgenInfo={description:"",displayName:"CartItemListItem",props:{quantity:{defaultValue:null,description:"",name:"quantity",required:!0,type:{name:"number"}},product:{defaultValue:null,description:"",name:"product",required:!0,type:{name:"Product"}}}}}catch{}const k={title:"CartItemListItem",component:a},o={args:{product:{id:1,imageUrl:"images/example.jpg",name:"ASUS Vivobook Pro 16x",price:1299e3},quantity:1}};var c,m,p;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    product: {
      id: 1,
      imageUrl: 'images/example.jpg',
      name: 'ASUS Vivobook Pro 16x',
      price: 1299000
    },
    quantity: 1
  }
}`,...(p=(m=o.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const w=["Default"];export{o as Default,w as __namedExportsOrder,k as default};
//# sourceMappingURL=CartItemListItem.stories-1a20706f.js.map
