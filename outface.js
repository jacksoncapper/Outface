/* Event Polyfill */
if(!document.createEvent){var DUNNOABOUTDOMLOADED=true,READYEVENTDISPATCHED=false,ONREADYSTATECHANGE='onreadystatechange',DOMCONTENTLOADED='DOMContentLoaded',SECRET='__IE8__'+Math.random(),defineProperty=Object.defineProperty||function(a,b,c){a[b]=c.value},defineProperties=Object.defineProperties||function(a,b){for(var c in b){if(hasOwnProperty.call(b,c)){try{defineProperty(a,c,b[c])}catch(o_O){if(window.console){console.log(c+' failed on object:',a,o_O.message)}}}}},getOwnPropertyDescriptor=Object.getOwnPropertyDescriptor,hasOwnProperty=Object.prototype.hasOwnProperty,ElementPrototype=window.Element.prototype,TextPrototype=window.Text.prototype,possiblyNativeEvent=/^[a-z]+$/,readyStateOK=/loaded|complete/,types={},div=document.createElement('div');function commonEventLoop(a,e,b,c){for(var d,handlers=b.slice(),evt=enrich(e,a),i=0,length=handlers.length;i<length;i++){handler=handlers[i];if(typeof handler==='object'&&typeof handler.handleEvent==='function'){handler.handleEvent(evt)}else{handler.call(a,evt)}if(evt.stoppedImmediatePropagation)break}d=!evt.stoppedPropagation;return(c&&d&&a.parentNode)?a.parentNode.dispatchEvent(evt):!evt.defaultPrevented}function commonDescriptor(a,b){return{configurable:true,get:a,set:b}}function commonTextContent(b,c,d){var e=getOwnPropertyDescriptor(c||b,d);defineProperty(b,'textContent',commonDescriptor(function(){return e.get.call(this)},function(a){e.set.call(this,a)}))}function enrich(e,a){e.currentTarget=a;e.eventPhase=(e.target===e.currentTarget?2:3);return e}function find(a,b){var i=a.length;while(i--&&a[i]!==b);return i}function getTextContent(){if(this.tagName==='BR')return'\n';var a=this.firstChild,arrayContent=[];while(a){if(a.nodeType!==8&&a.nodeType!==7){arrayContent.push(a.textContent)}a=a.nextSibling}return arrayContent.join('')}function live(a){return a.nodeType!==9&&document.documentElement.contains(a)}function onReadyState(e){if(!READYEVENTDISPATCHED&&readyStateOK.test(document.readyState)){READYEVENTDISPATCHED=!READYEVENTDISPATCHED;document.detachEvent(ONREADYSTATECHANGE,onReadyState);e=document.createEvent('Event');e.initEvent(DOMCONTENTLOADED,true,true);document.dispatchEvent(e)}}function setTextContent(a){var b;while((b=this.lastChild)){this.removeChild(b)}if(a!=null){this.appendChild(document.createTextNode(a))}}function verify(a,e){if(!e){e=window.event}if(!e.target){e.target=e.srcElement||e.fromElement||document}if(!e.timeStamp){e.timeStamp=(new Date).getTime()}return e}commonTextContent(window.HTMLCommentElement.prototype,ElementPrototype,'nodeValue');commonTextContent(window.HTMLScriptElement.prototype,null,'text');commonTextContent(TextPrototype,null,'nodeValue');commonTextContent(window.HTMLTitleElement.prototype,null,'text');defineProperty(window.HTMLStyleElement.prototype,'textContent',(function(b){return commonDescriptor(function(){return b.get.call(this.styleSheet)},function(a){b.set.call(this.styleSheet,a)})}(getOwnPropertyDescriptor(window.CSSStyleSheet.prototype,'cssText'))));defineProperties(ElementPrototype,{textContent:{get:getTextContent,set:setTextContent},firstElementChild:{get:function(){for(var a=this.childNodes||[],i=0,length=a.length;i<length;i++){if(a[i].nodeType==1)return a[i]}}},lastElementChild:{get:function(){for(var a=this.childNodes||[],i=a.length;i--;){if(a[i].nodeType==1)return a[i]}}},previousElementSibling:{get:function(){var a=this.previousSibling;while(a&&a.nodeType!=1){a=a.previousSibling}return a}},nextElementSibling:{get:function(){var a=this.nextSibling;while(a&&a.nodeType!=1){a=a.nextSibling}return a}},childElementCount:{get:function(){for(var a=0,childNodes=this.childNodes||[],i=childNodes.length;i--;a+=childNodes[i].nodeType==1);return a}},addEventListener:{value:function(a,b,c){var d=this,ontype='on'+a,temple=d[SECRET]||defineProperty(d,SECRET,{value:{}})[SECRET],currentType=temple[ontype]||(temple[ontype]={}),handlers=currentType.h||(currentType.h=[]),e;if(!hasOwnProperty.call(currentType,'w')){currentType.w=function(e){return e[SECRET]||commonEventLoop(d,verify(d,e),handlers,false)};if(!hasOwnProperty.call(types,ontype)){if(possiblyNativeEvent.test(a)){try{e=document.createEventObject();e[SECRET]=true;if(d.nodeType!=9&&d.parentNode==null){div.appendChild(d)}d.fireEvent(ontype,e);types[ontype]=true}catch(e){types[ontype]=false;while(div.hasChildNodes()){div.removeChild(div.firstChild)}}}else{types[ontype]=false}}if(currentType.n=types[ontype]){d.attachEvent(ontype,currentType.w)}}if(find(handlers,b)<0){handlers[c?'unshift':'push'](b)}}},dispatchEvent:{value:function(e){var a=this,ontype='on'+e.type,temple=a[SECRET],currentType=temple&&temple[ontype],valid=!!currentType,parentNode;if(!e.target)e.target=a;return(valid?(currentType.n?a.fireEvent(ontype,e):commonEventLoop(a,e,currentType.h,true)):((parentNode=a.parentNode)?parentNode.dispatchEvent(e):true)),!e.defaultPrevented}},removeEventListener:{value:function(a,b,c){var d=this,ontype='on'+a,temple=d[SECRET],currentType=temple&&temple[ontype],handlers=currentType&&currentType.h,i=handlers?find(handlers,b):-1;if(-1<i)handlers.splice(i,1)}}});defineProperties(TextPrototype,{addEventListener:{value:ElementPrototype.addEventListener},dispatchEvent:{value:ElementPrototype.dispatchEvent},removeEventListener:{value:ElementPrototype.removeEventListener}});defineProperties(window.XMLHttpRequest.prototype,{addEventListener:{value:function(a,b,c){var d=this,ontype='on'+a,temple=d[SECRET]||defineProperty(d,SECRET,{value:{}})[SECRET],currentType=temple[ontype]||(temple[ontype]={}),handlers=currentType.h||(currentType.h=[]);if(find(handlers,b)<0){if(!d[ontype]){d[ontype]=function(){var e=document.createEvent('Event');e.initEvent(a,true,true);d.dispatchEvent(e)}}handlers[c?'unshift':'push'](b)}}},dispatchEvent:{value:function(e){var a=this,ontype='on'+e.type,temple=a[SECRET],currentType=temple&&temple[ontype],valid=!!currentType;return valid&&(currentType.n?a.fireEvent(ontype,e):commonEventLoop(a,e,currentType.h,true))}},removeEventListener:{value:ElementPrototype.removeEventListener}});defineProperties(window.Event.prototype,{bubbles:{value:true,writable:true},cancelable:{value:true,writable:true},preventDefault:{value:function(){if(this.cancelable){this.defaultPrevented=true;this.returnValue=false}}},stopPropagation:{value:function(){this.stoppedPropagation=true;this.cancelBubble=true}},stopImmediatePropagation:{value:function(){this.stoppedImmediatePropagation=true;this.stopPropagation()}},initEvent:{value:function(a,b,c){this.type=a;this.bubbles=!!b;this.cancelable=!!c;if(!this.bubbles){this.stopPropagation()}}}});defineProperties(window.HTMLDocument.prototype,{textContent:{get:function(){return this.nodeType===11?getTextContent.call(this):null},set:function(a){if(this.nodeType===11){setTextContent.call(this,a)}}},addEventListener:{value:function(a,b,c){var d=this;ElementPrototype.addEventListener.call(d,a,b,c);if(DUNNOABOUTDOMLOADED&&a===DOMCONTENTLOADED&&!readyStateOK.test(d.readyState)){DUNNOABOUTDOMLOADED=false;d.attachEvent(ONREADYSTATECHANGE,onReadyState);if(window==top){(function gonna(e){try{d.documentElement.doScroll('left');onReadyState()}catch(o_O){setTimeout(gonna,50)}}())}}}},dispatchEvent:{value:ElementPrototype.dispatchEvent},removeEventListener:{value:ElementPrototype.removeEventListener},createEvent:{value:function(a){var e;if(a!=='Event')throw new Error('unsupported '+a);e=document.createEventObject();e.timeStamp=(new Date).getTime();return e}}});defineProperties(window.Window.prototype,{getComputedStyle:{value:function(){var c=/^(?:[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|))(?!px)[a-z%]+$/,position=/^(top|right|bottom|left)$/,re=/\-([a-z])/g,place=function(a,b){return b.toUpperCase()};function ComputedStyle(_){this._=_}ComputedStyle.prototype.getPropertyValue=function(a){var b=this._,style=b.style,currentStyle=b.currentStyle,runtimeStyle=b.runtimeStyle,result,left,rtLeft;a=(a==='float'?'style-float':a).replace(re,place);result=currentStyle?currentStyle[a]:style[a];if(c.test(result)&&!position.test(a)){left=style.left;rtLeft=runtimeStyle&&runtimeStyle.left;if(rtLeft){runtimeStyle.left=currentStyle.left}style.left=a==='fontSize'?'1em':result;result=style.pixelLeft+'px';style.left=left;if(rtLeft){runtimeStyle.left=rtLeft}}return result==null?result:((result+'')||'auto')};function PseudoComputedStyle(){}PseudoComputedStyle.prototype.getPropertyValue=function(){return null};return function(a,b){return b?new PseudoComputedStyle(a):new ComputedStyle(a)}}()},addEventListener:{value:function(a,b,c){var d=window,ontype='on'+a,handlers;if(!d[ontype]){d[ontype]=function(e){return commonEventLoop(d,verify(d,e),handlers,false)}}handlers=d[ontype][SECRET]||(d[ontype][SECRET]=[]);if(find(handlers,b)<0){handlers[c?'unshift':'push'](b)}}},dispatchEvent:{value:function(e){var a=window['on'+e.type];return a?a.call(window,e)!==false&&!e.defaultPrevented:true}},removeEventListener:{value:function(a,b,c){var d='on'+a,handlers=(window[d]||Object)[SECRET],i=handlers?find(handlers,b):-1;if(-1<i)handlers.splice(i,1)}}})}
(function(g){'use strict';function textNodeIfString(a){return typeof a==='string'?g.document.createTextNode(a):a}function mutationMacro(a){if(a.length===1){return textNodeIfString(a[0])}for(var b=g.document.createDocumentFragment(),list=slice.call(a),i=0;i<a.length;i++){b.appendChild(textNodeIfString(list[i]))}return b}for(var h=Object.defineProperty||function(a,b,c){a.__defineGetter__(b,c.get)},indexOf=[].indexOf||function indexOf(a){var b=this.length;while(b--){if(this[b]===a){break}}return b},head,property,verifyToken,DOMTokenList,trim=/^\s+|\s+$/g,spaces=/\s+/,SPACE='\x20',toggle=function toggle(a,b){if(this.contains(a)){if(!b){this.remove(a)}}else if(b===undefined||b){b=true;this.add(a)}return!!b},ElementPrototype=(g.Element||g.Node||g.HTMLElement).prototype,properties=['matches',(ElementPrototype.matchesSelector||ElementPrototype.webkitMatchesSelector||ElementPrototype.khtmlMatchesSelector||ElementPrototype.mozMatchesSelector||ElementPrototype.msMatchesSelector||ElementPrototype.oMatchesSelector||function matches(a){var b=this.parentNode;return!!b&&-1<indexOf.call(b.querySelectorAll(a),this)}),'closest',function closest(a){var b=this,matches;while((matches=b&&b.matches)&&!b.matches(a)){b=b.parentNode}return matches?b:null},'prepend',function prepend(){var a=this.firstChild,node=mutationMacro(arguments);if(a){this.insertBefore(node,a)}else{this.appendChild(node)}},'append',function append(){this.appendChild(mutationMacro(arguments))},'before',function before(){var a=this.parentNode;if(a){a.insertBefore(mutationMacro(arguments),this)}},'after',function after(){var a=this.parentNode,nextSibling=this.nextSibling,node=mutationMacro(arguments);if(a){if(nextSibling){a.insertBefore(node,nextSibling)}else{a.appendChild(node)}}},'replace',function replace(){this.replaceWith.apply(this,arguments)},'replaceWith',function replaceWith(){var a=this.parentNode;if(a){a.replaceChild(mutationMacro(arguments),this)}},'remove',function remove(){var a=this.parentNode;if(a){a.removeChild(this)}}],slice=properties.slice,i=properties.length;i;i-=2){property=properties[i-2];if(!(property in ElementPrototype)){ElementPrototype[property]=properties[i-1]}}if(!document.createElement('a').matches('a')){ElementPrototype[property]=function(b){return function(a){return b.call(this.parentNode?this:document.createDocumentFragment().appendChild(this),a)}}(ElementPrototype[property])}if(!('classList'in document.documentElement)){verifyToken=function(a){if(!a){throw'SyntaxError';}else if(spaces.test(a)){throw'InvalidCharacterError';}return a};DOMTokenList=function(a){var b=a.className.replace(trim,'');if(b.length){properties.push.apply(this,b.split(spaces))}this._=a};DOMTokenList.prototype={length:0,add:function add(){for(var j=0,token;j<arguments.length;j++){token=arguments[j];if(!this.contains(token)){properties.push.call(this,property)}}this._.className=''+this},contains:(function(b){return function contains(a){i=b.call(this,property=verifyToken(a));return-1<i}}([].indexOf||function(a){i=this.length;while(i--&&this[i]!==a){}return i})),item:function item(i){return this[i]||null},remove:function remove(){for(var j=0,token;j<arguments.length;j++){token=arguments[j];if(this.contains(token)){properties.splice.call(this,i,1)}}this._.className=''+this},toggle:toggle,toString:function toString(){return properties.join.call(this,SPACE)}};h(ElementPrototype,'classList',{get:function get(){return new DOMTokenList(this)},set:function(){}})}else{DOMTokenList=document.createElement('div').classList;DOMTokenList.add('a','b','a');if('a\x20b'!=DOMTokenList){ElementPrototype=DOMTokenList.constructor.prototype;if(!('add'in ElementPrototype)){ElementPrototype=g.DOMTokenList.prototype}verifyToken=function(a){return function(){var i=0;while(i<arguments.length){a.call(this,arguments[i++])}}};ElementPrototype.add=verifyToken(ElementPrototype.add);ElementPrototype.remove=verifyToken(ElementPrototype.remove);ElementPrototype.toggle=toggle}}if(!('head'in document)){h(document,'head',{get:function(){return head||(head=document.getElementsByTagName('head')[0])}})}try{new g.CustomEvent('?')}catch(o_O){g.CustomEvent=function(e,f){function CustomEvent(a,b){var c=document.createEvent(e);if(typeof a!='string'){throw new Error('An event name must be provided');}if(e=='Event'){c.initCustomEvent=initCustomEvent}if(b==null){b=f}c.initCustomEvent(a,b.bubbles,b.cancelable,b.detail);return c}function initCustomEvent(a,b,c,d){this.initEvent(a,b,c);this.detail=d}return CustomEvent}(g.CustomEvent?'CustomEvent':'Event',{bubbles:false,cancelable:false,detail:null})}}(window));
/* Current Script Polyfill */
(function(){function o(e){if(typeof e==="string"&&e){for(var t=0,n=s.length;t<n;t++){if(s[t].src===e){return s[t]}}}}function u(){var e;for(var t=0,n=s.length;t<n;t++){if(!s[t].src){if(e){return undefined}e=s[t]}}return e}function a(e,t){var n,r,i,s=typeof t==="number";t=s?t:typeof f.skipStackDepth==="number"?f.skipStackDepth:0;if(typeof e==="string"&&e){if(s){r=e.match(/((?:http[s]?|file):\/\/[\/]?.+?\/[^:\)]*?)(?::\d+)(?::\d+)?/)}else{r=e.match(/^(?:|[^:@]*@|.+\)@(?=http[s]?|file)|.+?\s+(?: at |@)(?:[^:\(]+ )*[\(]?)((?:http[s]?|file):\/\/[\/]?.+?\/[^:\)]*?)(?::\d+)(?::\d+)?/);if(!(r&&r[1])){r=e.match(/\)@((?:http[s]?|file):\/\/[\/]?.+?\/[^:\)]*?)(?::\d+)(?::\d+)?/);if(r&&r[1]){n=r[1]}}}if(r&&r[1]){if(t>0){i=e.slice(e.indexOf(r[0])+r[0].length);n=a(i,t-1)}else{n=r[1]}}}return n}function f(){if(s.length===0){return}if(s.length===1){return s[0]}if("readyState"in s[0]){for(var e=s.length;e--;){if(s[e].readyState==="interactive"){return s[e]}}}if(document.readyState==="loading"){return s[s.length-1]}if(r){try{throw new Error}catch(t){var n=a(t.stack);var f=o(n);if(!f&&n===i){f=u()}return f}}}var e=!("currentScript"in document);var t=document.__defineGetter__;var n=typeof Object.defineProperty==="function"&&function(){var e;try{Object.defineProperty(document,"_xyz",{value:"blah",enumerable:true,writable:false,configurable:false});e=document._xyz==="blah";delete document._xyz}catch(t){e=false}return e}();var r=function(){var e=false;try{throw new Error}catch(t){e=typeof t.stack==="string"&&!!t.stack}return e}();var i=window.location.href;var s=document.getElementsByTagName("script");f.skipStackDepth=1;document._currentScript=f;if(e){if(n){Object.defineProperty(document,"currentScript",{get:f,enumerable:true,configurable:false})}else if(t){document.__defineGetter__("currentScript",f)}}})();
document.currentScript = document.currentScript === undefined ? document._currentScript() : document.currentScript;
/* Check Transition Support */
var transitionSupport = document.documentElement.style.webkitTransition !== undefined || document.documentElement.style.transition !== undefined;
/* Placeholder Polyfill */
!function(a){"use strict";function b(){}function c(){try{return document.activeElement}catch(a){}}function d(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return!0;return!1}function e(a,b,c){return a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent?a.attachEvent("on"+b,c):void 0}function f(a,b){var c;a.createTextRange?(c=a.createTextRange(),c.move("character",b),c.select()):a.selectionStart&&(a.focus(),a.setSelectionRange(b,b))}function g(a,b){try{return a.type=b,!0}catch(c){return!1}}function h(a,b){if(a&&a.getAttribute(B))b(a);else for(var c,d=a?a.getElementsByTagName("input"):N,e=a?a.getElementsByTagName("textarea"):O,f=d?d.length:0,g=e?e.length:0,h=f+g,i=0;h>i;i++)c=f>i?d[i]:e[i-f],b(c)}function i(a){h(a,k)}function j(a){h(a,l)}function k(a,b){var c=!!b&&a.value!==b,d=a.value===a.getAttribute(B);if((c||d)&&"true"===a.getAttribute(C)){a.removeAttribute(C),a.value=a.value.replace(a.getAttribute(B),""),a.className=a.className.replace(A,"");var e=a.getAttribute(I);parseInt(e,10)>=0&&(a.setAttribute("maxLength",e),a.removeAttribute(I));var f=a.getAttribute(D);return f&&(a.type=f),!0}return!1}function l(a){var b=a.getAttribute(B);if(""===a.value&&b){a.setAttribute(C,"true"),a.value=b,a.className+=" "+z;var c=a.getAttribute(I);c||(a.setAttribute(I,a.maxLength),a.removeAttribute("maxLength"));var d=a.getAttribute(D);return d?a.type="text":"password"===a.type&&g(a,"text")&&a.setAttribute(D,"password"),!0}return!1}function m(a){return function(){P&&a.value===a.getAttribute(B)&&"true"===a.getAttribute(C)?f(a,0):k(a)}}function n(a){return function(){l(a)}}function o(a){return function(){i(a)}}function p(a){return function(b){return v=a.value,"true"===a.getAttribute(C)&&v===a.getAttribute(B)&&d(x,b.keyCode)?(b.preventDefault&&b.preventDefault(),!1):void 0}}function q(a){return function(){k(a,v),""===a.value&&(a.blur(),f(a,0))}}function r(a){return function(){a===c()&&a.value===a.getAttribute(B)&&"true"===a.getAttribute(C)&&f(a,0)}}function s(a){var b=a.form;b&&"string"==typeof b&&(b=document.getElementById(b),b.getAttribute(E)||(e(b,"submit",o(b)),b.setAttribute(E,"true"))),e(a,"focus",m(a)),e(a,"blur",n(a)),P&&(e(a,"keydown",p(a)),e(a,"keyup",q(a)),e(a,"click",r(a))),a.setAttribute(F,"true"),a.setAttribute(B,T),(P||a!==c())&&l(a)}var t=document.createElement("input"),u=void 0!==t.placeholder;if(a.Placeholders={nativeSupport:u,disable:u?b:i,enable:u?b:j},!u){var v,w=["text","search","url","tel","email","password","number","textarea"],x=[27,33,34,35,36,37,38,39,40,8,46],y="#ccc",z="placeholdersjs",A=new RegExp("(?:^|\\s)"+z+"(?!\\S)"),B="data-placeholder-value",C="data-placeholder-active",D="data-placeholder-type",E="data-placeholder-submit",F="data-placeholder-bound",G="data-placeholder-focus",H="data-placeholder-live",I="data-placeholder-maxlength",J=100,K=document.getElementsByTagName("head")[0],L=document.documentElement,M=a.Placeholders,N=document.getElementsByTagName("input"),O=document.getElementsByTagName("textarea"),P="false"===L.getAttribute(G),Q="false"!==L.getAttribute(H),R=document.createElement("style");R.type="text/css";var S=document.createTextNode("."+z+" {color:"+y+";}");R.styleSheet?R.styleSheet.cssText=S.nodeValue:R.appendChild(S),K.insertBefore(R,K.firstChild);for(var T,U,V=0,W=N.length+O.length;W>V;V++)U=V<N.length?N[V]:O[V-N.length],T=U.attributes.placeholder,T&&(T=T.nodeValue,T&&d(w,U.type)&&s(U));var X=setInterval(function(){for(var a=0,b=N.length+O.length;b>a;a++)U=a<N.length?N[a]:O[a-N.length],T=U.attributes.placeholder,T?(T=T.nodeValue,T&&d(w,U.type)&&(U.getAttribute(F)||s(U),(T!==U.getAttribute(B)||"password"===U.type&&!U.getAttribute(D))&&("password"===U.type&&!U.getAttribute(D)&&g(U,"text")&&U.setAttribute(D,"password"),U.value===U.getAttribute(B)&&(U.value=T),U.setAttribute(B,T)))):U.getAttribute(C)&&(k(U),U.removeAttribute(B));Q||clearInterval(X)},J);e(a,"beforeunload",function(){M.disable()})}}(this);
/* Classlist Polyfill */
if("document" in self){if(!("classList" in document.createElement("_"))){(function(j){"use strict";if(!("Element" in j)){return}var a="classList",f="prototype",m=j.Element[f],b=Object,k=String[f].trim||function(){return this.replace(/^\s+|\s+$/g,"")},c=Array[f].indexOf||function(q){var p=0,o=this.length;for(;p<o;p++){if(p in this&&this[p]===q){return p}}return -1},n=function(o,p){this.name=o;this.code=DOMException[o];this.message=p},g=function(p,o){if(o===""){throw new n("SYNTAX_ERR","An invalid or illegal string was specified")}if(/\s/.test(o)){throw new n("INVALID_CHARACTER_ERR","String contains an invalid character")}return c.call(p,o)},d=function(s){var r=k.call(s.getAttribute("class")||""),q=r?r.split(/\s+/):[],p=0,o=q.length;for(;p<o;p++){this.push(q[p])}this._updateClassName=function(){s.setAttribute("class",this.toString())}},e=d[f]=[],i=function(){return new d(this)};n[f]=Error[f];e.item=function(o){return this[o]||null};e.contains=function(o){o+="";return g(this,o)!==-1};e.add=function(){var s=arguments,r=0,p=s.length,q,o=false;do{q=s[r]+"";if(g(this,q)===-1){this.push(q);o=true}}while(++r<p);if(o){this._updateClassName()}};e.remove=function(){var t=arguments,s=0,p=t.length,r,o=false,q;do{r=t[s]+"";q=g(this,r);while(q!==-1){this.splice(q,1);o=true;q=g(this,r)}}while(++s<p);if(o){this._updateClassName()}};e.toggle=function(p,q){p+="";var o=this.contains(p),r=o?q!==true&&"remove":q!==false&&"add";if(r){this[r](p)}if(q===true||q===false){return q}else{return !o}};e.toString=function(){return this.join(" ")};if(b.defineProperty){var l={get:i,enumerable:true,configurable:true};try{b.defineProperty(m,a,l)}catch(h){if(h.number===-2146823252){l.enumerable=false;b.defineProperty(m,a,l)}}}else{if(b[f].__defineGetter__){m.__defineGetter__(a,i)}}}(self))}else{(function(){var b=document.createElement("_");b.classList.add("c1","c2");if(!b.classList.contains("c2")){var c=function(e){var d=DOMTokenList.prototype[e];DOMTokenList.prototype[e]=function(h){var g,f=arguments.length;for(g=0;g<f;g++){h=arguments[g];d.call(this,h)}}};c("add");c("remove")}b.classList.toggle("c3",false);if(b.classList.contains("c3")){var a=DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle=function(d,e){if(1 in arguments&&!this.contains(d)===!e){return e}else{return a.call(this,d)}}}b=null}())}};
/* HTML5 Tag Polyfill */
var html5tags = ["header", "section", "article", "aside", "nav", "footer"];
for(i in html5tags)
	document.createElement(html5tags[i]);
