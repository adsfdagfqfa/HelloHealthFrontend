const e=(s,n,t)=>{t=Math.max(Math.min(Number(t),1),0);const o=parseInt(s.substring(1,3),16),a=parseInt(s.substring(3,5),16),c=parseInt(s.substring(5,7),16),u=parseInt(n.substring(1,3),16),i=parseInt(n.substring(3,5),16),p=parseInt(n.substring(5,7),16),m=Math.round(o*(1-t)+u*t),b=Math.round(a*(1-t)+i*t),f=Math.round(c*(1-t)+p*t),l=("0"+(m||0).toString(16)).slice(-2),y=("0"+(b||0).toString(16)).slice(-2),g=("0"+(f||0).toString(16)).slice(-2);return"#"+l+y+g},r=document.documentElement;function d(s){if(!s)return;r.style.setProperty("--el-color-primary",s);for(let t=1;t<10;t+=1)r.style.setProperty(`--el-color-primary-light-${t}`,e(s,"#ffffff",t*.1));const n=e(s,"#000000",.2);r.style.setProperty("--el-color-primary-dark-2",n)}export{d as c};
