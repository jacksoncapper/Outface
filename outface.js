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
	{ tag:"style", innerHTML:"@font-face{ font-family:\"ArialBlack\"; src:url(\"" + outfacePath + "/media/arialblack.ttf\"); }" },
	{ tag:"style", innerHTML:"@font-face{ font-family:\"BabasNeueBold\"; src:url(\"" + outfacePath + "/media/bebasneuebold.ttf\"); }" },
	{ tag:"script", src:outfacePath + "/utility/eventlistener1.0.0.js" },
	{ tag:"script", src:outfacePath + "/utility/overthrow0.7.0.js" },
	{ tag:"script", src:outfacePath + "/utility/fastclick1.0.3.js" },
	{ tag:"script", src:outfacePath + "/utility/bowser0.7.2.js" },
	{ tag:"script", src:outfacePath + "/utility/iscroll5.1.3.js" },
	{ tag:"script", src:outfacePath + "/utility/ckeditor/ckeditor.js" },
	{ tag:"script", innerHTML:"//CKEDITOR.disableAutoInline = true;" }
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

/* Theme */
var themePrimary = typeof themePrimary != "undefined" ? themePrimary : "#607D8B";
var themeAccent = typeof themeAccent != "undefined" ? themeAccent : "#FF5722";
var themePro = typeof themePro != "undefined" ? themePro : "#4CAF50";
var themeCon = typeof themeCon != "undefined" ? themeCon : "#F44336";
var themeImportant = typeof themeImportant != "undefined" ? themeCon : "#EF6C00";
var themeLink = typeof themeLink != "undefined" ? themeLink : "#03A9F4";
var themeClasses = {
	".primary":{ "background-color":themePrimary },
	"h1,h2,h3,h4,h5,h6":{ "color":themePrimary },
	"hr":{ "background-color":themePrimary },
	"button":{ "background-color":themePrimary },
	"button.subfeatured":{ "button.subfeature":themePrimary },
	"button.gallery":{ "color":themePrimary },
	"button.gallery:active":{ "color":themeAccent },
	"button.gallery.select":{ "color":themeAccent, "border-color":themeAccent },
	"button.navcontrol":{ "border-color":themePrimary, "color":themePrimary },
	"button.primary":{ "background-color":themeAccent },
	"button.control":{ "background-color":themePrimary },
	"button.icon":{ "color":themePrimary },
	".pro":{ "background-color":themePro },
	".con":{ "background-color":themeCon },
	".important":{ "background-color":themeImportant },
	".shell .pro":{ "background-color":themePro },
	".shell .con":{ "background-color":themeCon },
	"nav li.select a":{ "color":themePrimary, "border-color":themePrimary },
	"p a,small a,h1 a,h2 a,h3 a,h4 a,h5 a,h6 a,label a,aside a,blockquote a":{ "color":themeLink },
	".desk>.tab":{ "background-color":themePrimary }
};
try{
	var themeCss = "";
	var style = document.createElement("style");
	for(var themeClassName in themeClasses){
		themeClassCss = themeClassName + "{";
		for(var themeClassAttributeName in themeClasses[themeClassName])
			themeClassCss += " " + themeClassAttributeName + ":" + themeClasses[themeClassName][themeClassAttributeName] + ";"
		themeClassCss += " }\r\n";
		themeCss += themeClassCss;
	}
	style.innerHTML = themeCss;
	document.head.appendChild(style);
}catch(e){}

