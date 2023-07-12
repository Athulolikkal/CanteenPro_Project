import{r as W,a as N,u as V,j as e,B,i as L,C as F,D as Z}from"./index-57b17ab7.js";import{u as $}from"./index.esm-c4348c38.js";import{I as D,_ as b}from"./index-4b953b45.js";import{C as M}from"./Container-847fa433.js";import{G as n}from"./Grid-b0979781.js";import{P as O}from"./List-19ca871a.js";import{T}from"./Typography-53e4a25e.js";import{T as i}from"./TextField-ebbc49f9.js";import{M as U}from"./InputAdornment-b5844053.js";import{I as _}from"./IconButton-4dde7a3a.js";import{V as G,a as H,L as J}from"./VisibilityOff-1db0ede9.js";import"./createContainer-7e1ea37d.js";import"./styled-72e6725c.js";import"./useTheme-6c76255c.js";import"./useId-04df6fbd.js";import"./Menu-24ec4787.js";import"./createSvgIcon-0c6544b4.js";const K="/assets/Online world-cuate-fd991364.png",Q=()=>{var c,m,u,h,x,p,g;const[l,C]=W.useState(!1),o=N(),d=V(),k=()=>{C(s=>!s)},z=$(),{register:r,handleSubmit:A,formState:q,getValues:I}=z,{errors:t}=q,E=s=>{const{Password:a}=I();return s===a||"Passwords do not match"},R=s=>{L.post("/usersignup/canteensignup",s).then(a=>{var y,f,j,v,w,P;if(((y=a==null?void 0:a.data)==null?void 0:y.status)===!1)b.error("Email is already exists, Try new one....");else{b("login success",{icon:"👏"}),console.log(a),localStorage.setItem("canteenAccessToken",(f=a==null?void 0:a.data)==null?void 0:f.canteenAccesstoken),localStorage.setItem("canteenRefreshToken",(j=a==null?void 0:a.data)==null?void 0:j.canteenRefreshToken);const S={canteenAccessToken:(v=a==null?void 0:a.data)==null?void 0:v.canteenAccesstoken,canteenRefreshToken:(w=a==null?void 0:a.data)==null?void 0:w.canteenRefreshToken};o(F(S)),o(Z((P=a==null?void 0:a.data)==null?void 0:P.canteenDetails)),d("/canteen/addpackages")}}).catch(a=>{console.log(a,"error found")})};return e.jsx("div",{children:e.jsxs(M,{maxWidth:"md",children:[e.jsx(D,{position:"top-left",reverseOrder:!1}),e.jsxs(n,{container:!0,spacing:2,direction:"row",justifyContent:"center",alignItems:"center",style:{minHeight:"100vh"},children:[e.jsx(n,{item:!0,md:6,xs:12,children:e.jsx(O,{elevation:0,sx:{padding:5},children:e.jsx("form",{onSubmit:A(R),noValidate:!0,children:e.jsxs(n,{container:!0,direction:"column",spacing:2,children:[e.jsx(T,{variant:"h5",style:{fontWeight:"bold",textAlign:"center",color:"#4B6190"},children:"canteenPro "}),e.jsx(T,{style:{textAlign:"center",color:"#8F95A2",fontSize:"14px",paddingTop:"6px"},children:"canteens can join our family by signing here!!"}),e.jsx(n,{item:!0,children:e.jsx(i,{type:"text",fullWidth:!0,label:"CanteenName",placeholder:"Enter your canteen name",variant:"standard",color:"secondary",size:"small",...r("CanteenName",{required:"name is required",pattern:{value:/^(?!\s)[A-Za-z\s'-]+$/,message:"only accept letters"},minLength:{value:3,message:"Name must be at least 3 characters long"},maxLength:{value:30,message:"Name cannot exceed 30 characters"},validate:s=>!s.startsWith(" ")||"can't start with white spaces"}),error:!!t.CanteenName,helperText:(c=t==null?void 0:t.CanteenName)==null?void 0:c.message})}),e.jsx(n,{item:!0,children:e.jsx(i,{type:"email",fullWidth:!0,label:"Email",placeholder:"Email address",variant:"standard",color:"secondary",size:"small",...r("Email",{required:"email is required",pattern:{value:/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i,message:"Please enter a valid email address"}}),error:!!t.Email,helperText:(m=t==null?void 0:t.Email)==null?void 0:m.message})}),e.jsx(n,{item:!0,children:e.jsx(i,{type:"text",fullWidth:!0,label:"Phonenumber",placeholder:"Phone number",variant:"standard",color:"secondary",size:"small",...r("Phonenumber",{required:"phone number is required",pattern:{value:/^\d{10}$/,message:"Please enter a valid phone number"}}),error:!!t.Phonenumber,helperText:(u=t==null?void 0:t.Phonenumber)==null?void 0:u.message})}),e.jsx(n,{item:!0,children:e.jsx(i,{type:"text",fullWidth:!0,label:"City",placeholder:"Enter your city",variant:"standard",color:"secondary",size:"small",...r("City",{required:"city name is required",pattern:{value:/^(?!\s)[A-Za-z\s'-]+$/,message:"enter your current city"}}),error:!!t.City,helperText:(h=t==null?void 0:t.City)==null?void 0:h.message})}),e.jsx(n,{item:!0,children:e.jsx(i,{type:"text",fullWidth:!0,label:"Pincode",placeholder:"Please enter your pinncode",variant:"standard",color:"secondary",size:"small",...r("Pincode",{required:"pincode is required",pattern:{value:/^[1-9]\d{5,5}$/,message:"Please enter a valid pincode"}}),error:!!t.Pincode,helperText:(x=t==null?void 0:t.Pincode)==null?void 0:x.message})}),e.jsx(n,{item:!0,children:e.jsx(i,{type:l?"text":"password",fullWidth:!0,label:"Password",placeholder:"Enter the password",variant:"standard",color:"secondary",size:"small",...r("Password",{required:"password is required",maxLength:{value:8,message:"maximum eight letters"},minLength:{value:4,message:"minimum four letters"}}),error:!!t.Password,helperText:(p=t==null?void 0:t.Password)==null?void 0:p.message})}),e.jsx(n,{item:!0,children:e.jsx(i,{type:l?"text":"password",fullWidth:!0,label:"Repassword",placeholder:"Re-enter the password",variant:"standard",color:"secondary",size:"small",...r("Repassword",{required:"confirm your password",validate:E}),error:!!t.Repassword,helperText:t.Repassword?(g=t.Repassword)==null?void 0:g.message:"dont share the password",InputProps:{endAdornment:e.jsx(U,{position:"end",children:e.jsx(_,{onClick:k,"aria-label":"password",edge:"end",children:l?e.jsx(G,{}):e.jsx(H,{})})})}})}),e.jsx(n,{item:!0,children:e.jsx(B,{type:"submit",variant:"contained",fullWidth:!0,size:"large",children:"SignUp"})}),e.jsx(n,{item:!0,paddingTop:2,children:e.jsx(J,{variant:"body2",style:{cursor:"pointer",color:"#5F5B5B",textDecoration:"none"},onClick:()=>d("/canteen/login"),children:"If you already have an account?"})})]})})})}),e.jsx(n,{item:!0,md:6,xs:12,sx:{display:{xs:"none",sm:"none",md:"block"}},children:e.jsx("img",{className:"rounded-2xl",src:K,alt:"canteenPro",style:{width:"100%",height:"100%",objectFit:"cover"}})})]})]})})},pe=()=>e.jsx("div",{children:e.jsx(Q,{})});export{pe as default};
