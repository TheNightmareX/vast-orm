(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{385:function(t,s,a){"use strict";a.r(s);var e=a(49),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"更新实体"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更新实体"}},[t._v("#")]),t._v(" 更新实体")]),t._v(" "),a("p",[a("code",[t._v("BerryOrm")]),t._v(" 实例会在内部维护一个存储，通过类型和主键来保存一切涉及到的实体的引用。因此，对于任何位置的实体，只要类型和主键相同，它们便都严格相等（"),a("code",[t._v("===")]),t._v("），换句话说，它们其实都是同一个对象。")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br")]),a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[t._v("user1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("department "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Department")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nuser1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("department"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nuser2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("department "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Department")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nuser2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("department"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nuser1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("department "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" user2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("department"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])])]),a("h2",{attrs:{id:"更新数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更新数据"}},[t._v("#")]),t._v(" 更新数据")]),t._v(" "),a("p",[t._v("因此，对于数据字段，只需要直接对其进行赋值，更改便会作用到任何位置。")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[t._v("user1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("department"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"New Name"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nuser2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("department"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"New Name"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])])]),a("h2",{attrs:{id:"更新关系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更新关系"}},[t._v("#")]),t._v(" 更新关系")]),t._v(" "),a("h3",{attrs:{id:"通过对单关系字段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过对单关系字段"}},[t._v("#")]),t._v(" 通过对单关系字段")]),t._v(" "),a("p",[t._v("Berry ORM 在实体的"),a("strong",[t._v("对单关系字段")]),t._v("上定义了访问器，因此你同样可以通过直接赋值来更新双向的关系。")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[t._v("user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("profile "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" newProfile"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("Berry ORM 会先拆除旧的关系，然后再建立新的关系：")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[t._v("oldProfile"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("owner "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\nnewProfile"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("owner "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])])]),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("警告")]),t._v(" "),a("p",[t._v("在拆除旧的关系到建立新的关系期间，"),a("code",[t._v("user.profile")]),t._v("的值可能会短暂地被赋值为"),a("code",[t._v("undefined")]),t._v("。")])]),t._v(" "),a("p",[t._v("你也可以将其赋值为 "),a("code",[t._v("undefined")]),t._v(" 来手动拆除关系。")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[t._v("user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("profile "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"通过对多关系字段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过对多关系字段"}},[t._v("#")]),t._v(" 通过对多关系字段")]),t._v(" "),a("p",[a("strong",[t._v("对多关系字段")]),t._v("的值都是 "),a("code",[t._v("Collection")]),t._v("。"),a("code",[t._v("Collection")]),t._v("是一种特殊的"),a("code",[t._v("Set")]),t._v("，可以通过调用"),a("code",[t._v("Collection")]),t._v("的方法来便捷地更新关系。")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("div",{staticClass:"highlight-lines"},[a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[t._v("department"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("members"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nuser"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("department "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" department"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])])]),a("div",{staticClass:"language-ts extra-class"},[a("div",{staticClass:"highlight-lines"},[a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[t._v("department"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("members"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("delete")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nuser"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("department "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])])]),a("div",{staticClass:"language-ts extra-class"},[a("div",{staticClass:"highlight-lines"},[a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[t._v("department"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("members"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("clear")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ndepartment"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("members"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("size "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\nuser"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("department "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);