/* Core */
var Outface = {};
Outface._getLayoutClass = function(section){
	var layoutClass = null;
	layoutClass = Outface._hasClass(section, "desk") ? "desk" : layoutClass;
	layoutClass = Outface._hasClass(section, "prompt") ? "prompt" : layoutClass;
	layoutClass = Outface._hasClass(section, "notification") ? "notification" : layoutClass;
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
Outface.script = function(){
	return document.scripts[document.scripts.length - 1].parentNode;
};
Outface.register = function(element, context, data){
	if(element.hasAttribute("template"))
		return;
	
	if(context == null){
		var context = element.tagName != "BODY" ? element.parentNode : element;
		while(context.tagName != "SECTION" && context.tagName != "BODY")
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
	if(element.register != null){
		element.registerx = element.register;
		element.register = null;
		element.registerx(data);
		element.registerx = null;
	}
	
	// CKEditor
	if(Outface._hasClass(element, "richedit")){
		CKEDITOR.inline(element, {
			allowedContent: true,
			toolbar:[
				['Format','Bold','Italic','Underline','StrikeThrough','-','Outdent','Indent'],
				['NumberedList','BulletedList','Blockquote','-','JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock'],
				['Image','-','Link','Source']
			]
		});
		element.ondrop = function(event){
			event.preventDefault && event.preventDefault();
			var reader = new FileReader();
			reader.onloadend = function(e){
				var temp = document.createElement("div");
				var img = document.createElement("img");
				img.src = e.target.result;
				temp.appendChild(img);
				document.execCommand("insertHTML", true, "<p>" + temp.innerHTML + "</p>");
		    };
			reader.readAsDataURL(event.dataTransfer.files[0]);
			return false;
		};
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
Outface.open = function(section, data, _refresh, _root){
	_root = _root != null ? _root : true;
	_refresh = _refresh != null ? _refresh : true;
	if(Outface._hasClass(section, "open") && !Outface._hasClass(section, "closing"))
		return;

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
		Outface["_" + layoutClass + "Open"](section);
	
	if(_refresh)
		Outface.refresh(section);
	
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
				Outface.open(child, data, true, false);
			}
			else
				cascadeOpen(child);
		}
	}
	cascadeOpen(section);
	
	if(_root) // Needed for iScroll in case of new width
		Outface.register(section.parentNode);
};
Outface.close = function(section, data, _refresh){
	_refresh = _refresh != null ? _refresh : true;
	if(!Outface._hasClass(section, "open") || Outface._hasClass(section, "closing"))
		return;
	
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
		Outface["_" + layoutClass + "Close"](section, data);
		
	if(_refresh)
		Outface.refresh(section);
};
Outface.openClear = function(section, data){
	var siblings = section.parentNode.childNodes;
	for(var i = 0; i < siblings.length; i++){
		var sibling = siblings[i];
		if(sibling.nodeType == 1 && sibling != section)
			Outface.close(sibling, data, false);
	}
	Outface.open(section, data, true);
}
Outface.toggle = function(section, data){
	if(Outface._hasClass(section, "open"))
		Outface.close(section, data, true);
	else
		Outface.open(section, data, true);
};
Outface.shift = function(layout, shift){
	var currentIndex = 0;
	
	var sections = [];
	var currentIndex = null;
	var children = layout.childNodes;
	for(var i = 0; i < children.length; i++)
		if(children[i].nodeType == 1){
			var child = children[i];
			var layoutClass = Outface._getLayoutClass(child);
			if(layoutClass != null)
				sections.push(child);
			if(Outface._hasClass(child, "open"))
				currentIndex = currentIndex === null ? sections.length - 1 : currentIndex;
		}
	
	if(typeof shift == "number")
		currentIndex = shift;
	else if(typeof shift == "boolean")
		currentIndex += shift ? 1 : -1;

	Outface.openClear(sections[currentIndex]);
};
Outface.clear = function(layout, data){
	var children = layout.childNodes;
	for(var i = 0; i < children.length; i++)
		if(children[i].nodeType == 1)
			Outface.close(children[i], data, false);
	Outface.refresh("desk", layout);
	Outface.refresh("prompt", layout);
	Outface.refresh("notification", layout);
	Outface.refresh("dialog", layout);
};
Outface.closeAfter = function(section, data){
	var children = section.parentNode.childNodes;
	var after = false;
	for(var i = 0; i < children.length; i++){
		if(after)
			Outface.close(children[i], data, false);
		after = children[i].nodeType == 1 && section == children[i] ? true : after;
	}
	Outface.refresh(section);
};
Outface.closeBefore = function(section, data){
	var children = section.parentNode.childNodes;
	var before = false;
	for(var i = children.length - 1; i > -1; i--){
		if(before)
			Outface.close(children[i], data, false);
		before = children[i].nodeType == 1 && section == children[i] ? true : before;
	}
	Outface.refresh(section);
};
Outface.refresh = function(layoutClass_section, section){
	if(typeof layoutClass_section == "string"){
		var layoutClass = layoutClass_section;
		var layout = section;
	}
	else{
		var layoutClass = Outface._getLayoutClass(layoutClass_section);
		var layout = layoutClass_section.parentNode;
	}
	if(Outface["_" + layoutClass + "Refresh"])
		Outface["_" + layoutClass + "Refresh"](layout);
};

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

/* Curtain */
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

/* Desk */
Outface._priority = [];
Outface._deskRefresh = function(layout){
	var minimiseWidth = 40;
	var desks = [];
	var openDesks = [];
	var children = layout.childNodes;
	for(var i = 0; i < children.length; i++){
		var child = children[i];
		if(child.nodeType == 1 && Outface._hasClass(child, "desk")){
			desks.push(child);
			if(Outface._hasClass(child, "open") && !Outface._hasClass(child, "closing"))
				openDesks.push(child);
		}
	}
	
	var maximiseCount = 0;
	var idealMaximiseCount = layout.hasAttribute("maximise-count") ? parseInt(layout.hasAttribute("maximise-count")) : Math.ceil(layout.clientWidth / 600);
	for(var i = 0; i < openDesks.length; i++)
		if(!Outface._hasClass(openDesks[i], "minimise"))
			maximiseCount++;
	for(var t = 0; t < Outface._priority.length && maximiseCount > idealMaximiseCount; t++)
		if(Outface._priority[t].parentNode == layout && !Outface._hasClass(Outface._priority[t], "minimise"))
			if(Outface._hasClass(Outface._priority[t], "open") && !Outface._hasClass(Outface._priority[t], "closing")){
				// Check if minimiseable
				var minimiseable = false;
				var children = Outface._priority[t].childNodes;
				for(var k = 0; k < children.length; k++)
					if(children[k].nodeType == 1 && Outface._hasClass(children[k], "tab")){
						minimiseable = true;
						break;
					}
				if(minimiseable){
					Outface._addClass(Outface._priority[t], "minimise");
					maximiseCount--;
				}
			}
	for(var t = Outface._priority.length - 1; t > -1 && maximiseCount < idealMaximiseCount; t--)
		if(Outface._priority[t].parentNode == layout && Outface._hasClass(Outface._priority[t], "minimise")){
			Outface._removeClass(Outface._priority[t], "minimise");
			maximiseCount++;
		}
	
	var unweightedAggregateWidth = layout.clientWidth;
	for(var i = 0; i < openDesks.length; i++)
		if(Outface._hasClass(openDesks[i], "minimise"))
			unweightedAggregateWidth -= minimiseWidth;
		else if(openDesks[i].hasAttribute("deckWeight"))
			unweightedAggregateWidth -= parseFloat(openDesks[i].getAttribute("deckWeight"));
	var unweightedMaximiseCount = 0;
	for(var i = 0; i < openDesks.length; i++)
		if(!Outface._hasClass(openDesks[i], "minimise"))
			if(!openDesks[i].hasAttribute("deckWeight"))
				unweightedMaximiseCount++;
	if(unweightedMaximiseCount > 0)
		var unweightedMaximiseWidth = unweightedAggregateWidth / unweightedMaximiseCount;
	
	var x = 0;
	for(var i = 0; i < desks.length; i++){
		var desk = desks[i];
		if(Outface._hasClass(desk, "open")){
			var width = 0;
			if(desk.hasAttribute("deckWeight")){
				width = parseFloat(desk.getAttribute("deckWeight"));
				if(width > layout.clientWidth)
					width = layout.clientWidth + "px";
			}
			else
				width = unweightedMaximiseWidth;
			desk.style.width = Math.ceil(width) + "px";
			if(Outface._hasClass(desk, "minimise"))
				width = minimiseWidth;
			
			var opensBefore = false;
			for(var t = i - 1; t > -1; t--)
				if(Outface._hasClass(desks[t], "open")){
					opensBefore = true;
					break;
				}
			if(!opensBefore){
				var onlyOpen = true;
				for(var t = 0; t < desks.length; t++)
					if(Outface._hasClass(desks[t], "open") && desks[t] != desk){
						onlyOpen = false;
						break;
					}
			}
			if(desk.outfaceDeskOpening === true){
				delete desk.outfaceDeskOpening;
				var source = opensBefore == true || onlyOpen == true ? layout.clientWidth : -desk.clientWidth;
				desk.style.webkitTransform = desk.style.transform = "translate3d(" + source + "px,0,0)";
				desk.style.webkitTransition = desk.style.transition = "none";
				desk.offsetHeight;
				desk.style.webkitTransition = desk.style.transition = "";
			}
			else if(desk.outfaceDeskClosing === true){
				delete desk.outfaceDeskClosing;
				var destination = opensBefore == true || onlyOpen == true ? layout.clientWidth * 2 : -desk.clientWidth * 2;
				desk.style.webkitTransform = desk.style.transform = "translate3d(" + destination + "px,0,0)";
			}
			if(!Outface._hasClass(desk, "closing")){
				desk.style.webkitTransform = desk.style.transform = "translate3d(" + x + "px,0,0)";
				x += Math.floor(width);
			}
		}		
	}
	
	// Cascade
	for(var i = 0; i < layout.childNodes.length; i++)
		if(layout.childNodes[i].nodeType == 1)
			Outface._deskRefresh(layout.childNodes[i]);
};
Outface._deskOpen = function(section){
	var index = Outface._priority.indexOf(section);
	if(index > -1)
		Outface._priority.splice(index, 1);
	Outface._priority.push(section);
	
	section.outfaceDeskOpening = true;
};
Outface._deskClose = function(section){
	var index = Outface._priority.indexOf(section);
	if(index > -1)
		Outface._priority.splice(index, 1);
	Outface._priority.splice(0, 0, section);
	
	section.outfaceDeskClosing = true;
};
Outface.deskMinimise = function(section){
	var index = Outface._priority.indexOf(section);
	if(index > -1)
		Outface._priority.splice(index, 1);
	Outface._priority.splice(0, 0, section);
	
	Outface._addClass(section, "minimise");
};
Outface.deskMaximise = function(section){
	var index = Outface._priority.indexOf(section);
	if(index > -1)
		Outface._priority.splice(index, 1);
	Outface._priority.push(section);
	
	Outface._removeClass(section, "minimise");
};

/* Prompt */
Outface._promptOpen = function(section){
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
Outface._promptClose = function(section){
	section.style.webkitTransform = section.style.transform = "translate3d(0,-50px,0)";
	section.style.opacity = "0";
};
Outface.promptX = function(content, close, context, buttons){
	context = context != null ? context : document.body;
	buttons = buttons != null ? buttons : [];
	for(var i = 0; i < buttons.length; i++){
		buttons[i].content = buttons[i].content != null ? buttons[i].content : "";
		buttons[i].className = buttons[i].className != null ? buttons[i].className : "";
	}
	
	var section = document.createElement("section");
	section.className = "prompt promptX primary shell ym modal";
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
Outface.alert = function(content, done, context, okContent){
	context = context != null ? context : document.body;
	okContent = okContent != null ? okContent : "<i class='fa fa-check'></i> OK";
	var p = document.createElement("p");
	p.appendChild(document.createTextNode(content));
	return Outface.promptX(p, done, context, [{ content:okContent, value:true }]);
};
Outface.confirm = function(content, done, context, buttons){
	context = context != null ? context : document.body;
	buttons = buttons != null ? buttons : [
		{ className:"", content:"<i class='fa fa-times'></i> CANCEL", value:false },
		{ className:"pro", content:"<i class='fa fa-check'></i> OK", value:true }
	];
	var p = document.createElement("p");
	p.appendChild(document.createTextNode(content));
	return Outface.promptX(p, done, context, buttons);
};
Outface.promptLoad = function(context, content, onCancel){
	context = context != null ? context : document.body;
	content = content != null ? content : "Loading";
	
	var contentX = document.createElement("div");
	contentX.innerHTML = "<p style='font-size:40px;'><i class='fa fa-cog fa-spin'></i></p><p></p>";
	contentX.getElementsByTagName("p")[1].innerHTML = content;
	
	buttons = [];
	if(onCancel != null)
		buttons.push({ content:"<i class='fa fa-times'></i> CANCEL", value:false });
	
	context.outfaceLoader = Outface.promptX(contentX, function(r){
		if(r === false && onCancel)
			onCancel();
	}, context, buttons);
	return context.outfaceLoader;
};
Outface.promptLoaded = function(context){
	if(!context.outfaceLoader)
		return;
	
	setTimeout(function(){
		context.outfaceLoader.addEventListener("closed", function(){ delete context.outfaceLoader; });
		Outface.close(context.outfaceLoader);
	}, 500);
}

/* Notification */
Outface._notificationRefresh = function(layout, direction){
	var notifications = [];
	var children = layout.childNodes;
	for(var i = 0; i < children.length; i++){
		var child = children[i];
		if(child.nodeType == 1 && Outface._hasClass(child, "notification") && (Outface._hasClass(child, "open") && !Outface._hasClass(child, "closing")))
			notifications.push(child);
	}
	var offset = 0;
	for(var i = 0; i < notifications.length; i++){
		var notification = notifications[i];
		offset += notification.clientHeight;
		notification.style.webkitTransform = notification.style.transform = "translate3d(0,-" + offset + "px,0)";
	}
};
Outface._notificationOpen = function(section, data){
	section.style.webkitTransform = section.style.transform = "translate3d(0,0,0)";
	section.style.webkitTransition = section.style.transition = "none";
	section.offsetHeight;
	section.style.webkitTransition = section.style.transition = "";
	if(section.getAttribute("timeout") > 0)
		section.timeoutTimeout = setTimeout(function(){
			Outface.close(section, data);
		}, section.getAttribute("timeout") * 1000);
};
Outface._notificationClose = function(section, data){
	clearTimeout(section.timeoutTimeout);
	delete section.timeoutTimeout;
	section.style.webkitTransform = section.style.transform = "translate3d(0,100%,0)";	
};
Outface.notificationX = function(content, close, context, buttons, timeout){
	context = context != null ? context : document.body;
	timeout = timeout != null ? timeout : 3;
	buttons = buttons != null ? buttons : [];
	for(var i = 0; i < buttons.length; i++)
		buttons[i].icon = buttons[i].icon != null ? buttons[i].icon : "arrow-right";
		
	var section = document.createElement("section");
	section.className = "notification notificationX primary shell xf ym close";
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
Outface.notificationAlert = function(content, done, context, okIcon){
	context = context != null ? context : document.body;
	var p = document.createElement("p");
	p.innerHTML = content;
	return Outface.notificationX(p, done, context);
};
Outface.notificationShortcut = function(content, done, context, okIcon){
	context = context != null ? context : document.body;
	okIcon = okIcon != null ? okIcon : "arrow-right";
	var p = document.createElement("p");
	p.innerHTML = content;
	return Outface.notificationX(p, done, context, [{ icon:okIcon, value:true }]);
};
Outface.notificationConfirm = function(content, done, context, buttons){
	context = context != null ? context : document.body;
	buttons = buttons != null ? buttons : [
		{ icon:"times", value:false },
		{ icon:"check", value:true, className:"pro" }
	];
	var p = document.createElement("p");
	p.innerHTML = content;
	return Outface.notificationX(p, done, context, buttons, 0);
};

/* Dialog */
Outface._dialogOpen = function(section, data){
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
Outface._dialogClose = function(section, data){
	if(Outface._hasClass(section, "dialog-left")) 
		section.style.webkitTransform = section.style.transform = "translate3d(-200%,0,0)"; 
	else if(Outface._hasClass(section, "dialog-right")) 
		section.style.webkitTransform = section.style.transform = "translate3d(200%,0,0)"; 
	else if(Outface._hasClass(section, "dialog-top")) 
		section.style.webkitTransform = section.style.transform = "translate3d(0,-200%,0)"; 
	else 
		section.style.webkitTransform = section.style.transform = "translate3d(0,200%,0)"; 
};

/* Menu */
Outface.menuClear = function(menu){
	var menuitems = menu.childNodes;
	for(var i = 0; i < menu.childNodes.length; i++)
		if(menu.childNodes[i].nodeType == 1)
			Outface.menuitemDeselect(menu.childNodes[i]);
};
Outface.menuitemSelect = function(menuitem){
	Outface._addClass(menuitem, "select");
};
Outface.menuitemSelectClear = function(menuitem){
	Outface.menuClear(menuitem.parentNode);
	Outface._addClass(menuitem, "select");
};
Outface.menuitemDeselect = function(menuitem){
	Outface._removeClass(menuitem, "select");
};
Outface.menuitemToggle = function(menuitem){
	if(Outface._hasClass(menuitem, "select"))
		Outface._removeClass(menuitem, "select");
	else
		Outface._addClass(menuitem, "select");
};

/* Load */
Outface.load = function(element){
	element.disabled = true;
	
	var icon = element.getElementsByTagName("i")[0];
	if(icon == null)
		return;
	
	Outface._addClass(element, "load");
	element.oIconClassName = icon.className;
	icon.className = "fa fa-cog fa-spin load";
};
Outface.loaded = function(element){
	element.disabled = false;
	
	var icon = element.getElementsByTagName("i")[0];
	if(icon == null)
		return;
	
	Outface._removeClass(element, "load")
	icon.className = element.oIconClassName;
	delete element.oIconClassName;
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
window.addEventListener("resize", function(){ Outface._deskRefresh(document.body); });
