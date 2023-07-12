import{s as e,b as s,B as k,r as d,u as L,e as W,j as a,i as w}from"./index-57b17ab7.js";import{C as z}from"./Container-fb0561b8.js";import{T as R}from"./TextField-ebbc49f9.js";import{d as D}from"./CurrencyRupee-8d649153.js";import{d as V}from"./Search-4d45fd76.js";import{s as h}from"./sweetalert.min-8a8abcb8.js";import{T as g}from"./Typography-53e4a25e.js";import{S as _}from"./Stack-b86978de.js";import{P as E}from"./Pagination-2ace6ed2.js";import"./createContainer-7e1ea37d.js";import"./styled-72e6725c.js";import"./useId-04df6fbd.js";import"./Menu-24ec4787.js";import"./useTheme-6c76255c.js";import"./List-19ca871a.js";import"./createSvgIcon-0c6544b4.js";import"./interopRequireDefault-01ffd8a5.js";import"./createSvgIcon-9cd83907.js";import"./LastPage-f411ae7a.js";const $=e(z)(({theme:t})=>({backgroundColor:"#fff",height:"auto",display:"flex",width:"100%",padding:t.spacing(2,2,2,2),borderRadius:"15px",marginTop:"1rem",border:"1px solid #146C94","&:hover":{border:"2px solid #146C94"},[t.breakpoints.down("sm")]:{flexDirection:"column",alignItems:"center"}})),F=e(s)({display:"flex",alignItems:"center"}),N=e(k)(({theme:t})=>({backgroundColor:"#fff",color:"#17275F",fontWeight:"700",fontSize:"14px",cursor:"pointer",padding:"0.5rem 1.25rem ",borderRadius:"7px",textTransform:"none",display:"block",border:"2px solid transparent",height:"3rem",marginTop:"1.5rem",borderColor:"#146C94",marginLeft:"50%","&:hover":{backgroundColor:"white",color:"#146C94",borderColor:"#146C94"},[t.breakpoints.down("sm")]:{margin:t.spacing(0,"auto",3,"auto,"),width:"90%",height:"auto",marginTop:"0.5rem",marginLeft:"0%"},[t.breakpoints.down("md")]:{marginLeft:"0%"}})),Y=e(k)(({theme:t})=>({backgroundColor:"#146C94",color:"white",fontWeight:"700",fontSize:"14px",cursor:"pointer",padding:"0.5rem 1.25rem",marginLeft:"10px",borderRadius:"7px",textTransform:"none",display:"block",border:"2px solid transparent",height:"3rem",marginTop:"1.5rem","&:hover":{backgroundColor:"white",color:"#146C94",borderColor:"#146C94"},[t.breakpoints.down("sm")]:{margin:t.spacing(0,"auto",3,"auto,"),width:"90%",height:"auto",marginTop:"0.5rem",marginLeft:"0px"}})),M=e(s)(({theme:t})=>({display:"flex",alignItems:"center",[t.breakpoints.down("sm")]:{marginLeft:"10px",paddingRight:9,marginBottom:"10px"}}));e(s)({display:"flex",justifyContent:"center",marginTop:"5px"});const O=e(s)(({theme:t})=>({display:"flex",flexDirection:"column",color:"#146C94",paddingLeft:"2rem",paddingRight:"2rem",[t.breakpoints.down("sm")]:{paddingLeft:"0rem"}})),q=e(s)(({theme:t})=>({display:"flex",justifyContent:"flex-start",marginLeft:"11%",[t.breakpoints.down("md")]:{justifyContent:"center",marginLeft:"0"}})),G=e(R)(({theme:t})=>({width:"20%",[t.breakpoints.down("md")]:{width:"70%"}})),uo=()=>{const[t,b]=d.useState(),[y,j]=d.useState(1),[x,S]=d.useState(""),[u,f]=d.useState([]),T=L(),p=W(o=>o==null?void 0:o.userInfo),m=async o=>{w.get(`/canteen/fetchallpackages?pageNumber=${o}&&searchValue=${x}`).then(r=>{var n,i;if(console.log(r),r!=null&&r.data){b((n=r==null?void 0:r.data)==null?void 0:n.pages),j(o);const c=(i=r==null?void 0:r.data)==null?void 0:i.packages;f(c||[])}}).catch(r=>console.log(r))};d.useEffect(()=>{m(1)},[x]);const v=async(o,r)=>{try{m(r)}catch(n){console.log(n)}},B=o=>{S(o.target.value)},A=o=>{T(`/view/${o}`)},I=async(o,r,n,i)=>{try{if(await h({title:"Do you want to Save?",text:"Are you sure do you want to save this package?",icon:"info"})){const P={userId:p==null?void 0:p.userId,packageId:o,canteenId:r,source:"package",total:n,image:i};w.post("/wish/addtowish",P).then(l=>{var C;((C=l==null?void 0:l.data)==null?void 0:C.status)===!0?h({title:"Saved!",text:"Your Package is saved. You can book this package from on my wish within 10 days!",icon:"success"}):h({title:"Error!",text:"This Package is already in On-My-Wish!",icon:"warning"})}).catch(l=>console.log(l))}}catch(c){console.log(c)}};return a.jsxs(s,{sx:{maxWidth:"100%",padding:5},children:[a.jsxs(s,{sx:{marginTop:"4rem"},children:[a.jsx(q,{children:a.jsx(G,{label:"Search",variant:"outlined",placeholder:"search......",onChange:B,InputProps:{startAdornment:a.jsx(V,{})}})}),a.jsx(s,{sx:{marginTop:"3rem"},children:u.length===0?a.jsx(g,{sx:{textAlign:"center",marginTop:5,color:"#000339"},children:"Search results not found.....Try another one"}):u.map(o=>{var r,n;return a.jsxs($,{children:[a.jsxs(F,{children:[a.jsx(M,{children:a.jsx("img",{src:o==null?void 0:o.image,style:{width:"100px",height:"100px",borderRadius:"100px",border:"1px solid white",display:"block"}})}),a.jsxs(O,{children:[a.jsxs(g,{variant:"h6",sx:{fontWeight:"800",fontSize:"25px"},children:[a.jsx(D,{fontSize:"small"}),"  ",o==null?void 0:o.total]}),a.jsx(g,{sx:{fontSize:"16px",fontWeight:"600",marginBottom:0,color:"#A0A7AB "},children:(r=o==null?void 0:o.canteenId)==null?void 0:r.canteenName}),a.jsx(g,{sx:{fontSize:"16px",fontWeight:"600",marginBottom:0,color:"#A0A7AB "},children:o==null?void 0:o.category}),a.jsx(g,{sx:{fontSize:"16px",fontWeight:"600",marginBottom:1,color:"#A0A7AB "},children:(n=o==null?void 0:o.canteenId)==null?void 0:n.city})]})]}),a.jsx(N,{sx:{},onClick:()=>A(o==null?void 0:o._id),children:"View"}),a.jsx(Y,{sx:{},onClick:()=>{var i;return I(o==null?void 0:o._id,(i=o==null?void 0:o.canteenId)==null?void 0:i._id,o==null?void 0:o.total,o==null?void 0:o.image)},children:"Save"})]})})})]}),a.jsx(_,{spacing:2,sx:{alignItems:"center",marginTop:6},children:a.jsx(E,{count:t,onChange:v,page:y})})]})};export{uo as default};
