/* Meta */
(function(){function o(e){if(typeof e==="string"&&e){for(var t=0,n=s.length;t<n;t++){if(s[t].src===e){return s[t]}}}}function u(){var e;for(var t=0,n=s.length;t<n;t++){if(!s[t].src){if(e){return undefined}e=s[t]}}return e}function a(e,t){var n,r,i,s=typeof t==="number";t=s?t:typeof f.skipStackDepth==="number"?f.skipStackDepth:0;if(typeof e==="string"&&e){if(s){r=e.match(/((?:http[s]?|file):\/\/[\/]?.+?\/[^:\)]*?)(?::\d+)(?::\d+)?/)}else{r=e.match(/^(?:|[^:@]*@|.+\)@(?=http[s]?|file)|.+?\s+(?: at |@)(?:[^:\(]+ )*[\(]?)((?:http[s]?|file):\/\/[\/]?.+?\/[^:\)]*?)(?::\d+)(?::\d+)?/);if(!(r&&r[1])){r=e.match(/\)@((?:http[s]?|file):\/\/[\/]?.+?\/[^:\)]*?)(?::\d+)(?::\d+)?/);if(r&&r[1]){n=r[1]}}}if(r&&r[1]){if(t>0){i=e.slice(e.indexOf(r[0])+r[0].length);n=a(i,t-1)}else{n=r[1]}}}return n}function f(){if(s.length===0){return}if(s.length===1){return s[0]}if("readyState"in s[0]){for(var e=s.length;e--;){if(s[e].readyState==="interactive"){return s[e]}}}if(document.readyState==="loading"){return s[s.length-1]}if(r){try{throw new Error}catch(t){var n=a(t.stack);var f=o(n);if(!f&&n===i){f=u()}return f}}}var e=!("currentScript"in document);var t=document.__defineGetter__;var n=typeof Object.defineProperty==="function"&&function(){var e;try{Object.defineProperty(document,"_xyz",{value:"blah",enumerable:true,writable:false,configurable:false});e=document._xyz==="blah";delete document._xyz}catch(t){e=false}return e}();var r=function(){var e=false;try{throw new Error}catch(t){e=typeof t.stack==="string"&&!!t.stack}return e}();var i=window.location.href;var s=document.getElementsByTagName("script");f.skipStackDepth=1;document._currentScript=f;if(e){if(n){Object.defineProperty(document,"currentScript",{get:f,enumerable:true,configurable:false})}else if(t){document.__defineGetter__("currentScript",f)}}})()
document.currentScript = document.currentScript === undefined ? document._currentScript() : document.currentScript;
var outfacePath = document.currentScript.src.substring(0, document.currentScript.src.lastIndexOf("/"));
var outfaceWebappPath = typeof outfaceWebappPath != "undefined" ? outfaceWebappPath : "/media";
var metas = [
	{ tag:"link", rel:"stylesheet", type:"text/css", href:outfacePath + "/utility/outface.css" },
	{ tag:"link", rel:"stylesheet", type:"text/css", href:outfacePath + "/media/font-awesome-4.2.0/css/font-awesome.min.css" },
	{ tag:"link", rel:"icon", href:outfaceWebappPath + "/icon.png" },
	{ tag:"link", rel:"apple-touch-icon-precomposed", href:outfaceWebappPath + "/icon.png" },
	{ tag:"link", media:"(device-width:320px)", rel:"apple-touch-startup-image", href:outfaceWebappPath + "/iphone.jpg" },
	{ tag:"link", media:"(device-width:768px)", rel:"apple-touch-startup-image", href:outfaceWebappPath + "/ipad.jpg" },
	{ tag:"meta", name:"viewport", content:"width=device-width,initial-scale=1,user-scalable=no" },
	{ tag:"meta", name:"format-detection", content:"telephone=no" },
	{ tag:"meta", name:"msapplication-tap-highlight", content:"no" },
	{ tag:"meta", name:"apple-mobile-web-app-capable", content:"yes" },
	{ tag:"meta", name:"apple-mobile-web-app-status-bar-style", content:"black" },
	{ tag:"meta", name:"mobile-web-app-capable", content:"yes" },
	{ tag:"script", src:outfacePath + "/utility/fastclick1.0.3.js" },
	{ tag:"script", src:outfacePath + "/utility/bowser0.7.2.js" },
	{ tag:"script", src:outfacePath + "/utility/iscroll5.1.3.js" },
	{ tag:"script", src:outfacePath + "/utility/ckeditor/ckeditor.js" }
];
for(var i = 0; i < metas.length; i++) try{
	var meta = document.createElement(metas[i].tag);
	for(var attributeName in metas[i])
		if(attributeName != "tag" && attributeName != "innerHTML")
			meta.setAttribute(attributeName, metas[i][attributeName]);
		else if(attributeName == "innerHTML")
			meta.innerHTML = metas[i]["innerHTML"];
	document.head.appendChild(meta);
}catch(e){}

