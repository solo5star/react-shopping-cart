import{c as n}from"./http-b339b6dc.js";import{c as s}from"./cartItemsState-73884484.js";const p=""+new URL("example-product-bbb774cf.jpg",import.meta.url).href,m=()=>{const u=n(({set:c})=>(r,o)=>{c(s,e=>{const d=e.find(t=>t.product.id===r.id)??null;return d===null?[...e,{product:r,quantity:o,unselectedForOrder:!1}]:e.map(t=>t.product.id===d.product.id?{...t,quantity:o}:t)})}),l=n(({set:c})=>r=>{c(s,o=>o.filter(e=>r.includes(e.product.id)))});return{setQuantity:u,deleteCartItems:l}};export{p as E,m as u};
//# sourceMappingURL=useCartActions-2236ccf3.js.map
