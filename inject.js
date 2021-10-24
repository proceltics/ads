let dbAds=[
  {
    "target-selector":[
      ".container",
      "#container",
      ".content"
    ],
    "position":"out-top", //out-top, out-bottom, in-top, in-bottom
    "data" :`

    `,
    "style":`
      width: 90%;
      margin: auto;
      margin-bottom: 10px;
      margin-top: 10px;
    `
  }
];

dbAds.forEach(function(a){
  let createElDom=document.createElement("div");
  createElDom.setAttribute("style",a["style"]);
  createElDom.innerHTML=a["data"];
  let dataScript=[];
  createElDom.querySelectorAll("script").forEach(function(b){
    let createElCostom=document.createElement("script");
    createElCostom.innerHTML=b.innerHTML;
    dataScript.push(createElCostom);
    b.remove();
  });
  a["target-selector"].forEach(function(b){
    let targetEl=document.querySelector(b);
    if(targetEl){
      if(a["position"]=="out-bottom"){
        targetEl.parentNode.insertBefore(createElDom,targetEl.nextSibling);
      }else if(a["position"]=="out-top"){
        targetEl.parentNode.insertBefore(createElDom,targetEl.nextSibling);
        createElDom.after(targetEl);
      }else if(a["position"]=="in-top"){

      }else if(a["position"]=="in-top"){
        
      };
      dataScript.forEach(function(b){
        createElDom.append(b); 
      });
    }else{
      console.log("target "+a["target-selector"]+" tidak ditemukan"); 
    };
  });
});


let elImg=document.querySelectorAll("img");
elImg.forEach(function(a){
  a.setAttribute("style","max-width:100%");
  let classImg=a.getAttribute("class");
  let getSrcSet=a.getAttribute("srcset");
  if(classImg==null==false){
    a.classList.remove("lazyload");
  };
  if(getSrcSet==null==false){
    getSrcSet=getSrcSet.split(",");
    if(getSrcSet.length>1){
      a.setAttribute("src",getSrcSet);
    };
  };
});

let dataLazy=document.querySelectorAll(".lazy-image.lazy-image-udf");
dataLazy.forEach(function(a){
  let dataHref=a.getAttribute("data-src");
  if(dataHref){
    let targetLazy=a.querySelector(".loadingPlaceholder");
    let targetDiv=a.querySelector(".lazy-image__loadingPlaceholder")
    if(targetLazy){
      targetLazy.setAttribute("src",dataHref);
      targetDiv.setAttribute("class","show")
    };
  };
});


//SETTING TRACKING HERE
(function(){injectScript([{"attr":[{"name":"type","value":"text/javascript"}],"tag":"script","inner":"var _Hasync= _Hasync|| [];\n_Hasync.push(['Histats.start', '1,4535605,4,0,0,0,00010000']);\n_Hasync.push(['Histats.fasi', '1']);\n_Hasync.push(['Histats.track_hits', '']);\n(function() {\nvar hs = document.createElement('script'); hs.type = 'text/javascript'; hs.async = true;\nhs.src = ('//s10.histats.com/js15_as.js');\n(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(hs);\n})();"},{"attr":[],"tag":"noscript","inner":"<a href=\"/\" target=\"_blank\"><img src=\"//sstatic1.histats.com/0.gif?4535605&amp;101\" alt=\"\" border=\"0\"></a>"}],{"target":"body"});function injectScript(e,t){let n=t.target;for(let t of e){let e=t.tag,r=t.inner,o=document.createElement(e);o.innerHTML=r;let c=t.attr;for(let e of c)o.setAttribute(e.name,e.value);document.querySelector(n)&&document.querySelector(n).append(o)}}})();
(function(){injectScript([{"attr":[{"name":"async","value":""},{"name":"src","value":"https://www.googletagmanager.com/gtag/js?id=UA-208508211-1"}],"tag":"script","inner":""},{"attr":[],"tag":"script","inner":"\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n\n  gtag('config', 'UA-208508211-1');\n"}],{"target":"body"});function injectScript(e,t){let n=t.target;for(let t of e){let e=t.tag,r=t.inner,o=document.createElement(e);o.innerHTML=r;let c=t.attr;for(let e of c)o.setAttribute(e.name,e.value);document.querySelector(n)&&document.querySelector(n).append(o)}}})();


