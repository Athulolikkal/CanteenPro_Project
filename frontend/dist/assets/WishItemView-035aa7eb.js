import{s as c,b as a,H as O,r as x,a as Q,e as X,u as Y,M as Z,j as r,B as _}from"./index-57b17ab7.js";import{C as $}from"./Container-fb0561b8.js";import{T as l}from"./Typography-53e4a25e.js";import{d as q}from"./CurrencyRupee-8d649153.js";import"./createContainer-7e1ea37d.js";import"./styled-72e6725c.js";import"./interopRequireDefault-01ffd8a5.js";import"./createSvgIcon-9cd83907.js";import"./createSvgIcon-0c6544b4.js";import"./useId-04df6fbd.js";const V=c($)(({theme:o})=>({height:"auto",display:"flex",width:"100%",justifyContent:"center",padding:o.spacing(2,2,2,2),borderRadius:"5px",marginTop:"3rem",[o.breakpoints.down("md")]:{flexDirection:"column",alignItems:"center"}})),g=c(a)(({theme:o})=>({display:"flex",height:"auto",justifyContent:"center",padding:5,width:"30%",margin:4,flexDirection:"column",[o.breakpoints.down("md")]:{width:"90%"}})),p=c(a)(({theme:o})=>({padding:4,backgroundColor:"#17275F",width:"100%",textAlign:"center",borderRadius:"5px"})),u=c(a)(({theme:o})=>({width:"100%",backgroundColor:"#17275F",marginTop:"10px",borderRadius:"5px",display:"flex",flexDirection:"column",height:350,padding:4,[o.breakpoints.down("md")]:{width:"100%",height:"auto"}})),t=c(l)(({theme:o})=>({width:"90%",padding:1,wordWrap:"break-word",textAlign:"center"})),m=c(a)(({theme:o})=>({display:"flex",justifyContent:"center",flexDirection:"column",marginTop:4,height:"auto",width:"75%",marginBottom:4,gap:1,[o.breakpoints.down("sm")]:{width:"100%",height:"auto",flexDirection:"column"}})),w=c(a)(({theme:o})=>({display:"flex",justifyContent:"flex-end",flexDirection:"row",width:"70%",flexWrap:"wrap",[o.breakpoints.down("sm")]:{justifyContent:"center",flexDirection:"column",alignItems:"flex-start",marginLeft:"4rem"}})),pn=()=>{var j,e,b,h,d,k,C,E,S,W,B,R,D,T,z,F,v,A,M,L,P,H,N,U;const{wishId:o}=O(),[n,s]=x.useState(),G=Q(),i=X(K=>K.wishDetails),f=i==null?void 0:i.data,y=Y();x.useEffect(()=>{G(Z({wishId:o}))},[o]),x.useEffect(()=>{s(f)},[f]),!i.data&&!i.loading&&y("*");const J=()=>{y("/user/bookingfromwish")};return r.jsx(a,{children:i!=null&&i.loading?r.jsx(l,{sx:{marginTop:"5rem",textAlign:"center"},children:"Loading..........."}):r.jsxs(a,{children:[r.jsxs(V,{children:[n!=null&&n.breakfast?r.jsxs(g,{children:[r.jsx(p,{children:r.jsx(l,{sx:{fontWeight:"700",fontSize:"20px",color:"white"},children:"BreakFast"})}),r.jsxs(u,{children:[r.jsxs(t,{sx:{padding:2,color:"#E4E4E4"},children:[r.jsx("span",{style:{color:"white",fontWeight:"bold",marginRight:"3px"},children:"MainCourse:"}),(e=(j=n==null?void 0:n.breakfast)==null?void 0:j.mainCourse)==null?void 0:e.toString()]}),r.jsx("hr",{style:{width:"100%",height:"1px"}}),r.jsxs(t,{sx:{padding:2,color:"#E4E4E4"},children:[r.jsx("span",{style:{color:"white",fontWeight:"bold",marginRight:"3px"},children:"SideCourse:"}),(h=(b=n==null?void 0:n.breakfast)==null?void 0:b.sideCourse)==null?void 0:h.toString()]}),r.jsx("hr",{style:{width:"100%",height:"1px"}}),r.jsxs(t,{sx:{padding:2,color:"#E4E4E4"},children:[r.jsx("span",{style:{color:"white",fontWeight:"bold",marginRight:"3px"},children:"Specials:"}),(k=(d=n==null?void 0:n.breakfast)==null?void 0:d.specials)==null?void 0:k.toString()]}),r.jsx("hr",{style:{width:"100%",height:"1px"}})]})]}):"",n!=null&&n.lunch?r.jsxs(g,{children:[r.jsx(p,{children:r.jsx(l,{sx:{fontWeight:"700",fontSize:"20px",color:"white"},children:"Lunch"})}),r.jsxs(u,{children:[r.jsxs(t,{sx:{padding:2,color:"#E4E4E4"},children:[r.jsx("span",{style:{color:"white",fontWeight:"bold",marginRight:"3px"},children:"MainCourse:"}),(E=(C=n==null?void 0:n.lunch)==null?void 0:C.mainCourse)==null?void 0:E.toString()]}),r.jsx("hr",{style:{width:"100%",height:"1px"}}),r.jsxs(t,{sx:{padding:2,color:"#E4E4E4"},children:[r.jsx("span",{style:{color:"white",fontWeight:"bold",marginRight:"3px"},children:"SideCourse:"}),(W=(S=n==null?void 0:n.lunch)==null?void 0:S.sideCourse)==null?void 0:W.toString()]}),r.jsx("hr",{style:{width:"100%",height:"1px"}}),r.jsxs(t,{sx:{padding:2,color:"#E4E4E4"},children:[r.jsx("span",{style:{color:"white",fontWeight:"bold",marginRight:"3px"},children:"Specials:"}),(R=(B=n==null?void 0:n.lunch)==null?void 0:B.specials)==null?void 0:R.toString()]}),r.jsx("hr",{style:{width:"100%",height:"1px"}})]})]}):"",n!=null&&n.dinner?r.jsxs(g,{children:[r.jsx(p,{children:r.jsx(l,{sx:{fontWeight:"700",fontSize:"20px",color:"white"},children:"Dinner"})}),r.jsxs(u,{children:[r.jsxs(t,{sx:{padding:2,color:"#E4E4E4"},children:[r.jsx("span",{style:{color:"white",fontWeight:"bold",marginRight:"3px"},children:"MainCourse:"}),(T=(D=n==null?void 0:n.dinner)==null?void 0:D.mainCourse)==null?void 0:T.toString()]}),r.jsx("hr",{style:{width:"100%",height:"1px"}}),r.jsxs(t,{sx:{padding:2,color:"#E4E4E4"},children:[r.jsx("span",{style:{color:"white",fontWeight:"bold",marginRight:"3px"},children:"SideCourse:"}),(F=(z=n==null?void 0:n.dinner)==null?void 0:z.sideCourse)==null?void 0:F.toString()]}),r.jsx("hr",{style:{width:"100%",height:"1px"}}),r.jsxs(t,{sx:{padding:2,color:"#E4E4E4"},children:[r.jsx("span",{style:{color:"white",fontWeight:"bold",marginRight:"3px"},children:"Specials:"}),(A=(v=n==null?void 0:n.dinner)==null?void 0:v.specials)==null?void 0:A.toString()]}),r.jsx("hr",{style:{width:"100%",height:"1px"}})]})]}):""]}),r.jsx(w,{children:(n==null?void 0:n.source)==="package"?r.jsxs(l,{variant:"h6",sx:{fontWeight:"700",fontSize:"22px"},children:[" Total Amount",r.jsx("span",{style:{fontSize:"18px"},children:" (for 30 day):"}),r.jsx(q,{fontSize:"small"}),"  ",n==null?void 0:n.total]}):r.jsxs(l,{variant:"h6",sx:{fontWeight:"700",fontSize:"22px"},children:[" Total Amount",r.jsx("span",{style:{fontSize:"18px"},children:" (for one day):"}),r.jsx(q,{fontSize:"small"}),"  ",n==null?void 0:n.totalPerDayRate]})}),r.jsx(a,{sx:{marginTop:"1rem"},children:(n==null?void 0:n.source)==="package"||(n==null?void 0:n.source)==="customized"&&(n!=null&&n.breakfast&&(n!=null&&n.dinner)&&(n!=null&&n.lunch)&&(n!=null&&n.lunch)&&(n!=null&&n.dinner)&&n.breakfast.city===n.lunch.city&&n.breakfast.city===n.dinner.city||n!=null&&n.breakfast&&(n!=null&&n.lunch)&&!(n!=null&&n.dinner)&&n.breakfast.city===n.lunch.city||n!=null&&n.breakfast&&(n!=null&&n.dinner)&&!(n!=null&&n.lunch)&&n.breakfast.city===n.dinner.city||n!=null&&n.lunch&&(n!=null&&n.dinner)&&!(n!=null&&n.breakfast)&&n.lunch.city===n.dinner.city||n!=null&&n.breakfast&&!(n!=null&&n.dinner)&&!(n!=null&&n.lunch)&&((M=n==null?void 0:n.breakfast)!=null&&M.city)||n!=null&&n.lunch&&!(n!=null&&n.dinner)&&!(n!=null&&n.breakfast)&&((L=n==null?void 0:n.lunch)!=null&&L.city)||n!=null&&n.dinner&&!(n!=null&&n.breakfast)&&!(n!=null&&n.lunch)&&((P=n==null?void 0:n.dinner)!=null&&P.city))?"":r.jsx(l,{sx:{textAlign:"center"},children:"Make sure that the available places are the same while choosing the canteens"})}),r.jsx(a,{sx:{display:"flex",justifyContent:"center"},children:r.jsx(m,{children:r.jsx(a,{sx:{display:"flex",justifyContent:"center",marginTop:1,marginBottom:3},children:(n==null?void 0:n.source)==="package"||(n==null?void 0:n.source)==="customized"&&(n!=null&&n.breakfast&&(n!=null&&n.dinner)&&(n!=null&&n.lunch)&&(n!=null&&n.lunch)&&(n!=null&&n.dinner)&&n.breakfast.city===n.lunch.city&&n.breakfast.city===n.dinner.city||n!=null&&n.breakfast&&(n!=null&&n.lunch)&&!(n!=null&&n.dinner)&&n.breakfast.city===n.lunch.city||n!=null&&n.breakfast&&(n!=null&&n.dinner)&&!(n!=null&&n.lunch)&&n.breakfast.city===n.dinner.city||n!=null&&n.lunch&&(n!=null&&n.dinner)&&!(n!=null&&n.breakfast)&&n.lunch.city===n.dinner.city||n!=null&&n.breakfast&&!(n!=null&&n.dinner)&&!(n!=null&&n.lunch)&&((H=n==null?void 0:n.breakfast)!=null&&H.city)||n!=null&&n.lunch&&!(n!=null&&n.dinner)&&!(n!=null&&n.breakfast)&&((N=n==null?void 0:n.lunch)!=null&&N.city)||n!=null&&n.dinner&&!(n!=null&&n.breakfast)&&!(n!=null&&n.lunch)&&((U=n==null?void 0:n.dinner)!=null&&U.city))?r.jsx(_,{sx:{width:"100%",height:"auto",padding:2,color:"#17275F",borderColor:"#17275F"},variant:"outlined",onClick:J,children:"Continue Booking"}):r.jsx(_,{sx:{width:"100%",height:"auto",padding:2,color:"#17275F",borderColor:"#17275F"},variant:"outlined",children:"Can't Contionue Booking"})})})})]})})};export{pn as default};
