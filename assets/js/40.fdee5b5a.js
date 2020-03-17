(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{239:function(n,t,e){"use strict";e.r(t);var o=e(0),r=Object(o.a)({},(function(){var n=this.$createElement,t=this._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[t("h3",{attrs:{id:"vue-router简单版学习"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue-router简单版学习"}},[this._v("#")]),this._v(" vue-router简单版学习")]),this._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('import Home from "@/views/Home.vue";\nimport Vue from "vue";\n\nclass VueRouter {\n  [x: string]: any;\n  constructor(options: object) {\n    this.$options = options;\n    this.routeMap = {};\n    //挂在vue data上识别当前路由\n    this.app = new Vue({\n      data: {\n        current: "/"\n      }\n    });\n  }\n  static install: (Vue: any) => void;\n  init() {\n    this.bindEvent(); //监听路由变化\n    this.createRouteMap(); //构建路由键值对\n    this.initComponent(); //初始化router 的组件\n  }\n  bindEvent() {\n    window.addEventListener("load", this.onHashChange.bind(this));\n    window.addEventListener("hashchange", this.onHashChange.bind(this));\n  }\n  //  hash变化时\n  onHashChange() {\n    // 当前全局状态 current 就是目前hash对象的名称\n    this.app.current = window.location.hash.slice(1) || "/";\n  }\n  createRouteMap() {\n  // 构建键值对以便找到模版\n    this.$options.routes.forEach((ele: object) => {\n      this.routeMap[ele.path] = ele.component;\n    });\n  }\n  initComponent() {\n    // router-link,router-view\n    // <router-link to="">fff</router-link>\n    Vue.component("router-link", {\n      props: { to: String },\n      render(h) {\n      \t//\th就是createElement 来创建VNode\n        // h(tag, data, children)\n        return h("a", { attrs: { href: "#" + this.to } }, [\n          this.$slots.default\n        ]);\n      }\n    });\n    // <router-view></router-view>\n    Vue.component("router-view", {\n      render: h => {\n        const comp = this.routeMap[this.app.current];\n        return h(comp);\n      }\n    });\n  }\n}\nVueRouter.install = function(Vue) {\n  // 混入所有组件\n  Vue.mixin({\n    // 钩子函数\n    beforeCreate() {\n      // 仅在根组件执行一次\n      if (this.$options.router) {\n        Vue.prototype.$router = this.$options.router;\n        this.$options.router.init();\n      }\n    }\n  });\n};\n\nVue.use(VueRouter);\n\nexport default new VueRouter({\n  mode: "history",\n  base: process.env.BASE_URL,\n  routes: [\n    {\n      path: "/",\n      name: "Home",\n      component: Home\n    }\n  ]\n});\n')])])])])}),[],!1,null,null,null);t.default=r.exports}}]);