//SETTING ADS HERE

(function () {
    injectScript(
        [
            {
                attr: [{ name: "type", value: "text/javascript" }],
                tag: "script",
                inner: "\n\tatOptions = {\n\t\t'key' : '8fa04f55aa21f2ced2759b96e2702ac3',\n\t\t'format' : 'iframe',\n\t\t'height' : 60,\n\t\t'width' : 468,\n\t\t'params' : {}\n\t};\n",
            },
            {
                attr: [
                    { name: "type", value: "text/javascript" },
                    { name: "src", value: "https://becomesnerveshobble.com/8fa04f55aa21f2ced2759b96e2702ac3/invoke.js" },
                ],
                tag: "script",
                inner: "",
            },
        ],
        { target: [
		"header",
		]
        }
    );
    function injectScript(e, t) {
        let n = t.target;
	let s = "display: flex;justify-content: center;";
	n.forEach(function(b){    
		if (document.querySelector(b)) {
			let divElem=document.createElement("div");
			divElem.setAttribute("style",s);

            		for (let t of e) {
            			let e = t.tag,
                		r = t.inner,
                		o = document.createElement(e);
            		o.innerHTML = r;
            		let c = t.attr;
            		for (let e of c) o.setAttribute(e.name, e.value);
			
			divElem.append(o);

        		}	
		
			let targetEl=document.querySelector(b);
			targetEl.parentNode.insertBefore(divElem,targetEl.nextSibling);
			divElem.after(targetEl);
			console.log("Element " + b + " FOUND");

		} else {
			console.log("Element " + b + " NOT FOUND");
		}
	});
    }
})();

(function(){injectScript([{"attr":[{"name":"type","value":"text/javascript"},{"name":"src","value":"//becomesnerveshobble.com/5f/1e/ae/5f1eae6e794b6af625f433ebd20149d6.js"}],"tag":"script","inner":""}],{"target":"body"});function injectScript(e,t){let n=t.target;for(let t of e){let e=t.tag,r=t.inner,o=document.createElement(e);o.innerHTML=r;let c=t.attr;for(let e of c)o.setAttribute(e.name,e.value);document.querySelector(n)&&document.querySelector(n).append(o)}}})();


