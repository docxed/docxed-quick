import{O as He,r as $,o as ee,F as z,i as C,P as Ue,I as J,Q as ve,R as Ze,e as ae,S as We,T as $e,U as Qe,V as Q,G as Je,H as Ye,h as q,W as te,X as Ge,Y as Xe,Z as et,$ as Pe,a0 as Se,a1 as X,a2 as tt,a3 as nt,a4 as lt,a5 as ke,a6 as at,a7 as ut,a8 as rt,a9 as Y,aa as pe,ab as ot}from"./l1xWIytb.js";import{u as it,_ as Me,Q as st,h as ne,a as ft,b as dt,c as ct}from"./BXeNM1iW.js";let he=[],gt=[];function Ne(e){gt.length===0?e():he.push(e)}function mt(e){he=he.filter(t=>t!==e)}let ge,ue=0;const K=new Array(256);for(let e=0;e<256;e++)K[e]=(e+256).toString(16).substring(1);const vt=(()=>{const e=typeof crypto<"u"?crypto:typeof window<"u"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return t=>{const n=new Uint8Array(t);return e.getRandomValues(n),n}}return t=>{const n=[];for(let l=t;l>0;l--)n.push(Math.floor(Math.random()*256));return n}})(),_e=4096;function ye(){(ge===void 0||ue+16>_e)&&(ue=0,ge=vt(_e));const e=Array.prototype.slice.call(ge,ue,ue+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,K[e[0]]+K[e[1]]+K[e[2]]+K[e[3]]+"-"+K[e[4]]+K[e[5]]+"-"+K[e[6]]+K[e[7]]+"-"+K[e[8]]+K[e[9]]+"-"+K[e[10]]+K[e[11]]+K[e[12]]+K[e[13]]+K[e[14]]+K[e[15]]}function pt(e){return e??null}function Re(e,t){return e??(t===!0?`f_${ye()}`:null)}function ht({getValue:e,required:t=!0}={}){if(He.value===!0){const n=e!==void 0?$(pt(e())):$(null);return t===!0&&n.value===null&&ee(()=>{n.value=`f_${ye()}`}),e!==void 0&&z(e,l=>{n.value=Re(l,t)}),n}return e!==void 0?C(()=>Re(e(),t)):$(`f_${ye()}`)}const Fe=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,Ae=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,qe=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,re=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,oe=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,me={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),email:e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),hexColor:e=>Fe.test(e),hexaColor:e=>Ae.test(e),hexOrHexaColor:e=>qe.test(e),rgbColor:e=>re.test(e),rgbaColor:e=>oe.test(e),rgbOrRgbaColor:e=>re.test(e)||oe.test(e),hexOrRgbColor:e=>Fe.test(e)||re.test(e),hexaOrRgbaColor:e=>Ae.test(e)||oe.test(e),anyColor:e=>qe.test(e)||re.test(e)||oe.test(e)},Ve=/^on[A-Z]/;function yt(){const{attrs:e,vnode:t}=J(),n={listeners:$({}),attributes:$({})};function l(){const f={},a={};for(const g in e)g!=="class"&&g!=="style"&&Ve.test(g)===!1&&(f[g]=e[g]);for(const g in t.props)Ve.test(g)===!0&&(a[g]=t.props[g]);n.attributes.value=f,n.listeners.value=a}return Ue(l),l(),n}function bt({validate:e,resetValidation:t,requiresQForm:n}){const l=ve(Ze,!1);if(l!==!1){const{props:f,proxy:a}=J();Object.assign(a,{validate:e,resetValidation:t}),z(()=>f.disable,g=>{g===!0?(typeof t=="function"&&t(),l.unbindComponent(a)):l.bindComponent(a)}),ee(()=>{f.disable!==!0&&l.bindComponent(a)}),ae(()=>{f.disable!==!0&&l.unbindComponent(a)})}else n===!0&&console.error("Parent QForm not found on useFormChild()!")}const wt=[!0,!1,"ondemand"],kt={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],default:!1,validator:e=>wt.includes(e)}};function xt(e,t){const{props:n,proxy:l}=J(),f=$(!1),a=$(null),g=$(!1);bt({validate:E,resetValidation:I});let m=0,y;const h=C(()=>n.rules!==void 0&&n.rules!==null&&n.rules.length!==0),v=C(()=>n.disable!==!0&&h.value===!0&&t.value===!1),d=C(()=>n.error===!0||f.value===!0),A=C(()=>typeof n.errorMessage=="string"&&n.errorMessage.length!==0?n.errorMessage:a.value);z(()=>n.modelValue,()=>{g.value=!0,v.value===!0&&n.lazyRules===!1&&V()});function S(){n.lazyRules!=="ondemand"&&v.value===!0&&g.value===!0&&V()}z(()=>n.reactiveRules,O=>{O===!0?y===void 0&&(y=z(()=>n.rules,S,{immediate:!0,deep:!0})):y!==void 0&&(y(),y=void 0)},{immediate:!0}),z(()=>n.lazyRules,S),z(e,O=>{O===!0?g.value=!0:v.value===!0&&n.lazyRules!=="ondemand"&&V()});function I(){m++,t.value=!1,g.value=!1,f.value=!1,a.value=null,V.cancel()}function E(O=n.modelValue){if(n.disable===!0||h.value===!1)return!0;const b=++m,B=t.value!==!0?()=>{g.value=!0}:()=>{},L=(_,R)=>{_===!0&&B(),f.value=_,a.value=R||null,t.value=!1},H=[];for(let _=0;_<n.rules.length;_++){const R=n.rules[_];let D;if(typeof R=="function"?D=R(O,me):typeof R=="string"&&me[R]!==void 0&&(D=me[R](O)),D===!1||typeof D=="string")return L(!0,D),!1;D!==!0&&D!==void 0&&H.push(D)}return H.length===0?(L(!1),!0):(t.value=!0,Promise.all(H).then(_=>{if(_===void 0||Array.isArray(_)===!1||_.length===0)return b===m&&L(!1),!0;const R=_.find(D=>D===!1||typeof D=="string");return b===m&&L(R!==void 0,R),R===void 0},_=>(b===m&&(console.error(_),L(!0)),!1)))}const V=We(E,0);return ae(()=>{y!==void 0&&y(),V.cancel()}),Object.assign(l,{resetValidation:I,validate:E}),$e(l,"hasError",()=>d.value),{isDirtyModel:g,hasRules:h,hasError:d,errorMessage:A,validate:E,resetValidation:I}}function be(e){return e!=null&&(""+e).length!==0}const Ct={...ft,...kt,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String},St={...Ct,maxlength:[Number,String]},Mt=["update:modelValue","clear","focus","blur"];function _t({requiredForAttr:e=!0,tagProp:t,changeEvent:n=!1}={}){const{props:l,proxy:f}=J(),a=it(l,f.$q),g=ht({required:e,getValue:()=>l.for});return{requiredForAttr:e,changeEvent:n,tag:t===!0?C(()=>l.tag):{value:"label"},isDark:a,editable:C(()=>l.disable!==!0&&l.readonly!==!0),innerLoading:$(!1),focused:$(!1),hasPopupOpen:!1,splitAttrs:yt(),targetUid:g,rootRef:$(null),targetRef:$(null),controlRef:$(null)}}function Rt(e){const{props:t,emit:n,slots:l,attrs:f,proxy:a}=J(),{$q:g}=a;let m=null;e.hasValue===void 0&&(e.hasValue=C(()=>be(t.modelValue))),e.emitValue===void 0&&(e.emitValue=c=>{n("update:modelValue",c)}),e.controlEvents===void 0&&(e.controlEvents={onFocusin:o,onFocusout:s}),Object.assign(e,{clearValue:r,onControlFocusin:o,onControlFocusout:s,focus:R}),e.computedCounter===void 0&&(e.computedCounter=C(()=>{if(t.counter!==!1){const c=typeof t.modelValue=="string"||typeof t.modelValue=="number"?(""+t.modelValue).length:Array.isArray(t.modelValue)===!0?t.modelValue.length:0,w=t.maxlength!==void 0?t.maxlength:t.maxValues;return c+(w!==void 0?" / "+w:"")}}));const{isDirtyModel:y,hasRules:h,hasError:v,errorMessage:d,resetValidation:A}=xt(e.focused,e.innerLoading),S=e.floatingLabel!==void 0?C(()=>t.stackLabel===!0||e.focused.value===!0||e.floatingLabel.value===!0):C(()=>t.stackLabel===!0||e.focused.value===!0||e.hasValue.value===!0),I=C(()=>t.bottomSlots===!0||t.hint!==void 0||h.value===!0||t.counter===!0||t.error!==null),E=C(()=>t.filled===!0?"filled":t.outlined===!0?"outlined":t.borderless===!0?"borderless":t.standout?"standout":"standard"),V=C(()=>`q-field row no-wrap items-start q-field--${E.value}`+(e.fieldClass!==void 0?` ${e.fieldClass.value}`:"")+(t.rounded===!0?" q-field--rounded":"")+(t.square===!0?" q-field--square":"")+(S.value===!0?" q-field--float":"")+(b.value===!0?" q-field--labeled":"")+(t.dense===!0?" q-field--dense":"")+(t.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(e.isDark.value===!0?" q-field--dark":"")+(e.getControl===void 0?" q-field--auto-height":"")+(e.focused.value===!0?" q-field--focused":"")+(v.value===!0?" q-field--error":"")+(v.value===!0||e.focused.value===!0?" q-field--highlighted":"")+(t.hideBottomSpace!==!0&&I.value===!0?" q-field--with-bottom":"")+(t.disable===!0?" q-field--disabled":t.readonly===!0?" q-field--readonly":"")),O=C(()=>"q-field__control relative-position row no-wrap"+(t.bgColor!==void 0?` bg-${t.bgColor}`:"")+(v.value===!0?" text-negative":typeof t.standout=="string"&&t.standout.length!==0&&e.focused.value===!0?` ${t.standout}`:t.color!==void 0?` text-${t.color}`:"")),b=C(()=>t.labelSlot===!0||t.label!==void 0),B=C(()=>"q-field__label no-pointer-events absolute ellipsis"+(t.labelColor!==void 0&&v.value!==!0?` text-${t.labelColor}`:"")),L=C(()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:S.value,modelValue:t.modelValue,emitValue:e.emitValue})),H=C(()=>{const c={};return e.targetUid.value&&(c.for=e.targetUid.value),t.disable===!0&&(c["aria-disabled"]="true"),c});function _(){const c=document.activeElement;let w=e.targetRef!==void 0&&e.targetRef.value;w&&(c===null||c.id!==e.targetUid.value)&&(w.hasAttribute("tabindex")===!0||(w=w.querySelector("[tabindex]")),w&&w!==c&&w.focus({preventScroll:!0}))}function R(){Ne(_)}function D(){mt(_);const c=document.activeElement;c!==null&&e.rootRef.value.contains(c)&&c.blur()}function o(c){m!==null&&(clearTimeout(m),m=null),e.editable.value===!0&&e.focused.value===!1&&(e.focused.value=!0,n("focus",c))}function s(c,w){m!==null&&clearTimeout(m),m=setTimeout(()=>{m=null,!(document.hasFocus()===!0&&(e.hasPopupOpen===!0||e.controlRef===void 0||e.controlRef.value===null||e.controlRef.value.contains(document.activeElement)!==!1))&&(e.focused.value===!0&&(e.focused.value=!1,n("blur",c)),w!==void 0&&w())})}function r(c){Qe(c),g.platform.is.mobile!==!0?(e.targetRef!==void 0&&e.targetRef.value||e.rootRef.value).focus():e.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),t.type==="file"&&(e.inputRef.value.value=null),n("update:modelValue",null),e.changeEvent===!0&&n("change",null),n("clear",t.modelValue),Q(()=>{const w=y.value;A(),y.value=w})}function u(c){[13,32].includes(c.keyCode)&&r(c)}function p(){const c=[];return l.prepend!==void 0&&c.push(q("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:te},l.prepend())),c.push(q("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},k())),v.value===!0&&t.noErrorIcon===!1&&c.push(x("error",[q(Me,{name:g.iconSet.field.error,color:"negative"})])),t.loading===!0||e.innerLoading.value===!0?c.push(x("inner-loading-append",l.loading!==void 0?l.loading():[q(st,{color:t.color})])):t.clearable===!0&&e.hasValue.value===!0&&e.editable.value===!0&&c.push(x("inner-clearable-append",[q(Me,{class:"q-field__focusable-action",name:t.clearIcon||g.iconSet.field.clear,tabindex:0,role:"button","aria-hidden":"false","aria-label":g.lang.label.clear,onKeyup:u,onClick:r})])),l.append!==void 0&&c.push(q("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:te},l.append())),e.getInnerAppend!==void 0&&c.push(x("inner-append",e.getInnerAppend())),e.getControlChild!==void 0&&c.push(e.getControlChild()),c}function k(){const c=[];return t.prefix!==void 0&&t.prefix!==null&&c.push(q("div",{class:"q-field__prefix no-pointer-events row items-center"},t.prefix)),e.getShadowControl!==void 0&&e.hasShadow.value===!0&&c.push(e.getShadowControl()),e.getControl!==void 0?c.push(e.getControl()):l.rawControl!==void 0?c.push(l.rawControl()):l.control!==void 0&&c.push(q("div",{ref:e.targetRef,class:"q-field__native row",tabindex:-1,...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0},l.control(L.value))),b.value===!0&&c.push(q("div",{class:B.value},ne(l.label,t.label))),t.suffix!==void 0&&t.suffix!==null&&c.push(q("div",{class:"q-field__suffix no-pointer-events row items-center"},t.suffix)),c.concat(ne(l.default))}function T(){let c,w;v.value===!0?d.value!==null?(c=[q("div",{role:"alert"},d.value)],w=`q--slot-error-${d.value}`):(c=ne(l.error),w="q--slot-error"):(t.hideHint!==!0||e.focused.value===!0)&&(t.hint!==void 0?(c=[q("div",t.hint)],w=`q--slot-hint-${t.hint}`):(c=ne(l.hint),w="q--slot-hint"));const F=t.counter===!0||l.counter!==void 0;if(t.hideBottomSpace===!0&&F===!1&&c===void 0)return;const P=q("div",{key:w,class:"q-field__messages col"},c);return q("div",{class:"q-field__bottom row items-start q-field__bottom--"+(t.hideBottomSpace!==!0?"animated":"stale"),onClick:te},[t.hideBottomSpace===!0?P:q(Ge,{name:"q-transition--field-message"},()=>P),F===!0?q("div",{class:"q-field__counter"},l.counter!==void 0?l.counter():e.computedCounter.value):null])}function x(c,w){return w===null?null:q("div",{key:c,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},w)}let M=!1;return Je(()=>{M=!0}),Ye(()=>{M===!0&&t.autofocus===!0&&a.focus()}),t.autofocus===!0&&ee(()=>{a.focus()}),ae(()=>{m!==null&&clearTimeout(m)}),Object.assign(a,{focus:R,blur:D}),function(){const w=e.getControl===void 0&&l.control===void 0?{...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0,...H.value}:H.value;return q(e.tag.value,{ref:e.rootRef,class:[V.value,f.class],style:f.style,...w},[l.before!==void 0?q("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:te},l.before()):null,q("div",{class:"q-field__inner relative-position col self-stretch"},[q("div",{ref:e.controlRef,class:O.value,tabindex:-1,...e.controlEvents},p()),I.value===!0?T():null]),l.after!==void 0?q("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:te},l.after()):null])}}function Ft(e,t){function n(){const l=e.modelValue;try{const f="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(l)===l&&("length"in l?Array.from(l):[l]).forEach(a=>{f.items.add(a)}),{files:f.files}}catch{return{files:void 0}}}return C(()=>{if(e.type==="file")return n()})}const Ee={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},fe={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},Ie=Object.keys(fe);Ie.forEach(e=>{fe[e].regex=new RegExp(fe[e].pattern)});const At=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+Ie.join("")+"])|(.)","g"),Oe=/[.*+?^${}()|[\]\\]/g,j="",qt={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function Vt(e,t,n,l){let f,a,g,m,y,h;const v=$(null),d=$(S());function A(){return e.autogrow===!0||["textarea","text","search","url","tel","password"].includes(e.type)}z(()=>e.type+e.autogrow,E),z(()=>e.mask,o=>{if(o!==void 0)V(d.value,!0);else{const s=R(d.value);E(),e.modelValue!==s&&t("update:modelValue",s)}}),z(()=>e.fillMask+e.reverseFillMask,()=>{v.value===!0&&V(d.value,!0)}),z(()=>e.unmaskedValue,()=>{v.value===!0&&V(d.value)});function S(){if(E(),v.value===!0){const o=H(R(e.modelValue));return e.fillMask!==!1?D(o):o}return e.modelValue}function I(o){if(o<f.length)return f.slice(-o);let s="",r=f;const u=r.indexOf(j);if(u!==-1){for(let p=o-r.length;p>0;p--)s+=j;r=r.slice(0,u)+s+r.slice(u)}return r}function E(){if(v.value=e.mask!==void 0&&e.mask.length!==0&&A(),v.value===!1){m=void 0,f="",a="";return}const o=Ee[e.mask]===void 0?e.mask:Ee[e.mask],s=typeof e.fillMask=="string"&&e.fillMask.length!==0?e.fillMask.slice(0,1):"_",r=s.replace(Oe,"\\$&"),u=[],p=[],k=[];let T=e.reverseFillMask===!0,x="",M="";o.replace(At,(P,i,N,W,Z)=>{if(W!==void 0){const U=fe[W];k.push(U),M=U.negate,T===!0&&(p.push("(?:"+M+"+)?("+U.pattern+"+)?(?:"+M+"+)?("+U.pattern+"+)?"),T=!1),p.push("(?:"+M+"+)?("+U.pattern+")?")}else if(N!==void 0)x="\\"+(N==="\\"?"":N),k.push(N),u.push("([^"+x+"]+)?"+x+"?");else{const U=i!==void 0?i:Z;x=U==="\\"?"\\\\\\\\":U.replace(Oe,"\\\\$&"),k.push(U),u.push("([^"+x+"]+)?"+x+"?")}});const c=new RegExp("^"+u.join("")+"("+(x===""?".":"[^"+x+"]")+"+)?"+(x===""?"":"["+x+"]*")+"$"),w=p.length-1,F=p.map((P,i)=>i===0&&e.reverseFillMask===!0?new RegExp("^"+r+"*"+P):i===w?new RegExp("^"+P+"("+(M===""?".":M)+"+)?"+(e.reverseFillMask===!0?"$":r+"*")):new RegExp("^"+P));g=k,m=P=>{const i=c.exec(e.reverseFillMask===!0?P:P.slice(0,k.length+1));i!==null&&(P=i.slice(1).join(""));const N=[],W=F.length;for(let Z=0,U=P;Z<W;Z++){const G=F[Z].exec(U);if(G===null)break;U=U.slice(G.shift().length),N.push(...G)}return N.length!==0?N.join(""):P},f=k.map(P=>typeof P=="string"?P:j).join(""),a=f.split(j).join(s)}function V(o,s,r){const u=l.value,p=u.selectionEnd,k=u.value.length-p,T=R(o);s===!0&&E();const x=H(T),M=e.fillMask!==!1?D(x):x,c=d.value!==M;u.value!==M&&(u.value=M),c===!0&&(d.value=M),document.activeElement===u&&Q(()=>{if(M===a){const F=e.reverseFillMask===!0?a.length:0;u.setSelectionRange(F,F,"forward");return}if(r==="insertFromPaste"&&e.reverseFillMask!==!0){const F=u.selectionEnd;let P=p-1;for(let i=y;i<=P&&i<F;i++)f[i]!==j&&P++;b.right(u,P);return}if(["deleteContentBackward","deleteContentForward"].indexOf(r)!==-1){const F=e.reverseFillMask===!0?p===0?M.length>x.length?1:0:Math.max(0,M.length-(M===a?0:Math.min(x.length,k)+1))+1:p;u.setSelectionRange(F,F,"forward");return}if(e.reverseFillMask===!0)if(c===!0){const F=Math.max(0,M.length-(M===a?0:Math.min(x.length,k+1)));F===1&&p===1?u.setSelectionRange(F,F,"forward"):b.rightReverse(u,F)}else{const F=M.length-k;u.setSelectionRange(F,F,"backward")}else if(c===!0){const F=Math.max(0,f.indexOf(j),Math.min(x.length,p)-1);b.right(u,F)}else{const F=p-1;b.right(u,F)}});const w=e.unmaskedValue===!0?R(M):M;String(e.modelValue)!==w&&(e.modelValue!==null||w!=="")&&n(w,!0)}function O(o,s,r){const u=H(R(o.value));s=Math.max(0,f.indexOf(j),Math.min(u.length,s)),y=s,o.setSelectionRange(s,r,"forward")}const b={left(o,s){const r=f.slice(s-1).indexOf(j)===-1;let u=Math.max(0,s-1);for(;u>=0;u--)if(f[u]===j){s=u,r===!0&&s++;break}if(u<0&&f[s]!==void 0&&f[s]!==j)return b.right(o,0);s>=0&&o.setSelectionRange(s,s,"backward")},right(o,s){const r=o.value.length;let u=Math.min(r,s+1);for(;u<=r;u++)if(f[u]===j){s=u;break}else f[u-1]===j&&(s=u);if(u>r&&f[s-1]!==void 0&&f[s-1]!==j)return b.left(o,r);o.setSelectionRange(s,s,"forward")},leftReverse(o,s){const r=I(o.value.length);let u=Math.max(0,s-1);for(;u>=0;u--)if(r[u-1]===j){s=u;break}else if(r[u]===j&&(s=u,u===0))break;if(u<0&&r[s]!==void 0&&r[s]!==j)return b.rightReverse(o,0);s>=0&&o.setSelectionRange(s,s,"backward")},rightReverse(o,s){const r=o.value.length,u=I(r),p=u.slice(0,s+1).indexOf(j)===-1;let k=Math.min(r,s+1);for(;k<=r;k++)if(u[k-1]===j){s=k,s>0&&p===!0&&s--;break}if(k>r&&u[s-1]!==void 0&&u[s-1]!==j)return b.leftReverse(o,r);o.setSelectionRange(s,s,"forward")}};function B(o){t("click",o),h=void 0}function L(o){if(t("keydown",o),Xe(o)===!0||o.altKey===!0)return;const s=l.value,r=s.selectionStart,u=s.selectionEnd;if(o.shiftKey||(h=void 0),o.keyCode===37||o.keyCode===39){o.shiftKey&&h===void 0&&(h=s.selectionDirection==="forward"?r:u);const p=b[(o.keyCode===39?"right":"left")+(e.reverseFillMask===!0?"Reverse":"")];if(o.preventDefault(),p(s,h===r?u:r),o.shiftKey){const k=s.selectionStart;s.setSelectionRange(Math.min(h,k),Math.max(h,k),"forward")}}else o.keyCode===8&&e.reverseFillMask!==!0&&r===u?(b.left(s,r),s.setSelectionRange(s.selectionStart,u,"backward")):o.keyCode===46&&e.reverseFillMask===!0&&r===u&&(b.rightReverse(s,u),s.setSelectionRange(r,s.selectionEnd,"forward"))}function H(o){if(o==null||o==="")return"";if(e.reverseFillMask===!0)return _(o);const s=g;let r=0,u="";for(let p=0;p<s.length;p++){const k=o[r],T=s[p];if(typeof T=="string")u+=T,k===T&&r++;else if(k!==void 0&&T.regex.test(k))u+=T.transform!==void 0?T.transform(k):k,r++;else return u}return u}function _(o){const s=g,r=f.indexOf(j);let u=o.length-1,p="";for(let k=s.length-1;k>=0&&u!==-1;k--){const T=s[k];let x=o[u];if(typeof T=="string")p=T+p,x===T&&u--;else if(x!==void 0&&T.regex.test(x))do p=(T.transform!==void 0?T.transform(x):x)+p,u--,x=o[u];while(r===k&&x!==void 0&&T.regex.test(x));else return p}return p}function R(o){return typeof o!="string"||m===void 0?typeof o=="number"?m(""+o):o:m(o)}function D(o){return a.length-o.length<=0?o:e.reverseFillMask===!0&&o.length!==0?a.slice(0,-o.length)+o:o+a.slice(o.length)}return{innerValue:d,hasMask:v,moveCursorForPaste:O,updateMaskValue:V,onMaskedKeydown:L,onMaskedClick:B}}const Et=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,Ot=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,Bt=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,Tt=/[a-z0-9_ -]$/i;function $t(e){return function(n){if(n.type==="compositionend"||n.type==="change"){if(n.target.qComposing!==!0)return;n.target.qComposing=!1,e(n)}else n.type==="compositionupdate"&&n.target.qComposing!==!0&&typeof n.data=="string"&&(et.is.firefox===!0?Tt.test(n.data)===!1:Et.test(n.data)===!0||Ot.test(n.data)===!0||Bt.test(n.data)===!0)===!0&&(n.target.qComposing=!0)}}const rn=Pe({name:"QInput",inheritAttrs:!1,props:{...St,...qt,...dt,modelValue:[String,Number,FileList],shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...Mt,"paste","change","keydown","click","animationend"],setup(e,{emit:t,attrs:n}){const{proxy:l}=J(),{$q:f}=l,a={};let g=NaN,m,y,h=null,v;const d=$(null),A=ct(e),{innerValue:S,hasMask:I,moveCursorForPaste:E,updateMaskValue:V,onMaskedKeydown:O,onMaskedClick:b}=Vt(e,t,x,d),B=Ft(e),L=C(()=>be(S.value)),H=$t(k),_=_t({changeEvent:!0}),R=C(()=>e.type==="textarea"||e.autogrow===!0),D=C(()=>R.value===!0||["text","search","url","tel","password"].includes(e.type)),o=C(()=>{const i={..._.splitAttrs.listeners.value,onInput:k,onPaste:p,onChange:c,onBlur:w,onFocus:Se};return i.onCompositionstart=i.onCompositionupdate=i.onCompositionend=H,I.value===!0&&(i.onKeydown=O,i.onClick=b),e.autogrow===!0&&(i.onAnimationend=T),i}),s=C(()=>{const i={tabindex:0,"data-autofocus":e.autofocus===!0||void 0,rows:e.type==="textarea"?6:void 0,"aria-label":e.label,name:A.value,..._.splitAttrs.attributes.value,id:_.targetUid.value,maxlength:e.maxlength,disabled:e.disable===!0,readonly:e.readonly===!0};return R.value===!1&&(i.type=e.type),e.autogrow===!0&&(i.rows=1),i});z(()=>e.type,()=>{d.value&&(d.value.value=e.modelValue)}),z(()=>e.modelValue,i=>{if(I.value===!0){if(y===!0&&(y=!1,String(i)===g))return;V(i)}else S.value!==i&&(S.value=i,e.type==="number"&&a.hasOwnProperty("value")===!0&&(m===!0?m=!1:delete a.value));e.autogrow===!0&&Q(M)}),z(()=>e.autogrow,i=>{i===!0?Q(M):d.value!==null&&n.rows>0&&(d.value.style.height="auto")}),z(()=>e.dense,()=>{e.autogrow===!0&&Q(M)});function r(){Ne(()=>{const i=document.activeElement;d.value!==null&&d.value!==i&&(i===null||i.id!==_.targetUid.value)&&d.value.focus({preventScroll:!0})})}function u(){d.value!==null&&d.value.select()}function p(i){if(I.value===!0&&e.reverseFillMask!==!0){const N=i.target;E(N,N.selectionStart,N.selectionEnd)}t("paste",i)}function k(i){if(!i||!i.target)return;if(e.type==="file"){t("update:modelValue",i.target.files);return}const N=i.target.value;if(i.target.qComposing===!0){a.value=N;return}if(I.value===!0)V(N,!1,i.inputType);else if(x(N),D.value===!0&&i.target===document.activeElement){const{selectionStart:W,selectionEnd:Z}=i.target;W!==void 0&&Z!==void 0&&Q(()=>{i.target===document.activeElement&&N.indexOf(i.target.value)===0&&i.target.setSelectionRange(W,Z)})}e.autogrow===!0&&M()}function T(i){t("animationend",i),M()}function x(i,N){v=()=>{h=null,e.type!=="number"&&a.hasOwnProperty("value")===!0&&delete a.value,e.modelValue!==i&&g!==i&&(g=i,N===!0&&(y=!0),t("update:modelValue",i),Q(()=>{g===i&&(g=NaN)})),v=void 0},e.type==="number"&&(m=!0,a.value=i),e.debounce!==void 0?(h!==null&&clearTimeout(h),a.value=i,h=setTimeout(v,e.debounce)):v()}function M(){requestAnimationFrame(()=>{const i=d.value;if(i!==null){const N=i.parentNode.style,{scrollTop:W}=i,{overflowY:Z,maxHeight:U}=f.platform.is.firefox===!0?{}:window.getComputedStyle(i),G=Z!==void 0&&Z!=="scroll";G===!0&&(i.style.overflowY="hidden"),N.marginBottom=i.scrollHeight-1+"px",i.style.height="1px",i.style.height=i.scrollHeight+"px",G===!0&&(i.style.overflowY=parseInt(U,10)<i.scrollHeight?"auto":"hidden"),N.marginBottom="",i.scrollTop=W}})}function c(i){H(i),h!==null&&(clearTimeout(h),h=null),v!==void 0&&v(),t("change",i.target.value)}function w(i){i!==void 0&&Se(i),h!==null&&(clearTimeout(h),h=null),v!==void 0&&v(),m=!1,y=!1,delete a.value,e.type!=="file"&&setTimeout(()=>{d.value!==null&&(d.value.value=S.value!==void 0?S.value:"")})}function F(){return a.hasOwnProperty("value")===!0?a.value:S.value!==void 0?S.value:""}ae(()=>{w()}),ee(()=>{e.autogrow===!0&&M()}),Object.assign(_,{innerValue:S,fieldClass:C(()=>`q-${R.value===!0?"textarea":"input"}`+(e.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:C(()=>e.type!=="file"&&typeof e.shadowText=="string"&&e.shadowText.length!==0),inputRef:d,emitValue:x,hasValue:L,floatingLabel:C(()=>L.value===!0&&(e.type!=="number"||isNaN(S.value)===!1)||be(e.displayValue)),getControl:()=>q(R.value===!0?"textarea":"input",{ref:d,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...s.value,...o.value,...e.type!=="file"?{value:F()}:B.value}),getShadowControl:()=>q("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(R.value===!0?"":" text-no-wrap")},[q("span",{class:"invisible"},F()),q("span",e.shadowText)])});const P=Rt(_);return Object.assign(l,{focus:r,select:u,getNativeElement:()=>d.value}),$e(l,"nativeEl",()=>d.value),P}}),on=Pe({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(e,{slots:t}){const{proxy:{$q:n}}=J(),l=ve(tt,X);if(l===X)return console.error("QPage needs to be a deep child of QLayout"),X;if(ve(nt,X)===X)return console.error("QPage needs to be child of QPageContainer"),X;const a=C(()=>{const m=(l.header.space===!0?l.header.size:0)+(l.footer.space===!0?l.footer.size:0);if(typeof e.styleFn=="function"){const y=l.isContainer.value===!0?l.containerHeight.value:n.screen.height;return e.styleFn(m,y)}return{minHeight:l.isContainer.value===!0?l.containerHeight.value-m+"px":n.screen.height===0?m!==0?`calc(100vh - ${m}px)`:"100vh":n.screen.height-m+"px"}}),g=C(()=>`q-page${e.padding===!0?" q-layout-padding":""}`);return()=>q("main",{class:g.value,style:a.value},ne(t.default))}});function xe(e){return ut()?(rt(e),!0):!1}const ce=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const Pt=e=>e!=null,Nt=Object.prototype.toString,It=e=>Nt.call(e)==="[object Object]",De=()=>{};function Dt(e,t){function n(...l){return new Promise((f,a)=>{Promise.resolve(e(()=>t.apply(this,l),{fn:t,thisArg:this,args:l})).then(f).catch(a)})}return n}const je=e=>e();function jt(e=je){const t=$(!0);function n(){t.value=!1}function l(){t.value=!0}const f=(...a)=>{t.value&&e(...a)};return{isActive:ke(t),pause:n,resume:l,eventFilter:f}}function zt(e){let t;function n(){return t||(t=e()),t}return n.reset=async()=>{const l=t;t=void 0,l&&await l},n}function ze(e){return J()}function we(e){return Array.isArray(e)?e:[e]}function Lt(...e){if(e.length!==1)return lt(...e);const t=e[0];return typeof t=="function"?ke(at(()=>({get:t,set:De}))):$(t)}function Kt(e,t,n={}){const{eventFilter:l=je,...f}=n;return z(e,Dt(l,t),f)}function Ht(e,t,n={}){const{eventFilter:l,...f}=n,{eventFilter:a,pause:g,resume:m,isActive:y}=jt(l);return{stop:Kt(e,t,{...f,eventFilter:a}),pause:g,resume:m,isActive:y}}function Ut(e,t){ze()&&ae(e,t)}function Zt(e,t=!0,n){ze()?ee(e,n):t?e():Q(e)}function Wt(e,t,n={}){const{immediate:l=!0}=n,f=$(!1);let a=null;function g(){a&&(clearTimeout(a),a=null)}function m(){f.value=!1,g()}function y(...h){g(),f.value=!0,a=setTimeout(()=>{f.value=!1,a=null,e(...h)},Y(t))}return l&&(f.value=!0,ce&&y()),xe(m),{isPending:ke(f),start:y,stop:m}}const le=ce?window:void 0,Qt=ce?window.document:void 0,Le=ce?window.navigator:void 0;function Ke(e){var t;const n=Y(e);return(t=n==null?void 0:n.$el)!=null?t:n}function de(...e){let t,n,l,f;if(typeof e[0]=="string"||Array.isArray(e[0])?([n,l,f]=e,t=le):[t,n,l,f]=e,!t)return De;n=we(n),l=we(l);const a=[],g=()=>{a.forEach(v=>v()),a.length=0},m=(v,d,A,S)=>(v.addEventListener(d,A,S),()=>v.removeEventListener(d,A,S)),y=z(()=>[Ke(t),Y(f)],([v,d])=>{if(g(),!v)return;const A=It(d)?{...d}:d;a.push(...n.flatMap(S=>l.map(I=>m(v,S,I,A))))},{immediate:!0,flush:"post"}),h=()=>{y(),g()};return xe(h),h}function Jt(){const e=$(!1),t=J();return t&&ee(()=>{e.value=!0},t),e}function Ce(e){const t=Jt();return C(()=>(t.value,!!e()))}function Yt(e,t,n={}){const{window:l=le,...f}=n;let a;const g=Ce(()=>l&&"MutationObserver"in l),m=()=>{a&&(a.disconnect(),a=void 0)},y=C(()=>{const A=Y(e),S=we(A).map(Ke).filter(Pt);return new Set(S)}),h=z(()=>y.value,A=>{m(),g.value&&A.size&&(a=new MutationObserver(t),A.forEach(S=>a.observe(S,f)))},{immediate:!0,flush:"post"}),v=()=>a==null?void 0:a.takeRecords(),d=()=>{h(),m()};return xe(d),{isSupported:g,stop:d,takeRecords:v}}function Be(e,t={}){const{controls:n=!1,navigator:l=Le}=t,f=Ce(()=>l&&"permissions"in l),a=pe(),g=typeof e=="string"?{name:e}:e,m=pe(),y=()=>{var v,d;m.value=(d=(v=a.value)==null?void 0:v.state)!=null?d:"prompt"};de(a,"change",y,{passive:!0});const h=zt(async()=>{if(f.value){if(!a.value)try{a.value=await l.permissions.query(g)}catch{a.value=void 0}finally{y()}if(n)return ot(a.value)}});return h(),n?{state:m,isSupported:f,query:h}:m}function sn(e={}){const{navigator:t=Le,read:n=!1,source:l,copiedDuring:f=1500,legacy:a=!1}=e,g=Ce(()=>t&&"clipboard"in t),m=Be("clipboard-read"),y=Be("clipboard-write"),h=C(()=>g.value||a),v=$(""),d=$(!1),A=Wt(()=>d.value=!1,f,{immediate:!1});function S(){g.value&&O(m.value)?t.clipboard.readText().then(b=>{v.value=b}):v.value=V()}h.value&&n&&de(["copy","cut"],S,{passive:!0});async function I(b=Y(l)){h.value&&b!=null&&(g.value&&O(y.value)?await t.clipboard.writeText(b):E(b),v.value=b,d.value=!0,A.start())}function E(b){const B=document.createElement("textarea");B.value=b??"",B.style.position="absolute",B.style.opacity="0",document.body.appendChild(B),B.select(),document.execCommand("copy"),B.remove()}function V(){var b,B,L;return(L=(B=(b=document==null?void 0:document.getSelection)==null?void 0:b.call(document))==null?void 0:B.toString())!=null?L:""}function O(b){return b==="granted"||b==="prompt"}return{isSupported:h,text:v,copied:d,copy:I}}const ie=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},se="__vueuse_ssr_handlers__",Gt=Xt();function Xt(){return se in ie||(ie[se]=ie[se]||{}),ie[se]}function en(e,t){return Gt[e]||t}function tn(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}const nn={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},Te="vueuse-storage";function ln(e,t,n,l={}){var f;const{flush:a="pre",deep:g=!0,listenToStorageChanges:m=!0,writeDefaults:y=!0,mergeDefaults:h=!1,shallow:v,window:d=le,eventFilter:A,onError:S=r=>{console.error(r)},initOnMounted:I}=l,E=(v?pe:$)(typeof t=="function"?t():t),V=C(()=>Y(e));if(!n)try{n=en("getDefaultStorage",()=>{var r;return(r=le)==null?void 0:r.localStorage})()}catch(r){S(r)}if(!n)return E;const O=Y(t),b=tn(O),B=(f=l.serializer)!=null?f:nn[b],{pause:L,resume:H}=Ht(E,()=>R(E.value),{flush:a,deep:g,eventFilter:A});z(V,()=>o(),{flush:a}),d&&m&&Zt(()=>{n instanceof Storage?de(d,"storage",o,{passive:!0}):de(d,Te,s),I&&o()}),I||o();function _(r,u){if(d){const p={key:V.value,oldValue:r,newValue:u,storageArea:n};d.dispatchEvent(n instanceof Storage?new StorageEvent("storage",p):new CustomEvent(Te,{detail:p}))}}function R(r){try{const u=n.getItem(V.value);if(r==null)_(u,null),n.removeItem(V.value);else{const p=B.write(r);u!==p&&(n.setItem(V.value,p),_(u,p))}}catch(u){S(u)}}function D(r){const u=r?r.newValue:n.getItem(V.value);if(u==null)return y&&O!=null&&n.setItem(V.value,B.write(O)),O;if(!r&&h){const p=B.read(u);return typeof h=="function"?h(p,O):b==="object"&&!Array.isArray(p)?{...O,...p}:p}else return typeof u!="string"?u:B.read(u)}function o(r){if(!(r&&r.storageArea!==n)){if(r&&r.key==null){E.value=O;return}if(!(r&&r.key!==V.value)){L();try{(r==null?void 0:r.newValue)!==B.write(E.value)&&(E.value=D(r))}catch(u){S(u)}finally{r?Q(H):H()}}}}function s(r){o(r.detail)}return E}function fn(e,t,n={}){const{window:l=le}=n;return ln(e,t,l==null?void 0:l.localStorage,n)}function dn(e=null,t={}){var n,l,f;const{document:a=Qt,restoreOnUnmount:g=d=>d}=t,m=(n=a==null?void 0:a.title)!=null?n:"",y=Lt((l=e??(a==null?void 0:a.title))!=null?l:null),h=e&&typeof e=="function";function v(d){if(!("titleTemplate"in t))return d;const A=t.titleTemplate||"%s";return typeof A=="function"?A(d):Y(A).replace(/%s/g,d)}return z(y,(d,A)=>{d!==A&&a&&(a.title=v(typeof d=="string"?d:""))},{immediate:!0}),t.observe&&!t.titleTemplate&&a&&!h&&Yt((f=a.head)==null?void 0:f.querySelector("title"),()=>{a&&a.title!==y.value&&(y.value=v(a.title))},{childList:!0}),Ut(()=>{if(g){const d=g(m,y.value||"");d!=null&&a&&(a.title=d)}}),y}export{on as _,dn as a,fn as b,rn as c,sn as u};