document.head = document.getElementsByTagName("head")[0];

/* Meta */
var Outface_path = document.currentScript.src.substring(0, document.currentScript.src.lastIndexOf("/"));
var Outface_webappPath = typeof Outface_webappPath != "undefined" ? Outface_webappPath : "/media";
var Outface_webapp = typeof Outface_webapp != "undefined" ? Outface_webapp : false;
var metas = [
	{ tag:"link", rel:"stylesheet", type:"text/css", href:Outface_path + "/utility/outface.css" },
	{ tag:"link", rel:"stylesheet", type:"text/css", href:Outface_path + "/media/font-awesome-4.2.0/css/font-awesome.min.css" },
	{ tag:"link", rel:"icon", href:Outface_webappPath + "/icon.png" },
	{ tag:"link", rel:"apple-touch-icon-precomposed", href:Outface_webappPath + "/icon.png" },
	{ tag:"link", media:"(device-width:320px)", rel:"apple-touch-startup-image", href:Outface_webappPath + "/iphone.jpg" },
	{ tag:"link", media:"(device-width:768px)", rel:"apple-touch-startup-image", href:Outface_webappPath + "/ipad.jpg" },
	{ tag:"meta", name:"viewport", content:"width=device-width,initial-scale=1,user-scalable=no" },
	{ tag:"meta", name:"format-detection", content:"telephone=no" },
	{ tag:"meta", name:"msapplication-tap-highlight", content:"no" },
	{ tag:"meta", name:"apple-mobile-web-app-capable", content:"yes" },
	{ tag:"meta", name:"apple-mobile-web-app-status-bar-style", content:"black" },
	{ tag:"meta", name:"mobile-web-app-capable", content:"yes" },
	{ tag:"script", src:Outface_path + "/utility/fastclick1.0.3.js" },
	{ tag:"script", src:Outface_path + "/utility/bowser0.7.2.js" },
	{ tag:"script", src:Outface_path + "/utility/iscroll5.1.3.js" }
];
var Outface_scriptCount = 0;
var Outface_scriptLoadedCount = 0;
for(var i = 0; i < metas.length; i++){
	var meta = document.createElement(metas[i].tag);
	for(var attributeName in metas[i])
		if(attributeName != "tag" && attributeName != "innerHTML")
			meta.setAttribute(attributeName, metas[i][attributeName]);
		else if(attributeName == "innerHTML")
			meta.innerHTML = metas[i]["innerHTML"];
	if(metas[i].tag == "link" && metas[i].rel == "stylesheet" && document.createStyleSheet){ // IE8
		document.createStyleSheet(metas[i].href);
		continue;
	}
	else if(metas[i].tag == "script"){
		Outface_scriptCount++;
		meta.onreadystatechange = meta.onload = function(){
			if(this.readyState == "loaded" || this.readyState == undefined)
				Outface_scriptLoadedCount++;
		}; // IE8
	}
	document.head.appendChild(meta);
}