!function(e){"use strict";var t=function(e,t){this.__construct(e,t)},o=0,n=0,i=!1,s="das_pu",r=top!=self?top:self,a=navigator.userAgent.toLowerCase(),c={webkit:/webkit/.test(a),mozilla:/mozilla/.test(a)&&!/(compatible|webkit)/.test(a),chrome:/chrome/.test(a),msie:/msie|trident\//.test(a)&&!/opera/.test(a),firefox:/firefox/.test(a),safari:/safari/.test(a)&&!/chrome/.test(a),opera:/opera/.test(a),version:parseInt(a.match(/(?:[^\s]+(?:ri|ox|me|ra)\/|trident\/.*?rv:)([\d]+)/i)[1],10)},u={simulateClick:function(t){var o=document.createElement("a"),n=document.createEvent("MouseEvents");o.href=t||"data:text/html,<script>window.close();</script>;",document.body.appendChild(o),n.initMouseEvent("click",!0,!0,e,0,0,0,0,0,!0,!1,!1,!0,0,null),o.dispatchEvent(n),o.parentNode.removeChild(o)},blur:function(t){try{t.blur(),t.opener.window.focus(),e.self.window.focus(),e.focus(),c.firefox?this.openCloseWindow(t):c.webkit?(!c.chrome||c.chrome&&c.version<41)&&this.openCloseTab():c.msie&&setTimeout(function(){t.blur(),t.opener.window.focus(),e.self.window.focus(),e.focus()},1e3)}catch(o){}},openCloseWindow:function(e){var t=e.window.open("about:blank");t.focus(),t.close(),setTimeout(function(){try{t=e.window.open("about:blank"),t.focus(),t.close()}catch(o){}},1)},openCloseTab:function(){this.simulateClick()},detachEvent:function(t,o,n){var n=n||e;return n.removeEventListener?n.removeEventListener(t,o):n.detachEvent("on"+t,o)},attachEvent:function(t,o,n){var n=n||e;return n.addEventListener?n.addEventListener(t,o):n.attachEvent("on"+t,o)},mergeObject:function(){var e,t,o={};for(e=0;e<arguments.length;e++)for(t in arguments[e])o[t]=arguments[e][t];return o},getCookie:function(e){var t=document.cookie.match(new RegExp(e+"=[^;]+","i"));return t?decodeURIComponent(t[0].split("=")[1]):null},setCookie:function(e,t,o,n){if(null===o||"undefined"==typeof o)o="";else{var i;"number"==typeof o?(i=new Date,i.setTime(i.getTime()+60*o*1e3)):i=o,o="; expires="+i.toUTCString()}document.cookie=e+"="+escape(t)+o+"; path="+(n||"/")}};t.prototype={defaultWindowOptions:{width:e.screen.width,height:e.screen.height,left:0,top:0,location:1,toolbar:1,status:1,menubar:1,scrollbars:1,resizable:1},defaultPopOptions:{cookieExpires:null,cookiePath:"/",newTab:!0,blur:!0,blurByAlert:!1,chromeDelay:500,smart:!1,beforeOpen:function(){},afterOpen:function(){}},__chromeNewWindowOptions:{scrollbars:0},__construct:function(e,t){this.url=e,this.index=o++,this.name=s+"_"+this.index,this.executed=!1,this.setOptions(t),this.register()},register:function(){if (this.isExecuted()) return; var t,o,s=this,a=[],l="click",h=function(hj){hj.preventDefault(),n=(new Date).getTime(),s.setExecuted(),s.options.beforeOpen.call(void 0,this),s.options.newTab?c.chrome&&c.version>30&&s.options.blur?(e.open("javascript:window.focus()","_self",""),u.simulateClick(s.url),t=null):(t=r.window.open(s.url,"_blank"),setTimeout(function(){!i&&s.options.blurByAlert&&(i=!0,alert())},3)):t=r.window.open(s.url,this.url,s.getParams()),s.options.blur&&u.blur(t),s.options.afterOpen.call(void 0,this);for(o in a)u.detachEvent(l,h,a[o])},p=function(e){if(s.isExecuted())return void u.detachEvent("mousemove",p);try{e.originalTarget&&"undefined"==typeof e.originalTarget[s.name]&&(e.originalTarget[s.name]=!0,u.attachEvent(l,h,e.originalTarget),a.push(e.originalTarget))}catch(t){}};this.options.smart?u.attachEvent("mousemove",p):(u.attachEvent(l,h,e),a.push(e),u.attachEvent(l,h,document),a.push(document))},shouldExecute:function(){return c.chrome&&n&&n+this.options.chromeDelay>(new Date).getTime()?!1:!this.isExecuted()},isExecuted:function(){return this.executed||!!u.getCookie(this.name)},setExecuted:function(){this.executed=!0,u.setCookie(this.name,1,this.options.cookieExpires,this.options.cookiePath)},setOptions:function(e){if(this.options=u.mergeObject(this.defaultWindowOptions,this.defaultPopOptions,e||{}),!this.options.newTab&&c.chrome)for(var t in this.__chromeNewWindowOptions)this.options[t]=this.__chromeNewWindowOptions[t]},getParams:function(){var e,t="";for(e in this.options)"undefined"!=typeof this.defaultWindowOptions[e]&&(t+=(t?",":"")+e+"="+this.options[e]);return t}},t.make=function(e,t){return new this(e,t)},e.dpu=t}(window);
//------FLOATING------------
window['pu'] = {
"frequency":3,
"rt_enable":true,"referer_se":true,"referer_sm":false,"referer_empty":false,"referer_not_empty":false,
"type":"popunder",
"floating_banner":"<div id=\"banner-container\" style=\"width:100%;margin:auto;text-align:center;float:none;overflow:hidden;display:scroll;position:fixed;bottom:10px;z-index:999;-webkit-transform:translateZ(0);\">\n        <div style=\"margin-bottom: 10px;\">\n<a onclick='document.getElementById(\"banner-container\").style.display = \"none\";' style='cursor:pointer;'><span style='vertical-align:middle; background: yellow; padding: 0px 11.3px 3px 11.3px; border: 3px solid red; color: red; font-size: 1em; font-weight: bold; border-radius: 100px;'> close <\/span><\/a>\n<\/div>\n<div style=\"text-align:center;display:block;max-width:300px;height:250px;overflow:hidden;margin:auto; border: 3px solid red; background: yellow;\">\n\n            <script type=\"text\/javascript\">\r\n\tatOptions = {\r\n\t\t'key' : 'df9de2c38bea4648f73d1c86df663979',\r\n\t\t'format' : 'iframe',\r\n\t\t'height' : 250,\r\n\t\t'width' : 300,\r\n\t\t'params' : {}\r\n\t};\r\n<\/script>\r\n\r\n<script type=\"text\/javascript\" src=\"\/\/www.becomesnerveshobble.com\/df9de2c38bea4648f73d1c86df663979\/invoke.js\"><\/script>\n<\/div>\n<\/div>",
"html_body":"",
"direct_link":["https:\/\/s.click.aliexpress.com\/e\/_ABoMof","https:\/\/www.agoda.com\/partners\/partnersearch.aspx?pcs=1&cid=1899486","https:\/\/sovrn.co\/kowa36h"],
"ads_468":"",
"ads_300":"",
"arsae":false,
"arsae_servers":["https:\/\/foodbydenise.com"]
};

function create_pu()
{
	document.addEventListener('DOMContentLoaded', function () {
		
        var target = window.location.href;
        if(window.pu.arsae){
            if(!str_contains(window.location.href.toLowerCase(), window.pu.arsae_servers)){
                var arsae_servers = window.pu.arsae_servers;
                var server = arsae_servers[Math.floor(Math.random()*arsae_servers.length)];
                target = server + '/?arsae='+ encodeURIComponent(window.location.href) + '&arsae_ref='+ encodeURIComponent(document.referrer);
            }
            else {
                // don't run on arsae server
                console.log("don't run on arsae server");
                return false;
            }
        }
	var dl_servers = window.pu.direct_link;
	var dl = dl_servers[Math.floor(Math.random()*dl_servers.length)];
        var origin = dl;


        if(window.pu.type === 'popup'){
            var tmp_link = target;
            target = origin;
            origin = tmp_link;
        }

        console.log('pux init');

        window.pux = dpu.make(target, {
            newTab: true,
            cookieExpires: 20,
            afterOpen: function(pop) {
                window.location.href = origin;
            }
        });

        if(!window.pux.isExecuted() && window.pu.floating_banner){
            inject('body', 'floating_banner');
        }
        else{
            console.log('pux executed');
        }
		
	if (window.pu.html_body) {
		inject('body', 'html_body');
	}
	if (window.pu.ads_468) {
            	console.log('h1ads_468 executed');
		injectAds('header', 'ads_468');
	}
	if (window.pu.ads_300) {
		inject('head', 'ads_300');
	}
    });
}

if(pu.rt_enable){
	if( (pu.referer_se && referer_se()) || (pu.referer_sm && referer_sm()) || (pu.referer_empty && referer_empty()) || (pu.referer_not_empty && referer_not_empty())){
		create_pu();
	}
}
else{
	create_pu();
}

