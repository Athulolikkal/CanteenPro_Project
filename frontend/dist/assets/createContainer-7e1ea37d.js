import{_ as p,a8 as W,x as m,a9 as k,r as v,l as R,j as G,o as $,p as j,v as y}from"./index-57b17ab7.js";import{s as T}from"./styled-72e6725c.js";const L=["className","component","disableGutters","fixed","maxWidth","classes"],M=W(),N=T("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:o}=e;return[a.root,a[`maxWidth${m(String(o.maxWidth))}`],o.fixed&&a.fixed,o.disableGutters&&a.disableGutters]}}),P=e=>k({props:e,name:"MuiContainer",defaultTheme:M}),S=(e,a)=>{const o=i=>y(a,i),{classes:c,fixed:u,disableGutters:l,maxWidth:t}=e,s={root:["root",t&&`maxWidth${m(String(t))}`,u&&"fixed",l&&"disableGutters"]};return j(s,o,c)};function z(e={}){const{createStyledComponent:a=N,useThemeProps:o=P,componentName:c="MuiContainer"}=e,u=a(({theme:t,ownerState:s})=>p({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!s.disableGutters&&{paddingLeft:t.spacing(2),paddingRight:t.spacing(2),[t.breakpoints.up("sm")]:{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}}),({theme:t,ownerState:s})=>s.fixed&&Object.keys(t.breakpoints.values).reduce((i,n)=>{const d=n,r=t.breakpoints.values[d];return r!==0&&(i[t.breakpoints.up(d)]={maxWidth:`${r}${t.breakpoints.unit}`}),i},{}),({theme:t,ownerState:s})=>p({},s.maxWidth==="xs"&&{[t.breakpoints.up("xs")]:{maxWidth:Math.max(t.breakpoints.values.xs,444)}},s.maxWidth&&s.maxWidth!=="xs"&&{[t.breakpoints.up(s.maxWidth)]:{maxWidth:`${t.breakpoints.values[s.maxWidth]}${t.breakpoints.unit}`}}));return v.forwardRef(function(s,i){const n=o(s),{className:d,component:r="div",disableGutters:b=!1,fixed:f=!1,maxWidth:g="lg"}=n,C=R(n,L),x=p({},n,{component:r,disableGutters:b,fixed:f,maxWidth:g}),h=S(x,c);return G.jsx(u,p({as:r,ownerState:x,className:$(h.root,d),ref:i},C))})}export{z as c};
