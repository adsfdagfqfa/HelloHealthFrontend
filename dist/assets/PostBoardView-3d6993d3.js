import{P as j}from"./PostCard-95793ffa.js";import{_ as D,i as V,E as i,r as n,o as a,c as m,a as r,b as t,w as l,g as u,k as f,F as c,l as I,h as g,p as M,d as $}from"./index-96eb2e51.js";import{T as z,W as J}from"./TipTapEditable-88da7620.js";import{g as b}from"./global-65bc9685.js";import"./CoinButton-41ecdd4d.js";import"./index-831f4d1c.js";const L="/static/10.png";const O={components:{TipTapEditable:z,WritePostButton:J,PostCard:j},data:()=>({type_sort:{type:"Time",number:-1},postsPerPage:9,currentPage:1,dialogVisible:!1,post_list:[],page_post_list:[],gdata:b,newPostInfo:{title:"",is_bounty:!1,bounty_value:0,content:"",tags:[]},tags:[]}),methods:{changePagePost(){let e=(this.currentPage-1)*this.postsPerPage,s=e+this.postsPerPage;this.page_post_list=this.post_list.slice(e,s)},currentChange(e){this.currentPage=e,this.changePagePost()},sortSwitcher(e){console.log(e.paneName),e.paneName!==this.type_sort.type&&(this.type_sort.type=e.paneName,this.currentPage=1,this.sortBy())},sortBy(){V.post("/api/Forum/SortBy",this.type_sort).then(e=>{this.post_list=e.json.post_list,this.tags=e.json.tags,this.changePagePost()}).catch(e=>{e.network||e.defaultHandler("加载帖子出错")})},openPostEditor(){if(!b.login){i.error("请先登录再参与讨论。");return}if(b.locked){i.error("抱歉，您的账号已经被封禁！");return}this.dialogVisible=!0},async submitNewPost(){if(this.$refs.editor.editor.state.doc.textContent.length<15){i.error("请输入更多内容。");return}if(this.newPostInfo.title.length<5){i.error("请输入更长的标题。");return}if(this.newPostInfo.tags.length<2){i.error("请选择更多标签。");return}if(this.newPostInfo.is_bounty&&(parseInt(this.newPostInfo.bounty_value)<=0||Math.floor(parseFloat(this.newPostInfo.bounty_value))!==parseInt(this.newPostInfo.bounty_value))){i.error("请输入正数整悬赏值。");return}this.newPostInfo.content=JSON.stringify(this.$refs.editor.editor.getJSON()),V.post("/api/Forum/SendPost",this.newPostInfo).then(e=>{i.success("发送成功，请等待审核通过。"),this.dialogVisible=!1,this.$refs.editor.editor.commands.clearContent(),this.newPostInfo={title:"",is_bounty:!1,bounty_value:0,content:"",tags:[]}}).catch(e=>{e.network||e.defaultHandler("发送失败")})}},created(){this.sortBy()}},v=e=>(M("data-v-aca4e837"),e=e(),$(),e),q={class:"PB_title"},A=v(()=>r("div",{class:"viewTitle tracking-in-expand"}," HH论坛 ",-1)),G=v(()=>r("img",{class:"fade-in-fwd",alt:"",src:L,style:{height:"100px"}},null,-1)),K={class:"post_field"},Q={style:{"margin-left":"30%","margin-bottom":"10%"}},R={class:"dialog-footer"};function X(e,s,Y,Z,x,d){const _=n("el-col"),h=n("el-row"),P=n("el-tab-pane"),k=n("el-tabs"),C=n("post-card"),B=n("el-pagination"),y=n("el-input"),p=n("el-form-item"),w=n("el-radio"),T=n("el-radio-group"),N=n("el-option"),S=n("el-select"),E=n("el-form"),U=n("TipTapEditable"),F=n("el-button"),H=n("el-dialog"),W=n("WritePostButton");return a(),m(c,null,[r("div",q,[r("div",null,[t(h,null,{default:l(()=>[t(_,{span:20},{default:l(()=>[A]),_:1}),t(_,{span:4},{default:l(()=>[G]),_:1})]),_:1})]),r("div",K,[t(k,{modelValue:e.type_sort.type,"onUpdate:modelValue":s[0]||(s[0]=o=>e.type_sort.type=o),class:"demo-tabs",onTabClick:d.sortSwitcher},{default:l(()=>[t(P,{label:"论坛最新",name:"Time"}),t(P,{label:"论坛最热",name:"Heat"})]),_:1},8,["modelValue","onTabClick"]),e.post_list?(a(),u(h,{key:0},{default:l(()=>[(a(!0),m(c,null,I(e.page_post_list,o=>(a(),u(_,{span:8,key:o},{default:l(()=>[t(C,{post_info:o,style:{"margin-left":"10%","margin-right":"10%","margin-bottom":"15%"}},null,8,["post_info"])]),_:2},1024))),128))]),_:1})):f("",!0)]),r("div",Q,[t(B,{background:"",onCurrentChange:d.currentChange,"page-size":e.postsPerPage,layout:"total, prev, pager, next, jumper",total:e.post_list.length,modelValue:e.currentPage,"onUpdate:modelValue":s[1]||(s[1]=o=>e.currentPage=o)},null,8,["onCurrentChange","page-size","total","modelValue"])])]),t(H,{modelValue:e.dialogVisible,"onUpdate:modelValue":s[6]||(s[6]=o=>e.dialogVisible=o),class:"editorDialog","modal-class":"editorDialogModal",title:"发布帖子",width:"70%",top:"0"},{footer:l(()=>[r("span",R,[t(F,{type:"primary",onClick:d.submitNewPost},{default:l(()=>[g(" 发布 ")]),_:1},8,["onClick"])])]),default:l(()=>[t(E,{"label-width":"50px","label-position":"left",model:e.newPostInfo},{default:l(()=>[t(p,{label:"标题"},{default:l(()=>[t(y,{modelValue:e.newPostInfo.title,"onUpdate:modelValue":s[2]||(s[2]=o=>e.newPostInfo.title=o)},null,8,["modelValue"])]),_:1}),t(p,{label:"悬赏"},{default:l(()=>[t(T,{modelValue:e.newPostInfo.is_bounty,"onUpdate:modelValue":s[3]||(s[3]=o=>e.newPostInfo.is_bounty=o)},{default:l(()=>[t(w,{label:!0},{default:l(()=>[g("是")]),_:1}),t(w,{label:!1},{default:l(()=>[g("否")]),_:1})]),_:1},8,["modelValue"]),e.newPostInfo.is_bounty?(a(),u(p,{key:0,label:"赏金",class:"bountyLabel"},{default:l(()=>[t(y,{modelValue:e.newPostInfo.bounty_value,"onUpdate:modelValue":s[4]||(s[4]=o=>e.newPostInfo.bounty_value=o),type:"number",min:"0",step:"1"},null,8,["modelValue"])]),_:1})):f("",!0)]),_:1}),t(p,{label:"标签"},{default:l(()=>[t(S,{class:"tagSelector",modelValue:e.newPostInfo.tags,"onUpdate:modelValue":s[5]||(s[5]=o=>e.newPostInfo.tags=o),multiple:"",placeholder:"选择2~4个标签",style:{width:"240px"},"allow-create":!0,filterable:!0,"multiple-limit":4},{default:l(()=>[(a(!0),m(c,null,I(e.tags,o=>(a(),u(N,{key:o,label:o,value:o},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model"]),t(U,{ref:"editor"},null,512)]),_:1},8,["modelValue"]),e.gdata.login?(a(),u(W,{key:0,onClick:d.openPostEditor},null,8,["onClick"])):f("",!0)],64)}const ae=D(O,[["render",X],["__scopeId","data-v-aca4e837"]]);export{ae as default};
