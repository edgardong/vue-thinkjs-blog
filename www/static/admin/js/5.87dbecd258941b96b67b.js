webpackJsonp([5],{XBLz:function(t,e){},"sWj/":function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=o("Dd8w"),n=o.n(a),r=(o("+skl"),o("XBLz"),o("BTaQ")),s=o("NYxO"),i=o("gyMJ");o("7+uW").default.component("Button",r.Button);var u={components:{Row:r.Row,Col:r.Col,Menu:r.Menu,DropdownMenu:r.DropdownMenu,DropdownItem:r.DropdownItem,Breadcrumb:r.Breadcrumb,BreadcrumbItem:r.BreadcrumbItem,Card:r.Card,Dropdown:r.Dropdown,Icon:r.Icon,Submenu:r.Submenu,MenuItem:r.MenuItem,Button:r.Button,Avatar:r.Avatar},data:function(){return{userInfo:{},fold:this.$store.getters.getMenu.fold,menu:[{name:"控制台",path:"/home",icon:"home"},{name:"内容管理",path:"/content/list",icon:"document"},{name:"页面管理",path:"/page/list",icon:"ios-paper"},{name:"评论管理",path:"/comment/list",icon:"chatbubbles"},{name:"分类管理",path:"/category/list",icon:"shuffle"},{name:"标签管理",path:"/tag/list",icon:"pricetags"},{name:"系统设置",path:"/config",icon:"ios-gear"}]}},computed:n()({iconSize:function(){return this.fold?24:14},breadcrumb:function(){var t=this.route.path.split("/"),e={admin:"后台",home:"控制台",content:"内容",category:"分类",page:"页面",comment:"评论",tag:"标签",save:"编辑",list:"列表",config:"设置"},o=[];for(var a in t){var n=t[a];n&&o.push(e[n]?e[n]:"")}return o}},Object(s.c)({route:function(t){return t.route}})),mounted:function(){this.getUserInfo()},methods:{getUserInfo:function(){var t=this;i.h.getInfo(this.$store.state.admin.user.name).then(function(e){t.$store.commit("setUserInfo",e.data),t.userInfo=e.data})},toggleClick:function(){this.fold=!this.fold,this.$store.commit("setMenuFlod",this.fold)},select:function(t){this.$router.push(t)},loginOut:function(){this.$store.commit("clearToken"),this.$router.push("/login")},dropdownClick:function(t){"loginOut"===t&&this.loginOut(),"userInfo"===t&&this.$router.push("/user/info"),"changePassword"===t&&this.$router.push("/user/password")}}},c={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"layout",class:{"layout-hide-text":t.fold},attrs:{id:"admin"}},[o("Row",{staticClass:"admin",attrs:{type:"flex"}},[o("Col",{staticClass:"layout-menu-left",attrs:{span:t.fold?1:3}},[o("Menu",{attrs:{"active-name":"1",theme:"dark",width:"auto","active-name":t.route.path},on:{"on-select":t.select}},[o("div",{staticClass:"layout-logo-left"}),t._v(" "),t._l(t.menu,function(e,a){return[e.children?t._e():o("MenuItem",{attrs:{name:e.path}},[o("Icon",{attrs:{type:e.icon,size:t.iconSize}}),t._v(" "),o("span",{staticClass:"layout-text"},[t._v(t._s(e.name))])],1)]})],2)],1),t._v(" "),o("Col",{staticClass:"layout-rignt",attrs:{span:t.fold?23:21}},[o("div",{staticClass:"layout-header"},[o("Row",[o("Col",{staticClass:"layout-header-left",attrs:{span:"12"}},[o("Button",{attrs:{type:"text"},on:{click:t.toggleClick}},[o("Icon",{attrs:{type:"navicon",size:"32"}})],1)],1),t._v(" "),o("Col",{staticClass:"layout-header-right",attrs:{span:"12"}},[o("a",{staticClass:"home",attrs:{target:"_blank",href:"/"}},[o("Icon",{attrs:{type:"home"}})],1),t._v(" "),o("Dropdown",{attrs:{trigger:"click"},on:{"on-click":t.dropdownClick}},[o("a",{attrs:{href:"javascript:void(0)"}},[t._v("\n                                "+t._s(t.userInfo.username)+"\n                                "),o("Icon",{attrs:{type:"arrow-down-b"}})],1),t._v(" "),o("DropdownMenu",{attrs:{slot:"list"},slot:"list"},[o("DropdownItem",{attrs:{name:"userInfo"}},[t._v("个人资料")]),t._v(" "),o("DropdownItem",{attrs:{name:"changePassword"}},[t._v("修改密码")]),t._v(" "),o("DropdownItem",{attrs:{name:"loginOut"}},[t._v("退出后台")])],1)],1),t._v(" "),o("Avatar",{attrs:{src:t.userInfo.avator,size:"large"}})],1)],1)],1),t._v(" "),o("div",{staticClass:"layout-breadcrumb"},[o("Breadcrumb",[t.breadcrumb[0]?o("BreadcrumbItem",[t._v(t._s(t.breadcrumb[0]))]):t._e(),t._v(" "),t.breadcrumb[1]?o("BreadcrumbItem",[t._v(t._s(t.breadcrumb[1]))]):t._e(),t._v(" "),t.breadcrumb[2]?o("BreadcrumbItem",[t._v(t._s(t.breadcrumb[2]))]):t._e()],1)],1),t._v(" "),o("div",{staticClass:"layout-content"},[o("div",{staticClass:"layout-content-main"},[o("router-view")],1)])])],1)],1)},staticRenderFns:[]},l=o("VU/8")(u,c,!1,null,null,null);e.default=l.exports}});
//# sourceMappingURL=5.87dbecd258941b96b67b.js.map