import{_,E as s,i as u,r as d,o,c as i,b as m,w as p,a as f,t as h,C as I}from"./index-96eb2e51.js";import{g as k}from"./global-65bc9685.js";const C={props:["comment_id","likeInfo"],data:()=>({is_liked:!1,like_num:0}),methods:{like(){if(!k.login){s.error("请先登录再参与讨论。");return}this.changeLike()},changeLike(){u.post("/api/Forum/Like",{operate:1,comment_id:this.comment_id},{doNotShowLoadingScreen:!0}).then(e=>{this.is_liked=e.json.status,this.like_num=e.json.comment_like_num;let t;this.is_liked===!0?t="点赞成功！":t="取消点赞成功！",s({showClose:!0,message:t,type:"success"})}).catch(e=>{e.defaultHandler("操作失败")})}},created(){this.is_liked=this.likeInfo.status,this.like_num=this.likeInfo.num}},y={key:0,class:"fi fi-rr-social-network centerIcon"},v={key:1,class:"fi fi-sr-thumbs-up centerIcon"};function B(e,t,a,n,g,c){const r=d("el-tooltip");return o(),i("div",{class:"wrapper",onClick:t[0]||(t[0]=(...l)=>c.like&&c.like(...l))},[m(r,{class:"box-item",placement:"top",content:"点赞"},{default:p(()=>[e.is_liked?(o(),i("i",v)):(o(),i("i",y))]),_:1}),f("span",null,h(e.like_num),1)])}const E=_(C,[["render",B],["__scopeId","data-v-e1e44e65"]]);const b={props:{comment_id:Number,coinInfo:Object},data:()=>({is_coined:!1,coin_num:0}),methods:{coinIn(){if(!k.login){s.error("请先登录再参与讨论。");return}this.changeCoin(1)},changeCoin(e){let t=0;e===1&&I.prompt("输入杏仁币枚数","投币",{confirmButtonText:"确定",cancelButtonText:"取消",inputPattern:/^[1-9]\d*$/,inputErrorMessage:"投币数为大于0的整数"}).then(({value:a})=>{t=a,u.post("/api/Forum/Coin",{operate:e,comment_id:this.comment_id,coin_value:t}).then(n=>{this.is_coined=n.json.status,this.coin_num=n.json.comment_coin_num,console.log(this.coin_num),s({message:"投币成功！",type:"success"})}).catch(n=>{if(n.network)return!1;switch(n.errorCode){case 116:s.error("币数不足，投币失败！");break;case 111:s.error("不能给自己投币！");break;default:n.defaultHandler("投币失败")}})}).catch(()=>{})}},created(){this.is_coined=this.coinInfo.status,this.coin_num=this.coinInfo.num}},w={key:0,class:"fi fi-rr-usd-circle centerIcon"},x={key:1,class:"fi fi-sr-usd-circle centerIcon"};function $(e,t,a,n,g,c){const r=d("el-tooltip");return o(),i("div",{class:"wrapper",onClick:t[0]||(t[0]=(...l)=>c.coinIn&&c.coinIn(...l))},[m(r,{class:"box-item",placement:"top",content:"投币"},{default:p(()=>[e.is_coined?(o(),i("i",x)):(o(),i("i",w))]),_:1}),f("span",null,h(e.coin_num),1)])}const N=_(b,[["render",$],["__scopeId","data-v-c6e8c558"]]);export{N as C,E as L};