/* Core */
var Outface = {};
Outface._priority = [];
Outface._curtain = function(section){
	var curtain = document.createElement("div");
	curtain.className = "curtain";
	if(!section.classList.contains("modal")){
		curtain.addEventListener("mousedown", function(e){ if(e.target == curtain) Outface.close(section); });
		curtain.addEventListener("touchstart", function(e){ if(e.target == curtain) Outface.close(section); });
	}
	section.parentNode.insertBefore(curtain, section);
	section.curtain = curtain;
	curtain.style.opacity = "0";
	curtain.style.webkitTransition = curtain.style.transition = "none";
	curtain.offsetHeight;
	curtain.style.opacity = "";
	curtain.style.webkitTransition = curtain.style.transition = "";
	
	section.addEventListener("close", function(){ curtain.style.opacity = "0"; });
	
	var closed = function(){
		section.removeEventListener("closed", closed);
		curtain.parentNode.removeChild(curtain);
		delete curtain;
		delete section.curtain;
	};
	section.addEventListener("closed", closed);
};
Outface._getLayoutClass = function(section){
	var layoutClass = null;
	layoutClass = section.classList.contains("page") ? "page" : layoutClass;
	layoutClass = section.classList.contains("prompt") ? "prompt" : layoutClass;
	layoutClass = section.classList.contains("notify") ? "notify" : layoutClass;
	layoutClass = section.classList.contains("dialog") ? "dialog" : layoutClass;
	return layoutClass;
};
Outface._event = function(element, name, data, cascade){
	cascade = cascade != null ? cascade : true;
	if(element[name] != null)
		element[name](data);
	element.dispatchEvent(new CustomEvent(name, { detail:data }));
	if(cascade){
		var children = element.childNodes;
		for(var i = 0; i < element.length; i++){
			var child = children[i];
			if(child.nodeType == 1)
				Outface._event(child, name, data);
		}
	}
};
Outface._preventScrollClick = function(element, e){
	while(element.iscroll == null)
		element = element.parentNode;
	if(element.iscroll.moved){
		e.preventDefault;
		return false;
	}
	return true;
};
Outface._open = function(section, data, _root){
	_root = _root != null ? _root : true;
	if(section.classList.contains("open") && !section.classList.contains("closing"))
		return false;

	section.classList.add("open");
	section.classList.add("opening");
	section.classList.remove("closing");
	
	Outface._event(section, "open", data, false);
	
	section.removeEventListener("transitionend", section.transitionend);
	clearTimeout(section.transitionendTimeout);
	section.transitionend = function(e){
		if(e.target != section)
			return;
		section.removeEventListener("transitionend", section.transitionend);
		delete section.transitionend;
		clearTimeout(section.transitionendTimeout);
		delete section.transitionendTimeout;
		
		section.classList.add("open");
		section.classList.remove("opening");
		section.classList.remove("closing");
		
		Outface._event(section, "opened", data);
	};
	section.addEventListener("transitionend", section.transitionend);
	section.transitionendTimeout = setTimeout(function(){ section.transitionend({ target:section }); }, 1000);
	if(!transitionSupport)
		section.transitionend({ target:section });

	var layoutClass = Outface._getLayoutClass(section);	
	if(layoutClass != null)
		Outface[layoutClass]._open(section);
	
	var index = Outface._priority.indexOf(section);
	if(index > -1)
		Outface._priority.splice(index, 1);
	Outface._priority.push(section);
	
	if(!_root) // Force in place as child
		setTimeout(function(section){
			section.style.webkitTransition = section.style.transition = "none";
			section.offsetHeight;
			section.style.webkitTransition = section.style.transition = "";
		}, 0, section);

	function cascadeOpen(parent){
		for(var i = 0; i < parent.childNodes.length; i++){
			var child = parent.childNodes[i];
			if(child.nodeType == 1 && Outface._getLayoutClass(child) != null){
				if(child.classList.contains("open") && !child.classList.contains("closing")){
					child.classList.remove("open");
					Outface._open(child, data, false);
				}
			}
			else
				cascadeOpen(child);
		}
	}
	cascadeOpen(section);
	
	if(_root) // Needed for iScroll in case of new width
		Outface.register(section.parentNode);
	
	return true;
};
Outface._close = function(section, data){
	if(!section.classList.contains("open") || section.classList.contains("closing"))
		return false;
	
	section.classList.add("open");
	section.classList.add("closing");
	section.classList.remove("opening");

	Outface._event(section, "close", data);

	section.removeEventListener("transitionend", section.transitionend);
	clearTimeout(section.transitionendTimeout);
	section.transitionend = function(e){
		if(e.target != section)
			return;
		section.removeEventListener("transitionend", section.transitionend);
		delete section.transitionend;
		clearTimeout(section.transitionendTimeout);
		delete section.transitionendTimeout;

		section.classList.remove("open");
		section.classList.remove("opening");
		section.classList.remove("closing");
		
		Outface._event(section, "closed", data);
	};
	section.addEventListener("transitionend", section.transitionend);
	section.transitionendTimeout = setTimeout(function(){ section.transitionend({ target:section }); }, 1000);
	if(!transitionSupport)
		section.transitionend({ target:section });
	
	var layoutClass = Outface._getLayoutClass(section);
	if(layoutClass != null)
		Outface[layoutClass]._close(section, data);
	
	var index = Outface._priority.indexOf(section);
	if(index > -1)
		Outface._priority.splice(index, 1);
	Outface._priority.splice(0, 0, section);
	
	return true;
};
Outface.script = function(){
	return document.scripts[document.scripts.length - 1].parentNode;
};
Outface.register = function(element, context, data){
	if(element.hasAttribute("template"))
		return;
	
	if(context == null){
		var context = element.tagName != "BODY" ? element.parentNode : element;
		while(context != null && context.tagName.toUpperCase() != "SECTION" && context.tagName != "BODY")
			context = context.parentNode;
		if(element.tagName.toUpperCase() == "SECTION"){
			element.context = context;
			context = element;
		}
	}
	for(var i = 0; i < element.childNodes.length; i++)
		if(element.childNodes[i].nodeType == 1){
			var child = element.childNodes[i];
			child.context = context;
			if(child.hasAttribute("name"))
				context[child.getAttribute("name")] = child;
			Outface.register(child, child.tagName.toUpperCase() != "SECTION" ? context : child, data);
		}
		
	if(element.register != null){
		element.registerx = element.register;
		element.register = null;
		element.registerx(data);
		element.registerx = null;
	}
	
	// iScroll
	if(element.classList.contains("scroll") || element.classList.contains("scroll-x") || element.classList.contains("scroll-y")){
		var scrollX = element.classList.contains("scroll-x");
		var scrollY = element.classList.contains("scroll-y");
		var scrollFree = element.classList.contains("scroll-free");
		if(!scrollX && !scrollY)
			scrollX = scrollY = true;
		var config = {
			scrollX : scrollX,
			scrollY : scrollY,
			mouseWheel: true,
			preventDefaultException:{tagName:/.*/},
			eventPassthrough: true,
			preventDefault: false
		};
		if(element.iscrollConfig && JSON.stringify(element.iscrollConfig) != JSON.stringify(config)){
			element.iscroll.destroy();
			element.iscroll = null;
			element.iscrollConfig = null;
		}
		if(!element.iscroll){
			element.iscroll = new IScroll(element, config);
			element.iscrollConfig = config;
		}
		else
			setTimeout(function(){ element.iscroll.refresh(); }, 250);
		var clickers = element.getElementsByTagName("a");
		for(var i = 0; i < clickers.length; i++)
			clickers[i].setAttribute("onclick", "if(!Outface._preventScrollClick(this, event)) return false;" + clickers[i].getAttribute("onclick"));
	}
};
Outface.clone = function(template, data){
	var clone = template.cloneNode(true);
	clone.removeAttribute("id");
	clone.removeAttribute("name");
	clone.removeAttribute("template");
	clone.setAttribute("templated", "");
	clone.register = template.register;
	var elements = template.getElementsByTagName("*");
	var cloneElements = clone.getElementsByTagName("*");
	for(var i = 0; i < cloneElements.length; i++)
		cloneElements[i].register = elements[i].register;
	if(template.parentNode != null)
		template.parentNode.insertBefore(clone, template);
	Outface.register(clone, null, data);
	return clone;
};
Outface.open = function(section, data){
	if(Outface._open(section, data))
		Outface.history.pushState(section.parentNode, [{
			section: section,
			action: "open",
			data: data
		}]);
};
Outface.close = function(section, data){
	if(Outface._close(section, data))
		Outface.history.pushState(section.parentNode, [{
			section: section,
			action: "close",
			data: data
		}]);
};
Outface.openX = function(section, data){
	var state = [];
	if(Outface._open(section, data))
		state.push({
			section: section,
			action: "open",
			data: data
		});
	var siblings = section.parentNode.childNodes;
	for(var i = 0; i < siblings.length; i++){
		var sibling = siblings[i];
		if(sibling.nodeType == 1 && sibling != section)
			if(Outface._getLayoutClass(sibling) == "page")
				if(Outface._close(sibling, data))
					state.push({
						section: sibling,
						action: "close",
						data: data
					});
	}
	Outface.history.pushState(section.parentNode, state);
};
window.addEventListener("load", function(){
	function load(){
		if(Outface_scriptLoadedCount < Outface_scriptCount){
			setTimeout(load, 100);
			return;
		}
		FastClick.attach(document.body);
		if(Outface_webapp)
			Outface.webapp();
		else
			Outface.upbrowse();
		Outface.register(document.body);
	}
	load();
});

