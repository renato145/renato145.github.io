(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"4wky":function(e){e.exports=JSON.parse('{"data":{"site":{"id":"Site","siteMetadata":{"social":{"github":"renato145"}}}}}')},RXBc:function(e,a,t){"use strict";t.r(a),t.d(a,"pageQuery",(function(){return s}));var n=t("q1tI"),r=t.n(n),i=t("7oih"),l=t("pD7v"),o=t("fqvA");a.default=function(e){var a=e.data,t=e.location,n=a.site.siteMetadata,s=n.title,c=n.description;return r.a.createElement(i.a,{location:t,title:s,description:c,headerConfig:{title:"Home"}},r.a.createElement(l.a,{title:!0}),r.a.createElement("hr",{className:"mb-4"}),r.a.createElement(o.a,{title:!0}))};var s="3998338720"},WdvH:function(e){e.exports=JSON.parse('{"data":{"allMdx":{"edges":[{"node":{"id":"284c02fc-e535-5b71-9879-25735165e4cf","excerpt":"It\'s been a while since my last post, hopefully I can start to do it more often now. In the last few months I have been playing more with…","fields":{"slug":"/blog/2020-02-12-new-blog-look/"},"frontmatter":{"date":"February 12, 2020","title":"New blog look","description":"Changing the look of the blog using gatsby."}}},{"node":{"id":"2f03eb51-8565-5f08-9b0d-5e38dbb521fb","excerpt":"Peru has one of the highest rates of violence against women in the region ^1 . How bad is the problem? let\'s take a look at some public data…","fields":{"slug":"/blog/2018-06-07-violence-against-women-in-peru/"},"frontmatter":{"date":"June 07, 2018","title":"Violence against women in Perú","description":"Visualizing statistics on violence against women in Perú."}}},{"node":{"id":"f9f9efcf-a7f9-5b89-b9df-6b8ec424e3e8","excerpt":"In Perú, the Instituto Nacional de Estadística e Informática ( INEN ) is the government agency in charge of statistical information. In this…","fields":{"slug":"/blog/2018-05-31-inei-crime-data/"},"frontmatter":{"date":"May 31, 2018","title":"INEI Crime Data","description":"Exploring crime data from INEI."}}},{"node":{"id":"56515ad5-191f-5283-931f-acfacf899368","excerpt":"This library has recently caught my attention:  Altair . So here is a test check the interactive behavior on a post, can\'t wait to use more…","fields":{"slug":"/blog/2018-05-29-plotting-with-altair/"},"frontmatter":{"date":"May 28, 2018","title":"Plotting with altair","description":"Testing an altair interactive plots."}}}]}}}')},fqvA:function(e,a,t){"use strict";var n=t("4wky"),r=t("q1tI"),i=t.n(r),l=(t("Vd3H"),t("f3/d"),t("pIFo"),t("wx14")),o=t("zLVn"),s=t("TSYQ"),c=t.n(s),m=t("vUet"),d=t("YdCC"),u=function(e){return i.a.forwardRef((function(a,t){return i.a.createElement("div",Object(l.a)({},a,{ref:t,className:c()(a.className,e)}))}))},f=t("Wzyw"),p=i.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,r=e.variant,s=e.as,d=void 0===s?"img":s,u=Object(o.a)(e,["bsPrefix","className","variant","as"]),f=Object(m.a)(t,"card-img");return i.a.createElement(d,Object(l.a)({ref:a,className:c()(r?f+"-"+r:f,n)},u))}));p.displayName="CardImg",p.defaultProps={variant:null};var b=p,h=u("h5"),g=u("h6"),v=Object(d.a)("card-body"),E=i.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,s=e.bg,d=e.text,u=e.border,p=e.body,b=e.children,h=e.as,g=void 0===h?"div":h,E=Object(o.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),w=Object(m.a)(t,"card"),N=Object(r.useMemo)((function(){return{cardHeaderBsPrefix:w+"-header"}}),[w]);return i.a.createElement(f.a.Provider,{value:N},i.a.createElement(g,Object(l.a)({ref:a},E,{className:c()(n,w,s&&"bg-"+s,d&&"text-"+d,u&&"border-"+u)}),p?i.a.createElement(v,null,b):b))}));E.displayName="Card",E.defaultProps={body:!1},E.Img=b,E.Title=Object(d.a)("card-title",{Component:h}),E.Subtitle=Object(d.a)("card-subtitle",{Component:g}),E.Body=v,E.Link=Object(d.a)("card-link",{Component:"a"}),E.Text=Object(d.a)("card-text",{Component:"p"}),E.Header=Object(d.a)("card-header"),E.Footer=Object(d.a)("card-footer"),E.ImgOverlay=Object(d.a)("card-img-overlay");var w=E,N=i.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.variant,r=e.animation,s=e.size,d=e.children,u=e.as,f=void 0===u?"div":u,p=e.className,b=Object(o.a)(e,["bsPrefix","variant","animation","size","children","as","className"]),h=(t=Object(m.a)(t,"spinner"))+"-"+r;return i.a.createElement(f,Object(l.a)({ref:a},b,{className:c()(p,h,s&&h+"-"+s,n&&"text-"+n)}),d)}));N.displayName="Spinner";var y=N,x=t("wd/R"),O=t.n(x),j=(t("KgR4"),function(e){var a=e.user,t=e.repo,n=Object(r.useState)(),l=n[0],o=n[1],s=a+"/"+t.name,c=Object(r.useState)(!1),m=c[0],d=c[1],u=t.tags;return Object(r.useEffect)((function(){var e,a,n,r,l,c;e={url:"https://api.github.com/repos/"+s,onSuccess:function(e){return o({name:t.showName||(n=e.name,function(e){return e.toLowerCase().replace(/^\w|\s\w/g,(function(e){return e.toUpperCase()}))}((a=n.replace(/[-_]/g," ").replace(/([a-z\xE0-\xFF])([A-Z\xC0\xDF])/g,"$1 $2").toLowerCase(),a.replace(/\s+/g," ")))),url:e.html_url,homepage:e.homepage,description:e.description,updated_at:e.updated_at,language:e.language});var a,n},fallback:{name:"Not found",description:i.a.createElement(w.Link,{href:"https://github.com/"+s},s)}},a=e.url,n=e.opts,r=e.fallback,l=e.onSuccess,c=e.onError,fetch(a,n).then((function(e){return e.ok?e.json():r})).then(l).catch(c)}),[s,t]),i.a.createElement("div",{className:"col mb-3"},i.a.createElement(w,{className:"experiment-card"},l?i.a.createElement(i.a.Fragment,null,i.a.createElement("a",{style:{display:m?"inherit":"none"},href:l.homepage||l.url,target:"_black"},i.a.createElement(w.Img,{variant:"top",src:"https://github.com/"+s+"/raw/master/img.png",onLoad:function(){return d(!0)}})),i.a.createElement(w.Body,null,i.a.createElement(w.Title,{className:"experiment-card-title"},l.name),u&&u.length>0&&u.sort().map((function(e,a){return i.a.createElement("a",{href:"/tags?tag="+e,className:"text-muted mb-2 card-subtitle",key:a},e+" ")})),i.a.createElement(w.Text,null,l.description)),i.a.createElement("div",{className:"experiment-card-links"},l.url&&i.a.createElement(w.Link,{href:l.url,target:"_black"},"Go to code"),l.homepage&&i.a.createElement(w.Link,{href:l.homepage,target:"_black"},"View")),i.a.createElement(w.Footer,null,l.updated_at?i.a.createElement("small",{className:"text-muted"},"Last updated: ",O()(l.updated_at).calendar(null,{sameElse:"DD/MM/YYYY"})):i.a.createElement("small",{className:"text-muted"},"-"))):i.a.createElement(w.Body,{className:"experiment-card-spinner"},i.a.createElement(y,{animation:"border"}))))}),k=(t("R6rl"),t("dbZe")),I=i.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.variant,r=e.size,s=e.active,d=e.className,u=e.block,f=e.type,p=e.as,b=Object(o.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),h=Object(m.a)(t,"btn"),g=c()(d,h,s&&"active",h+"-"+n,u&&h+"-block",r&&h+"-"+r);if(b.href)return i.a.createElement(k.a,Object(l.a)({},b,{as:p,ref:a,className:c()(g,b.disabled&&"disabled")}));a&&(b.ref=a),p||(b.type=f);var v=p||"button";return i.a.createElement(v,Object(l.a)({},b,{className:g}))}));I.displayName="Button",I.defaultProps={variant:"primary",active:!1,disabled:!1,type:"button"};var P=I;t.d(a,"b",(function(){return C}));var C=[{name:"show_evolution",tags:["threejs","reactjs","evolutionary-algorithms","visualization"]},{name:"show_evolution3d",showName:"Show Evolution 3D",tags:["threejs","reactjs","evolutionary-algorithms","visualization","3d"]},{name:"gcn",showName:"GCN",tags:["pytorch","graph-neural-networks","machine-learning"]},{name:"parallel_ex"},{name:"ClassificationUncertainty"},{name:"fastai_scans"},{name:"d3sims",showName:"D3 simulations"},{name:"react_tests"},{name:"stn",showName:"STN"},{name:"peru-stats"},{name:"bayesian-opt"},{name:"waimlap2017",showName:"Waimlap 2017"},{name:"3D-ORGAN",showName:"3D-ORGAN"}];a.a=function(e){var a=e.title,t=void 0!==a&&a,l=e.showLimit,o=void 0===l?6:l,s=e.showLoadMore,c=void 0===s||s,m=e.loadMoreTitle,d=void 0===m?"Load more":m,u=e.customRepos,f=n.data.site.siteMetadata.social.github,p=Object(r.useState)(o),b=p[0],h=p[1],g=u||C,v=g.slice(0,b||g.length);return i.a.createElement(i.a.Fragment,null,t&&i.a.createElement("h2",{className:"general-title"},"Experiments"),i.a.createElement("div",{className:"row row-cols-1 row-cols-md-2"},v.map((function(e,a){return i.a.createElement(j,{key:a,user:f,repo:e})}))),c&&v.length<g.length&&i.a.createElement("div",{className:"experiments-load-more"},i.a.createElement(P,{variant:"link",onClick:function(){return h((function(e){return e+o}))}},d)))}},pD7v:function(e,a,t){"use strict";var n=t("WdvH"),r=t("q1tI"),i=t.n(r),l=t("Wbzz");t("qcOo");a.a=function(e){var a=e.title,t=void 0!==a&&a,r=n.data.allMdx.edges;return i.a.createElement(i.a.Fragment,null,t&&i.a.createElement("h2",{className:"general-title"},"Posts"),r.map((function(e){var a=e.node,t=a.frontmatter.title||a.fields.slug;return i.a.createElement("article",{key:a.fields.slug},i.a.createElement("header",null,i.a.createElement("h3",null,i.a.createElement(l.Link,{style:{boxShadow:"none"},to:a.fields.slug},t)),i.a.createElement("small",null,a.frontmatter.date)),i.a.createElement("section",null,i.a.createElement("p",{dangerouslySetInnerHTML:{__html:a.frontmatter.description||a.excerpt}})))})))}}}]);
//# sourceMappingURL=component---src-pages-index-js-1e72ebd00248f963321f.js.map