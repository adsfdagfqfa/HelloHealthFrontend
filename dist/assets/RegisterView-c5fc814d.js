import{_ as B,e as I,f as h,r as p,o as S,g as R,w as o,b as s,n as v,a as d,h as V,t as g,i as k,j as U,E,p as H,d as T}from"./index-96eb2e51.js";import{c as N}from"./changeTheme-5bb595fb.js";const P=_=>(H("data-v-4bd45ca4"),_=_(),T(),_),$=P(()=>d("div",{class:"titleWrapper"},[d("div",{class:"registerTitle"},"注册")],-1)),M={class:"inputWithButton"},W={class:"errorText"},j={class:"textButtonHolder"},q={class:"registerButtonHolder"},z={__name:"RegisterView",setup(_){N("#93b27b");const a=I({username:"",user_phone:"",verification_code:"",password:""}),w=h(""),t=h(""),e=h(!1),C=()=>{t.value="",e.value=!1;let f=/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;if(a.username===""){t.value="请输入用户名！",e.value=!0;return}else if(a.user_phone===""){t.value="请输入手机号！",e.value=!0;return}else if(f.test(a.user_phone)){if(a.verification_code===""){t.value="请输入验证码！",e.value=!0;return}else if(w.value!==a.password){t.value="两次密码输入不一致！",e.value=!0;return}}else{t.value="请输入正确的手机号！",e.value=!0;return}k.post("/api/Register",a).then(l=>{e.value=!1,t.value="",alert("注册成功！"),U.push("/login")}).catch(l=>{if(!l.network)switch(l.errorCode){case 101:t.value="验证码错误！",e.value=!0;break;case 102:t.value="用户已存在！",e.value=!0;break;case 103:t.value="用户名重复，请重新设定用户名！",e.value=!0;break;default:l.defaultHandler()}})},c=()=>{e.value=!1},i=h(0),y=async()=>{t.value="",e.value=!1;const f={user_phone:a.user_phone};let l=/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;if(a.user_phone===""){t.value="请输入手机号！",e.value=!0;return}else if(!l.test(a.user_phone)){t.value="请输入正确的手机号！",e.value=!0;return}i.value=60;const n=setInterval(()=>{i.value-=1,i.value===0&&clearInterval(n)},1e3);k.post("/api/Register/SendVerificationCode",f).then(r=>{e.value=!1,t.value="",E.success("发送成功。")}).catch(r=>{if(!r.network)switch(r.errorCode){case 104:t.value="发送失败，请稍后重试",e.value=!0;break;default:r.defaultHandler()}})};return(f,l)=>{const n=p("el-input"),r=p("el-form-item"),m=p("el-button"),b=p("router-link"),x=p("el-form");return S(),R(x,{"label-position":"top","label-width":"60px",model:a,class:"registerForm"},{default:o(()=>[$,s(r,{label:"用户名",class:v({error:e.value})},{default:o(()=>[s(n,{modelValue:a.username,"onUpdate:modelValue":l[0]||(l[0]=u=>a.username=u),onClick:c},null,8,["modelValue"])]),_:1},8,["class"]),s(r,{label:"手机号",class:v({error:e.value})},{default:o(()=>[s(n,{modelValue:a.user_phone,"onUpdate:modelValue":l[1]||(l[1]=u=>a.user_phone=u),onClick:c},null,8,["modelValue"])]),_:1},8,["class"]),s(r,{label:"验证码",class:v({error:e.value})},{default:o(()=>[d("div",M,[s(n,{modelValue:a.verification_code,"onUpdate:modelValue":l[2]||(l[2]=u=>a.verification_code=u),onClick:c},null,8,["modelValue"]),s(m,{disabled:i.value>0,onClick:y},{default:o(()=>[V(g(i.value>0?`重新发送(${i.value})`:"发送验证码"),1)]),_:1},8,["disabled"])])]),_:1},8,["class"]),s(r,{label:"密码",class:v({error:e.value})},{default:o(()=>[s(n,{modelValue:a.password,"onUpdate:modelValue":l[3]||(l[3]=u=>a.password=u),type:"password",onClick:c,"show-password":""},null,8,["modelValue"])]),_:1},8,["class"]),s(r,{label:"确认密码",class:v({error:e.value})},{default:o(()=>[s(n,{modelValue:w.value,"onUpdate:modelValue":l[4]||(l[4]=u=>w.value=u),type:"password",onClick:c,"show-password":""},null,8,["modelValue"])]),_:1},8,["class"]),d("div",W,g(t.value),1),d("div",j,[s(b,{to:"/login"},{default:o(()=>[s(m,{type:"primary",link:""},{default:o(()=>[V("已有账号?点此登录")]),_:1})]),_:1}),s(b,{to:"/login/forgot"},{default:o(()=>[s(m,{type:"primary",link:""},{default:o(()=>[V("忘记密码?")]),_:1})]),_:1})]),d("div",q,[s(m,{type:"primary",onClick:C},{default:o(()=>[V("注册")]),_:1})])]),_:1},8,["model"])}}},A=B(z,[["__scopeId","data-v-4bd45ca4"]]);export{A as default};
