import{d,U as _,N as f,c as o,t as x,v as z,T as S,P as c,_ as I}from"./entry._zu6ixNe.js";const y=d({__name:"IconCSS",props:{name:{type:String,required:!0},size:{type:String,default:""}},setup(l){var r;_(s=>({"71ded496":c(m)}));const e=f();(r=e==null?void 0:e.nuxtIcon)!=null&&r.aliases;const n=l,p=o(()=>{var s;return(((s=e==null?void 0:e.nuxtIcon)==null?void 0:s.aliases)||{})[n.name]||n.name}),m=o(()=>`url('https://api.iconify.design/${p.value.replace(":","/")}.svg')`),a=o(()=>{var t,i,u;if(!n.size&&typeof((t=e.nuxtIcon)==null?void 0:t.size)=="boolean"&&!((i=e.nuxtIcon)!=null&&i.size))return;const s=n.size||((u=e.nuxtIcon)==null?void 0:u.size)||"1em";return String(Number(s))===s?`${s}px`:s});return(s,t)=>(x(),z("span",{style:S({width:c(a),height:c(a)})},null,4))}}),v=I(y,[["__scopeId","data-v-11604bcf"]]);export{v as default};