import{r as C,a as E,u as S,j as t,B as z,i as B,C as L,D as V}from"./index-57b17ab7.js";import{u as F}from"./index.esm-c4348c38.js";import{I as R,_ as p}from"./index-4b953b45.js";import{C as W}from"./Container-847fa433.js";import{G as a}from"./Grid-b0979781.js";import{P as q}from"./List-19ca871a.js";import{T as y}from"./Typography-53e4a25e.js";import{T as v}from"./TextField-ebbc49f9.js";import{M as D}from"./InputAdornment-b5844053.js";import{I as Z}from"./IconButton-4dde7a3a.js";import{V as _,a as G,L as M}from"./VisibilityOff-1db0ede9.js";import"./createContainer-7e1ea37d.js";import"./styled-72e6725c.js";import"./useTheme-6c76255c.js";import"./useId-04df6fbd.js";import"./Menu-24ec4787.js";import"./createSvgIcon-0c6544b4.js";const N="/assets/Login-pana-858e45a0.png",O=()=>{var c,l;const[r,w]=C.useState(!1),o=E(),s=S(),k=()=>{w(n=>!n)},P=F(),{register:d,handleSubmit:T,formState:b}=P,{errors:i}=b,I=n=>{B.post("/userlogin/canteenlogin",n).then(e=>{var m,h,u,x,f,g,j;if(((m=e==null?void 0:e.data)==null?void 0:m.status)===!1)p.error((h=e==null?void 0:e.data)==null?void 0:h.message);else{p("login success",{icon:"👏"}),localStorage.setItem("canteenAccessToken",(u=e==null?void 0:e.data)==null?void 0:u.canteenAccessToken),localStorage.setItem("canteenRefreshToken",(x=e==null?void 0:e.data)==null?void 0:x.canteenRefreshtoken);const A={canteenAccessToken:(f=e==null?void 0:e.data)==null?void 0:f.canteenAccessToken,canteenRefreshToken:(g=e==null?void 0:e.data)==null?void 0:g.canteenRefreshtoken};o(L(A)),o(V((j=e==null?void 0:e.data)==null?void 0:j.canteenInfo)),s("/canteen/addpackages")}}).catch(e=>{console.log(e,"error found")})};return t.jsx("div",{children:t.jsxs(W,{maxWidth:"md",children:[t.jsx(R,{position:"top-left",reverseOrder:!1}),t.jsxs(a,{container:!0,spacing:2,direction:"row",justifyContent:"center",alignItems:"center",style:{minHeight:"100vh"},children:[t.jsx(a,{item:!0,md:6,xs:12,children:t.jsx(q,{elevation:0,sx:{padding:5},children:t.jsx("form",{onSubmit:T(I),noValidate:!0,children:t.jsxs(a,{container:!0,direction:"column",spacing:2,children:[t.jsx(y,{variant:"h5",style:{fontWeight:"bold",textAlign:"center",color:"#4B6190"},children:"canteenPro "}),t.jsx(y,{style:{textAlign:"center",color:"#8F95A2",fontSize:"14px",paddingTop:"6px"},children:"A valid canteen can login with their credentials!"}),t.jsx(a,{item:!0,children:t.jsx(v,{type:"Email",fullWidth:!0,label:"Email",placeholder:"Email address",variant:"standard",color:"secondary",size:"small",...d("Email",{required:"email is required",pattern:{value:/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i,message:"Please enter a valid email address"}}),error:!!i.Email,helperText:(c=i==null?void 0:i.Email)==null?void 0:c.message})}),t.jsx(a,{item:!0,children:t.jsx(v,{type:r?"text":"password",fullWidth:!0,label:"Password",placeholder:"Enter the password",variant:"standard",color:"secondary",size:"small",...d("Password",{required:"confirm your password"}),error:!!i.Password,helperText:i.Password?(l=i.Password)==null?void 0:l.message:"dont share the password",InputProps:{endAdornment:t.jsx(D,{position:"end",children:t.jsx(Z,{onClick:k,"aria-label":"password",edge:"end",children:r?t.jsx(_,{}):t.jsx(G,{})})})}})}),t.jsx(a,{item:!0,children:t.jsx(z,{type:"submit",variant:"contained",fullWidth:!0,size:"large",children:"Login"})}),t.jsx(a,{item:!0,paddingTop:2,children:t.jsx(M,{variant:"body2",style:{cursor:"pointer",color:"#5F5B5B",textDecoration:"none"},onClick:()=>s("/canteen/signup"),children:"If don't have an account?"})})]})})})}),t.jsx(a,{item:!0,md:6,xs:12,sx:{display:{xs:"none",sm:"none",md:"block"}},children:t.jsx("img",{className:"rounded-2xl",src:N,alt:"canteenPro",style:{width:"100%",height:"100%",objectFit:"cover"}})})]})]})})},ct=()=>t.jsx("div",{children:t.jsx(O,{})});export{ct as default};