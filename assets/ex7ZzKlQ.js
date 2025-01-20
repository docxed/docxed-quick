import{i as s,I as Y,K as J,ab as ee,am as D,ae as te,ah as ne,Z as F,ag as ae,Y as ue,r as N,S as T,U as re,e as le,h as _,V as ie,al as se,ai as oe}from"./D28ZhH1v.js";import{f as ce,d as de,_ as V,e as fe,Q as ve}from"./BbbwEIFQ.js";const Z={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},ge=Object.keys(Z),me={align:{type:String,validator:e=>ge.includes(e)}};function be(e){return s(()=>{const t=e.align===void 0?e.vertical===!0?"stretch":"left":e.align;return`${e.vertical===!0?"items":"justify"}-${Z[t]}`})}function he(e){return e.appContext.config.globalProperties.$router!==void 0}function Oe(e){return e.isUnmounted===!0||e.isDeactivated===!0}function z(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function U(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function ye(e,t){for(const u in t){const n=t[u],l=e[u];if(typeof n=="string"){if(n!==l)return!1}else if(Array.isArray(l)===!1||l.length!==n.length||n.some((m,f)=>m!==l[f]))return!1}return!0}function H(e,t){return Array.isArray(t)===!0?e.length===t.length&&e.every((u,n)=>u===t[n]):e.length===1&&e[0]===t}function ke(e,t){return Array.isArray(e)===!0?H(e,t):Array.isArray(t)===!0?H(t,e):e===t}function pe(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const u in e)if(ke(e[u],t[u])===!1)return!1;return!0}const G={to:[String,Object],replace:Boolean,href:String,target:String,disable:Boolean},Me={...G,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"}};function qe({fallbackTag:e,useDisableForRouterLinkProps:t=!0}={}){const u=Y(),{props:n,proxy:l,emit:m}=u,f=he(u),d=s(()=>n.disable!==!0&&n.href!==void 0),$=t===!0?s(()=>f===!0&&n.disable!==!0&&d.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""):s(()=>f===!0&&d.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""),h=s(()=>$.value===!0?w(n.to):null),v=s(()=>h.value!==null),x=s(()=>d.value===!0||v.value===!0),r=s(()=>n.type==="a"||x.value===!0?"a":n.tag||e||"div"),y=s(()=>d.value===!0?{href:n.href,target:n.target}:v.value===!0?{href:h.value.href,target:n.target}:{}),g=s(()=>{if(v.value===!1)return-1;const{matched:o}=h.value,{length:p}=o,L=o[p-1];if(L===void 0)return-1;const E=l.$route.matched;if(E.length===0)return-1;const S=E.findIndex(U.bind(null,L));if(S!==-1)return S;const K=z(o[p-2]);return p>1&&z(L)===K&&E[E.length-1].path!==K?E.findIndex(U.bind(null,o[p-2])):S}),k=s(()=>v.value===!0&&g.value!==-1&&ye(l.$route.params,h.value.params)),i=s(()=>k.value===!0&&g.value===l.$route.matched.length-1&&pe(l.$route.params,h.value.params)),b=s(()=>v.value===!0?i.value===!0?` ${n.exactActiveClass} ${n.activeClass}`:n.exact===!0?"":k.value===!0?` ${n.activeClass}`:"":"");function w(o){try{return l.$router.resolve(o)}catch{}return null}function P(o,{returnRouterError:p,to:L=n.to,replace:E=n.replace}={}){if(n.disable===!0)return o.preventDefault(),Promise.resolve(!1);if(o.metaKey||o.altKey||o.ctrlKey||o.shiftKey||o.button!==void 0&&o.button!==0||n.target==="_blank")return Promise.resolve(!1);o.preventDefault();const S=l.$router[E===!0?"replace":"push"](L);return p===!0?S:S.then(()=>{}).catch(()=>{})}function R(o){if(v.value===!0){const p=L=>P(o,L);m("click",o,p),o.defaultPrevented!==!0&&p()}else m("click",o)}return{hasRouterLink:v,hasHrefLink:d,hasLink:x,linkTag:r,resolvedLink:h,linkIsActive:k,linkIsExactActive:i,linkClass:b,linkAttrs:y,getLink:w,navigateToRouterLink:P,navigateOnClick:R}}function xe(e,t){const u=e.style;for(const n in t)u[n]=t[n]}function je(e){if(e==null)return;if(typeof e=="string")try{return document.querySelector(e)||void 0}catch{return}const t=J(e);if(t)return t.$el||t}function _e(e,t=250){let u=!1,n;return function(){return u===!1&&(u=!0,setTimeout(()=>{u=!1},t),n=e.apply(this,arguments)),n}}function Q(e,t,u,n){u.modifiers.stop===!0&&F(e);const l=u.modifiers.color;let m=u.modifiers.center;m=m===!0||n===!0;const f=document.createElement("span"),d=document.createElement("span"),$=ae(e),{left:h,top:v,width:x,height:r}=t.getBoundingClientRect(),y=Math.sqrt(x*x+r*r),g=y/2,k=`${(x-y)/2}px`,i=m?k:`${$.left-h-g}px`,b=`${(r-y)/2}px`,w=m?b:`${$.top-v-g}px`;d.className="q-ripple__inner",xe(d,{height:`${y}px`,width:`${y}px`,transform:`translate3d(${i},${w},0) scale3d(.2,.2,1)`,opacity:0}),f.className=`q-ripple${l?" text-"+l:""}`,f.setAttribute("dir","ltr"),f.appendChild(d),t.appendChild(f);const P=()=>{f.remove(),clearTimeout(R)};u.abort.push(P);let R=setTimeout(()=>{d.classList.add("q-ripple__inner--enter"),d.style.transform=`translate3d(${k},${b},0) scale3d(1,1,1)`,d.style.opacity=.2,R=setTimeout(()=>{d.classList.remove("q-ripple__inner--enter"),d.classList.add("q-ripple__inner--leave"),d.style.opacity=0,R=setTimeout(()=>{f.remove(),u.abort.splice(u.abort.indexOf(P),1)},275)},250)},50)}function W(e,{modifiers:t,value:u,arg:n}){const l=Object.assign({},e.cfg.ripple,t,u);e.modifiers={early:l.early===!0,stop:l.stop===!0,center:l.center===!0,color:l.color||n,keyCodes:[].concat(l.keyCodes||13)}}const Le=ee({name:"ripple",beforeMount(e,t){const u=t.instance.$.appContext.config.globalProperties.$q.config||{};if(u.ripple===!1)return;const n={cfg:u,enabled:t.value!==!1,modifiers:{},abort:[],start(l){n.enabled===!0&&l.qSkipRipple!==!0&&l.type===(n.modifiers.early===!0?"pointerdown":"click")&&Q(l,e,n,l.qKeyEvent===!0)},keystart:_e(l=>{n.enabled===!0&&l.qSkipRipple!==!0&&D(l,n.modifiers.keyCodes)===!0&&l.type===`key${n.modifiers.early===!0?"down":"up"}`&&Q(l,e,n,!0)},300)};W(n,t),e.__qripple=n,te(n,"main",[[e,"pointerdown","start","passive"],[e,"click","start","passive"],[e,"keydown","keystart","passive"],[e,"keyup","keystart","passive"]])},updated(e,t){if(t.oldValue!==t.value){const u=e.__qripple;u!==void 0&&(u.enabled=t.value!==!1,u.enabled===!0&&Object(t.value)===t.value&&W(u,t))}},beforeUnmount(e){const t=e.__qripple;t!==void 0&&(t.abort.forEach(u=>{u()}),ne(t,"main"),delete e._qripple)}}),X={none:0,xs:4,sm:8,md:16,lg:24,xl:32},Ce={xs:8,sm:10,md:14,lg:20,xl:24},Ee=["button","submit","reset"],$e=/[^\s]\/[^\s]/,Se=["flat","outline","push","unelevated"];function Pe(e,t){return e.flat===!0?"flat":e.outline===!0?"outline":e.push===!0?"push":e.unelevated===!0?"unelevated":t}const Re={...ce,...G,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,...Se.reduce((e,t)=>(e[t]=Boolean)&&e,{}),square:Boolean,rounded:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...me.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean},we={...Re,round:Boolean};function Te(e){const t=de(e,Ce),u=be(e),{hasRouterLink:n,hasLink:l,linkTag:m,linkAttrs:f,navigateOnClick:d}=qe({fallbackTag:"button"}),$=s(()=>{const i=e.fab===!1&&e.fabMini===!1?t.value:{};return e.padding!==void 0?Object.assign({},i,{padding:e.padding.split(/\s+/).map(b=>b in X?X[b]+"px":b).join(" "),minWidth:"0",minHeight:"0"}):i}),h=s(()=>e.rounded===!0||e.fab===!0||e.fabMini===!0),v=s(()=>e.disable!==!0&&e.loading!==!0),x=s(()=>v.value===!0?e.tabindex||0:-1),r=s(()=>Pe(e,"standard")),y=s(()=>{const i={tabindex:x.value};return l.value===!0?Object.assign(i,f.value):Ee.includes(e.type)===!0&&(i.type=e.type),m.value==="a"?(e.disable===!0?i["aria-disabled"]="true":i.href===void 0&&(i.role="button"),n.value!==!0&&$e.test(e.type)===!0&&(i.type=e.type)):e.disable===!0&&(i.disabled="",i["aria-disabled"]="true"),e.loading===!0&&e.percentage!==void 0&&Object.assign(i,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":e.percentage}),i}),g=s(()=>{let i;e.color!==void 0?e.flat===!0||e.outline===!0?i=`text-${e.textColor||e.color}`:i=`bg-${e.color} text-${e.textColor||"white"}`:e.textColor&&(i=`text-${e.textColor}`);const b=e.round===!0?"round":`rectangle${h.value===!0?" q-btn--rounded":e.square===!0?" q-btn--square":""}`;return`q-btn--${r.value} q-btn--${b}`+(i!==void 0?" "+i:"")+(v.value===!0?" q-btn--actionable q-focusable q-hoverable":e.disable===!0?" disabled":"")+(e.fab===!0?" q-btn--fab":e.fabMini===!0?" q-btn--fab-mini":"")+(e.noCaps===!0?" q-btn--no-uppercase":"")+(e.dense===!0?" q-btn--dense":"")+(e.stretch===!0?" no-border-radius self-stretch":"")+(e.glossy===!0?" glossy":"")+(e.square?" q-btn--square":"")}),k=s(()=>u.value+(e.stack===!0?" column":" row")+(e.noWrap===!0?" no-wrap text-no-wrap":"")+(e.loading===!0?" q-btn__content--hidden":""));return{classes:g,style:$,innerClasses:k,attributes:y,hasLink:l,linkTag:m,navigateOnClick:d,isActionable:v}}const{passiveCapture:q}=oe;let B=null,A=null,O=null;const Ke=ue({name:"QBtn",props:{...we,percentage:Number,darkPercentage:Boolean,onTouchstart:[Function,Array]},emits:["click","keydown","mousedown","keyup"],setup(e,{slots:t,emit:u}){const{proxy:n}=Y(),{classes:l,style:m,innerClasses:f,attributes:d,hasLink:$,linkTag:h,navigateOnClick:v,isActionable:x}=Te(e),r=N(null),y=N(null);let g=null,k,i=null;const b=s(()=>e.label!==void 0&&e.label!==null&&e.label!==""),w=s(()=>e.disable===!0||e.ripple===!1?!1:{keyCodes:$.value===!0?[13,32]:[13],...e.ripple===!0?{}:e.ripple}),P=s(()=>({center:e.round})),R=s(()=>{const a=Math.max(0,Math.min(100,e.percentage));return a>0?{transition:"transform 0.6s",transform:`translateX(${a-100}%)`}:{}}),o=s(()=>{if(e.loading===!0)return{onMousedown:j,onTouchstart:j,onClick:j,onKeydown:j,onKeyup:j};if(x.value===!0){const a={onClick:L,onKeydown:E,onMousedown:K};if(n.$q.platform.has.touch===!0){const c=e.onTouchstart!==void 0?"":"Passive";a[`onTouchstart${c}`]=S}return a}return{onClick:T}}),p=s(()=>({ref:r,class:"q-btn q-btn-item non-selectable no-outline "+l.value,style:m.value,...d.value,...o.value}));function L(a){if(r.value!==null){if(a!==void 0){if(a.defaultPrevented===!0)return;const c=document.activeElement;if(e.type==="submit"&&c!==document.body&&r.value.contains(c)===!1&&c.contains(r.value)===!1){r.value.focus();const I=()=>{document.removeEventListener("keydown",T,!0),document.removeEventListener("keyup",I,q),r.value!==null&&r.value.removeEventListener("blur",I,q)};document.addEventListener("keydown",T,!0),document.addEventListener("keyup",I,q),r.value.addEventListener("blur",I,q)}}v(a)}}function E(a){r.value!==null&&(u("keydown",a),D(a,[13,32])===!0&&A!==r.value&&(A!==null&&M(),a.defaultPrevented!==!0&&(r.value.focus(),A=r.value,r.value.classList.add("q-btn--active"),document.addEventListener("keyup",C,!0),r.value.addEventListener("blur",C,q)),T(a)))}function S(a){r.value!==null&&(u("touchstart",a),a.defaultPrevented!==!0&&(B!==r.value&&(B!==null&&M(),B=r.value,g=a.target,g.addEventListener("touchcancel",C,q),g.addEventListener("touchend",C,q)),k=!0,i!==null&&clearTimeout(i),i=setTimeout(()=>{i=null,k=!1},200)))}function K(a){r.value!==null&&(a.qSkipRipple=k===!0,u("mousedown",a),a.defaultPrevented!==!0&&O!==r.value&&(O!==null&&M(),O=r.value,r.value.classList.add("q-btn--active"),document.addEventListener("mouseup",C,q)))}function C(a){if(r.value!==null&&!(a!==void 0&&a.type==="blur"&&document.activeElement===r.value)){if(a!==void 0&&a.type==="keyup"){if(A===r.value&&D(a,[13,32])===!0){const c=new MouseEvent("click",a);c.qKeyEvent=!0,a.defaultPrevented===!0&&re(c),a.cancelBubble===!0&&F(c),r.value.dispatchEvent(c),T(a),a.qKeyEvent=!0}u("keyup",a)}M()}}function M(a){const c=y.value;a!==!0&&(B===r.value||O===r.value)&&c!==null&&c!==document.activeElement&&(c.setAttribute("tabindex",-1),c.focus()),B===r.value&&(g!==null&&(g.removeEventListener("touchcancel",C,q),g.removeEventListener("touchend",C,q)),B=g=null),O===r.value&&(document.removeEventListener("mouseup",C,q),O=null),A===r.value&&(document.removeEventListener("keyup",C,!0),r.value!==null&&r.value.removeEventListener("blur",C,q),A=null),r.value!==null&&r.value.classList.remove("q-btn--active")}function j(a){T(a),a.qSkipRipple=!0}return le(()=>{M(!0)}),Object.assign(n,{click:a=>{x.value===!0&&L(a)}}),()=>{let a=[];e.icon!==void 0&&a.push(_(V,{name:e.icon,left:e.stack!==!0&&b.value===!0,role:"img"})),b.value===!0&&a.push(_("span",{class:"block"},[e.label])),a=fe(t.default,a),e.iconRight!==void 0&&e.round===!1&&a.push(_(V,{name:e.iconRight,right:e.stack!==!0&&b.value===!0,role:"img"}));const c=[_("span",{class:"q-focus-helper",ref:y})];return e.loading===!0&&e.percentage!==void 0&&c.push(_("span",{class:"q-btn__progress absolute-full overflow-hidden"+(e.darkPercentage===!0?" q-btn__progress--dark":"")},[_("span",{class:"q-btn__progress-indicator fit block",style:R.value})])),c.push(_("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+f.value},a)),e.loading!==null&&c.push(_(ie,{name:"q-transition--fade"},()=>e.loading===!0?[_("span",{key:"loading",class:"absolute-full flex flex-center"},t.loading!==void 0?t.loading():[_(ve)])]:null)),se(_(h.value,p.value,c),[[Le,w.value,void 0,P.value]])}}});export{Ke as _,Oe as a,qe as b,xe as c,Le as d,je as g,Me as u,he as v};