/* Theme */
Outface.theme = {};
Outface.theme.prime = typeof Outface_theme_prime != "undefined" ? Outface_theme_prime : "#607D8B";
Outface.theme.accent = typeof Outface_theme_accent != "undefined" ? Outface_theme_accent : "#FF5722";
Outface.theme.pro = typeof Outface_theme_pro != "undefined" ? Outface_theme_pro : "#4CAF50";
Outface.theme.con = typeof Outface_theme_con != "undefined" ? Outface_theme_con : "#F44336";
Outface.theme.important = typeof Outface_theme_important != "undefined" ? Outface_theme_important : "#EF6C00";
Outface.theme.link = typeof Outface_theme_link != "undefined" ? Outface_theme_link : "#03A9F4";
Outface.theme.apply = function(){
	var classes = {
		".prime":{ "background-color":Outface.theme.prime },
		"h1,h2,h3,h4,h5,h6":{ "color":Outface.theme.prime },
		"hr":{ "background-color":Outface.theme.prime },
		"button":{ "background-color":Outface.theme.prime },
		"button.subfeatured":{ "button.subfeature":Outface.theme.prime },
		"button.gallery":{ "color":Outface.theme.prime },
		"button.gallery:active":{ "color":Outface.theme.accent + "!important" },
		"button.gallery.select":{ "color":Outface.theme.accent, "border-color":Outface.theme.accent },
		"button.navcontrol":{ "border-color":Outface.theme.prime, "color":Outface.theme.prime },
		"button.primary":{ "background-color":Outface.theme.accent },
		"button.control":{ "background-color":Outface.theme.prime },
		"button.icon":{ "color":Outface.theme.prime },
		"button.select":{ "background-color":Outface.theme.accent },
		"output.special":{ "color":Outface.theme.prime },
		".pro":{ "background-color":Outface.theme.pro + " !important" },
		".con":{ "background-color":Outface.theme.con + " !important" },
		".shell .pro":{ "background-color":Outface.theme.pro + " !important" },
		".shell .con":{ "background-color":Outface.theme.con + " !important" },
		".important":{ "background-color":Outface.theme.important },
		"nav li a":{ "color":Outface.theme.prime },
		"nav li.select a":{ "color":Outface.theme.accent, "border-color":Outface.theme.accent },
		"p a,small a,h1 a,h2 a,h3 a,h4 a,h5 a,h6 a,label a,aside a,blockquote a":{ "color":Outface.theme.link },
		".page>.tab":{ "background-color":Outface.theme.prime }
	};
	var css = "";
	var style = document.createElement("style");
	for(var className in classes){
		classCss = className + "{";
		for(var classAttributeName in classes[className])
			classCss += " " + classAttributeName + ":" + classes[className][classAttributeName] + ";"
		classCss += " }\r\n";
		css += classCss;
	}
	document.head.appendChild(style);
	if(style.styleSheet) // IE8
		style.styleSheet.cssText = css;
	else
		style.innerHTML = css;
};
Outface.theme.apply();

