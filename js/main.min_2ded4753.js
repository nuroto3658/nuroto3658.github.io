var extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},__extends=function(e,t){function n(){this.constructor=e}extendStatics(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)},__assign=Object.assign||function(e){for(var t,n=1,r=arguments.length;r>n;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},__rest=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n},__decorate=function(e,t,n,r){var o,i=arguments.length,a=3>i?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(3>i?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},__param=function(e,t){return function(n,r){t(n,r,e)}},__metadata=function(e,t){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(e,t):void 0},__awaiter=function(e,t,n,r){function o(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||(n=Promise))(function(n,i){function a(e){try{u(r.next(e))}catch(t){i(t)}}function s(e){try{u(r["throw"](e))}catch(t){i(t)}}function u(e){e.done?n(e.value):o(e.value).then(a,s)}u((r=r.apply(e,t||[])).next())})},__generator=function(e,t){function n(e){return function(t){return r([e,t])}}function r(n){if(o)throw new TypeError("Generator is already executing.");for(;u;)try{if(o=1,i&&(a=2&n[0]?i["return"]:n[0]?i["throw"]||((a=i["return"])&&a.call(i),0):i.next)&&!(a=a.call(i,n[1])).done)return a;switch(i=0,a&&(n=[2&n[0],a.value]),n[0]){case 0:case 1:a=n;break;case 4:return u.label++,{value:n[1],done:!1};case 5:u.label++,i=n[1],n=[0];continue;case 7:n=u.ops.pop(),u.trys.pop();continue;default:if(a=u.trys,!(a=a.length>0&&a[a.length-1])&&(6===n[0]||2===n[0])){u=0;continue}if(3===n[0]&&(!a||n[1]>a[0]&&n[1]<a[3])){u.label=n[1];break}if(6===n[0]&&u.label<a[1]){u.label=a[1],a=n;break}if(a&&u.label<a[2]){u.label=a[2],u.ops.push(n);break}a[2]&&u.ops.pop(),u.trys.pop();continue}n=t.call(e,u)}catch(r){n=[6,r],i=0}finally{o=a=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var o,i,a,s,u={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return s={next:n(0),"throw":n(1),"return":n(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s},__exportStar=function(e,t){for(var n in e)"default"===n||t.hasOwnProperty(n)||__createBinding(t,e,n)},__createBinding=Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]},__values=function(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")},__read=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),a=[];try{for(;(void 0===t||t-->0)&&!(r=i.next()).done;)a.push(r.value)}catch(s){o={error:s}}finally{try{r&&!r.done&&(n=i["return"])&&n.call(i)}finally{if(o)throw o.error}}return a},__spread=function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(__read(arguments[t]));return e},__spreadArrays=function(){for(var e=0,t=0,n=arguments.length;n>t;t++)e+=arguments[t].length;for(var r=Array(e),o=0,t=0;n>t;t++)for(var i=arguments[t],a=0,s=i.length;s>a;a++,o++)r[o]=i[a];return r},__await=function(e){return this instanceof __await?(this.v=e,this):new __await(e)},__asyncGenerator=function(e,t,n){function r(e){l[e]&&(c[e]=function(t){return new Promise(function(n,r){f.push([e,t,n,r])>1||o(e,t)})})}function o(e,t){try{i(l[e](t))}catch(n){u(f[0][3],n)}}function i(e){e.value instanceof __await?Promise.resolve(e.value.v).then(a,s):u(f[0][2],e)}function a(e){o("next",e)}function s(e){o("throw",e)}function u(e,t){e(t),f.shift(),f.length&&o(f[0][0],f[0][1])}if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var c,l=n.apply(e,t||[]),f=[];return c={},r("next"),r("throw"),r("return"),c[Symbol.asyncIterator]=function(){return this},c},__asyncDelegator=function(e){function t(t,o){n[t]=e[t]?function(n){return(r=!r)?{value:__await(e[t](n)),done:"return"===t}:o?o(n):n}:o}var n,r;return n={},t("next"),t("throw",function(e){throw e}),t("return"),n[Symbol.iterator]=function(){return this},n},__asyncValues=function(e){function t(t){r[t]=e[t]&&function(r){return new Promise(function(o,i){r=e[t](r),n(o,i,r.done,r.value)})}}function n(e,t,n,r){Promise.resolve(r).then(function(t){e({value:t,done:n})},t)}if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,o=e[Symbol.asyncIterator];return o?o.call(e):(e="function"==typeof __values?__values(e):e[Symbol.iterator](),r={},t("next"),t("throw"),t("return"),r[Symbol.asyncIterator]=function(){return this},r)},__makeTemplateObject=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},__setModuleDefault=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e["default"]=t},__importStar=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&__createBinding(t,e,n);return __setModuleDefault(t,e),t},__importDefault=function(e){return e&&e.__esModule?e:{"default":e}},__classPrivateFieldGet=function(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)},__classPrivateFieldSet=function(e,t,n){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,n),n},__reflect=function(e,t,n){e.__class__=t,n?n.push(t):n=[t],e.__types__=e.__types__?n.concat(e.__types__):n};!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(t){return e[t]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){n(1),n(2),n(0),n(3),n(4),n(5),n(6),n(7),n(8);var r=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.gameView=null,t}return __extends(t,e),t.prototype.createChildren=function(){e.prototype.createChildren.call(this),egret.lifecycle.addLifecycleListener(function(e){}),egret.lifecycle.onPause=function(){egret.ticker.pause()},egret.lifecycle.onResume=function(){egret.ticker.resume()};var t=new AssetAdapter;egret.registerImplementation("eui.IAssetAdapter",t),egret.registerImplementation("eui.IThemeAdapter",new ThemeAdapter),this.runGame()["catch"](function(e){console.log(e)})},t.prototype.runGame=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){switch(e.label){case 0:return[4,this.loadResource()];case 1:return e.sent(),this.createGameScene(),[2]}})})},t.prototype.loadResource=function(){return __awaiter(this,void 0,void 0,function(){var e,t;return __generator(this,function(n){switch(n.label){case 0:return n.trys.push([0,4,,5]),e=new LoadingUI,this.stage.addChild(e),[4,RES.loadConfig("resource/default.res.json","resource/")];case 1:return n.sent(),[4,this.loadTheme()];case 2:return n.sent(),[4,RES.loadGroup("preload",0,e)];case 3:return n.sent(),this.stage.removeChild(e),[3,5];case 4:return t=n.sent(),console.error(t),[3,5];case 5:return[2]}})})},t.prototype.loadTheme=function(){var e=this;return new Promise(function(t,n){var r=new eui.Theme("resource/default.thm.json",e.stage);r.addEventListener(eui.UIEvent.COMPLETE,function(){t()},e)})},t.prototype.createGameScene=function(){var e=this;e.gameView=new GameView,e.gameView.percentHeight=e.gameView.percentWidth=100,e.gameView.verticalCenter=e.gameView.horizontalCenter=0,e.addChild(e.gameView)},t.prototype.createBitmapByName=function(e){var t=new egret.Bitmap,n=RES.getRes(e);return t.texture=n,t},t.prototype.startAnimation=function(e){var t=this,n=new egret.HtmlTextParser,r=e.map(function(e){return n.parse(e)}),o=this.textfield,i=-1,a=function(){i++,i>=r.length&&(i=0);var e=r[i];o.textFlow=e;var n=egret.Tween.get(o);n.to({alpha:1},200),n.wait(2e3),n.to({alpha:0},200),n.call(a,t)};a()},t}(eui.UILayer);window.Main=r,__reflect(r.prototype,"Main",[])},function(e,t){var n=function(){function e(){}return e.prototype.getAsset=function(e,t,n){function r(r){t.call(n,r,e)}if(RES.hasRes(e)){var o=RES.getRes(e);o?r(o):RES.getResAsync(e,r,this)}else RES.getResByUrl(e,r,this,RES.ResourceItem.TYPE_IMAGE)},e}();window.AssetAdapter=n,__reflect(n.prototype,"AssetAdapter",["eui.IAssetAdapter"])},function(e,t){var n=function(e){function t(){var t=e.call(this)||this;return t.createView(),t}return __extends(t,e),t.prototype.createView=function(){this.textField=new egret.TextField,this.addChild(this.textField),this.textField.y=300,this.textField.width=480,this.textField.height=100,this.textField.textAlign="center"},t.prototype.onProgress=function(e,t){this.textField.text="Loading..."+e+"/"+t},t}(egret.Sprite);window.LoadingUI=n,__reflect(n.prototype,"LoadingUI",["RES.PromiseTaskReporter"])},function(e,t){var n=function(){function e(){}return e.prototype.getUserInfo=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2,{nickName:"username"}]})})},e.prototype.login=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2]})})},e}();window.DebugPlatform=n,__reflect(n.prototype,"DebugPlatform",["Platform"]),window.platform||(window.platform=new n)},function(e,t){var n=function(){function e(){}return e.prototype.getTheme=function(e,t,n,r){function o(e){t.call(r,e)}function i(t){t.resItem.url==e&&(RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,i,null),n.call(r))}var a=this;if("undefined"!=typeof generateEUI)egret.callLater(function(){t.call(r,generateEUI)},this);else if("undefined"!=typeof generateEUI2)RES.getResByUrl("resource/gameEui.json",function(e,n){window.JSONParseClass.setData(e),egret.callLater(function(){t.call(r,generateEUI2)},a)},this,RES.ResourceItem.TYPE_JSON);else if("undefined"!=typeof generateJSON)if(e.indexOf(".exml")>-1){var s=e.replace(".exml","_EUI.json");generateJSON.paths[e]?egret.callLater(function(){t.call(r,generateJSON.paths[e])},this):RES.getResByUrl(s,function(n){window.JSONParseClass.setData(n),egret.callLater(function(){t.call(r,generateJSON.paths[e])},a)},this,RES.ResourceItem.TYPE_JSON)}else egret.callLater(function(){t.call(r,generateJSON)},this);else RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,i,null),RES.getResByUrl(e,o,this,RES.ResourceItem.TYPE_TEXT)},e}();window.ThemeAdapter=n,__reflect(n.prototype,"ThemeAdapter",["eui.IThemeAdapter"])},function(e,t){var n=function(){function e(){}return e.ANIMATION="Role_action|Armature",e}();window.AssetsConfig=n,__reflect(n.prototype,"AssetsConfig",[])},function(e,t){var n=function(){function e(){}return e.getInstance=function(){return e.instance||(e.instance=new e),e.instance},e.prototype.getDragonBoneByConfig=function(e,t,n){void 0===n&&(n=!1);var r=this,o=e.split("|"),i=o[0],a=o[1],s="";o.length>2&&(s=o[2]);var u,c;c||(c=new dragonBones.EgretFactory);var l;if(!l){if(l=RES.getRes(i+"_ske_json"),null==l)throw new Error("getDragonBoneByConfig is failed. Can not get resource by "+i+"_ske_json");c.addDragonBonesData(c.parseDragonBonesData(l)),r.addDragonTexture(c,i)}return u=c.buildArmatureDisplay(a)},e.prototype.addDragonTexture=function(e,t){var n=RES.getRes(t+"_tex_json"),r=RES.getRes(t+"_tex_png");if(r)return void e.addTextureAtlasData(e.parseTextureAtlasData(n,r));for(var o=0;;){if(n=RES.getRes(t+"_tex_"+o+"_json"),r=RES.getRes(t+"_tex_"+o+"_png"),null==n&&null==r)return;if(null!=n&&null==r||null==n&&null!=r)throw new Error("addDragonTexture failed. error getting "+t+"_tex_"+o+" resource.");e.addTextureAtlasData(e.parseTextureAtlasData(n,r)),o++}},e.setDragonBoneSlotDisplay=function(e,t,n){if(!n)return console.log("Failed display object for the slot name "+t+" in the armature "+e.name),!1;var r=e.armature.getSlot(t);if(!r)return console.log("Slot name "+t+" in the armature "+e.name+" is not exist"),!1;var o="slotName",i=n[o];if(i){var a=e.armature.getSlot(i);a&&(a.display=null)}return r.display&&console.log("Slot name "+t+" have displayObj in the armature "+e.name),n[o]=t,r.display=n,r.invalidUpdate(),!0},e.removeDragonBoneSlotDisplay=function(e,t){var n=e.armature.getSlot(t);if(!n)return!1;var r=n.display;if(!r)return!1;var o="slotName";r[o]=null,n.display=null},e.removeGroupChildren=function(e){for(var t,n=e.numChildren,r=0;n>r;r++)t=e.removeChildAt(0),t instanceof dragonBones.EgretArmatureDisplay&&t.dispose(),t=null;e.removeChildren()},e}();window.AssetsUtil=n,__reflect(n.prototype,"AssetsUtil",[])},function(e,t){var n=function(e){function t(){var t=e.call(this)||this;return t.questions=0,t.correct=!1,t}return __extends(t,e),t.prototype.partAdded=function(t,n){e.prototype.partAdded.call(this,t,n)},t.prototype.childrenCreated=function(){var t=this;e.prototype.childrenCreated.call(this),this.optionGP_1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onButtonClick,this),this.button_1.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){return t.onClickOption("1")},this),this.button_2.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){return t.onClickOption("2")},this),this.button_3.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){return t.onClickOption("3")},this),this.button_4.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){return t.onClickOption("4")},this),this.master=AssetsUtil.getInstance().getDragonBoneByConfig(AssetsConfig.ANIMATION,0,!0),this.enemy=AssetsUtil.getInstance().getDragonBoneByConfig(AssetsConfig.ANIMATION,0,!0),this.enemy.scaleX=-1,this.masterGP.addChild(this.master),this.enemyGP.addChild(this.enemy)},t.prototype.onButtonClick=function(){var e=this;e.buttonGP_1.touchEnabled=!1,e.mapBGImg.visible=!1,e.figureGP.visible=!0,egret.Tween.get(this).wait(2e3).call(this.closeVsGP).wait(1e3).call(this.startQuestion)},t.prototype.closeVsGP=function(){var e=this;e.figureGP.visible=!1},t.prototype.startQuestion=function(){var e=this;e.enemy.animation.gotoAndPlayByFrame("idle",0,-1),e.master.animation.gotoAndPlayByFrame("idle",0,-1),this.countdownTimer()},t.prototype.countdownTimer=function(){var e=this;e.questions++,e.questions>2&&(e.questions=1),e.questionImg.source="question_0"+e.questions+"_png",e.answerImg.source="answer_0"+e.questions+"_png",e.questionImg.visible=!0,e.buttonGP.visible=!0,e.countdownFNT.visible=!0,e.buttonGP.touchEnabled=!0,e.totalTimes=5,egret.Tween.removeTweens(e),egret.Tween.get(e,{onChange:e.onChange,onChangeObj:e}).to({totalTimes:0},5e3).wait(200).call(function(){return e.showAnswer()})},t.prototype.onChange=function(){this.countdownFNT.text=""+Math.round(this.totalTimes)},t.prototype.onClickOption=function(e){var t=this;egret.Tween.removeTweens(t),t.buttonGP.touchEnabled=!1;var n;n=Question.answerList[t.questions-1].indexOf(e),-1==n?(t.correct=!1,t.logoImg.source="no_png"):(t.correct=!0,t.logoImg.source="yes_png"),egret.Tween.get(this).wait(500).call(this.showAnswer)},t.prototype.showAnswer=function(){var e=this;egret.Tween.removeTweens(e),e.logoImg.visible=!0,e.questionImg.visible=!1,e.answerImg.visible=!0,e.buttonGP.visible=!1,e.countdownFNT.visible=!1,egret.Tween.get(this).wait(2e3).call(this.showNext)},t.prototype.showNext=function(){var e=this;egret.Tween.removeTweens(e),e.nextImg.visible=!0,e.nextImg.once(egret.TouchEvent.TOUCH_TAP,this.showAnimation,this)},t.prototype.showAnimation=function(){var e=this;e.logoImg.visible=!1,e.questionImg.visible=!1,e.answerImg.visible=!1,e.nextImg.visible=!1,e.correct?(e.master.animation.gotoAndPlayByFrame("run",0,1),e.master.once(dragonBones.EgretEvent.COMPLETE,function(){return e.showAttack("master")},this)):(e.enemy.animation.gotoAndPlayByFrame("run",0,1),e.enemy.once(dragonBones.EgretEvent.COMPLETE,function(){return e.showAttack("enemy")},this))},t.prototype.showAttack=function(e){var t=this;switch(e){case"master":t.master.animation.gotoAndPlayByFrame("attack",0,1),t.enemy.animation.gotoAndPlayByFrame("hurt",0,1),t.enemy.once(dragonBones.EgretEvent.COMPLETE,t.afterHurt,this);break;case"enemy":t.enemy.animation.gotoAndPlayByFrame("attack",0,1),t.master.animation.gotoAndPlayByFrame("hurt",0,1),t.master.once(dragonBones.EgretEvent.COMPLETE,t.afterHurt,this)}},t.prototype.afterHurt=function(){var e=this;e.startQuestion();var t="<font color=#FFFFFF>哈哈哈哈</font>\n<font color='#ff0000'>嘿嘿嘿嘿</font>",n=new egret.TextField;n.width=400,n.height=200,n.textFlow=(new egret.HtmlTextParser).parser(t),this.addChild(n)},t}(eui.Component);window.GameView=n,__reflect(n.prototype,"GameView",["eui.UIComponent"])},function(e,t){var n=function(){function e(){}return e.answerList=["2,3,4","3"],e}();window.Question=n,__reflect(n.prototype,"Question",[])}]);