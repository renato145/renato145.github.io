(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"4wky":function(e){e.exports=JSON.parse('{"data":{"site":{"id":"Site","siteMetadata":{"social":{"github":"renato145"}}}}}')},aaQ4:function(e){e.exports=JSON.parse('{"data":{"allMdx":{"edges":[{"node":{"id":"284c02fc-e535-5b71-9879-25735165e4cf","excerpt":"It\'s been a while since my last post, hopefully I can start to do it more often now. In the last few months I have been playing more with…","fields":{"slug":"/blog/2020-02-12-new-blog-look/"},"frontmatter":{"date":"February 12, 2020","title":"New blog look","description":"Changing the look of the blog using gatsby.","tags":["news"]}}},{"node":{"id":"2f03eb51-8565-5f08-9b0d-5e38dbb521fb","excerpt":"Peru has one of the highest rates of violence against women in the region ^1 . How bad is the problem? let\'s take a look at some public data…","fields":{"slug":"/blog/2018-06-07-violence-against-women-in-peru/"},"frontmatter":{"date":"June 07, 2018","title":"Violence against women in Perú","description":"Visualizing statistics on violence against women in Perú.","tags":["visualization","python","altair","peru"]}}},{"node":{"id":"f9f9efcf-a7f9-5b89-b9df-6b8ec424e3e8","excerpt":"In Perú, the Instituto Nacional de Estadística e Informática ( INEN ) is the government agency in charge of statistical information. In this…","fields":{"slug":"/blog/2018-05-31-inei-crime-data/"},"frontmatter":{"date":"May 31, 2018","title":"INEI Crime Data","description":"Exploring crime data from INEI.","tags":["visualization","python","altair","peru"]}}},{"node":{"id":"56515ad5-191f-5283-931f-acfacf899368","excerpt":"This library has recently caught my attention:  Altair . So here is a test check the interactive behavior on a post, can\'t wait to use more…","fields":{"slug":"/blog/2018-05-29-plotting-with-altair/"},"frontmatter":{"date":"May 28, 2018","title":"Plotting with altair","description":"Testing an altair interactive plots.","tags":["visualization","python","altair"]}}}]}}}')},enK5:function(e,a,t){"use strict";t.r(a);t("OG14");var n=t("q1tI"),r=t.n(n),i=t("7oih"),l=t("pD7v"),s=t("fqvA"),o=function(e){var a=e.tag,t=Object(n.useState)([]),i=t[0],o=t[1];return Object(n.useEffect)((function(){o(s.b.filter((function(e){return e.tags})).filter((function(e){return e.tags.indexOf(a)>=0})))}),[a]),r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{tag:a,title:!0}),r.a.createElement("hr",{className:"mb-4"}),r.a.createElement(s.a,{customRepos:i,title:!0}))};a.default=function(e){var a=e.location,t=Object(n.useMemo)((function(){return new URLSearchParams(a.search).get("tag")}),[a]);return r.a.createElement(i.a,{location:a,title:t,headerConfig:{title:t}},r.a.createElement(o,{tag:t}))}},fqvA:function(e,a,t){"use strict";var n=t("4wky"),r=t("q1tI"),i=t.n(r),l=(t("f3/d"),t("pIFo"),t("wx14")),s=t("zLVn"),o=t("TSYQ"),c=t.n(o),m=t("vUet"),d=t("YdCC"),u=function(e){return i.a.forwardRef((function(a,t){return i.a.createElement("div",Object(l.a)({},a,{ref:t,className:c()(a.className,e)}))}))},g=t("Wzyw"),p=i.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,r=e.variant,o=e.as,d=void 0===o?"img":o,u=Object(s.a)(e,["bsPrefix","className","variant","as"]),g=Object(m.a)(t,"card-img");return i.a.createElement(d,Object(l.a)({ref:a,className:c()(r?g+"-"+r:g,n)},u))}));p.displayName="CardImg",p.defaultProps={variant:null};var f=p,h=u("h5"),b=u("h6"),v=Object(d.a)("card-body"),E=i.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,o=e.bg,d=e.text,u=e.border,p=e.body,f=e.children,h=e.as,b=void 0===h?"div":h,E=Object(s.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),N=Object(m.a)(t,"card"),y=Object(r.useMemo)((function(){return{cardHeaderBsPrefix:N+"-header"}}),[N]);return i.a.createElement(g.a.Provider,{value:y},i.a.createElement(b,Object(l.a)({ref:a},E,{className:c()(n,N,o&&"bg-"+o,d&&"text-"+d,u&&"border-"+u)}),p?i.a.createElement(v,null,f):f))}));E.displayName="Card",E.defaultProps={body:!1},E.Img=f,E.Title=Object(d.a)("card-title",{Component:h}),E.Subtitle=Object(d.a)("card-subtitle",{Component:b}),E.Body=v,E.Link=Object(d.a)("card-link",{Component:"a"}),E.Text=Object(d.a)("card-text",{Component:"p"}),E.Header=Object(d.a)("card-header"),E.Footer=Object(d.a)("card-footer"),E.ImgOverlay=Object(d.a)("card-img-overlay");var N=E,y=i.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.variant,r=e.animation,o=e.size,d=e.children,u=e.as,g=void 0===u?"div":u,p=e.className,f=Object(s.a)(e,["bsPrefix","variant","animation","size","children","as","className"]),h=(t=Object(m.a)(t,"spinner"))+"-"+r;return i.a.createElement(g,Object(l.a)({ref:a},f,{className:c()(p,h,o&&h+"-"+o,n&&"text-"+n)}),d)}));y.displayName="Spinner";var w=y,j=t("wd/R"),x=t.n(j),O=t("b9pq"),k=t("dbrF"),I=(t("KgR4"),function(e){return Object(k.c)(Object(k.b)(Object(k.d)(e.replace(/[-_]/g," "))))}),P=function(e){var a=e.user,t=e.repo,n=Object(r.useState)(),l=n[0],s=n[1],o=a+"/"+t.name,c=Object(r.useState)(!1),m=c[0],d=c[1];return Object(r.useEffect)((function(){var e,a,n,r,i,l;e={url:"https://api.github.com/repos/"+o,onSuccess:function(e){return s({name:t.showName||I(e.name),url:e.html_url,homepage:e.homepage,description:e.description,updated_at:e.updated_at,language:e.language})},fallback:{name:t.showName||I(t.name),html_url:"https://github.com/"+o,description:"Github repository not found."}},a=e.url,n=e.opts,r=e.fallback,i=e.onSuccess,l=e.onError,fetch(a,n).then((function(e){return e.ok?e.json():r})).then(i).catch(l)}),[o,t]),i.a.createElement("div",{className:"col mb-3"},i.a.createElement(N,{className:"experiment-card"},l?i.a.createElement(i.a.Fragment,null,i.a.createElement("a",{style:{display:m?"inherit":"none"},href:l.homepage||l.url,target:"_black"},i.a.createElement(N.Img,{variant:"top",src:"https://github.com/"+o+"/raw/master/img.png",onLoad:function(){return d(!0)}})),i.a.createElement(N.Body,null,i.a.createElement(N.Title,{className:"experiment-card-title mb-0"},l.name),i.a.createElement(O.a,{tags:t.tags}),i.a.createElement(N.Text,{className:"mt-2"},l.description)),i.a.createElement("div",{className:"experiment-card-links"},l.url&&i.a.createElement(N.Link,{href:l.url,target:"_black"},"Go to code"),l.homepage&&i.a.createElement(N.Link,{href:l.homepage,target:"_black"},"View")),i.a.createElement(N.Footer,null,l.updated_at?i.a.createElement("small",{className:"text-muted"},"Last updated: ",x()(l.updated_at).calendar(null,{sameElse:"DD/MM/YYYY"})):i.a.createElement("small",{className:"text-muted"},"-"))):i.a.createElement(i.a.Fragment,null,i.a.createElement(N.Body,null,i.a.createElement(N.Title,{className:"experiment-card-title mb-0"},t.showName||t.name),i.a.createElement(O.a,{tags:t.tags}),i.a.createElement("div",{className:"experiment-card-spinner"},i.a.createElement(w,{animation:"border"}))),i.a.createElement("div",{className:"experiment-card-links"},i.a.createElement(N.Link,{href:"https://github.com/"+o,target:"_black"},"Go to code")),i.a.createElement(N.Footer,null,i.a.createElement("small",{className:"text-muted"},"-")))))},_=(t("R6rl"),t("dbZe")),z=i.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.variant,r=e.size,o=e.active,d=e.className,u=e.block,g=e.type,p=e.as,f=Object(s.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),h=Object(m.a)(t,"btn"),b=c()(d,h,o&&"active",h+"-"+n,u&&h+"-block",r&&h+"-"+r);if(f.href)return i.a.createElement(_.a,Object(l.a)({},f,{as:p,ref:a,className:c()(b,f.disabled&&"disabled")}));a&&(f.ref=a),p||(f.type=g);var v=p||"button";return i.a.createElement(v,Object(l.a)({},f,{className:b}))}));z.displayName="Button",z.defaultProps={variant:"primary",active:!1,disabled:!1,type:"button"};var S=z;t.d(a,"b",(function(){return C}));var C=[{name:"show_evolution",tags:["threejs","reactjs","evolutionary-algorithms","visualization","javascript"]},{name:"show_evolution3d",showName:"Show Evolution 3D",tags:["threejs","reactjs","evolutionary-algorithms","visualization","3d","javascript"]},{name:"gcn",showName:"GCN",tags:["pytorch","graph-neural-networks","machine-learning","python"]},{name:"DENN",showName:"DENN",tags:["pytorch","evolutionary-algorithms","machine-learning","python"]},{name:"parallel_ex",tags:["python","utilities"]},{name:"ClassificationUncertainty",tags:["pytorch","machine-learning","python"]},{name:"fastai_scans",tags:["pytorch","machine-learning","python","medical-imaging"]},{name:"d3sims",showName:"D3 simulations",tags:["pytorch","simulation","sockets","python","javascript","visualization"]},{name:"react_tests",tags:["reactjs","visualization","javascript","visualization"]},{name:"stn",showName:"STN",tags:["pytorch","machine-learning","python"]},{name:"peru-stats",tags:["python","data-scrapping"]},{name:"bayesian-opt",tags:["pytorch","machine-learning","python"]},{name:"waimlap2017",showName:"Waimlap 2017",tags:["machine-learning","python","tutorial"]},{name:"3D-ORGAN",showName:"3D-ORGAN",tags:["tensorflow","3d","gan","machine-learning","python"]}];a.a=function(e){var a=e.title,t=void 0!==a&&a,l=e.showLimit,s=void 0===l?6:l,o=e.showLoadMore,c=void 0===o||o,m=e.loadMoreTitle,d=void 0===m?"Load more":m,u=e.customRepos,g=n.data.site.siteMetadata.social.github,p=Object(r.useState)(s),f=p[0],h=p[1],b=u||C,v=b.slice(0,f||b.length);return i.a.createElement(i.a.Fragment,null,t&&i.a.createElement("h2",{className:"general-title"},"Experiments"),i.a.createElement("div",{className:"row row-cols-1 row-cols-md-2"},v.map((function(e,a){return i.a.createElement(P,{key:a,user:g,repo:e})}))),c&&v.length<b.length&&i.a.createElement("div",{className:"experiments-load-more"},i.a.createElement(S,{variant:"link",onClick:function(){return h((function(e){return e+s}))}},d)),0===b.length&&i.a.createElement("div",null,"..."))}},pD7v:function(e,a,t){"use strict";var n=t("aaQ4"),r=t("q1tI"),i=t.n(r),l=t("Wbzz"),s=t("b9pq"),o=function(e){var a=e.node,t=a.frontmatter.title||a.fields.slug,n=a.frontmatter.tags;return i.a.createElement("article",{className:"mb-4"},i.a.createElement("header",{className:"mb-1"},i.a.createElement("h3",{className:"mb-0"},i.a.createElement(l.Link,{to:a.fields.slug},t)),i.a.createElement("small",{className:"text-muted"},a.frontmatter.date),i.a.createElement(s.a,{tags:n,prefix:" - "})),i.a.createElement("section",null,i.a.createElement("p",{dangerouslySetInnerHTML:{__html:a.frontmatter.description||a.excerpt}})))},c=t("dbrF");t("qcOo"),a.a=function(e){var a=e.title,t=void 0!==a&&a,r=e.tag,l=n.data.allMdx.edges,s=r?l.filter((function(e){var a=e.node;return Object(c.a)(a.frontmatter.tags,r)})):void 0===r?l:[];return i.a.createElement(i.a.Fragment,null,t&&i.a.createElement("h2",{className:"general-title"},"Posts"),s.map((function(e){var a=e.node;return i.a.createElement(o,{node:a,key:a.fields.slug})})),0===s.length&&i.a.createElement("div",null,"..."))}}}]);
//# sourceMappingURL=component---src-pages-tags-js-88ab3a9ed93e41dec055.js.map