/* Core */
var Outface = {};
Outface._priority = [];
Outface._curtain = function(section){
	var curtain = document.createElement("div");
	curtain.className = "curtain";
	if(!Outface._hasClass(section, "modal")){
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
	layoutClass = Outface._hasClass(section, "page") ? "page" : layoutClass;
	layoutClass = Outface._hasClass(section, "prompt") ? "prompt" : layoutClass;
	layoutClass = Outface._hasClass(section, "notify") ? "notify" : layoutClass;
	layoutClass = Outface._hasClass(section, "dialog") ? "dialog" : layoutClass;
	return layoutClass;
};
Outface._addClass = function(el, name){
   if (!Outface._hasClass(el, name)) { el.className += (el.className ? ' ' : '') +name; }
}
Outface._hasClass = function(el, name){
   return new RegExp('(\\s|^)'+name+'(\\s|$)').test(el.className);
}
Outface._removeClass = function(el, name){
   if (Outface._hasClass(el, name)) {
      el.className=el.className.replace(new RegExp('(\\s|^)'+name+'(\\s|$)'),' ').replace(/^\s+|\s+$/g, '');
   }
}
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
Outface._open = function(section, data, _root){
	_root = _root != null ? _root : true;
	if(Outface._hasClass(section, "open") && !Outface._hasClass(section, "closing"))
		return false;

	Outface._addClass(section, "open");
	Outface._addClass(section, "opening");
	Outface._removeClass(section, "closing");
	
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
		
		Outface._addClass(section, "open");
		Outface._removeClass(section, "opening");
		Outface._removeClass(section, "closing");
		
		Outface._event(section, "opened", data);
	};
	section.addEventListener("transitionend", section.transitionend);
	section.transitionendTimeout = setTimeout(function(){ section.transitionend({ target:section }); }, 1000);

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
		var children = [];
		for(var i = 0; i < parent.childNodes.length; i++)
			children.push(parent.childNodes[i]);
		for(var i = 0; i < children.length; i++){
			var child = children[i];
			if(child.nodeType == 1 && Outface._hasClass(child, "open") && !Outface._hasClass(child, "closing")){
				Outface._removeClass(child, "open")
				Outface._open(child, data, false);
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
	if(!Outface._hasClass(section, "open") || Outface._hasClass(section, "closing"))
		return false;
	
	Outface._addClass(section, "open");
	Outface._addClass(section, "closing");
	Outface._removeClass(section, "opening");	

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

		Outface._removeClass(section, "open");
		Outface._removeClass(section, "opening");
		Outface._removeClass(section, "closing");
		
		Outface._event(section, "closed", data);

		if(section.hasAttribute("templated")){
			section.parentNode.removeChild(section);
			Outface._event(section, "unregister", data);
		}
	};
	section.addEventListener("transitionend", section.transitionend);
	section.transitionendTimeout = setTimeout(function(){ section.transitionend({ target:section }); }, 1000);
	
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
	
	if(element.register != null){
		element.registerx = element.register;
		element.register = null;
		element.registerx(data);
		element.registerx = null;
	}
	
	if(context == null){
		var context = element.tagName != "BODY" ? element.parentNode : element;
		while(context != null && context.tagName != "SECTION" && context.tagName != "BODY")
			context = context.parentNode;
		if(element.tagName == "SECTION"){
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
			Outface.register(child, child.tagName != "SECTION" ? context : child, data);
		}
	
	// iScroll
	if(Outface._hasClass(element, "scroll") || Outface._hasClass(element, "scroll-x") || Outface._hasClass(element, "scroll-y")){
		var scrollX = Outface._hasClass(element, "scroll-x");
		var scrollY = Outface._hasClass(element, "scroll-y");
		var scrollFree = Outface._hasClass(element, "scroll-free");
		if(!scrollX && !scrollY)
			scrollX = scrollY = true;
		var config = {
			scrollX : scrollX,
			scrollY : scrollY,
			mouseWheel : true,
			preventDefaultException:{tagName:/.*/}
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
	}
};
Outface.clone = function(template, data){
	var clone = template.cloneNode(true);
	clone.template = template;
	clone.data = data;
	if(template.parentNode != null)
		template.parentNode.insertBefore(clone, template);
	clone.removeAttribute("id");
	clone.removeAttribute("name");
	clone.removeAttribute("template");
	clone.setAttribute("templated", "");
	clone.register = template.register;
	var elements = template.getElementsByTagName("*");
	var cloneElements = clone.getElementsByTagName("*");
	for(var i = 0; i < cloneElements.length; i++)
		cloneElements[i].register = elements[i].register;
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
	try{
		var css = "";
		var style = document.createElement("style");
		for(var className in classes){
			classCss = className + "{";
			for(var classAttributeName in classes[className])
				classCss += " " + classAttributeName + ":" + classes[className][classAttributeName] + ";"
			classCss += " }\r\n";
			css += classCss;
		}
		style.innerHTML = css;
		document.head.appendChild(style);
	}catch(e){}
};
Outface.theme.apply();

/* Upbrowse */
Outface.upbrowse = function(){
	var supportedBrowsers = {
		"chrome": 24,
		"firefox": 4,
		"msie": 10,
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
	innerHtml += "<p class='browser'><a href='http://google.com/chrome' target='_blank'><img src='" + outfacePath + "/media/chrome.png'/><br/>CHROME</a></p>";
	innerHtml += "<p class='browser'><a href='http://getfirefox.com' target='_blank'><img src='" + outfacePath + "/media/firefox.png'/><br/>FIREFOX</a></p>";
	innerHtml += "<p class='browser'><a href='http://support.apple.com/downloads#safari' target='_blank'><img src='" + outfacePath + "/media/safari.png'/><br/>SAFARI</a></p>";
	innerHtml += "<p class='browser'><a href='http://windows.microsoft.com/en-au/internet-explorer/download-ie' target='_blank'><img src='" + outfacePath + "/media/msie.png'/><br/>EXPLORER</a></p>";
	innerHtml += "<p class='browser'><a href='http://www.opera.com' target='_blank'><img src='" + outfacePath + "/media/opera.png'/><br/>OPERA</a></p><br/>";
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
}
if(window.addEventListener) window.addEventListener("load", Outface.upbrowse);
else window.attachEvent("onload", Outface.upbrowse);

/* Webapp */
Outface.webapp = function(){
	if(bowser.mobile === true)
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
			var innerHTML = "<p>Press <img src='" + webappPath + "/ios-share.png'/> then <strong>Add to Home Screen</strong></p>";
		}
		else return;
	else return;

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
window.addEventListener("load", Outface.webapp);

/* Page */
Outface.page = {};
Outface.page._open = function(section){
	var fromLeft = false;
	var siblings = section.parentNode.childNodes;
	for(var i = siblings.length - 1; i > -1; i--){
		var sibling = siblings[i];
		if(sibling.nodeType == 1 && Outface._hasClass(sibling, "page"))
			if(sibling == section)
				break;
			else if(Outface._hasClass(sibling, "open")){
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
		if(sibling.nodeType == 1 && Outface._hasClass(sibling, "page"))
			if(sibling == section)
				break;
			else if(Outface._hasClass(sibling, "open")){
				toLeft = false;
				break;
			}
	}
	var destination = toLeft ? -section.clientWidth : section.parentNode.clientWidth;
	section.style.webkitTransform = section.style.transform = "translate3d(" + destination + "px,0,0)";
};
Outface.page.open = function(section){
	Outface._removeClass(section, Outface._getLayoutClass(section));
	Outface._addClass(section, "page");
	Outface.open(section);
};
Outface.page.openX = function(section, data){
	Outface._removeClass(section, Outface._getLayoutClass(section));
	Outface._addClass(section, "page");
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
	section.className = "prompt prompt-x primary shell ym modal";
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
	Outface._removeClass(section, Outface._getLayoutClass(section));
	Outface._addClass(section, "prompt");
	Outface.open(section, data);
};
Outface.prompt.openX = function(section, data){
	Outface._removeClass(section, Outface._getLayoutClass(section));
	Outface._addClass(section, "prompt");
	Outface.openX(section, data);
};

/* Notification */
Outface.notify = {};
Outface.notify._refresh = function(layout, direction){
	var notifications = [];
	var children = layout.childNodes;
	for(var i = 0; i < children.length; i++){
		var child = children[i];
		if(child.nodeType == 1 && Outface._hasClass(child, "notify") && (Outface._hasClass(child, "open") && !Outface._hasClass(child, "closing")))
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
	section.style.webkitTransform = section.style.transform = "translate3d(0,0,0)";
	section.style.webkitTransition = section.style.transition = "none";
	section.offsetHeight;
	section.style.webkitTransition = section.style.transition = "";
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
	section.className = "notify notify-x primary shell xf ym close";
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
			Outface.close(section);
			if(close != null)
				close(this.value);
		};
		section.getElementsByTagName("div")[1].appendChild(buttonX);
	}
	section.onclick = function(e){
		if(e.target == section)
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
	Outface._removeClass(section, Outface._getLayoutClass(section));
	Outface._addClass(section, "notify");
	Outface.open(section, data);
};
Outface.notify.openX = function(section, data){
	Outface._removeClass(section, Outface._getLayoutClass(section));
	Outface._addClass(section, "notify");
	Outface.openX(section, data);
};

/* Dialog */
Outface.dialog = {};
Outface.dialog._open = function(section, data){
	Outface._curtain(section);
	if(Outface._hasClass(section, "dialog-left")) 
		section.style.webkitTransform = section.style.transform = "translate3d(-100%,0,0)"; 
	else if(Outface._hasClass(section, "dialog-right")) 
		section.style.webkitTransform = section.style.transform = "translate3d(100%,0,0)"; 
	else if(Outface._hasClass(section, "dialog-top")) 
		section.style.webkitTransform = section.style.transform = "translate3d(0,-100%,0)"; 
	else 
		section.style.webkitTransform = section.style.transform = "translate3d(0,100%,0)";
	section.style.webkitTransition = section.style.transition = "none";
	section.offsetHeight;
	section.style.webkitTransform = section.style.transform = "";
	section.style.webkitTransition = section.style.transition = "";
};
Outface.dialog._close = function(section, data){
	if(Outface._hasClass(section, "dialog-left")) 
		section.style.webkitTransform = section.style.transform = "translate3d(-200%,0,0)"; 
	else if(Outface._hasClass(section, "dialog-right")) 
		section.style.webkitTransform = section.style.transform = "translate3d(200%,0,0)"; 
	else if(Outface._hasClass(section, "dialog-top")) 
		section.style.webkitTransform = section.style.transform = "translate3d(0,-200%,0)"; 
	else 
		section.style.webkitTransform = section.style.transform = "translate3d(0,200%,0)"; 
};
Outface.dialog.open = function(section, data){
	Outface._removeClass(section, Outface._getLayoutClass(section));
	Outface._addClass(section, "dialog");
	Outface.open(section, data);
};
Outface.dialog.openX = function(section, data){
	Outface._removeClass(section, Outface._getLayoutClass(section));
	Outface._addClass(section, "dialog");
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
	Outface._addClass(menuitem, "select");
};
Outface.menu.selectX = function(menuitem){
	Outface.menu.clear(menuitem.parentNode);
	Outface._addClass(menuitem, "select");
};
Outface.menu.deselect = function(menuitem){
	Outface._removeClass(menuitem, "select");
};
Outface.menu.toggle = function(menuitem){
	if(Outface._hasClass(menuitem, "select"))
		Outface._removeClass(menuitem, "select");
	else
		Outface._addClass(menuitem, "select");
};
Outface.menu.bind = function(menuitem, section){
	section.addEventListener("open", function(){
		Outface.menuitemSelect(menuitem);
	});
	section.addEventListener("close", function(){
		Outface.menuitemDeselect(menuitem);
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
	
		Outface._addClass(element, "load");
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
	
		Outface._removeClass(element, "load")
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

			element.removeEventListener("closed", closed);
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
	context.history.index = -1;
	context.history.backable = false;
	context.history.forwardable = false;
	context.history.length = 0;
};
Outface.history.pushState = function(context, state){
	if(context.history == null)
		Outface.history._init(context);
	context.history.index++;
	context.history._array.splice(context.history.index, 0, state);
	context.history._array.splice(context.history.index + 1, context.history._array.length - context.history.index - 1);
	Outface.history._refresh(context);
};
Outface.history._refresh = function(context){
	context.history.length = context.history._array.length;
	context.history.backable = context.history.index > 0;
	context.history.forwardable = context.history.index < context.history.length - 1;
	context.dispatchEvent(new CustomEvent("outface-history"));
};
Outface.history.goto = function(context, index){
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
		if(opens[i].section.template != null){
			var clone = Outface.clone(opens[i].section.template, opens[i].section.data);
			opens[i].section = clone;
			Outface._open(clone);
		}
		else
			Outface._open(opens[i].section, opens[i].data);
	for(var i = 0; i < closes.length; i++)
		Outface._close(closes[i].section, closes[i].data);
		
	context.history.index = index;
	Outface.history._refresh(context);
	return index > 0 && index < context.history.length;
};
Outface.history.clear = function(context){
	Outface.history._init(context);
	context.dispatchEvent(new CustomEvent("outface-history"));
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
Outface.history.home = function(context){
	return Outface.history.goto(context, 0);
};

window.addEventListener("load", function(){
	FastClick.attach(document.body);
	Outface.register(document.body);
	document.body.addEventListener("touchmove",function(e){
		var parent = e.target;
		while(parent != document.body){
			if(Outface._hasClass(parent, "scroll") || Outface._hasClass(parent, "scrollX") || Outface._hasClass(parent, "scrollY"))
				return;
			parent = parent.parentNode;
		}
		e.preventDefault();
	});
});
