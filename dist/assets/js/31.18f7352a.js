(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{315:function(s,t,a){"use strict";a.r(t);var e=a(14),r=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"frontmatter-title"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[s._v("#")]),s._v(" "+s._s(s.$frontmatter.title))]),s._v(" "),t("h2",{attrs:{id:"题目描述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#题目描述"}},[s._v("#")]),s._v(" 题目描述")]),s._v(" "),t("p",[s._v("假如我们有一个 Promise 对象，这个 Promise 对象会返回一个类型。在 TS 中，我们用 "),t("code",[s._v("Promise<T>")]),s._v(" 中的 T 来描述这个 Promise 返回的类型。请你实现一个类型，可以获取这个类型。")]),s._v(" "),t("p",[s._v("例如："),t("code",[s._v("Promise<ExampleType>")]),s._v("，请你返回 ExampleType 类型。")]),s._v(" "),t("div",{staticClass:"language-ts extra-class"},[t("pre",{pre:!0,attrs:{class:"language-ts"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ExampleType")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("Promise")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Result")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" MyAwaited"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("ExampleType"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// string")]),s._v("\n")])])]),t("blockquote",[t("p",[s._v("这个挑战来自于 "),t("a",{attrs:{href:"https://github.com/maciejsikora",target:"_blank",rel:"noopener noreferrer"}},[s._v("@maciejsikora"),t("OutboundLink")],1),s._v(" 的文章："),t("a",{attrs:{href:"https://dev.to/macsikora/advanced-typescript-exercises-question-1-45k4",target:"_blank",rel:"noopener noreferrer"}},[s._v("original article"),t("OutboundLink")],1)])]),s._v(" "),t("h2",{attrs:{id:"分析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分析"}},[s._v("#")]),s._v(" 分析")]),s._v(" "),t("p",[s._v("这个题目同 "),t("RouterLink",{attrs:{to:"/easy/14-第一个元素.html"}},[s._v("第一个元素")]),s._v(" 一样，都需要用到 "),t("code",[s._v("A extends infer xxx")]),s._v(" 的特性，只不过原本的 "),t("code",[s._v("infer")]),s._v(" 是匹配数组，而这里的 "),t("code",[s._v("infer")]),s._v("，是去匹配 "),t("code",[s._v("Promise")]),s._v(" 的返回值。")],1),s._v(" "),t("p",[s._v("了解这一点后，可以非常快速的写出如下代码：")]),s._v(" "),t("div",{staticClass:"language-ts extra-class"},[t("pre",{pre:!0,attrs:{class:"language-ts"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MyAwaited"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("T")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("T")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("Promise")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("infer")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("R")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("R")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("never")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Case1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" MyAwaited"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("Promise")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// string")]),s._v("\n")])])]),t("p",[s._v("但是实际的场景中，还会存在 "),t("code",[s._v("Promise")]),s._v(" 嵌套的场景:")]),s._v(" "),t("div",{staticClass:"language-ts extra-class"},[t("pre",{pre:!0,attrs:{class:"language-ts"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MyAwaited"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("T")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("T")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("Promise")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("infer")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("R")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("R")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("never")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Case2")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" MyAwaited"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("Promise")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("Promise")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>>")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Promise<string>")]),s._v("\n")])])]),t("p",[s._v("此时由于嵌套，并不能得到预期的最终的返回类型。")]),s._v(" "),t("p",[s._v("此时就需要递归上场了，简单改写，如下：")]),s._v(" "),t("div",{staticClass:"language-ts extra-class"},[t("pre",{pre:!0,attrs:{class:"language-ts"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MyAwaited"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("T")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("T")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("Promise")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("infer")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("R")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" MyAwaited"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("R")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("T")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Case2")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" MyAwaited"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("Promise")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("Promise")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>>")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// string")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Case3")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" MyAwaited"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("Promise")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("Promise")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("Promise")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>>")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// string")]),s._v("\n")])])]),t("p",[s._v("此时不管嵌套几层，都可以解出最终的类型。(由于牵扯到了递归，个人认为不太适合放在简单里)。")]),s._v(" "),t("h2",{attrs:{id:"题解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#题解"}},[s._v("#")]),s._v(" 题解")]),s._v(" "),t("p",[s._v("讲道理上述解法已经足够，但是在题目的 Case 中，存在如下场景：")]),s._v(" "),t("div",{staticClass:"language-ts extra-class"},[t("pre",{pre:!0,attrs:{class:"language-ts"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("T")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("then")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("onfulfilled")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("arg"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("number")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("any")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("any")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 期望 MyAwaited<T> = number")]),s._v("\n")])])]),t("p",[s._v("也就是还需要处理 类似 promise 的场景，根据题目 case，可以写出如下代码：")]),s._v(" "),t("div",{staticClass:"language-ts extra-class"},[t("pre",{pre:!0,attrs:{class:"language-ts"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MyAwaited"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("T")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("T")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("Promise")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("infer")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("R")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("then")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("onfullfilled")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("arg"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("infer")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("R")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("any")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("any")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" MyAwaited"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("R")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("T")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[s._v("利用 "),t("code",[s._v("|")]),s._v(" 覆盖 普通的 "),t("code",[s._v("Promise")]),s._v(" 和 "),t("code",[s._v("then")]),s._v(" 两种场景。")]),s._v(" "),t("p",[s._v("这里还有一点值得一提的是，当联合类型位于 "),t("code",[s._v("extends")]),s._v(" 右侧时，并没有分发特性，虽然判断会做多次，但是其多次判断的结果会以或的方式合并后交由 "),t("code",[s._v("extends")]),s._v(" 的逻辑处理，比如，"),t("code",[s._v("'a' extends 'a' | 'b' ? 1 : 2")]),s._v("，此时，可以理解为会进行 "),t("code",[s._v("'a' extends 'a'")]),s._v(" 以及 "),t("code",[s._v("'a' extends 'b'")]),s._v("两次判断，两者有一处为 true 即返回 1，否则返回 2。但是并不会返回 "),t("code",[s._v("1 | 2")]),s._v("。")]),s._v(" "),t("h2",{attrs:{id:"知识点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#知识点"}},[s._v("#")]),s._v(" 知识点")]),s._v(" "),t("ol",[t("li",[t("code",[s._v("A extends Promise<infer R>")]),s._v("，匹配推断类型")]),s._v(" "),t("li",[s._v("递归解决嵌套问题")]),s._v(" "),t("li",[s._v("联合类型位于 "),t("code",[s._v("extends")]),s._v(" 右侧时不分发")])]),s._v(" "),t("h2",{attrs:{id:"_2024-02-13-补充"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2024-02-13-补充"}},[s._v("#")]),s._v(" 2024-02-13 补充")]),s._v(" "),t("p",[s._v("由于用例中增加了这一错误用例：")]),s._v(" "),t("div",{staticClass:"language-ts extra-class"},[t("pre",{pre:!0,attrs:{class:"language-ts"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// @ts-expect-error")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("error")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" MyAwaited"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("number")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[s._v("这就需要对 入参的范型 进行类型限制，可以写出如下代码：")]),s._v(" "),t("div",{staticClass:"language-ts extra-class"},[t("pre",{pre:!0,attrs:{class:"language-ts"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MyAwaited"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("T")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("Promise")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("any")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("T")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("Promise")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("infer")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("R")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("then")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("onfullfilled")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("arg"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("infer")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("R")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("any")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("any")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("R")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Priomise"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("any")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" MyAwaited"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("R")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("R")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("T")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[s._v("此时由于 "),t("code",[s._v("type T = { then: (onfulfilled: (arg: number) => any) => any };")]),s._v(" 这一用例的存在，使得单纯的 "),t("code",[s._v("Promise<any>")]),s._v(" 依旧失效，此时可以提取出一个新的类型，"),t("code",[s._v("MyPromiseLike")]),s._v(" 来进行替换。")]),s._v(" "),t("p",[s._v("最终的代码如下：")]),s._v(" "),t("div",{staticClass:"language-ts extra-class"},[t("pre",{pre:!0,attrs:{class:"language-ts"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MyPromiseLike"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("T")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("Promise")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("T")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("then")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("onfullfilled")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("arg"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("T")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("any")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("any")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MyAwaited"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("T")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" MyPromiseLike"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("any")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("T")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MyPromiseLike"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("infer")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("R")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")])]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("R")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MyPromiseLike"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("any")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" MyAwaited"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("R")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("R")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("never")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[s._v("此时便可覆盖所有的用例。")])])}),[],!1,null,null,null);t.default=r.exports}}]);