/* Upbrowse */
Outface.upbrowse = function(){
	var supportedBrowsers = {
		"chrome": 24,
		"firefox": 4,
		"msie": 8,
		"android": 4,
		"safari": 7.1,
		"ios": 4.1,
		"opera": 12.1
	};
	for(var browser in supportedBrowsers)
		if(bowser[browser] && ((typeof bowser.version !== "undefined" && parseFloat(bowser.version) >= supportedBrowsers[browser]) || parseFloat(bowser.osversion) >= supportedBrowsers[browser]))
			return;

	function close(){
		if(!confirm("WARNING! This web application will not function on outdated browsers."))
			return;
		curtain.style.opacity = "0";
		div.style.opacity = "0";
		setTimeout(function(){
			curtain.parentNode.removeChild(curtain);
			div.parentNode.removeChild(div);
		}, 500);
	}

	var innerHtml = "<h2>Your browser is outdated</h2><br/>";
	innerHtml += "<p>A modern browser is required to use this web application.<br/><strong>Please select a free browser:</strong></p><br/>";
	innerHtml += "<p class='browser'><a href='http://google.com/chrome' target='_blank'><img src='" + Outface_path + "/media/chrome.png'/><br/>CHROME</a></p>";
	innerHtml += "<p class='browser'><a href='http://getfirefox.com' target='_blank'><img src='" + Outface_path + "/media/firefox.png'/><br/>FIREFOX</a></p>";
	innerHtml += "<p class='browser'><a href='http://support.apple.com/downloads#safari' target='_blank'><img src='" + Outface_path + "/media/safari.png'/><br/>SAFARI</a></p>";
	innerHtml += "<p class='browser'><a href='http://windows.microsoft.com/en-au/internet-explorer/download-ie' target='_blank'><img src='" + Outface_path + "/media/msie.png'/><br/>EXPLORER</a></p>";
	innerHtml += "<p class='browser'><a href='http://www.opera.com' target='_blank'><img src='" + Outface_path + "/media/opera.png'/><br/>OPERA</a></p><br/>";
	innerHtml += "<button>No thanks</button>";

	var curtain = document.createElement("div");
	curtain.className = "curtain";
	curtain.onclick = close;
	curtain.style.opacity = "0";
	document.body.appendChild(curtain);
	curtain.offsetHeight;
	curtain.style.opacity = "";
	var div = document.createElement("div");
	div.className = "upbrowse";
	div.innerHTML = innerHtml;
	div.style.opacity = "1";	
	document.body.appendChild(div);
	div.offsetHeight;
	div.style.opacity = "";
	div.getElementsByTagName("button")[0].onclick = close;
	div.style.marginTop = -(div.clientHeight / 2) + "px";
};

