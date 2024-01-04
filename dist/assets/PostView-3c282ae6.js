import{T as Y,W as Z}from"./TipTapEditable-88da7620.js";import{U as z}from"./UserInfoCard-c27ee96e.js";import{g as d}from"./global-65bc9685.js";import{_ as B,f as S,r as g,o as s,c as m,b as f,s as k,w as I,h as E,E as a,C as W,i as F,a as t,t as w,k as p,g as v,p as O,d as M,F as H,l as L,j as oo,D as eo,q as to,e as no,G as so,H as lo,n as ro}from"./index-96eb2e51.js";import{L as G,C as io}from"./CoinButton-41ecdd4d.js";import{T as ao}from"./TipTapEditorReadonly-cb260bdb.js";import"./index-831f4d1c.js";const co={class:"replyBar"},uo={__name:"ReplyBar",emits:["replySubmit"],setup(o,{emit:l}){const r=S(""),n=()=>{l("replySubmit",r,void 0,_)},_=()=>{r.value=""};return(c,u)=>{const y=g("el-avatar"),C=g("el-input"),$=g("el-button");return s(),m("div",co,[f(y,{class:"avatar",src:k(d).userInfo.avatar_url,size:32},null,8,["src"]),f(C,{class:"input",modelValue:r.value,"onUpdate:modelValue":u[0]||(u[0]=x=>r.value=x),type:"textarea",rows:1},null,8,["modelValue"]),f($,{class:"btn",onClick:n,type:"primary"},{default:I(()=>[E("回复")]),_:1})])}}},J=B(uo,[["__scopeId","data-v-924d0716"]]);const fo={props:["comment_id"],methods:{report(){if(!d.login){a.error("请先登录再参与讨论。");return}W.prompt("请说明您的举报理由","举报",{confirmButtonText:"确定",cancelButtonText:"取消",inputPattern:/^.+$/,inputErrorMessage:"举报原因不能为空"}).then(({value:o})=>{F.post("/api/Forum/Report",{user_id:d.userInfo.user_id,comment_id:this.comment_id,reason:o}).then(l=>{a.success("举报信息提交成功！")}).catch(l=>{l.network||l.defaultHandler("举报信息提交失败")})}).catch(()=>{})}}},mo={class:"wrapper"},_o={style:{"text-align":"left","margin-right":"8px"}};function po(o,l,r,n,_,c){const u=g("el-tooltip");return s(),m("span",mo,[f(u,{class:"box-item",placement:"top",content:"举报"},{default:I(()=>[t("span",_o,[t("i",{class:"fi fi-rr-shield-exclamation",onClick:l[0]||(l[0]=(...y)=>c.report&&c.report(...y))})])]),_:1})])}const K=B(fo,[["render",po],["__scopeId","data-v-6d5078b5"]]);const ho={props:["comment_id","isFloor","isFirstFloor"],emits:["deleted"],methods:{deleteThis(){if(!d.login){a.error("请先登录再参与讨论。");return}W.confirm((()=>this.$props.isFirstFloor?"删除1楼将删除整个帖子，确认继续？":this.$props.isFloor?"删除这层将同时删除其下的所有回复，确认继续？":"是否删除本回复？")(),"删除",{confirmButtonText:"确定",cancelButtonText:"取消"}).then(()=>{F.post("/api/Forum/Delete",{comment_id:this.comment_id}).then(o=>{a.success("删除操作成功"),this.$emit("deleted")}).catch(o=>{o.network||o.defaultHandler("删除操作失败")})}).catch(()=>{})}}},Io={class:"wrapper"},vo={style:{"text-align":"left","margin-right":"8px"}};function yo(o,l,r,n,_,c){const u=g("el-tooltip");return s(),m("span",Io,[f(u,{class:"box-item",placement:"top",content:"删除"},{default:I(()=>[t("span",vo,[t("i",{class:"fi fi-rr-trash",onClick:l[0]||(l[0]=(...y)=>c.deleteThis&&c.deleteThis(...y))})])]),_:1})])}const Q=B(ho,[["render",yo],["__scopeId","data-v-55c3936e"]]);const ko=o=>(O("data-v-0ab380c9"),o=o(),M(),o),go={key:0,class:"commentWrapper"},bo={class:"content"},wo={key:0},So={class:"reward_info"},Co=ko(()=>t("i",{class:"fi fi-rr-menu-dots centerIcon replyButton"},null,-1)),$o={style:{"text-align":"center"}},xo={key:0,class:"input"},Fo={__name:"FloorComment",props:{commentInfo:Object,floor_id:Number,postInfo:Object},emits:["replyClicked","replySent"],setup(o,{expose:l,emit:r}){const n=o,_=S(!1),c=S(!1);l({showComment:_,prop:n});const u=()=>{if(!d.login){a.error("请先登录再参与讨论。");return}if(_.value){_.value=!1;return}r("replyClicked"),_.value=!0},y=($,x,b)=>{r("replySent",$,n.commentInfo.author,b)},C=()=>{c.value=!0};return($,x)=>{const b=g("el-popover");return c.value?p("",!0):(s(),m("div",go,[f(z,{"user-info":o.commentInfo.author},null,8,["user-info"]),t("div",bo,[t("p",null,[o.commentInfo.comment_user_id!==-1?(s(),m("span",wo," 回复 "+w(o.commentInfo.comment_user_name)+" : ",1)):p("",!0),t("span",null,w(o.commentInfo.content),1)]),t("div",So,[t("div",null,w(o.commentInfo.post_time),1),f(G,{comment_id:o.commentInfo.comment_id,"like-info":o.commentInfo.like},null,8,["comment_id","like-info"]),t("div",{class:"replyButton",onClick:u}," 回复 "),f(b,{placement:"top",width:100,trigger:"click"},{reference:I(()=>[Co]),default:I(()=>[t("div",$o,[f(K,{comment_id:o.commentInfo.comment_id},null,8,["comment_id"]),k(d).userInfo.user_id===o.postInfo.floors[0].author.user_id||k(d).userInfo.user_id===o.commentInfo.author.user_id?(s(),v(Q,{key:0,comment_id:o.commentInfo.comment_id,onDeleted:C},null,8,["comment_id"])):p("",!0)])]),_:1})])]),_.value?(s(),m("div",xo,[f(J,{onReplySubmit:y})])):p("",!0)]))}}},A=B(Fo,[["__scopeId","data-v-0ab380c9"]]);const To={props:["post_id","starInfo"],data:()=>({is_stared:!1,star_num:0}),methods:{star(){if(!d.login){a.error("请先登录再参与讨论。");return}this.changeStar()},changeStar(){F.post("/api/Forum/Star",{operate:1,post_id:parseInt(this.post_id)},{doNotShowLoadingScreen:!0}).then(o=>{this.is_stared=o.json.status,this.star_num=o.json.post_star_num;let l;this.is_stared===!0?l="收藏帖子成功！":l="取消收藏成功！",a({showClose:!0,message:l,type:"success"})}).catch(o=>{o.network||o.defaultHandler("操作失败")})}},created(){console.log(this.post_id),console.log(this.starInfo),this.is_stared=this.starInfo.status,this.star_num=this.starInfo.num}},Bo={key:0,class:"fi fi-rr-star centerIcon"},Ro={key:1,class:"fi fi-sr-star centerIcon"};function Vo(o,l,r,n,_,c){const u=g("el-tooltip");return s(),m("div",{class:"wrapper",onClick:l[0]||(l[0]=(...y)=>c.star&&c.star(...y))},[f(u,{class:"box-item",placement:"top",content:"收藏"},{default:I(()=>[o.is_stared?(s(),m("i",Ro)):(s(),m("i",Bo))]),_:1}),t("span",null,w(o.star_num),1)])}const Do=B(To,[["render",Vo],["__scopeId","data-v-deac3165"]]);const Uo={props:["comment_id","comment_user_name"],emits:["solutionSet"],methods:{setSolution(){if(!d.login){a.error("请先登录再参与讨论。");return}W.confirm(`确定要设置 ${this.comment_user_name} 的回答为最佳答案？`,"设置最佳答案",{confirmButtonText:"确定",cancelButtonText:"取消"}).then(()=>{F.post("/api/Forum/SetSolution",{user_id:d.userInfo.user_id,comment_id:this.comment_id}).then(o=>{a.success("设置最佳答案成功！"),this.$emit("solutionSet")}).catch(o=>{o.network||o.defaultHandler("设置最佳答案失败")})}).catch(()=>{})}}},X=o=>(O("data-v-269b3a90"),o=o(),M(),o),jo=X(()=>t("i",{class:"fi fi-sr-badge centerIcon"},null,-1)),Ho=X(()=>t("span",null," 设置为最佳答案 ",-1)),No=[jo,Ho];function Po(o,l,r,n,_,c){return s(),m("div",{class:"wrapper",onClick:l[0]||(l[0]=(...u)=>c.setSolution&&c.setSolution(...u))},No)}const Lo=B(Uo,[["render",Po],["__scopeId","data-v-269b3a90"]]);const R=o=>(O("data-v-7e2d609b"),o=o(),M(),o),Eo=["floor"],Wo={class:"userInfoWrapper"},Oo={class:"header"},Mo={key:0},Ao=R(()=>t("i",{class:"fi fi-rr-minus addIcon"},null,-1)),qo=R(()=>t("span",null,"已关注",-1)),zo=R(()=>t("i",{class:"fi fi-rr-plus addIcon"},null,-1)),Go=R(()=>t("span",null,"关注",-1)),Jo={class:"info"},Ko=R(()=>t("p",null,"粉丝",-1)),Qo=R(()=>t("p",null,"关注",-1)),Xo={class:"contentWrapper"},Yo={class:"floorNumberIndicator"},Zo={key:0,class:"title"},oe=R(()=>t("div",{style:{display:"flex","align-items":"center"}},[t("i",{class:"fi fi-sr-badge centerIcon"}),t("span",null,"最佳答案")],-1)),ee={class:"content"},te={class:"contentStatus"},ne={class:"time"},se={class:"rewards"},le=R(()=>t("i",{class:"fi fi-rr-menu-dots centerIcon replyButton"},null,-1)),re={style:{"text-align":"center"}},ie={key:4},ae={key:5,class:"commentsHolder"},ce={__name:"PostFloor",props:{floorInfo:Object,postInfo:Object,postId:Number},emits:["replyClicked","firstFloorReplyClicked","goToSolutionClicked","solutionSet","userFollowStateToggled"],setup(o,{expose:l,emit:r}){const n=o,_=S(n.postInfo.solution===n.floorInfo.comment_id),c=S(),u=S(!1);l({closeAllReplyBar:()=>{if(u.value=!1,!!c.value)for(let[e,i]of Object.entries(c.value))i.showComment=!1}});const C=()=>{r("replyClicked")},$=()=>{if(!d.login){a.error("请先登录再参与讨论。");return}if(d.locked){a.error("抱歉，您的账号已经被封禁！");return}if(n.floorInfo.floor_number===1){r("firstFloorReplyClicked");return}if(u.value){u.value=!1;return}r("replyClicked"),u.value=!0},x=(e,i,T)=>{if(e.length<1){a.error("请输入更多内容。");return}F.post("/api/Forum/CommentFloor",{content:e.value,reply_floor_id:n.floorInfo.comment_id,reply_user_id:i?i.user_id:-1}).then(h=>{a.success("发送成功。"),b.value.push({content:e.value,comment_id:h.json.comment_id,like:{status:!1,num:0},author:d.userInfo,comment_user_id:i?i.user_id:-1,comment_user_name:i?i.user_name:"",post_time:h.json.post_time}),T(),r("replyClicked")}).catch(h=>{h.network||h.defaultHandler("发送失败")})},b=S([]),U=S(!1),N=()=>{U.value=!0,n.floorInfo.floor_number===1&&oo.push("/forum")},j=()=>{F.post("/api/UserInfo/followUser",{followUserID:n.floorInfo.author.user_id}).then(e=>{r("userFollowStateToggled",!0,n.floorInfo.author.user_id,!0),a.success("已关注"+n.floorInfo.author.user_name)}).catch(e=>{if(!e.network)switch(e.errorCode){case 118:a.error("已关注该用户"),r("userFollowStateToggled",!0,n.floorInfo.author.user_id,!1);break;default:e.defaultHandler("关注用户失败")}})},P=()=>{F.post("/api/UserInfo/unfollowUser",{followUserID:n.floorInfo.author.user_id}).then(e=>{r("userFollowStateToggled",!1,n.floorInfo.author.user_id,!0),a.success("已关注取消关注"+n.floorInfo.author.user_name)}).catch(e=>{if(!e.network)switch(e.errorCode){case 118:a.error("已不再关注该用户"),r("userFollowStateToggled",!1,n.floorInfo.author.user_id,!1);break;default:e.defaultHandler("取消关注用户失败")}})};return(e,i)=>{const T=g("el-button"),h=g("el-tag"),V=g("el-popover");return U.value?p("",!0):(s(),m("div",{key:0,class:"floorWrapper",floor:o.floorInfo.floor_number},[t("div",Wo,[t("div",Oo,[f(z,{"user-info":o.floorInfo.author},null,8,["user-info"]),k(d).login&&k(d).userInfo.user_id!==o.floorInfo.author.user_id?(s(),m("div",Mo,[o.floorInfo.author.followed?(s(),v(T,{key:0,onClick:P},{default:I(()=>[Ao,qo]),_:1})):(s(),v(T,{key:1,type:"primary",onClick:j},{default:I(()=>[zo,Go]),_:1}))])):p("",!0)]),t("div",Jo,[t("div",null,[Ko,t("p",null,w(o.floorInfo.author.follower),1)]),t("div",null,[Qo,t("p",null,w(o.floorInfo.author.follows),1)])])]),t("div",Xo,[t("div",Yo,"#"+w(o.floorInfo.floor_number),1),o.floorInfo.floor_number===1?(s(),m("div",Zo,w(o.postInfo.title),1)):p("",!0),o.floorInfo.floor_number===1&&o.postInfo.is_bounty&&o.postInfo.solution!==-1?(s(),v(h,{key:1,class:"bountyTag"},{default:I(()=>[t("span",null,"赏金"+w(o.postInfo.bounty_value)+"杏仁币，",1),t("span",{onClick:i[0]||(i[0]=D=>r("goToSolutionClicked")),class:"scrollToSolutionButton"},"点击查看最佳答案")]),_:1})):p("",!0),o.floorInfo.floor_number===1&&o.postInfo.is_bounty&&o.postInfo.solution===-1?(s(),v(h,{key:2,class:"bountyTag",type:"warning"},{default:I(()=>[E("正在进行悬赏！赏金"+w(o.postInfo.bounty_value)+"杏仁币。",1)]),_:1})):p("",!0),_.value?(s(),v(h,{key:3,class:"bountyTag"},{default:I(()=>[oe]),_:1})):p("",!0),t("div",ee,[f(ao,{"content-json-string":o.floorInfo.content},null,8,["content-json-string"])]),t("div",te,[t("div",ne,w(o.floorInfo.post_time),1),t("div",se,[f(V,{placement:"top",trigger:"click"},{reference:I(()=>[le]),default:I(()=>[t("div",re,[f(K,{comment_id:o.floorInfo.comment_id},null,8,["comment_id"]),(o.floorInfo.author.user_id===k(d).userInfo.user_id||o.postInfo.floors[0].author.user_id===k(d).userInfo.user_id)&&!_.value?(s(),v(Q,{key:0,comment_id:o.floorInfo.comment_id,"is-first-floor":o.floorInfo.floor_number===1,"is-floor":!0,onDeleted:N},null,8,["comment_id","is-first-floor"])):p("",!0)])]),_:1}),o.floorInfo.floor_number>1&&o.postInfo.is_bounty&&o.postInfo.solution===-1&&o.postInfo.floors[0].author.user_id===k(d).userInfo.user_id?(s(),v(Lo,{key:0,comment_id:o.floorInfo.comment_id,comment_user_name:o.floorInfo.author.user_name,onSolutionSet:i[1]||(i[1]=D=>{_.value=!0,r("solutionSet",o.floorInfo.comment_id)})},null,8,["comment_id","comment_user_name"])):p("",!0),f(G,{comment_id:o.floorInfo.comment_id,"like-info":o.floorInfo.reward.like},null,8,["comment_id","like-info"]),f(io,{comment_id:o.floorInfo.comment_id,"coin-info":o.floorInfo.reward.coin},null,8,["comment_id","coin-info"]),o.floorInfo.floor_number===1?(s(),v(Do,{key:1,post_id:o.postId,"star-info":o.postInfo.star},null,8,["post_id","star-info"])):p("",!0),t("div",{class:"replyButton",onClick:$}," 评论 ")])]),u.value&&o.floorInfo.floor_number!==1?(s(),m("div",ie,[f(J,{onReplySubmit:x})])):p("",!0),o.floorInfo.floor_number!==1?(s(),m("div",ae,[(s(!0),m(H,null,L(o.floorInfo.comments,D=>(s(),v(A,{ref_for:!0,ref_key:"comments",ref:c,"comment-info":D,floor_id:o.floorInfo.comment_id,onReplyClicked:C,onReplySent:x,"post-info":n.postInfo},null,8,["comment-info","floor_id","post-info"]))),256)),(s(!0),m(H,null,L(b.value,D=>(s(),v(A,{ref_for:!0,ref_key:"comments",ref:c,"comment-info":D,floor_id:o.floorInfo.comment_id,onReplyClicked:C,onReplySent:x,"post-info":n.postInfo},null,8,["comment-info","floor_id","post-info"]))),256))])):p("",!0)])],8,Eo))}}},q=B(ce,[["__scopeId","data-v-7e2d609b"]]);const ue={class:"viewWrapper"},de={class:"dialog-footer"},fe={__name:"PostView",setup(o){const l=eo();let r=parseInt(l.params.postId);to(l,(e,i)=>{r=parseInt(l.params.postId),typeof i.params.postId<"u"&&C()});const n=no({data:{}}),_=so(()=>{var e;return(e=n.data.floors)==null?void 0:e.slice(1)}),c=S(),u=S(!1),y=()=>{if(!d.login){a.error("请先登录再参与讨论。");return}if(d.locked){a.error("抱歉，您的账号已经被封禁！");return}u.value=!0},C=()=>{F.get("/api/Forum/PostInfo/"+r).then(e=>{n.data=e.json,lo(P)}).catch(e=>{if(!e.network)switch(e.errorCode){case 111:a.error("帖子还在审核");break;default:e.defaultHandler("帖子加载出错")}})};C();const $=(e,i,T)=>{for(let h of n.data.floors)h.author.user_id===i&&(h.author.followed=e,T&&(e?h.author.follower++:h.author.follower--))},x=()=>{for(let e of c.value)e.closeAllReplyBar()},b=S(),U=()=>{if(b.value.editor.state.doc.textContent.length<1){a.error("请输入更多内容。");return}F.post("/api/Forum/SendFloor",{content:JSON.stringify(b.value.editor.getJSON()),post_id:r}).then(e=>{a.success("发送成功，请等待审核通过。"),u.value=!1,b.value.editor.commands.clearContent()}).catch(e=>{if(!e.network)switch(e.errorCode){case 114:a.error("非认证用户不能回复悬赏贴");break;default:e.defaultHandler("发送失败")}})},N=e=>{n.data.solution=e,setTimeout(()=>{j()},100)},j=()=>{var e;(e=document.querySelector(".solutionFloor"))==null||e.scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"})},P=()=>{let e=new URLSearchParams(window.location.search).get("floor");if(!e)return;let i=document.querySelector(`[floor="${e}"]`);if(!i){a.error("指定的楼层不存在。");return}i.scrollIntoView({behavior:"smooth",block:"nearest",inline:"nearest"}),setTimeout(()=>{i.classList.add("kiraKira"),setTimeout(()=>{i.classList.add("bgTransition")},10),setTimeout(()=>{i.classList.remove("kiraKira")},20),setTimeout(()=>{i.classList.remove("bgTransition")},2e3)},400)};return(e,i)=>{const T=g("el-button"),h=g("el-dialog");return s(),m(H,null,[t("div",ue,[n.data.floors&&n.data.floors.length>0?(s(),v(q,{key:0,"floor-info":n.data.floors[0],"post-info":n.data,"post-id":k(r),onFirstFloorReplyClicked:y,onGoToSolutionClicked:j,onUserFollowStateToggled:$},null,8,["floor-info","post-info","post-id"])):p("",!0),(s(!0),m(H,null,L(_.value,(V,D)=>(s(),v(q,{"floor-info":V,"post-info":n.data,"post-id":k(r),class:ro({solutionFloor:n.data.solution===V.comment_id}),ref_for:!0,ref_key:"floors",ref:c,onReplyClicked:x,onSolutionSet:N,onUserFollowStateToggled:$},null,8,["floor-info","post-info","post-id","class"]))),256))]),f(h,{modelValue:u.value,"onUpdate:modelValue":i[0]||(i[0]=V=>u.value=V),class:"editorDialog","modal-class":"editorDialogModal",title:"编写回复",width:"70%"},{footer:I(()=>[t("span",de,[f(T,{type:"primary",onClick:U},{default:I(()=>[E(" 回复 ")]),_:1})])]),default:I(()=>[f(Y,{ref_key:"editor",ref:b},null,512)]),_:1},8,["modelValue"]),k(d).login&&(!n.data.is_bounty||k(d).userInfo.verified)?(s(),v(Z,{key:0,onClick:y})):p("",!0)],64)}}},ke=B(fe,[["__scopeId","data-v-27700b67"]]);export{ke as default};
