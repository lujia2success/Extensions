'use strict';(h=>{let k;h.rea=k={globals:window,extend:function(a){const b=(d,f)=>{for(const e in d)if(d.hasOwnProperty(e)){var c=Object.getOwnPropertyDescriptor(d,e);if(c.get)Object.defineProperty(f,e,c);else{c=d[e];const g=typeof c;"undefined"!=g&&(null===c?f[e]=c:"object"==g?(f[e]=f[e]||(Array.isArray(c)?[]:{}),b(c,f[e])):f[e]=c)}}};b(a,h.rea)}};h.rea.extend({page:{reload:function(){window.location.reload()},eval:function(a){const b=document.createElementNS(document.lookupNamespaceURI(null)||"http://www.w3.org/1999/xhtml",
"script");b.textContent=a;(document.head||document.body||document.documentElement||document).appendChild(b);b.parentNode.removeChild(b)},addScript:function(a,b){const d=document.createElement("script");d.setAttribute("src",a);b&&(d.onload=()=>{b(!0)},d.onerror=()=>{b(!1)});(document.head||document.body||document.documentElement||document).appendChild(d)}},content:{onReady:function(a){const b=()=>{"prerender"!==document.webkitVisibilityState&&(document.removeEventListener("webkitvisibilitychange",
b,!1),a())};"prerender"!==document.webkitVisibilityState?a():document.addEventListener("webkitvisibilitychange",b,!1)}},runtime:(()=>{const a={};Object.defineProperty(a,"lastError",{get:function(){return chrome.runtime.lastError},enumerable:!0});Object.defineProperty(a,"id",{get:function(){return chrome.runtime.id},enumerable:!0});Object.defineProperty(a,"short_id",{get:function(){return a.id.replace(/[^0-9a-zA-Z]/g,"").substr(0,4)},enumerable:!0});return a})(),extension:{inIncognitoContext:chrome.extension.inIncognitoContext,
getURL:function(a){return chrome.runtime.getURL(a)},sendMessage:function(a,b){return chrome.runtime.sendMessage(a,b)},onMessage:{addListener:function(a){return chrome.runtime.onMessage.addListener(a)}},connect:function(a){return chrome.runtime.connect({name:a})}}});h.rea.extend((()=>{let a=20,b=!1,d=!1;try{b=-1!=navigator.userAgent.indexOf("Mac OS X")}catch(c){}try{a=parseInt(navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)[2])}catch(c){}try{d=-1!=navigator.userAgent.search(/Android|Mobile/)}catch(c){}const f=
{CONSTANTS:{STORAGE:{SCHEMA:"#schema",TYPE:"#storage",CONFIG:"#config",SESSION:"#session",VERSION:"#version",LEGACY_VERSION:"TM_version",LAST_START:"#laststart",UPDATE:"#update",BEGGING:"#begging"},PREFIX:{SCRIPT_UID:"@uid#",COND:"@re#",STORE:"@st#",SCRIPT:"@source#",EXTERNAL:"@ext#",META:"@meta#"}},RUNTIME:{BROWSER:"chrome",CHROME:!0,MOBILE:d,BROWSER_VERSION:a,FAST_EXEC_SUPPORT:!0,DETECT_CONSTRUCTORS_BY_KEYS:60<=a,ALLOWS_FILE_SCHEME_ACCESS:null,MAX_SCRIPTS:1E3,WEBREQUEST_XHR_SUPPORT:!0,WEBREQUEST_WEBSOCKET:!1,
CAN_SAVEAS_ZIP:!0,SHARED_OBJECT_URLS:!0,SHARED_BLOBS:!1,CONTEXT_MENU:!0,INCOGNITO_MODE:!0},ACTIONMENU:{CLOSE_ALLOWED:!0,MIN_DELAY:b?150:0},OPTIONPAGE:{CLOSE_ALLOWED:!1},DB:{USE:null,DEFAULT:"chromeStorage",SECURE:!1},XMLHTTPREQUEST:{RETRIES:0,PARTIAL_SIZE:8388608,COOKIE_PASSTHROUGH:!1},SCRIPT_DOWNLOAD:{TIMEOUT:60},PINGPONG:{RETRIES:2},MISC:{TIMEOUT:1,IDLE_TIMEOUT:15,DISTURBANCE_ALLOWED:60},HTML5:{LOCALSTORAGE:null},PERMISSIONS:{ALL_URLS:"<all_urls>"},REQUESTS:{HAS_SENDER_ID:!0,INTERNAL_PAGE_PROTOCOLS:["chrome-extension:"],
SENDS_ORIGIN:!0,GET_INTERNAL_PATH_REGEXP:function(c,e){const g=/(\/|\.|\+|\?|\||\(|\)|\[|\]|\{|\}|\\)/g;return new RegExp((f.REQUESTS.INTERNAL_PAGE_PROTOCOLS[0]+"//"+k.runtime.id+"/").replace(g,"\\$1")+"([a-zA-Z"+(c?"\\/":"")+"]*)"+(e||"").replace(g,"\\$1"))},GET_INTERNAL_PAGE_REGEXP:function(){return f.REQUESTS.GET_INTERNAL_PATH_REGEXP(!1,".html")}},OPTIONS:{HAS_CSP:!0,CAN_DOWNLOAD:!0}};return{FEATURES:f}})())})(window);