/* Webapp */
Outface.webapp = function(){
	if(bowser.mobile === true){
		if(bowser.android){
			if(localStorage.webappShown)
				return;
			localStorage.webappShown = true;
			var className = "webapp top";
			var innerHTML = "<p>Press + then <strong>Add to Home Screen</strong></p>";
		}
		else if(bowser.ios){
			if(window.navigator.standalone)
				return;
			var className = "webapp bottom";
			var innerHTML = "<p>Press <img src='" + Outface_webappPath + "/ios-share.png'/> then <strong>Add to Home Screen</strong></p>";
		}
		else
			return;
	}
	else
		return;
	var className = "webapp top";
	var innerHTML = "<p>Press + then <strong>Add to Home Screen</strong></p>";
	function close(){
		curtain.style.opacity = "0";
		div.style.opacity = "0";
		setTimeout(function(){
			curtain.parentNode.removeChild(curtain);
			div.parentNode.removeChild(div);
		}, 500);
	}

	var curtain = document.createElement("div");
	curtain.className = "curtain";
	curtain.onclick = close;
	curtain.style.opacity = "0";
	document.body.appendChild(curtain);
	curtain.offsetHeight;
	curtain.style.opacity = "";
	var div = document.createElement("div");
	div.className = className;
	div.innerHTML = "<h4>Install to your phone</h4><br/>" + innerHTML;
	div.onclick = close;
	div.style.opacity = "1";	
	document.body.appendChild(div);
	div.offsetHeight;
	div.style.opacity = "";
};

/* Page */
Outface.page = {};
Outface.page._open = function(section){
	var fromLeft = false;
	var siblings = section.parentNode.childNodes;
	for(var i = siblings.length - 1; i > -1; i--){
		var sibling = siblings[i];
		if(sibling.nodeType == 1 && sibling.classList.contains("page"))
			if(sibling == section)
				break;
			else if(sibling.classList.contains("open")){
				fromLeft = true;
				break;
			}
	}
	var source = fromLeft ? -section.clientWidth : section.parentNode.clientWidth;
	section.style.webkitTransform = section.style.transform = "translate3d(" + source + "px,0,0)";
	section.style.webkitTransition = section.style.transition = "none";
	section.offsetHeight;
	section.style.webkitTransition = section.style.transition = "";
	section.style.webkitTransform = section.style.transform = "translate3d(0,0,0)";
};
Outface.page._close = function(section){
	var toLeft = true;
	var siblings = section.parentNode.childNodes;
	for(var i = 0; i < siblings.length; i++){
		var sibling = siblings[i];
		if(sibling.nodeType == 1 && sibling.classList.contains("page"))
			if(sibling == section)
				break;
			else if(sibling.classList.contains("open")){
				toLeft = false;
				break;
			}
	}
	var destination = toLeft ? -section.clientWidth : section.parentNode.clientWidth;
	section.style.webkitTransform = section.style.transform = "translate3d(" + destination + "px,0,0)";
};
Outface.page.open = function(section){
	section.classList.remove(Outface._getLayoutClass(section));
	section.classList.add("page");
	Outface.open(section);
};
Outface.page.openX = function(section, data){
	section.classList.remove(Outface._getLayoutClass(section));
	section.classList.add("page");
	Outface.openX(section, data);
};

