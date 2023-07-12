import{r as R,a as F,u as N,j as e,B as k,b as P,i as z,c as A,d as q}from"./index-57b17ab7.js";import{m as Z,G as D}from"./reactjs-social-login.modern-675db3bf.js";import{u as M}from"./index.esm-c4348c38.js";import{I as $,_ as p}from"./index-4b953b45.js";import{C as O}from"./Container-847fa433.js";import{G as i}from"./Grid-b0979781.js";import{P as H}from"./List-19ca871a.js";import{T as g}from"./Typography-53e4a25e.js";import{T as m}from"./TextField-ebbc49f9.js";import{M as U}from"./InputAdornment-b5844053.js";import{I as J}from"./IconButton-4dde7a3a.js";import{V as K,a as Q,L as X}from"./VisibilityOff-1db0ede9.js";import"./createSvgIcon-0c6544b4.js";import"./createContainer-7e1ea37d.js";import"./styled-72e6725c.js";import"./useTheme-6c76255c.js";import"./useId-04df6fbd.js";import"./Menu-24ec4787.js";const Y=()=>{var f,j,y,v,w;const[x,W]=R.useState(!1),u=F(),h=N(),S=()=>{W(o=>!o)},_="213941177623-aeqnj46io8852pa2trm5kjrumnpsp8fc.apps.googleusercontent.com",B=M(),{register:n,handleSubmit:E,formState:G,getValues:V}=B,{errors:r}=G,C=o=>{const{password:a}=V();return o===a||"Passwords do not match"},L=o=>{z.post("/usersignup",o).then(a=>{var s,l,t,c,d;((s=a==null?void 0:a.data)==null?void 0:s.status)===!1?p.error("Email is already exists, Try new one...."):(p("login success",{icon:"👏"}),localStorage.setItem("userAccessToken",(l=a==null?void 0:a.data)==null?void 0:l.accessToken),localStorage.setItem("userRefreshToken",(t=a==null?void 0:a.data)==null?void 0:t.refreshToken),u(A((c=a==null?void 0:a.data)==null?void 0:c.accessToken)),u(q((d=a==null?void 0:a.data)==null?void 0:d.userInfo)),h("/"))}).catch(a=>{console.log(a,"error found")})};return e.jsx("div",{children:e.jsxs(O,{maxWidth:"md",children:[e.jsx($,{position:"top-left",reverseOrder:!1}),e.jsxs(i,{container:!0,spacing:2,direction:"row",justifyContent:"center",alignItems:"center",style:{minHeight:"100vh"},children:[e.jsx(i,{item:!0,md:6,xs:12,children:e.jsx(H,{elevation:0,sx:{padding:5},children:e.jsx("form",{onSubmit:E(L),noValidate:!0,children:e.jsxs(i,{container:!0,direction:"column",spacing:2,children:[e.jsx(g,{variant:"h5",style:{fontWeight:"bold",textAlign:"center",color:"#4B6190"},children:"canteenPro"}),e.jsx(g,{style:{textAlign:"center",color:"#8F95A2",fontSize:"14px",paddingTop:"6px"},children:"sign up to connect with our family"}),e.jsx(i,{item:!0,children:e.jsx(m,{type:"text",fullWidth:!0,label:"name",placeholder:"Enter your full name",variant:"outlined",color:"secondary",size:"small",...n("name",{required:"name is required",pattern:{value:/^(?!\s)[A-Za-z\s'-]+$/,message:"only accept letters"},minLength:{value:3,message:"Name must be at least 3 characters long"},maxLength:{value:30,message:"Name cannot exceed 30 characters"},validate:o=>!o.startsWith(" ")||"can't start with white spaces"}),error:!!r.name,helperText:(f=r==null?void 0:r.name)==null?void 0:f.message})}),e.jsx(i,{item:!0,children:e.jsx(m,{type:"email",fullWidth:!0,label:"email",placeholder:"Email address",variant:"outlined",color:"secondary",size:"small",...n("email",{required:"email is required",pattern:{value:/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i,message:"Please enter a valid email address"}}),error:!!r.email,helperText:(j=r==null?void 0:r.email)==null?void 0:j.message})}),e.jsx(i,{item:!0,children:e.jsx(m,{type:"text",fullWidth:!0,label:"phonenumber",placeholder:"Phone number",variant:"outlined",color:"secondary",size:"small",...n("phonenumber",{required:"phone number is required",pattern:{value:/^\d{10}$/,message:"Please enter a valid phone number"}}),error:!!r.phonenumber,helperText:(y=r==null?void 0:r.phonenumber)==null?void 0:y.message})}),e.jsx(i,{item:!0,children:e.jsx(m,{type:x?"text":"password",fullWidth:!0,label:"password",placeholder:"Enter the password",variant:"outlined",color:"secondary",size:"small",...n("password",{required:"password is required",maxLength:{value:8,message:"maximum eight letters"},minLength:{value:4,message:"minimum four letters"}}),error:!!r.password,helperText:(v=r==null?void 0:r.password)==null?void 0:v.message})}),e.jsx(i,{item:!0,children:e.jsx(m,{type:x?"text":"password",fullWidth:!0,label:"repassword",placeholder:"Re-enter the password",variant:"outlined",color:"secondary",size:"small",...n("repassword",{required:"confirm your password",validate:C}),error:!!r.repassword,helperText:r.repassword?(w=r.repassword)==null?void 0:w.message:"dont share the password",InputProps:{endAdornment:e.jsx(U,{position:"end",children:e.jsx(J,{onClick:S,"aria-label":"password",edge:"end",children:x?e.jsx(K,{}):e.jsx(Q,{})})})}})}),e.jsx(i,{item:!0,children:e.jsx(k,{type:"submit",variant:"contained",fullWidth:!0,size:"large",children:"SignUp"})}),e.jsxs(i,{container:!0,justifyContent:"center",alignItems:"center",marginTop:2,marginBottom:2,children:[e.jsx(P,{flexGrow:1,children:e.jsx("hr",{})}),e.jsx(g,{variant:"body1",style:{margin:"0 1rem"},children:"or"}),e.jsx(P,{flexGrow:1,children:e.jsx("hr",{})})]}),e.jsx(i,{item:!0,children:e.jsx(Z,{client_id:_,scope:"openid profile email",discoveryDocs:"claims_supported",access_type:"offline",onResolve:async({provider:o,data:a})=>{const s=await a,l={name:s==null?void 0:s.name,email:s==null?void 0:s.email,image:s==null?void 0:s.picture};console.log(l,"data is this..."),z.post("/usersignup/googlesignup",l).then(t=>{var c,d,b,T,I;console.log(t),((c=t==null?void 0:t.data)==null?void 0:c.status)===!1?(p.error("Email is already exists, do login with google!"),setTimeout(()=>{h("/user/login")},1500)):(p("login success",{icon:"👏"}),localStorage.setItem("userAccessToken",(d=t==null?void 0:t.data)==null?void 0:d.accessToken),localStorage.setItem("userRefreshToken",(b=t==null?void 0:t.data)==null?void 0:b.refreshToken),u(A((T=t==null?void 0:t.data)==null?void 0:T.accessToken)),console.log(t.data.userInfo,"is the user"),u(q((I=t==null?void 0:t.data)==null?void 0:I.userInfo)),h("/"))}).catch(t=>console.log(t,"error got on goole signUp"))},onReject:o=>{console.log(o,"errorrrr")},children:e.jsx(k,{variant:"outlined",startIcon:e.jsx(D,{}),fullWidth:!0,size:"large",children:"Google SignUp"})})}),e.jsx(i,{item:!0,paddingTop:2,children:e.jsx(X,{variant:"body2",style:{cursor:"pointer",color:"#5F5B5B",textDecoration:"none"},onClick:()=>h("/user/login"),children:"If you already have an account?"})})]})})})}),e.jsx(i,{item:!0,md:6,xs:12,sx:{display:{xs:"none",sm:"none",md:"block"}},children:e.jsx("img",{className:"rounded-2xl",src:"https://img.freepik.com/premium-vector/bike-delivery-service-concept-courier-character-riding-bicycle-with-delivery-box_113065-599.jpg?w=1060",alt:"canteenPro",style:{width:"100%",height:"100%",objectFit:"cover"}})})]})]})})},je=()=>e.jsx("div",{children:e.jsx(Y,{})});export{je as default};
