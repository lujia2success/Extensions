﻿var e;
if(!window.__idm_init__&&"html"==document.documentElement.localName){window.__idm_init__=!0;Array.prototype.includes||(Array.prototype.includes=function(b,a){return 0<=this.indexOf(b,a)});NodeList.prototype[Symbol.iterator]||(NodeList.prototype[Symbol.iterator]=Array.prototype[Symbol.iterator]);HTMLCollection.prototype[Symbol.iterator]||(HTMLCollection.prototype[Symbol.iterator]=Array.prototype[Symbol.iterator]);"undefined"==typeof browser&&(browser=chrome);navigator.userAgent.includes("Edge/");navigator.userAgent.includes("Firefox/");
navigator.userAgent.includes("OPR/");var r=Array.prototype.includes,x=Function.call.bind(Array.prototype.slice),y=Function.apply.bind(Array.prototype.push),B=Function.call.bind(Array.prototype.forEach),C={16:!0,17:!0,18:!0,45:!0,46:!0},E=r.bind(["video","audio","object","embed"]),F=/(?!)/,M=window.self===window.top,N=window.origin||document.origin||location.origin,O=location.host.split(".").splice(-2,1).shift().toLowerCase(),P=RegExp("^(?:\\(\\d+\\)\\s+)?(.+?)\\s+[-|@]+\\s*"+O+"$","i");function G(){M&&
(this.Fa=0);this.Ha=[];this.R=[];this.h={};this.va();window.__idm_connect__=this.va.bind(this,!0);this.b(1,window,"resize",this.pb);this.b(1,window,"scroll",this.qb);this.b(1,window,"blur",this.ib);this.b(1,window,"keydown",this.Da,!0);this.b(1,window,"keyup",this.Da,!0);this.b(1,window,"mousedown",this.kb,!0);this.b(1,window,"mouseup",this.mb,!0);this.b(1,window,"mousemove",this.lb,!0);this.b(1,window,"click",this.jb,!0);this.b(1,document,"beforeload",this.gb,!0);this.b(1,document,"DOMContentLoaded",
this.Ca);"interactive"!=document.readyState&&"complete"!=document.readyState||this.Ca()}e=G.prototype;e.g=0;e.j=0;e.$=-1;e.aa=-1;e.Ja=1;e.f="";e.oa="";e.v="";e.qa=F;e.ua=F;e.J=F;e.m={};e.ra=F;e.sa=F;e.ta=F;e.ja=F;e.da=":root:empty";e.ga=":root:empty";e.G=":root:empty";e.ha=":root:empty";e.ca=":root:empty";e.ia=":root:empty";e.ba=":root:empty";e.F=":root:empty";e.ea=0;e.fa="";e.H=F;e.ka=F;e.ma=":root:empty";e.I=":root:empty";e.la=":root:empty";e.pa=F;e.na=":root:empty";e.va=function(b){this.Ea(-1);
this.a=b=browser.runtime.connect({name:(M?"top":"sub")+(b?":retry":"")+("file:"==location.protocol?":file":"")});this.b(-1,b,"onMessage",this.ob);this.b(-1,b,"onDisconnect",this.nb)};e.nb=function(){browser.runtime.lastError;this.Ea();this.a=this.T=null;window.__idm_init__=!1;window.__idm_connect__=null};e.ob=function(b){switch(b.shift()){case 11:this.Sa.apply(this,b);break;case 17:this.Ta.apply(this,b);break;case 12:this.Ua.apply(this,b);break;case 13:this.La=b.shift();break;case 14:this.Xa.apply(this,
b);break;case 15:this.Ya.apply(this,b);break;case 16:this.Za.apply(this,b);break;case 18:this.Wa.apply(this,b)}};e.sb=function(b,a){switch(this.U=b){case 1:this.Ma=this.o=!0;this.f=a.shift()||"";this.qa=RegExp(a.shift()||"(?!)");this.J=RegExp(a.shift()||"(?!)");this.m=(a.shift()||"").split(/[|:]/).reduce(Q,{});this.ra=RegExp(a.shift()||"(?!)");this.sa=RegExp(a.shift()||"(?!)");this.ta=RegExp(a.shift()||"(?!)");this.ua=RegExp(a.shift()||"(?!)");break;case 2:this.o=!0;this.f=a.shift()||"";this.v=a.shift()||
"";this.ja=RegExp(a.shift()||"(?!)");this.da=a.shift()||":root:empty";this.ga=a.shift()||":root:empty";a.shift();this.G=a.shift()||":root:empty";this.ha=a.shift()||":root:empty";this.ca=a.shift()||":root:empty";this.ia=a.shift()||":root:empty";this.ba=a.shift()||":root:empty";this.F=a.shift()||":root:empty";this.ea=a.shift()||0;this.fa=a.shift()||"";this.H=RegExp(a.shift()||"(?!)");break;case 4:this.o=!0;this.f=a.shift()||"";this.oa=a.shift()||"";this.v=a.shift()||"";this.ka=RegExp(a.shift()||"(?!)");
this.ma=a.shift()||":root:empty";this.I=a.shift()||":root:empty";this.la=a.shift()||":root:empty";break;case 3:this.pa=RegExp(a.shift()||"(?!)");break;case 5:this.o=!0;this.f=a.shift()||"";this.v=a.shift()||"(?!)";this.na=a.shift()||":root:empty";break;case 7:this.o=!0,this.f=a.shift()||""}this.f.includes("^/")&&((b=this.oa)?b="https?://"+b.slice(+b.startsWith("^"),-b.endsWith("$")||void 0):b=N.replaceAll(".","\\."),this.f=this.f.replaceAll("^/","^(?:"+b+")?/"))};e.S=function(b){if(this.U&&this.D(arguments))switch(this.U){case 1:this.fb(b);
break;case 2:this.ab(b);break;case 4:this.bb(b);break;case 3:this.eb(b);break;case 5:this.cb(b)}};e.M=function(b){var a=this.a,c;for(c of document.getElementsByTagName("script"))!c.src&&b.test(c.innerText)&&a.postMessage([34,null,-1,c.outerHTML]);a.postMessage([34,this.u()])};e.rb=function(b){var a=b.data;if(Array.isArray(a)&&b.origin==N)switch(a[0]){case 1229212977:window.postMessage([1229212978,this.T,this.o,this.Ma,this.f,this.v],"/");break;case 1229212979:this.a.postMessage([36,a[1],a[2]]);break;
case 1229212981:this.Pa(a[1],a[2])}};e.O=function(){var b=window.devicePixelRatio,a=document.width,c=document.body.scrollWidth;a&&c&&(b=a==c?0:a/c);return b};e.s=function(b){var a=b.i;a||(a=b.i=this.T<<13|this.Ja++,b.setAttribute("__idm_id__",a),this.h[a]=b);return a};e.N=function(b){b.l&&(window.clearTimeout(b.l),b.l=null);b.a&&(b.a.disconnect(),b.a=null);this.c&&this.c.unobserve(b);delete this.h[b.i]};e.K=function(b,a,c){if(!b.a){var d=this.s(b);if(d&&(a||c)){(b.a=new MutationObserver(this.V.bind(this))).observe(b,
{attributes:!0,attributeFilter:["style"]});this.c&&this.c.observe(b);var f=this.C(b);this.a.postMessage([41,d,b.localName,b.src||b.data,a,c,f])}}};e.Ra=function(b,a,c,d,f){var k,m,l,p,h=window.getComputedStyle.bind(window);try{var g=0;var q=document.activeElement;q&&E(q.localName)||(q=document.elementFromPoint(this.$,this.aa))&&!E(q.localName)&&(q=null);for(var n of document.querySelectorAll("video,audio,object,embed")){var t=n.localName,u,v="object"==t||"embed"==t;if(v){var D=n.type.toLowerCase();
if(D.startsWith("text/")||D.startsWith("image/"))continue;if("embed"==t&&"application/x-shockwave-flash"!=D)continue}if(f&&n.c==f&&(k=n))break;if(u=n.src||n.data)u!=b&&u!=a||(k=n);else if(!v)for(var R of n.getElementsByTagName("source"))if((u=R.src)&&(u==b||u==a)&&(k=n))break;if(k)if("cover"==h(n).objectFit){var H=n;k=null}else break;if(!(H||q||m||u&&(u==c||u==d)&&(m=n)||"video"==t&&u.startsWith("data:audio/"))){var z=n.clientWidth,A=n.clientHeight;if(z&&A){var I=n.getBoundingClientRect();if(!(0>=
I.right+window.scrollX||0>=I.bottom+window.scrollY)){var J=h(n);if("cover"!=J.objectFit)if("hidden"==J.visibility)"video"==t&&(p||(p=n));else{v=z*A;if(g<v&&1.35*z>A&&z<3*A){g=v;var S=n}l||(l=n)}}}}}}catch(T){}(n=k||H||q||m)?"video"!=n.localName&&"hidden"==h(n).visibility&&(n=null):n=S||l||p;n&&("embed"!=n.localName||n.clientWidth||n.clientHeight||(b=n.parentElement,"object"==b.localName&&(n=b)),this.s(n)?(b=n.a=new MutationObserver(this.V.bind(this)),b.observe(n,{attributes:!0,attributeFilter:["style"]}),
b.observe(n.parentNode,{childList:!0}),this.c&&this.c.observe(n)):n=null);return n};e.Qa=function(b,a,c){var d=null,f,k;for(k of document.getElementsByTagName("iframe"))if(k.h==b){d=k;break}else d||!(f=k.src)||f!=a&&f!=c||(d=k);return d&&this.s(d)};e.C=function(b){var a=null;try{var c=window.getComputedStyle(b),d=b.getBoundingClientRect(),f=Math.round(d.width),k=Math.round(d.height);if("hidden"==c.visibility)return f>5*k?null:!1;switch(b.localName){case "video":(b.videoWidth||b.c)&&document.contains(b)&&
(a=!1);if(15>f||10>k)return a;break;case "audio":if(!f&&!k)return a;var m=!0}var l=document.documentElement,p=l.scrollWidth||l.clientWidth,h=l.scrollHeight||l.clientHeight,g=Math.round(d.left)+b.clientLeft,q=Math.round(d.top)+b.clientTop;if(g>=p||q>=h||m&&!g&&!q)return a;0==g&&q==-h&&f==p&&k==h&&(q=0);a=[g,q,g+f,q+k,this.O()]}catch(n){}return a};e.u=function(){var b=M?80:90;try{var a=window.top.document.title}catch(c){}a||(a=(a=document.head.querySelector('meta[property="og:title"]'))&&a.getAttribute("content"),
b=70);a&&(a=a.replace(/^\(\d+\)/,"").replace(/[ \t\r\n\u25B6]+/g," "),a=new String(a.trim()),a.src=b);return a};e.Va=function(){if(!document.elementsFromPoint)return 0;var b=document.documentElement,a=b.clientWidth||b.offsetWidth;b=(b.clientHeight||window.innerHeight)/4;var c=document.elementsFromPoint(0,0),d=0,f=0,k=0,m;for(m of c)if(m.offsetWidth>=a){var l=window.getComputedStyle(m);.95<=l.opacity&&(c=l.zIndex,"fixed"==l.position?(l=m.offsetHeight+m.offsetTop,d<l&&l<b&&(d=l,f=c)):k<c&&(k=c))}f<
k&&(d=0);return d};e.Sa=function(b,a,c,d,f,k,m,l){m&&K("text/javascript",m);this.T=b;if(c){this.Fa=c;try{window.frameElement&&(window.frameElement.h=c)}catch(p){}}this.ya(f);d&&this.sb(d,x(arguments,8));l&&(this.b(2,window,"message",this.rb),K("text/javascript",l));"loading"==document.readyState?this.X=!0:this.S()};e.Ta=function(b){this.Y&&this.g&&(this.g=0,this.Z=window.setTimeout(this.W.bind(this,!1),3E3));this.S(!0);b&&this.ya()};e.ya=function(b){if(this.D(arguments)){var a=[21,this.ub||location.href,
document.referrer];b&&a.push(document.getElementsByTagName("video").length,document.getElementsByTagName("audio").length);this.a.postMessage(a)}};e.Xa=function(b){var a=b?this.D(arguments):1;if(0<a||0>a&&1!=this.U){a=this.u();var c=this.O(),d=this.Va();this.a.postMessage([24,a,a&&a.src,c,d])}};e.Za=function(b,a,c,d,f){c||(c=this.Qa(a,d,f));d=(d=c&&this.h[c])&&this.C(d);this.a.postMessage([22,b,a,c,d])};e.Wa=function(b,a){var c=document.getElementsByTagName("a"),d;for(d of c)try{if(d.href==a){var f=
d.download||null;var k=d.innerText.trim()||d.title||null;break}}catch(m){}this.a.postMessage([35,b,f,k])};e.Ya=function(b,a,c,d,f,k,m){if(this.D(arguments)){var l=[23,b,a,!1],p,h,g;if(a)a&&((p=this.h[a])||(l[3]=!0));else{if(p=this.Ra(c,d,f,k,m)){if(h=p.getAttribute("operadetachedviewtitle"))var q=130;l[2]=a=p.i;l[5]=p.localName;l[6]=p.src||p.data}!h&&(h=this.u())&&(q=h.src,(g=P.exec(h))&&(h=g[1]));l[7]=h;l[8]=q}p&&(h=this.C(p),null!=h||document.contains(p)?l[4]=h:(this.N(p),l[3]=!0));this.a.postMessage(l)}};
e.Ua=function(b,a,c,d){var f=d?RegExp(d,"i"):null;d=this.xa(document,f,a);var k=document.getElementsByTagName("iframe"),m;for(m of k)try{var l=m.contentDocument;l&&!m.src&&y(d,this.xa(l,f,a))}catch(p){}b=[27,b,this.Fa,d.length];c||(b[4]=d,b[5]=location.href,M&&(b[6]=location.href,b[7]=document.title));this.a.postMessage(b)};e.xa=function(b,a,c){var d=[],f={},k="",m="",l=!c;if(c){var p=b.getSelection();if(!p||p.isCollapsed&&!p.toString().trim())return d}for(var h of b.getElementsByTagName("a"))if(l||
p.containsNode(h,!0))try{var g=h.href;g&&!f[g]&&a.test(g)&&(f[g]=d.push([g,2,h.download||null,h.innerText.trim()||h.title]));c&&f[g]&&(k+=h.innerText,k+="\n")}catch(t){}for(h of b.getElementsByTagName("area"))if(l||p.containsNode(h,!0))try{(g=h.href)&&!f[g]&&a.test(g)&&(f[g]=d.push([g,2,null,h.alt]))}catch(t){}if(l)for(h of b.getElementsByTagName("iframe"))try{(g=h.src)&&!f[g]&&a.test(g)&&(f[g]=d.push([g,4]))}catch(t){}var q=c&&p.toString();if(q){k=this.A(k);for(g of this.A(q))g&&!f[g]&&a.test(g)&&
!k.includes(g)&&(f[g]=d.push([g,1]))}if(c)for(h of b.getElementsByTagName("textarea"))if(c=h.selectionStart,q=h.selectionEnd,(k=p.isCollapsed&&c<q)||p.containsNode(h,!0))try{var n=k?h.value.substring(c,q):h.value;for(g of this.A(n))g&&!f[g]&&a.test(g)&&(f[g]=d.push([g,1]))}catch(t){}if(l||!d.length)for(h of b.getElementsByTagName("img"))if(l||p.containsNode(h,!0))try{(g=h.src)&&!f[g]&&a.test(g)&&(f[g]=d.push([g,3,null,"<<<=IDMTRANSMITIMGPREFIX=>>>"+h.alt])),l&&h.onclick&&(m+=h.onclick,m+="\n")}catch(t){}if(l){for(h of b.getElementsByTagName("script"))m+=
h.innerText,m+="\n";if(m)for(g of this.A(m))g&&!f[g]&&a.test(g)&&(f[g]=d.push([g,5]))}return d};e.A=function(b){if(!this.Ga){var a="\\b\\w+://(?:[%T]*(?::[%T]*)?@)?[%H.]+\\.[%H]+(?::\\d+)?(?:/(?:(?: +(?!\\w+:))?[%T/~;])*)?(?:\\?[%Q]*)?(?:#[%T]*)?".replace(/%\w/g,function(d){return this[d]}.bind({"%H":"\\w\\-\u00a0-\ufeff","%T":"\\w\\-.+*()$!,%\u00a0-\ufeff","%Q":"^\\s\\[\\]{}()"}));this.Ga=RegExp(a,"gi")}for(var c=[];a=this.Ga.exec(b);)c.push(a.shift());return c};e.D=function(b){var a=this.g;a||(b=
x(b&&b.callee?b:arguments),b.unshift(arguments.callee.caller),this.R.push(b));return a};e.Ca=function(b){try{var a=window.top.document.getElementsByTagName("title")[0]}catch(c){}this.g=b&&a?-1:1;a&&(b=this.Y,b||(this.Y=b=new MutationObserver(this.W.bind(this))),b.observe(a,{childList:!0}));try{this.c=new ResizeObserver(this.V.bind(this))}catch(c){}this.X&&(this.X=!1,this.S());for(b=this.R;a=b.shift();)a.shift().apply(this,a)};e.V=function(b){for(var a of b)b=a.target,b.i&&(document.contains(b)?(b.l&&
window.clearTimeout(b.l),b.l=window.setTimeout(this.hb.bind(this,b),200)):(this.a.postMessage([23,null,b.i,!0]),this.N(b)))};e.hb=function(b){b.l=null;var a=document.contains(b),c;a?c=this.C(b):this.N(b);this.a&&this.a.postMessage([23,null,b.i,!a,c])};e.W=function(b){if(b)window.clearTimeout(this.Z),this.Z=window.setTimeout(this.W.bind(this,!1),1E3);else{0>this.g?this.g=1:++this.g;for(var a=this.R;b=a.shift();)b.shift().apply(this,b)}};e.gb=function(b){var a=b.target,c=a.localName;E(c)&&b.url&&(a=
this.s(a),this.a.postMessage([25,a,c,b.url]))};e.Da=function(b){!b.repeat&&C[b.keyCode]&&this.a.postMessage([31,b.keyCode,"keydown"==b.type])};e.kb=function(b){this.La&&this.a.postMessage([28]);if(0==b.button){var a=b.view.getSelection();a&&a.isCollapsed&&!a.toString().trim()&&(this.j=1);this.a.postMessage([32,b.button,!0])}};e.mb=function(b){if(0==b.button){this.$=b.clientX;this.aa=b.clientY;this.a.postMessage([32,b.button,!1]);var a=b.view.getSelection();a&&this.j&&(this.j=a.isCollapsed&&!a.toString().trim()?
0:2)&&this.a.postMessage([26,b.clientX,b.clientY,this.O()])}};e.lb=function(){2==this.j&&(this.j=0)};e.jb=function(b){b=b.target;"a"==b.localName&&this.a.postMessage([39,b.hasAttribute("download"),b.href,b.download])};e.qb=function(){this.a.postMessage([29])};e.pb=function(b){b=b.target;this.a.postMessage([30,b.innerWidth,b.innerHeight])};e.ib=function(){this.j=0;this.a.postMessage([33])};e.b=function(b,a,c,d,f){var k=x(arguments);k[3]=d.bind(this);this.Ha.push(k);0>b?(a=a[c],a.addListener.apply(a,
k.slice(3))):a.addEventListener.apply(a,k.slice(2))};e.Ea=function(b){for(var a=this.Ha,c=0;c<a.length;c++){var d=a[c][0];if(!b||b==d){var f=a.splice(c--,1).pop(),k=f.splice(0,2).pop();0>d?(k=k[f.shift()],k.removeListener.apply(k,f)):k.removeEventListener.apply(k,f)}}};e.fb=function(b){if(!b){b=this.a;var a,c,d,f,k=0;for(l of document.getElementsByTagName("script")){if(l.src){if(f=this.J.exec(l.src))k|=1,this.m[f[1]]?c=f[1]:a=l.src}else if(f=this.ua.exec(l.innerText))k|=2,this.m[f[1]]&&(d=parseInt(f[1],
10));else if(this.qa.test(l.innerText)){k|=4;var m=l.outerHTML}if(7==k)break}if(d||c){var l={};l[118]=d;l[124]=c;b.postMessage([37,1,2,l])}b.postMessage([34,this.u(),null,m]);a&&(m=new XMLHttpRequest,m.responseType="text",m.timeout=1E4,m.onreadystatechange=this.tb.bind(this,a,m),m.open("GET",a,!0),m.send())}};e.tb=function(b,a){if(4==a.readyState){var c=this.J.exec(b);if((b=(b=this.ra.exec(a.response))&&parseInt(b[1]||b[2],10))&&(!this.m[b]||!this.m[c[1]])){var d=this.sa.exec(a.response);a=this.ta.exec(a.response);
if(d&&a&&d[2]==a[1]){c=c&&c[1];var f={};f[118]=b;f[119]=d[0];f[120]=a[0];f[124]=c;this.a.postMessage([37,1,1,f])}}}};e.ab=function d(a,c){a?(c&&a.shift().disconnect(),this.P.disconnect(),this.Ba.disconnect(),this.Aa.clear(),this.B.clear()):(this.M(this.ja),this.P=new MutationObserver(this.Oa.bind(this)),this.Ba=new MutationObserver(this.Na.bind(this)),this.Aa=new Set,this.B=new Set);if(c=this.Ia=document.querySelector(this.ga)){if(a=this.P,a.observe(c,{childList:!0}),!this.wa(c,!0)&&(c=c.querySelector(this.ha))){var f=
w(c,this.G);f&&a.observe(c,{childList:!0});a.observe(f||c.parentNode,{childList:!0})}}else!a&&(c=document.querySelector(this.da))&&(f=new MutationObserver(d.bind(this,a=[])),a.push(f),f.observe(c,{childList:!0}))};e.wa=function(a,c){var d=this.P,f=this.G,k=this.ca,m=this.Ba,l=this.Aa,p=0,h;for(h of a.querySelectorAll(k))l.has(h)||h.querySelector(k)||(l.add(h),m.observe(h,{childList:!0,subtree:!0}),c&&(a=w(h,f))&&(d.observe(a,{childList:!0}),p++),B(h.getElementsByTagName("video"),this.L.bind(this)));
return p};e.Oa=function(a){var c=this.Ia,d;for(d of a){a=d.target.isSameNode(c);for(var f of d.addedNodes)1==f.nodeType&&this.wa(f,a)}};e.Na=function(a){var c=this.B,d=this.F,f;for(f of a)for(var k of f.addedNodes)if(1==k.nodeType)if(a=k.getElementsByTagName("video"),a.length)B(a,this.L.bind(this));else for(var m of c)(a=w(m,d))&&a.contains(k)&&this.L(m)};e.L=function(a){if(!a.i){var c=this.ba,d=this.ea,f=this.B,k=r.bind(["div","span","a"]),m,l,p,h,g=w(a,this.F),q=g&&g.querySelector(":scope >"+c);
for(d=q?0:d;d--&&g&&k(g.localName);g=g.parentNode){var n=g;if(q=w(g,c+":scope:first-child:only-of-type"))break;if((l=g.previousSibling)&&"div"==l.localName){m||(m=g.querySelector('div[role="slider"]'));1==(h=g.querySelectorAll(c)).length?q=h[0]:(p=g.nextSibling)&&1==(h=p.querySelectorAll("ul:scope "+c)).length?q=h[0]:m&&1<(h=l.querySelectorAll(c)).length&&(q=h[h.length-1]);break}}q?q=q.href:n&&1==(h=n.querySelectorAll(this.ia)).length&&(q=h[0].href);if(q){if(c=this.H.exec(q))q=null,c=c[1];f.delete(a);
a.c=q||c;this.K(a,c,q)}else f.add(a),a=this.s(a),f=this.fa,a&&f&&window.postMessage([1229212980,a,f],"/")}};e.Pa=function(a,c){if(a=this.h[a]){if(null==c){if(1<document.getElementsByTagName("video").length||!(c=this.H.exec(location.href)))return;c=c[1]}a.c=c;this.B.delete(a);this.K(a,c)}};e.bb=function(a){if(!a){this.M(this.ka);a=this.I;var c=new MutationObserver(this.$a.bind(this));c.observe(document.body,{childList:!0});var d=this.Ka=document.querySelector(this.ma);if(d){c.observe(d,{childList:!0});
for(var f of d.children)(f=L(f,a))&&c.observe(f,{childList:!0});B(d.getElementsByTagName("video"),this.za.bind(this))}}};e.$a=function(a,c){var d=document.body,f=this.Ka,k=this.I,m=this.la,l;for(l of a){a=l.target.isSameNode(d);var p=l.target.isSameNode(f),h;for(h of l.addedNodes)if(1==h.nodeType){var g=a&&m||p&&k||null;(g=g&&L(h,g))&&c.observe(g,{childList:!0});B(h.getElementsByTagName("video"),this.za.bind(this))}}};e.za=function(a){var c=a.getAttribute("poster");c&&this.K(a,null,c)};e.eb=function(a){a||
this.M(this.pa)};e.cb=function(a){if(!a){var c=document.querySelector(this.na);c&&(a=this.u(),c=c.outerHTML,this.a.postMessage([34,a,null,c.slice(0,c.indexOf(">")+1)]))}};function K(a,c){var d=a.startsWith("image/")?"img":"script";d=document.createElement(d);d.src="data:"+a+";base64,"+c;d.onload=d.remove.bind(d);document.documentElement.appendChild(d)}function w(a,c){var d;for(d=0;"<"==c[d];d++);for(a=a.closest(c.slice(d));a&&d--;a=a.parentNode);return a}function L(a,c){var d;for(d=0;"<"==c[d];d++);
for(a=a.querySelector(c.slice(d));a&&d--;a=a.parentNode);return a}function Q(a,c){c&&(a[c]=!0);return a}String.prototype.replaceAll||(String.prototype.replaceAll=function(a,c){return this.split(a).join(c)});new G}!0;