/* Prompt */
Outface.prompt = {};
Outface.prompt._open = function(section){
	Outface._curtain(section);
	section.style.marginTop = "-" + (section.clientHeight / 2) + "px";	
	section.style.webkitTransform = section.style.transform = "translate3d(0,50px,0)";
	section.style.opacity = "0";
	section.style.webkitTransition = section.style.transition = "none";
	section.offsetHeight;
	section.style.webkitTransition = section.style.transition = "";
	section.style.webkitTransform = section.style.transform = "";
	section.style.opacity = "";
};
Outface.prompt._close = function(section){
	section.style.webkitTransform = section.style.transform = "translate3d(0,-50px,0)";
	section.style.opacity = "0";
};
Outface.prompt.xbuild = function(content, close, context, buttons){
	context = context != null ? context : document.body;
	buttons = buttons != null ? buttons : [];
	for(var i = 0; i < buttons.length; i++){
		buttons[i].content = buttons[i].content != null ? buttons[i].content : "";
		buttons[i].className = buttons[i].className != null ? buttons[i].className : "";
	}
	
	var section = document.createElement("section");
	section.className = "prompt prompt-x prime shell ym modal";
	section.setAttribute("template", "");
	section.innerHTML = "<div class='p1-2 xf'><div class='x1-1'></div><br/><div class='x1-1 xb'></div></div>";
	section.getElementsByTagName("div")[1].appendChild(content);
	for(var i = 0; i < buttons.length; i++){
		var button = buttons[i];
		var buttonX = document.createElement("button");
		buttonX.valuex = button.value;
		buttonX.className = button.className;
		buttonX.innerHTML = button.content;
		buttonX.onclick = function(){
			delete section.close;
			Outface.close(section, this.valuex);
		};
		section.getElementsByTagName("div")[section.getElementsByTagName("div").length - 1].appendChild(buttonX);
	}
	if(close != null)
		section.addEventListener("close", function(e){ close(e.detail); });
	
	context.appendChild(section);
	Outface.open(section);
	return section;
};
Outface.prompt.alert = function(content, done, context, okContent){
	context = context != null ? context : document.body;
	okContent = okContent != null ? okContent : "<i class='fa fa-check'></i> OK";
	var p = document.createElement("p");
	p.appendChild(document.createTextNode(content));
	return Outface.prompt.xbuild(p, done, context, [{ content:okContent, value:true }]);
};
Outface.prompt.confirm = function(content, done, context, buttons){
	context = context != null ? context : document.body;
	buttons = buttons != null ? buttons : [
		{ className:"", content:"<i class='fa fa-times'></i> CANCEL", value:false },
		{ className:"pro", content:"<i class='fa fa-check'></i> OK", value:true }
	];
	var p = document.createElement("p");
	p.appendChild(document.createTextNode(content));
	return Outface.prompt.xbuild(p, done, context, buttons);
};
Outface.prompt.open = function(section, data){
	section.classList.remove(Outface._getLayoutClass(section));
	section.classList.add("prompt");
	Outface.open(section, data);
};
Outface.prompt.openX = function(section, data){
	section.classList.remove(Outface._getLayoutClass(section));
	section.classList.add("prompt");
	Outface.openX(section, data);
};

/* Notification */
Outface.notify = {};
Outface.notify._refresh = function(layout, direction){
	var notifications = [];
	var children = layout.childNodes;
	for(var i = 0; i < children.length; i++){
		var child = children[i];
		if(child.nodeType == 1 && child.classList.contains("notify") && (child.classList.contains("open") && !child.classList.contains("closing")))
			notifications.push(child);
	}
	var offset = 0;
	for(var i = 0; i < notifications.length; i++){
		var notification = notifications[i];
		offset += notification.clientHeight;
		notification.style.webkitTransform = notification.style.transform = "translate3d(0,-" + offset + "px,0)";
	}
};
Outface.notify._open = function(section, data){
	section.style.webkitTransform = section.style.transform = "translate3d(0,100%,0)";
	section.style.webkitTransition = section.style.transition = "none";
	section.offsetHeight;
	section.style.webkitTransition = section.style.transition = "";
	section.style.webkitTransform = section.style.transform = "";
	if(section.getAttribute("timeout") > 0)
		section.timeoutTimeout = setTimeout(function(){
			Outface.close(section, data);
		}, section.getAttribute("timeout") * 1000);
};
Outface.notify._close = function(section, data){
	clearTimeout(section.timeoutTimeout);
	delete section.timeoutTimeout;
	section.style.webkitTransform = section.style.transform = "translate3d(0,100%,0)";	
};
Outface.notify.xbuild = function(content, close, context, buttons, timeout){
	context = context != null ? context : document.body;
	timeout = timeout != null ? timeout : 3;
	buttons = buttons != null ? buttons : [];
	for(var i = 0; i < buttons.length; i++)
		buttons[i].icon = buttons[i].icon != null ? buttons[i].icon : "arrow-right";
		
	var section = document.createElement("section");
	section.className = "notify notify-x prime shell xf ym close";
	section.setAttribute("template", timeout);
	section.setAttribute("timeout", timeout);
	if(buttons.length > 0){
		section.innerHTML = "<div class='x2-3 xf'></div><div class='x1-3 xb'></div>";
		section.getElementsByTagName("div")[0].appendChild(content);
	}
	else
		section.appendChild(content);
	for(var i = 0; i < buttons.length; i++){
		var button = buttons[i];
		var buttonX = document.createElement("button");
		buttonX.value = button.value;
		buttonX.className = "control" + (button.className != null ? " " + button.className : "");
		buttonX.innerHTML = "<i class='fa fa-" + button.icon + "'></i>";
		buttonX.setAttribute("onclick", "");
		buttonX.onclick = function(){
			if(close != null)
				section.addEventListener("close", close);
			Outface.close(section, this.value);
		};
		section.getElementsByTagName("div")[1].appendChild(buttonX);
	}
	
	section.onclick = function(e){
		if(close != null)
			section.addEventListener("close", close);
		Outface.close(section);
	};
	context.appendChild(section);
	
	Outface.open(section);
	return section;
};
Outface.notify.alert = function(content, done, context, okIcon){
	context = context != null ? context : document.body;
	var p = document.createElement("p");
	p.innerHTML = content;
	return Outface.notify.xbuild(p, done, context);
};
Outface.notify.shortcut = function(content, done, context, okIcon){
	context = context != null ? context : document.body;
	okIcon = okIcon != null ? okIcon : "arrow-right";
	var p = document.createElement("p");
	p.innerHTML = content;
	return Outface.notify.xbuild(p, done, context, [{ icon:okIcon, value:true }]);
};
Outface.notify.confirm = function(content, done, context, buttons){
	context = context != null ? context : document.body;
	buttons = buttons != null ? buttons : [
		{ icon:"times", value:false },
		{ icon:"check", value:true, className:"pro" }
	];
	var p = document.createElement("p");
	p.innerHTML = content;
	return Outface.notify.xbuild(p, done, context, buttons, 0);
};
Outface.notify.open = function(section, data){
	section.classList.remove(Outface._getLayoutClass(section));
	section.classList.add("notify");
	Outface.open(section, data);
};
Outface.notify.openX = function(section, data){
	section.classList.remove(Outface._getLayoutClass(section));
	section.classList.add("notify");
	Outface.openX(section, data);
};

