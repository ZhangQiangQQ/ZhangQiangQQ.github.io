(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{214:function(n,e,t){"use strict";t.r(e);var o=t(0),r=Object(o.a)({},(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("p",[n._v("闭包的作用:")]),n._v(" "),t("ul",[t("li",[n._v("1.封装变量")]),n._v(" "),t("li",[n._v("2.延续局部变量的寿命")]),n._v(" "),t("li",[n._v("3.闭包和面向对象设计:实现私有数据和方法的封装(本质还是1,封装变量)")]),n._v(" "),t("li",[n._v("闭包能使局部变量的生命期延长,这点与全局作用域的变量是一致的,不能算是内存泄漏!")]),n._v(" "),t("li",[n._v("闭包与内存泄漏有关的部分是:\n使用闭包容易造成循环引用,如果闭包的作用域中保存着一些DOM节点,这时候有可能造成内存泄漏(互相引用导致内存无法释放)")])]),n._v(" "),t("p",[n._v("举例：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("// 例1：\nvar increment = function () {\n    var count = 1;\n    return {\n        inc: function () {\n            return count++;\n        }\n    }\n}\nconsole.log(increment.count);   //undefined\nvar counter = increment();\nconsole.log(counter.inc()); //1\nconsole.log(counter.inc()); //2\nconsole.log(counter.inc()); //3\n\nvar counter2 = increment();\nconsole.log(counter2.inc()); //1\nconsole.log(counter == counter2);  //false,注:闭包每次返回的对象都不一样!\n\n\n// 例2\n\nvar getTypeChecker = function () {\n    var types = {};\n\n    for (var i = 0, type; type = ['String', 'Number', 'Array'][i++];) {\n        //使用闭包来封闭每次循环的变量\n        (function (type) {\n            types['is' + type] = function (obj) {\n                return Object.prototype.toString.call(obj) === '[object ' + type + ']';\n            }\n        })(type);\n    }\n    return types;\n}\n\nvar checker = getTypeChecker();\nconsole.log(checker.isArray([]));   // true\nconsole.log(checker.isString([]));   //false\nconsole.log(checker.isString('hello'));  //true\n")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);