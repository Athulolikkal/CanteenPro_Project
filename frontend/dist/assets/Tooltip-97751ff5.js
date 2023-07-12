import{w as de,v as fe,s as q,_ as r,x as So,h as Wo,r as n,k as he,l as Te,P as ge,F as be,n as Pe,o as F,j as y,p as ve}from"./index-57b17ab7.js";import{u as we}from"./useTheme-6c76255c.js";import{a as Uo}from"./Chip-bff6aa36.js";import{G as Do}from"./Menu-24ec4787.js";import{b as N}from"./List-19ca871a.js";import{u as ye}from"./createSvgIcon-0c6544b4.js";import{u as xe}from"./useId-04df6fbd.js";function Re(t){return fe("MuiTooltip",t)}const Ce=de("MuiTooltip",["popper","popperInteractive","popperArrow","popperClose","tooltip","tooltipArrow","touch","tooltipPlacementLeft","tooltipPlacementRight","tooltipPlacementTop","tooltipPlacementBottom","arrow"]),c=Ce,Me=["arrow","children","classes","components","componentsProps","describeChild","disableFocusListener","disableHoverListener","disableInteractive","disableTouchListener","enterDelay","enterNextDelay","enterTouchDelay","followCursor","id","leaveDelay","leaveTouchDelay","onClose","onOpen","open","placement","PopperComponent","PopperProps","slotProps","slots","title","TransitionComponent","TransitionProps"];function Oe(t){return Math.round(t*1e5)/1e5}const $e=t=>{const{classes:e,disableInteractive:s,arrow:T,touch:R,placement:C}=t,M={popper:["popper",!s&&"popperInteractive",T&&"popperArrow"],tooltip:["tooltip",T&&"tooltipArrow",R&&"touch",`tooltipPlacement${So(C.split("-")[0])}`],arrow:["arrow"]};return ve(M,Re,e)},_e=q(Uo,{name:"MuiTooltip",slot:"Popper",overridesResolver:(t,e)=>{const{ownerState:s}=t;return[e.popper,!s.disableInteractive&&e.popperInteractive,s.arrow&&e.popperArrow,!s.open&&e.popperClose]}})(({theme:t,ownerState:e,open:s})=>r({zIndex:(t.vars||t).zIndex.tooltip,pointerEvents:"none"},!e.disableInteractive&&{pointerEvents:"auto"},!s&&{pointerEvents:"none"},e.arrow&&{[`&[data-popper-placement*="bottom"] .${c.arrow}`]:{top:0,marginTop:"-0.71em","&::before":{transformOrigin:"0 100%"}},[`&[data-popper-placement*="top"] .${c.arrow}`]:{bottom:0,marginBottom:"-0.71em","&::before":{transformOrigin:"100% 0"}},[`&[data-popper-placement*="right"] .${c.arrow}`]:r({},e.isRtl?{right:0,marginRight:"-0.71em"}:{left:0,marginLeft:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"100% 100%"}}),[`&[data-popper-placement*="left"] .${c.arrow}`]:r({},e.isRtl?{left:0,marginLeft:"-0.71em"}:{right:0,marginRight:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"0 0"}})})),Le=q("div",{name:"MuiTooltip",slot:"Tooltip",overridesResolver:(t,e)=>{const{ownerState:s}=t;return[e.tooltip,s.touch&&e.touch,s.arrow&&e.tooltipArrow,e[`tooltipPlacement${So(s.placement.split("-")[0])}`]]}})(({theme:t,ownerState:e})=>r({backgroundColor:t.vars?t.vars.palette.Tooltip.bg:Wo(t.palette.grey[700],.92),borderRadius:(t.vars||t).shape.borderRadius,color:(t.vars||t).palette.common.white,fontFamily:t.typography.fontFamily,padding:"4px 8px",fontSize:t.typography.pxToRem(11),maxWidth:300,margin:2,wordWrap:"break-word",fontWeight:t.typography.fontWeightMedium},e.arrow&&{position:"relative",margin:0},e.touch&&{padding:"8px 16px",fontSize:t.typography.pxToRem(14),lineHeight:`${Oe(16/14)}em`,fontWeight:t.typography.fontWeightRegular},{[`.${c.popper}[data-popper-placement*="left"] &`]:r({transformOrigin:"right center"},e.isRtl?r({marginLeft:"14px"},e.touch&&{marginLeft:"24px"}):r({marginRight:"14px"},e.touch&&{marginRight:"24px"})),[`.${c.popper}[data-popper-placement*="right"] &`]:r({transformOrigin:"left center"},e.isRtl?r({marginRight:"14px"},e.touch&&{marginRight:"24px"}):r({marginLeft:"14px"},e.touch&&{marginLeft:"24px"})),[`.${c.popper}[data-popper-placement*="top"] &`]:r({transformOrigin:"center bottom",marginBottom:"14px"},e.touch&&{marginBottom:"24px"}),[`.${c.popper}[data-popper-placement*="bottom"] &`]:r({transformOrigin:"center top",marginTop:"14px"},e.touch&&{marginTop:"24px"})})),Ee=q("span",{name:"MuiTooltip",slot:"Arrow",overridesResolver:(t,e)=>e.arrow})(({theme:t})=>({overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:t.vars?t.vars.palette.Tooltip.bg:Wo(t.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}}));let A=!1,Y=null,x={x:0,y:0};function B(t,e){return s=>{e&&e(s),t(s)}}const Ie=n.forwardRef(function(e,s){var T,R,C,M,J,Q,Z,oo,eo,to,ro,no,so,io,po,lo,ao,co,uo;const D=he({props:e,name:"MuiTooltip"}),{arrow:mo=!1,children:a,components:O={},componentsProps:u={},describeChild:jo=!1,disableFocusListener:zo=!1,disableHoverListener:fo=!1,disableInteractive:Vo=!1,disableTouchListener:Ho=!1,enterDelay:ho=100,enterNextDelay:To=0,enterTouchDelay:Go=700,followCursor:S=!1,id:Ko,leaveDelay:go=0,leaveTouchDelay:Xo=1500,onClose:bo,onOpen:Po,open:Yo,placement:vo="bottom",PopperComponent:W,PopperProps:m={},slotProps:d={},slots:$={},title:h,TransitionComponent:qo=Do,TransitionProps:Jo}=D,wo=Te(D,Me),U=we(),Qo=U.direction==="rtl",[g,yo]=n.useState(),[j,Zo]=n.useState(null),_=n.useRef(!1),z=Vo||S,L=n.useRef(),E=n.useRef(),f=n.useRef(),xo=n.useRef(),[oe,Ro]=ye({controlled:Yo,default:!1,name:"Tooltip",state:"open"});let l=oe;const V=xe(Ko),b=n.useRef(),I=n.useCallback(()=>{b.current!==void 0&&(document.body.style.WebkitUserSelect=b.current,b.current=void 0),clearTimeout(xo.current)},[]);n.useEffect(()=>()=>{clearTimeout(L.current),clearTimeout(E.current),clearTimeout(f.current),I()},[I]);const Co=o=>{clearTimeout(Y),A=!0,Ro(!0),Po&&!l&&Po(o)},k=ge(o=>{clearTimeout(Y),Y=setTimeout(()=>{A=!1},800+go),Ro(!1),bo&&l&&bo(o),clearTimeout(L.current),L.current=setTimeout(()=>{_.current=!1},U.transitions.duration.shortest)}),H=o=>{_.current&&o.type!=="touchstart"||(g&&g.removeAttribute("title"),clearTimeout(E.current),clearTimeout(f.current),ho||A&&To?E.current=setTimeout(()=>{Co(o)},A?To:ho):Co(o))},Mo=o=>{clearTimeout(E.current),clearTimeout(f.current),f.current=setTimeout(()=>{k(o)},go)},{isFocusVisibleRef:Oo,onBlur:ee,onFocus:te,ref:re}=be(),[,$o]=n.useState(!1),_o=o=>{ee(o),Oo.current===!1&&($o(!1),Mo(o))},Lo=o=>{g||yo(o.currentTarget),te(o),Oo.current===!0&&($o(!0),H(o))},Eo=o=>{_.current=!0;const i=a.props;i.onTouchStart&&i.onTouchStart(o)},Io=H,ko=Mo,ne=o=>{Eo(o),clearTimeout(f.current),clearTimeout(L.current),I(),b.current=document.body.style.WebkitUserSelect,document.body.style.WebkitUserSelect="none",xo.current=setTimeout(()=>{document.body.style.WebkitUserSelect=b.current,H(o)},Go)},se=o=>{a.props.onTouchEnd&&a.props.onTouchEnd(o),I(),clearTimeout(f.current),f.current=setTimeout(()=>{k(o)},Xo)};n.useEffect(()=>{if(!l)return;function o(i){(i.key==="Escape"||i.key==="Esc")&&k(i)}return document.addEventListener("keydown",o),()=>{document.removeEventListener("keydown",o)}},[k,l]);const ie=Pe(a.ref,re,yo,s);!h&&h!==0&&(l=!1);const G=n.useRef(),pe=o=>{const i=a.props;i.onMouseMove&&i.onMouseMove(o),x={x:o.clientX,y:o.clientY},G.current&&G.current.update()},P={},K=typeof h=="string";jo?(P.title=!l&&K&&!fo?h:null,P["aria-describedby"]=l?V:null):(P["aria-label"]=K?h:null,P["aria-labelledby"]=l&&!K?V:null);const p=r({},P,wo,a.props,{className:F(wo.className,a.props.className),onTouchStart:Eo,ref:ie},S?{onMouseMove:pe}:{}),v={};Ho||(p.onTouchStart=ne,p.onTouchEnd=se),fo||(p.onMouseOver=B(Io,p.onMouseOver),p.onMouseLeave=B(ko,p.onMouseLeave),z||(v.onMouseOver=Io,v.onMouseLeave=ko)),zo||(p.onFocus=B(Lo,p.onFocus),p.onBlur=B(_o,p.onBlur),z||(v.onFocus=Lo,v.onBlur=_o));const le=n.useMemo(()=>{var o;let i=[{name:"arrow",enabled:!!j,options:{element:j,padding:4}}];return(o=m.popperOptions)!=null&&o.modifiers&&(i=i.concat(m.popperOptions.modifiers)),r({},m.popperOptions,{modifiers:i})},[j,m]),w=r({},D,{isRtl:Qo,arrow:mo,disableInteractive:z,placement:vo,PopperComponentProp:W,touch:_.current}),X=$e(w),Fo=(T=(R=$.popper)!=null?R:O.Popper)!=null?T:_e,No=(C=(M=(J=$.transition)!=null?J:O.Transition)!=null?M:qo)!=null?C:Do,Ao=(Q=(Z=$.tooltip)!=null?Z:O.Tooltip)!=null?Q:Le,Bo=(oo=(eo=$.arrow)!=null?eo:O.Arrow)!=null?oo:Ee,ae=N(Fo,r({},m,(to=d.popper)!=null?to:u.popper,{className:F(X.popper,m==null?void 0:m.className,(ro=(no=d.popper)!=null?no:u.popper)==null?void 0:ro.className)}),w),ce=N(No,r({},Jo,(so=d.transition)!=null?so:u.transition),w),ue=N(Ao,r({},(io=d.tooltip)!=null?io:u.tooltip,{className:F(X.tooltip,(po=(lo=d.tooltip)!=null?lo:u.tooltip)==null?void 0:po.className)}),w),me=N(Bo,r({},(ao=d.arrow)!=null?ao:u.arrow,{className:F(X.arrow,(co=(uo=d.arrow)!=null?uo:u.arrow)==null?void 0:co.className)}),w);return y.jsxs(n.Fragment,{children:[n.cloneElement(a,p),y.jsx(Fo,r({as:W??Uo,placement:vo,anchorEl:S?{getBoundingClientRect:()=>({top:x.y,left:x.x,right:x.x,bottom:x.y,width:0,height:0})}:g,popperRef:G,open:g?l:!1,id:V,transition:!0},v,ae,{popperOptions:le,children:({TransitionProps:o})=>y.jsx(No,r({timeout:U.transitions.duration.shorter},o,ce,{children:y.jsxs(Ao,r({},ue,{children:[h,mo?y.jsx(Bo,r({},me,{ref:Zo})):null]}))}))}))]})}),We=Ie;export{We as T};