/* Dialog */
Outface.dialog = {};
Outface.dialog._open = function(section, data){
	Outface._curtain(section);
	if(section.classList.contains("dialog-left")) 
		section.style.webkitTransform = section.style.transform = "translate3d(-100%,0,0)"; 
	else if(section.classList.contains("dialog-right")) 
		section.style.webkitTransform = section.style.transform = "translate3d(100%,0,0)"; 
	else if(section.classList.contains("dialog-top")) 
		section.style.webkitTransform = section.style.transform = "translate3d(0,-100%,0)"; 
	else 
		section.style.webkitTransform = section.style.transform = "translate3d(0,100%,0)";
	section.style.webkitTransition = section.style.transition = "none";
	section.offsetHeight;
	section.style.webkitTransform = section.style.transform = "";
	section.style.webkitTransition = section.style.transition = "";
};
Outface.dialog._close = function(section, data){
	if(section.classList.contains("dialog-left")) 
		section.style.webkitTransform = section.style.transform = "translate3d(-200%,0,0)"; 
	else if(section.classList.contains("dialog-right")) 
		section.style.webkitTransform = section.style.transform = "translate3d(200%,0,0)"; 
	else if(section.classList.contains("dialog-top")) 
		section.style.webkitTransform = section.style.transform = "translate3d(0,-200%,0)"; 
	else 
		section.style.webkitTransform = section.style.transform = "translate3d(0,200%,0)"; 
};
Outface.dialog.open = function(section, data){
	section.classList.remove(Outface._getLayoutClass(section));
	section.classList.add("dialog");
	Outface.open(section, data);
};
Outface.dialog.openX = function(section, data){
	section.classList.remove(Outface._getLayoutClass(section));
	section.classList.add("dialog");
	Outface.openX(section, data);
};

/* Menu */
Outface.menu = {};
Outface.menu.clear = function(menu){
	var menuitems = menu.childNodes;
	for(var i = 0; i < menu.childNodes.length; i++)
		if(menu.childNodes[i].nodeType == 1)
			Outface.menu.deselect(menu.childNodes[i]);
};
Outface.menu.select = function(menuitem){
	menuitem.classList.add("select");
};
Outface.menu.selectX = function(menuitem){
	Outface.menu.clear(menuitem.parentNode);
	menuitem.classList.add("select");
};
Outface.menu.deselect = function(menuitem){
	menuitem.classList.remove("select");
};
Outface.menu.toggle = function(menuitem){
	menuitem.classList.toggle("select");
};
Outface.menu.bind = function(menuitem, section){
	section.addEventListener("open", function(){
		Outface.menu.select(menuitem);
	});
	section.addEventListener("close", function(){
		Outface.menu.deselect(menuitem);
	});
	return section;
};

/* Load */
Outface.load = {};
Outface.load.start = function(element){
	if(element.tagName == "BUTTON"){
		element.disabled = true;
	
		var icon = element.getElementsByTagName("i")[0];
		if(icon == null)
			return;
	
		element.classList.add("load");
		element.oIconClassName = icon.className;
		icon.className = "fa fa-cog fa-spin load";
	}
	else{
		if(element.outfaceLoad != null)
			return;
		var load = document.createElement("div");
		load.className = "load-cover";
		load.innerHTML = "<p><i class='fa fa-cog fa-spin'></i></p>";
		element.appendChild(load);
		element.outfaceLoad = load;
		load.style.opacity = "1";
		load.style.webkitTransition = load.style.transition = "none";
		load.offsetHeight;
		load.style.opacity = "";
		load.style.webkitTransition = load.style.transition = "";
	}
};
Outface.load.stop = function(element){
	if(element.tagName == "BUTTON"){
		element.disabled = false;
	
		var icon = element.getElementsByTagName("i")[0];
		if(icon == null)
			return;
	
		element.classList.remove("load")
		icon.className = element.oIconClassName;
		delete element.oIconClassName;
	}
	else{
		element.outfaceLoad.style.opacity = "0";
	
		element.removeEventListener("transitionend", element.loadTransitionend);
		clearTimeout(element.loadTransitionendTimeout);
		element.loadTransitionend = function(e){
			if(e.target != element)
				return;
			element.removeEventListener("transitionend", element.loadTransitionend);
			delete element.loadTransitionend;
			clearTimeout(element.loadTransitionendTimeout);
			delete element.loadTransitionendTimeout;

			element.removeChild(element.outfaceLoad);
			delete element.outfaceLoad;
		};
		element.addEventListener("transitionend", element.loadTransitionend);
		element.loadTransitionendTimeout = setTimeout(function(){ element.loadTransitionend({ target:element }); }, 500);
	}
};

/* History */
Outface.history = {};
Outface.history._init = function(context){
	context.history = {};
	context.history._array = [];
	context.history.index = null;
	context.history.backable = false;
	context.history.forwardable = false;
	context.history.length = 0;
};
Outface.history._refresh = function(context){
	context.history.length = context.history._array.length;
	context.history.backable = context.history.index > 0;
	context.history.forwardable = context.history.index < context.history.length - 1;
	context.dispatchEvent(new CustomEvent("outface-history"));
};
Outface.history._clear = function(context){
	var index = context.history.index + 1;
	var savedReferences = [];
	for(var i = 0; i < index && i < context.history._array.length; i++)
		for(var t = 0; t < context.history._array[i].length; t++){
			var section = context.history._array[i][t].section;
			if(section.hasAttribute("templated"))
				savedReferences.push(section);
		}
	for(var i = index; i < context.history._array.length; i++)
		for(var t = 0; t < context.history._array[i].length; t++){
			var section = context.history._array[i][t].section;
			if(section.hasAttribute("templated"))
				if(savedReferences.indexOf(section) < 0){
					if(section.classList.contains("open"))
						section.addEventListener("closed", function(e){
							this.parentNode.removeChild(this);
							Outface._event(this, "unregister");
						});
					else{
						section.parentNode.removeChild(section);
						Outface._event(section, "unregister");
					}
					savedReferences.push(section);
				}
		}
	context.history._array.splice(index, context.history._array.length);
};
Outface.history._goto = function(context, index){
	var direction = index > context.history.index ? 1 : -1;
	var currentState = context.history._array[context.history.index];
	var nextState = context.history._array[index];
	
	var closes = [];
	var opens = [];
	if(direction < 0)
		for(var i = 0; i < currentState.length; i++)
			if(currentState[i].action == "open")
				closes.push(currentState[i]);
	for(var i = 0; i < nextState.length; i++)
		if(nextState[i].action == "open")
			opens.push(nextState[i]);
		else if(nextState[i].action == "close")
			closes.push(nextState[i]);
	
	for(var i = 0; i < opens.length; i++)
		Outface._open(opens[i].section, opens[i].data);
	for(var i = 0; i < closes.length; i++)
		Outface._close(closes[i].section, closes[i].data);
	context.history.index = index;
	return index > 0 && index < context.history.length;
};
Outface.history.pushState = function(context, state){
	if(context.history == null)
		Outface.history._init(context);
	context.history.index = context.history.index != null ? context.history.index : 0;
	Outface.history._clear(context);
	context.history._array.push(state);
	context.history.index = context.history._array.length - 1;
	Outface.history._refresh(context);
};
Outface.history.clear = function(context){
	Outface.history._clear(context);
	Outface.history._refresh(context);
};
Outface.history.goto = function(context, index){
	var r = Outface.history._goto(context, index);
	Outface.history._refresh(context);
	return r;
};
Outface.history.home = function(context){
	var r = Outface.history._goto(context, 0);
	Outface.history._clear(context);
	Outface.history._refresh(context);
	return r;
};
Outface.history.go = function(context, change){
	return Outface.history.goto(context, context.history.index + change);
};
Outface.history.back = function(context){
	return Outface.history.go(context, -1);
};
Outface.history.forward = function(context){
	return Outface.history.go(context, 1);
};
