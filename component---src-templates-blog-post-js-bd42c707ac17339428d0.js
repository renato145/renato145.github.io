(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"A2+M":function(e,t,r){var n=r("X8hv");e.exports={MDXRenderer:n}},X8hv:function(e,t,r){function n(e,t,r){return(n=o()?Reflect.construct:function(e,t,r){var n=[null];n.push.apply(n,t);var o=new(Function.bind.apply(e,n));return r&&i(o,r.prototype),o}).apply(null,arguments)}function o(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e){return function(e){if(Array.isArray(e))return c(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r("jm62"),r("yt8O"),r("RW0V"),r("rGqo"),r("rE2o"),r("ioFf"),r("XfO3"),r("HEwt"),r("f3/d"),r("a1Th"),r("Btvt"),r("I5cv"),r("I5cv"),r("f3/d"),r("a1Th"),r("XfO3"),r("HEwt"),r("rE2o"),r("jm62"),r("ioFf"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V");var s=r("q1tI"),p=r("7ljp"),d=p.useMDXComponents,m=p.mdx,b=r("BfwJ").useMDXScope;e.exports=function(e){var t=e.scope,r=e.components,o=e.children,i=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,["scope","components","children"]),c=d(r),u=b(t),f=s.useMemo((function(){if(!o)return null;var e=l({React:s,mdx:m},u),t=Object.keys(e),r=t.map((function(t){return e[t]}));return n(Function,["_fn"].concat(a(t),[""+o])).apply(void 0,[{}].concat(a(r)))}),[o,t]);return s.createElement(f,l({components:c},i))}},cXBx:function(e,t,r){},xjDe:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"git":"renato145/renato145.github.io"}}}}')},yZlL:function(e,t,r){"use strict";r.r(t),r.d(t,"pageQuery",(function(){return p}));var n=r("q1tI"),o=r.n(n),i=r("A2+M"),a=r("7oih"),c=(r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),r("Wbzz"));var u=function(e){var t=e.previous,r=e.next,n=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,["previous","next"]);return o.a.createElement("div",n,o.a.createElement("div",null,t&&o.a.createElement(c.Link,{to:t.fields.slug,rel:"prev"},"← ",t.frontmatter.title)),o.a.createElement("div",null,r&&o.a.createElement(c.Link,{to:r.fields.slug,rel:"next"},r.frontmatter.title," →")))},l=r("xjDe"),f=Object(n.forwardRef)((function(e,t){var r=e.repo,i=Object(n.useState)("pending"),a=i[0],c=i[1];return Object(n.useEffect)((function(){var e=document.createElement("script");e.onload=function(){return c("success")},e.onerror=function(){return c("failed")},e.async=!0,e.src="https://utteranc.es/client.js",e.setAttribute("repo",r),e.setAttribute("issue-term","pathname"),e.setAttribute("label","blog"),e.setAttribute("theme","github-light"),e.setAttribute("crossorigin","anonymous");var n=t.current;return n.appendChild(e),function(){for(;n.firstChild;)n.removeChild(n.firstChild)}}),[t,r]),o.a.createElement("div",null,"failed"===a&&o.a.createElement("div",null,"Error. Please try again."),"pending"===a&&o.a.createElement("div",null,"Loading script..."),o.a.createElement("div",{ref:t}))})),s=function(){var e=Object(n.useRef)(),t=l.data.site.siteMetadata.git;return o.a.createElement("div",{className:"mt-6"},o.a.createElement(f,{repo:t,ref:e}))},p=(r("cXBx"),t.default=function(e){var t=e.data,r=e.pageContext,n=e.location,c=t.mdx,l=c.excerpt,f=c.frontmatter,p=c.body,d=r.previous,m=r.next;return o.a.createElement(a.a,{location:n,title:f.title,description:f.date,headerConfig:{title:f.title,description:f.description||l},tags:f.tags},o.a.createElement("div",{className:"postContent"},o.a.createElement(i.MDXRenderer,null,p)),o.a.createElement(u,{className:"mt-4 flex flex-wrap justify-between",previous:d,next:m}),o.a.createElement(s,null))},"2452227443")}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-bd42c707ac17339428d0.js.map