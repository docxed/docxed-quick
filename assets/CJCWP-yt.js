import{u as C,a as i,_ as b,c as g,b as k}from"./DlV5zr-Z.js";import{C as u}from"./iCYYr22m.js";import{_ as q}from"./ex7ZzKlQ.js";import{_ as U}from"./BbbwEIFQ.js";import{d as w,r as E,D as B,J as S,A as _,t as $,x as d,z as n,K as r,L as c}from"./D28ZhH1v.js";const I={class:"q-gutter-xs"},T={class:"text-center q-gutter-xs"},A={class:"q-mt-md"},P=w({__name:"index",setup(J){C("Encrypt");const a=i("encrypt-key",""),l=i("encrypt-text",""),s=i("encrypt-iv",""),o=E();function v(){a.value="",l.value=""}function f(){try{o.value=u.AES.encrypt(l.value,u.enc.Utf8.parse(a.value),{iv:u.enc.Utf8.parse(s.value),mode:u.mode.CBC,padding:u.pad.Pkcs7}).toString()}catch{o.value="Invalid key or IV"}}return B(()=>{a.value&&l.value&&s.value?f():o.value=""}),(x,e)=>{const p=k,m=q,y=U,V=b;return $(),S(V,{padding:""},{default:_(()=>[e[7]||(e[7]=d("p",{class:"text-h5"},"Encrypt",-1)),d("section",I,[n(p,{modelValue:r(l),"onUpdate:modelValue":e[0]||(e[0]=t=>c(l)?l.value=t:null),type:"textarea",label:"Text",filled:"",clearable:"",autogrow:""},null,8,["modelValue"]),n(p,{modelValue:r(a),"onUpdate:modelValue":e[1]||(e[1]=t=>c(a)?a.value=t:null),label:"Key",filled:"",clearable:""},null,8,["modelValue"]),n(p,{modelValue:r(s),"onUpdate:modelValue":e[2]||(e[2]=t=>c(s)?s.value=t:null),label:"IV",filled:"",clearable:""},null,8,["modelValue"]),d("section",T,[n(m,{color:"warning",icon:"clear",label:"Clear text",onClick:e[3]||(e[3]=t=>l.value="")}),n(m,{color:"negative",icon:"clear",label:"Clear all",onClick:e[4]||(e[4]=t=>v())})])]),d("section",A,[n(p,{modelValue:r(o),"onUpdate:modelValue":e[6]||(e[6]=t=>c(o)?o.value=t:null),type:"textarea",label:"Encrypted text",outlined:"",autogrow:"",readonly:""},{append:_(()=>[n(y,{name:"content_copy",class:"cursor-pointer",onClick:e[5]||(e[5]=t=>r(g)(r(o)))})]),_:1},8,["modelValue"])])]),_:1})}}});export{P as default};
