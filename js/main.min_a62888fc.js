var extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},__extends=function(e,t){function n(){this.constructor=e}extendStatics(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)},__assign=Object.assign||function(e){for(var t,n=1,o=arguments.length;o>n;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},__rest=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(n[o[i]]=e[o[i]]);return n},__decorate=function(e,t,n,o){var i,a=arguments.length,r=3>a?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(r=(3>a?i(r):a>3?i(t,n,r):i(t,n))||r);return a>3&&r&&Object.defineProperty(t,n,r),r},__param=function(e,t){return function(n,o){t(n,o,e)}},__metadata=function(e,t){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(e,t):void 0},__awaiter=function(e,t,n,o){function i(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||(n=Promise))(function(n,a){function r(e){try{u(o.next(e))}catch(t){a(t)}}function s(e){try{u(o["throw"](e))}catch(t){a(t)}}function u(e){e.done?n(e.value):i(e.value).then(r,s)}u((o=o.apply(e,t||[])).next())})},__generator=function(e,t){function n(e){return function(t){return o([e,t])}}function o(n){if(i)throw new TypeError("Generator is already executing.");for(;u;)try{if(i=1,a&&(r=2&n[0]?a["return"]:n[0]?a["throw"]||((r=a["return"])&&r.call(a),0):a.next)&&!(r=r.call(a,n[1])).done)return r;switch(a=0,r&&(n=[2&n[0],r.value]),n[0]){case 0:case 1:r=n;break;case 4:return u.label++,{value:n[1],done:!1};case 5:u.label++,a=n[1],n=[0];continue;case 7:n=u.ops.pop(),u.trys.pop();continue;default:if(r=u.trys,!(r=r.length>0&&r[r.length-1])&&(6===n[0]||2===n[0])){u=0;continue}if(3===n[0]&&(!r||n[1]>r[0]&&n[1]<r[3])){u.label=n[1];break}if(6===n[0]&&u.label<r[1]){u.label=r[1],r=n;break}if(r&&u.label<r[2]){u.label=r[2],u.ops.push(n);break}r[2]&&u.ops.pop(),u.trys.pop();continue}n=t.call(e,u)}catch(o){n=[6,o],a=0}finally{i=r=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var i,a,r,s,u={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return s={next:n(0),"throw":n(1),"return":n(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s},__exportStar=function(e,t){for(var n in e)"default"===n||t.hasOwnProperty(n)||__createBinding(t,e,n)},__createBinding=Object.create?function(e,t,n,o){void 0===o&&(o=n),Object.defineProperty(e,o,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]},__values=function(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],o=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&o>=e.length&&(e=void 0),{value:e&&e[o++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")},__read=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var o,i,a=n.call(e),r=[];try{for(;(void 0===t||t-->0)&&!(o=a.next()).done;)r.push(o.value)}catch(s){i={error:s}}finally{try{o&&!o.done&&(n=a["return"])&&n.call(a)}finally{if(i)throw i.error}}return r},__spread=function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(__read(arguments[t]));return e},__spreadArrays=function(){for(var e=0,t=0,n=arguments.length;n>t;t++)e+=arguments[t].length;for(var o=Array(e),i=0,t=0;n>t;t++)for(var a=arguments[t],r=0,s=a.length;s>r;r++,i++)o[i]=a[r];return o},__await=function(e){return this instanceof __await?(this.v=e,this):new __await(e)},__asyncGenerator=function(e,t,n){function o(e){c[e]&&(l[e]=function(t){return new Promise(function(n,o){d.push([e,t,n,o])>1||i(e,t)})})}function i(e,t){try{a(c[e](t))}catch(n){u(d[0][3],n)}}function a(e){e.value instanceof __await?Promise.resolve(e.value.v).then(r,s):u(d[0][2],e)}function r(e){i("next",e)}function s(e){i("throw",e)}function u(e,t){e(t),d.shift(),d.length&&i(d[0][0],d[0][1])}if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var l,c=n.apply(e,t||[]),d=[];return l={},o("next"),o("throw"),o("return"),l[Symbol.asyncIterator]=function(){return this},l},__asyncDelegator=function(e){function t(t,i){n[t]=e[t]?function(n){return(o=!o)?{value:__await(e[t](n)),done:"return"===t}:i?i(n):n}:i}var n,o;return n={},t("next"),t("throw",function(e){throw e}),t("return"),n[Symbol.iterator]=function(){return this},n},__asyncValues=function(e){function t(t){o[t]=e[t]&&function(o){return new Promise(function(i,a){o=e[t](o),n(i,a,o.done,o.value)})}}function n(e,t,n,o){Promise.resolve(o).then(function(t){e({value:t,done:n})},t)}if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var o,i=e[Symbol.asyncIterator];return i?i.call(e):(e="function"==typeof __values?__values(e):e[Symbol.iterator](),o={},t("next"),t("throw"),t("return"),o[Symbol.asyncIterator]=function(){return this},o)},__makeTemplateObject=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},__setModuleDefault=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e["default"]=t},__importStar=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&__createBinding(t,e,n);return __setModuleDefault(t,e),t},__importDefault=function(e){return e&&e.__esModule?e:{"default":e}},__classPrivateFieldGet=function(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)},__classPrivateFieldSet=function(e,t,n){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,n),n},__reflect=function(e,t,n){e.__class__=t,n?n.push(t):n=[t],e.__types__=e.__types__?n.concat(e.__types__):n};!function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(o,i,function(t){return e[t]}.bind(null,i));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){n(1),n(2),n(0),n(3),n(4),n(5),n(6),n(7),n(8),n(9),n(10),n(11),n(12),n(13);var o=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mapView=null,t.gameView=null,t.game_2_View=null,t.game_3_View=null,t}return __extends(t,e),t.prototype.createChildren=function(){e.prototype.createChildren.call(this),egret.lifecycle.addLifecycleListener(function(e){}),egret.lifecycle.onPause=function(){egret.ticker.pause()},egret.lifecycle.onResume=function(){egret.ticker.resume()};var t=new AssetAdapter;egret.registerImplementation("eui.IAssetAdapter",t),egret.registerImplementation("eui.IThemeAdapter",new ThemeAdapter),this.runGame()["catch"](function(e){console.log(e)})},t.prototype.runGame=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){switch(e.label){case 0:return[4,this.loadResource()];case 1:return e.sent(),this.createGameScene(),[2]}})})},t.prototype.loadResource=function(){return __awaiter(this,void 0,void 0,function(){var e,t;return __generator(this,function(n){switch(n.label){case 0:return n.trys.push([0,9,,10]),[4,RES.loadConfig("resource/default.res.json","resource/")];case 1:return n.sent(),[4,RES.loadGroup("loading",2)];case 2:return n.sent(),[4,this.loadTheme()];case 3:return n.sent(),e=new LoadingUI,new SoundExample,this.stage.addChild(e),[4,RES.loadGroup("preload",1,e)];case 4:return n.sent(),[4,RES.loadGroup("questions",0)];case 5:return n.sent(),[4,RES.loadGroup("game2",0)];case 6:return n.sent(),[4,RES.loadGroup("questions_2",0)];case 7:return n.sent(),[4,RES.loadGroup("questions_3",0)];case 8:return n.sent(),this.stage.removeChild(e),[3,10];case 9:return t=n.sent(),console.error(t),[3,10];case 10:return[2]}})})},t.prototype.loadTheme=function(){var e=this;return new Promise(function(t,n){var o=new eui.Theme("resource/default.thm.json",e.stage);o.addEventListener(eui.UIEvent.COMPLETE,function(){t()},e)})},t.prototype.createGameScene=function(){var e=this;e.gameView=new GameView,e.gameView.percentHeight=e.gameView.percentWidth=100,e.gameView.verticalCenter=e.gameView.horizontalCenter=0,e.gameView.callBack=e,e.addChild(e.gameView),e.mapView=new MapView,e.mapView.percentHeight=e.mapView.percentWidth=100,e.mapView.verticalCenter=e.mapView.horizontalCenter=0,e.mapView.callBack=e,e.addChild(e.mapView)},t.prototype.createBitmapByName=function(e){var t=new egret.Bitmap,n=RES.getRes(e);return t.texture=n,t},t.prototype.startAnimation=function(e){var t=this,n=new egret.HtmlTextParser,o=e.map(function(e){return n.parse(e)}),i=this.textfield,a=-1,r=function(){a++,a>=o.length&&(a=0);var e=o[a];i.textFlow=e;var n=egret.Tween.get(i);n.to({alpha:1},200),n.wait(2e3),n.to({alpha:0},200),n.call(r,t)};r()},t.prototype.createView=function(e){var t=this;switch(e){case"game1":if(t.game_2_View)return;t.game_2_View=new Game_2_View,t.game_2_View.percentHeight=t.gameView.percentWidth=100,t.game_2_View.verticalCenter=t.gameView.horizontalCenter=0,t.game_2_View.callBack=t,t.addChildAt(t.game_2_View,0);break;case"game2":if(t.game_3_View)return;t.game_3_View=new Game_3_View,t.game_3_View.percentHeight=t.gameView.percentWidth=100,t.game_3_View.verticalCenter=t.gameView.horizontalCenter=0,t.game_3_View.callBack=t,t.addChildAt(t.game_3_View,0);break;case"game3":}},t.prototype.onClickBackButton=function(e,t){var n=this;switch(n.mapView.visible=!0,SoundDataMap.channel[0].stop(),SoundDataMap.channel=[],SoundDataMap.channel.push(SoundDataMap.testSound[0].play(0,0)),e){case"success":n.mapView.visible=!0,n.mapView.showIcon(t),"game1"==t?(n.gameView.backGP.visible=!1,n.gameView.backBGimg.visible=!1,n.gameView.failImg.visible=!1,n.gameView.successImg.visible=!1,n.gameView.backButton.visible=!1,n.gameView.visible=!1):"game2"==t?(n.game_2_View.backGP.visible=!1,n.game_2_View.backBGimg.visible=!1,n.game_2_View.failImg.visible=!1,n.game_2_View.successImg.visible=!1,n.game_2_View.backButton.visible=!1,n.game_2_View.visible=!1):"game3"==t&&(n.game_3_View.backGP.visible=!1,n.game_3_View.backBGimg.visible=!1,n.game_3_View.failImg.visible=!1,n.game_3_View.successImg.visible=!1,n.game_3_View.backButton.visible=!1,n.game_3_View.visible=!1);break;case"fail":"game1"==t?(n.gameView.backGP.visible=!1,n.gameView.backBGimg.visible=!1,n.gameView.failImg.visible=!1,n.gameView.successImg.visible=!1,n.gameView.backButton.visible=!1,n.gameView.visible=!1):"game2"==t?(n.game_2_View.backGP.visible=!1,n.game_2_View.backBGimg.visible=!1,n.game_2_View.failImg.visible=!1,n.game_2_View.successImg.visible=!1,n.game_2_View.backButton.visible=!1,n.game_2_View.visible=!1):"game3"==t&&(n.game_3_View.backGP.visible=!1,n.game_3_View.backBGimg.visible=!1,n.game_3_View.failImg.visible=!1,n.game_3_View.successImg.visible=!1,n.game_3_View.backButton.visible=!1,n.game_3_View.visible=!1)}},t.prototype.clickMapLevel=function(e){var t=this;switch(SoundDataMap.channel[0].stop(),SoundDataMap.channel=[],e){case"1":t.gameView.startGame(),SoundDataMap.channel.push(SoundDataMap.testSound[1].play(0,0));break;case"2":t.game_2_View.startGame(),SoundDataMap.channel.push(SoundDataMap.testSound[2].play(0,0));break;case"3":t.game_3_View.startGame(),SoundDataMap.channel.push(SoundDataMap.testSound[3].play(0,0))}},t.prototype.playSound=function(e){switch(e){case"dead":SoundDataMap.channel[0].stop(),SoundDataMap.testSound[4].play(0,1);break;case"attack":SoundDataMap.testSound[5].play(0,1);break;case"hurt":SoundDataMap.testSound[6].play(0,1);break;case"zombie_dead":SoundDataMap.testSound[7].play(0,1);break;case"zombie_hurt":SoundDataMap.testSound[8].play(0,1);break;case"zombie_attack":SoundDataMap.testSound[9].play(0,1);break;case"anubis_attack":SoundDataMap.testSound[10].play(0,1);break;case"anubis_hurt":SoundDataMap.testSound[11].play(0,1);break;case"anubis_dead":SoundDataMap.testSound[12].play(0,1);break;case"dragon_attack":SoundDataMap.testSound[13].play(0,1);break;case"dragon_hurt":SoundDataMap.testSound[14].play(0,1);break;case"dragon_dead":SoundDataMap.testSound[15].play(0,1)}},t}(eui.UILayer);window.Main=o,__reflect(o.prototype,"Main",[])},function(e,t){var n=function(){function e(){}return e.prototype.getAsset=function(e,t,n){function o(o){t.call(n,o,e)}if(RES.hasRes(e)){var i=RES.getRes(e);i?o(i):RES.getResAsync(e,o,this)}else RES.getResByUrl(e,o,this,RES.ResourceItem.TYPE_IMAGE)},e}();window.AssetAdapter=n,__reflect(n.prototype,"AssetAdapter",["eui.IAssetAdapter"])},function(e,t){var n=function(e){function t(){var t=e.call(this)||this;return t.skinName="resource/eui_skins/LoadingUI.exml",t.createView(),t}return __extends(t,e),t.prototype.createView=function(){this.textField=new egret.TextField,this.textField.width=500,this.textField.height=100,this.textField.size=40,this.textField.x=550,this.textField.y=690,this.textField.textAlign="center",this.loadGP.addChild(this.textField)},t.prototype.onProgress=function(e,t){this.textField.text="Loading..."+e+"/"+t;var n=e/t;this.progressBar.value=100*n},t}(eui.Component);window.LoadingUI=n,__reflect(n.prototype,"LoadingUI",["RES.PromiseTaskReporter"])},function(e,t){var n=function(){function e(){}return e.prototype.getUserInfo=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2,{nickName:"username"}]})})},e.prototype.login=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2]})})},e}();window.DebugPlatform=n,__reflect(n.prototype,"DebugPlatform",["Platform"]),window.platform||(window.platform=new n)},function(e,t){var n=function(e){function t(){var t=e.call(this)||this;return t.index=0,t.startLoad(),t}return __extends(t,e),t.prototype.startLoad=function(){var e=this,t=new egret.Sound,n="resource/sound/"+SoundList.list[this.index]+".mp3";t.once(egret.Event.COMPLETE,function(){return e.onLoadComplete(e.index)},this),t.type=egret.Sound.MUSIC,t.load(n),SoundDataMap.testSound.push(t)},t.prototype.onLoadComplete=function(e){var t=this;if(e!=SoundList.list.length-1){e==SoundList.list.length-2&&SoundDataMap.channel.push(SoundDataMap.testSound[0].play(0,0)),this.index++;var n="resource/sound/"+SoundList.list[this.index]+".mp3",o=new egret.Sound;4>e?o.type=egret.Sound.MUSIC:o.type=egret.Sound.EFFECT,o.load(n),SoundDataMap.testSound.push(o),o.once(egret.Event.COMPLETE,function(){return t.onLoadComplete(t.index)},this)}},t}(egret.DisplayObjectContainer);window.SoundExample=n,__reflect(n.prototype,"SoundExample",[])},function(e,t){var n=function(){function e(){}return e.prototype.getTheme=function(e,t,n,o){function i(e){t.call(o,e)}function a(t){t.resItem.url==e&&(RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,a,null),n.call(o))}var r=this;if("undefined"!=typeof generateEUI)egret.callLater(function(){t.call(o,generateEUI)},this);else if("undefined"!=typeof generateEUI2)RES.getResByUrl("resource/gameEui.json",function(e,n){window.JSONParseClass.setData(e),egret.callLater(function(){t.call(o,generateEUI2)},r)},this,RES.ResourceItem.TYPE_JSON);else if("undefined"!=typeof generateJSON)if(e.indexOf(".exml")>-1){var s=e.replace(".exml","_EUI.json");generateJSON.paths[e]?egret.callLater(function(){t.call(o,generateJSON.paths[e])},this):RES.getResByUrl(s,function(n){window.JSONParseClass.setData(n),egret.callLater(function(){t.call(o,generateJSON.paths[e])},r)},this,RES.ResourceItem.TYPE_JSON)}else egret.callLater(function(){t.call(o,generateJSON)},this);else RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,a,null),RES.getResByUrl(e,i,this,RES.ResourceItem.TYPE_TEXT)},e}();window.ThemeAdapter=n,__reflect(n.prototype,"ThemeAdapter",["eui.IThemeAdapter"])},function(e,t){var n=function(){function e(){}return e.PLAYER_ANIMATION="Role_action|Armature",e.BOSS_1_ANIMATION="Role_action|Boss_01",e.BOSS_2_ANIMATION="Role_action_01|Boss_02",e.BOSS_3_ANIMATION="Role_action_01|Boss_03",e}();window.AssetsConfig=n,__reflect(n.prototype,"AssetsConfig",[])},function(e,t){var n=function(){function e(){}return e.getInstance=function(){return e.instance||(e.instance=new e),e.instance},e.prototype.getDragonBoneByConfig=function(e,t,n){void 0===n&&(n=!1);var o=this,i=e.split("|"),a=i[0],r=i[1],s="";i.length>2&&(s=i[2]);var u,l;l||(l=new dragonBones.EgretFactory);var c;if(!c){if(c=RES.getRes(a+"_ske_json"),null==c)throw new Error("getDragonBoneByConfig is failed. Can not get resource by "+a+"_ske_json");l.addDragonBonesData(l.parseDragonBonesData(c)),o.addDragonTexture(l,a)}return u=l.buildArmatureDisplay(r)},e.prototype.addDragonTexture=function(e,t){var n=RES.getRes(t+"_tex_json"),o=RES.getRes(t+"_tex_png");if(o)return void e.addTextureAtlasData(e.parseTextureAtlasData(n,o));for(var i=0;;){if(n=RES.getRes(t+"_tex_"+i+"_json"),o=RES.getRes(t+"_tex_"+i+"_png"),null==n&&null==o)return;if(null!=n&&null==o||null==n&&null!=o)throw new Error("addDragonTexture failed. error getting "+t+"_tex_"+i+" resource.");e.addTextureAtlasData(e.parseTextureAtlasData(n,o)),i++}},e.setDragonBoneSlotDisplay=function(e,t,n){if(!n)return console.log("Failed display object for the slot name "+t+" in the armature "+e.name),!1;var o=e.armature.getSlot(t);if(!o)return console.log("Slot name "+t+" in the armature "+e.name+" is not exist"),!1;var i="slotName",a=n[i];if(a){var r=e.armature.getSlot(a);r&&(r.display=null)}return o.display&&console.log("Slot name "+t+" have displayObj in the armature "+e.name),n[i]=t,o.display=n,o.invalidUpdate(),!0},e.removeDragonBoneSlotDisplay=function(e,t){var n=e.armature.getSlot(t);if(!n)return!1;var o=n.display;if(!o)return!1;var i="slotName";o[i]=null,n.display=null},e.removeGroupChildren=function(e){for(var t,n=e.numChildren,o=0;n>o;o++)t=e.removeChildAt(0),t instanceof dragonBones.EgretArmatureDisplay&&t.dispose(),t=null;e.removeChildren()},e}();window.AssetsUtil=n,__reflect(n.prototype,"AssetsUtil",[])},function(e,t){var n=function(e){function t(){var t=e.call(this)||this;return t.fullHP=5,t.questions=0,t.correct=!1,t.playerHP=5,t.enemyHP=5,t}return __extends(t,e),t.prototype.partAdded=function(t,n){e.prototype.partAdded.call(this,t,n)},t.prototype.childrenCreated=function(){var t=this;e.prototype.childrenCreated.call(this),this.button_1.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){return t.onClickOption("1")},this),this.button_2.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){return t.onClickOption("2")},this),this.button_3.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){return t.onClickOption("3")},this),this.button_4.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){return t.onClickOption("4")},this),this.player=AssetsUtil.getInstance().getDragonBoneByConfig(AssetsConfig.PLAYER_ANIMATION,0,!0),this.enemy=AssetsUtil.getInstance().getDragonBoneByConfig(AssetsConfig.BOSS_1_ANIMATION,0,!0),this.masterGP.addChild(this.player),this.enemyGP.addChild(this.enemy)},t.prototype.startGame=function(){var e=this;e.resetSetting(),e.visible=!0,e.figureGP.visible=!0,e.questionsList=Question.easy_questionList.sort(function(){return Math.random()-.2}),egret.Tween.get(this).wait(2e3).call(this.closeVsGP).wait(1e3).call(this.startQuestion)},t.prototype.resetSetting=function(){for(var e,t=this,n=0;n<t.HPGP.numChildren;n++)e=t.HPGP.getChildAt(n),e.visible=!0,e=t.bossHPGP.getChildAt(n),e.visible=!0;t.playerHP=t.fullHP,t.enemyHP=t.fullHP,t.enemy.animation.gotoAndPlayByFrame("idle",0,-1),t.player.animation.gotoAndPlayByFrame("idle",0,-1)},t.prototype.closeVsGP=function(){var e=this;e.figureGP.visible=!1,e.HPGP.visible=!0,e.bossHPGP.visible=!0},t.prototype.startQuestion=function(){var e=this;e.enemy.animation.gotoAndPlayByFrame("idle",0,-1),e.player.animation.gotoAndPlayByFrame("idle",0,-1),this.countdownTimer()},t.prototype.countdownTimer=function(){var e=this;e.questions>9&&(e.questions=0);var t=e.questionsList[e.questions];e.questionImg.source="question_0"+t+"_easy_png",0==t||1==t||3==t?e.answerImg.source="noIntroduce_png":e.answerImg.source="answer_0"+t+"_easy_png",e.questionImg.visible=!0,e.questionBGImg.visible=!0,e.buttonGP.visible=!0,e.countdownFNT.visible=!0,e.buttonGP.touchEnabled=!0,e.totalTimes=60,egret.Tween.removeTweens(e),egret.Tween.get(e,{onChange:e.onChange,onChangeObj:e}).to({totalTimes:0},6e4).wait(200).call(function(){return e.onClickOption("5")})},t.prototype.onChange=function(){this.countdownFNT.text=""+Math.round(this.totalTimes)},t.prototype.onClickOption=function(e){var t=this;egret.Tween.removeTweens(t),t.buttonGP.touchEnabled=!1;var n;n=Question.easy_answerList[t.questionsList[t.questions]].indexOf(e),-1==n?(t.correct=!1,t.logoImg.source="no_png"):(t.correct=!0,t.logoImg.source="yes_png"),egret.Tween.get(this).wait(500).call(this.showAnswer)},t.prototype.showAnswer=function(){var e=this;egret.Tween.removeTweens(e),e.logoImg.visible=!0,e.questionImg.visible=!1,e.answerImg.visible=!0,e.buttonGP.visible=!1,e.countdownFNT.visible=!1,e.questions++,egret.Tween.get(this).wait(2e3).call(this.showNext)},t.prototype.showNext=function(){var e=this;egret.Tween.removeTweens(e),e.nextImg.visible=!0,e.nextButton.visible=!0,e.nextButton.once(egret.TouchEvent.TOUCH_TAP,e.showAnimation,this)},t.prototype.showAnimation=function(){var e=this;e.logoImg.visible=!1,e.questionImg.visible=!1,e.questionBGImg.visible=!1,e.answerImg.visible=!1,e.nextImg.visible=!1,e.nextButton.visible=!1,e.correct?(e.player.animation.gotoAndPlayByFrame("run",0,1),e.player.once(dragonBones.EgretEvent.COMPLETE,function(){return e.showAttack("master")},this)):(e.enemy.animation.gotoAndPlayByFrame("run",0,1),e.enemy.once(dragonBones.EgretEvent.COMPLETE,function(){return e.showAttack("enemy")},this))},t.prototype.showAttack=function(e){var t,n=this,o=this,i=0;switch(e){case"master":o.player.animation.gotoAndPlayByFrame("attack",0,1),egret.setTimeout(function(){o.enemyHP--,0==o.enemyHP?(o.enemy.animation.gotoAndPlayByFrame("dead",0,1),o.enemy.once(dragonBones.EgretEvent.COMPLETE,function(){return o.afterDead("enemy")},n),o.callBack.createView("game1"),o.callBack.playSound("zombie_dead")):(o.enemy.animation.gotoAndPlayByFrame("hurt",0,1),o.enemy.once(dragonBones.EgretEvent.COMPLETE,function(){return o.afterHurt("player")},n),o.callBack.playSound("attack"),o.callBack.playSound("zombie_hurt")),i=o.enemyHP+2,t=o.bossHPGP.getChildAt(i),t.visible=!1},o,500);break;case"enemy":o.enemy.animation.gotoAndPlayByFrame("attack",0,1),o.callBack.playSound("zombie_attack"),egret.setTimeout(function(){o.playerHP--,0==o.playerHP?(o.player.animation.gotoAndPlayByFrame("dead",0,1),o.player.once(dragonBones.EgretEvent.COMPLETE,function(){return o.afterDead("master")},n),o.callBack.playSound("dead")):(o.player.animation.gotoAndPlayByFrame("hurt",0,1),o.player.once(dragonBones.EgretEvent.COMPLETE,function(){return o.afterHurt("player")},n),o.callBack.playSound("hurt")),i=o.playerHP+2,t=o.HPGP.getChildAt(i),t.visible=!1},o,500)}},t.prototype.afterHurt=function(e){var t=this;t.startQuestion()},t.prototype.afterDead=function(e){var t=this;t.backGP.visible=!0,t.backBGimg.visible=!0,t.backButton.visible=!0;var n;switch(e){case"master":t.failImg.visible=!0,n="fail";break;case"enemy":t.successImg.visible=!0,n="success"}t.backButton.once(egret.TouchEvent.TOUCH_TAP,function(){return t.callBack.onClickBackButton(n,"game1")},this),this.player.animation.stop(),this.enemy.animation.stop()},t}(eui.Component);window.GameView=n,__reflect(n.prototype,"GameView",["eui.UIComponent"])},function(e,t){var n=function(e){function t(){var t=e.call(this)||this;return t.fullHP=5,t.questions=0,t.correct=!1,t.playerHP=5,t.enemyHP=5,t}return __extends(t,e),t.prototype.partAdded=function(t,n){e.prototype.partAdded.call(this,t,n)},t.prototype.childrenCreated=function(){var t=this;e.prototype.childrenCreated.call(this),this.button_1.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){return t.onClickOption("1")},this),this.button_2.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){return t.onClickOption("2")},this),this.button_3.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){return t.onClickOption("3")},this),this.button_4.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){return t.onClickOption("4")},this),this.player=AssetsUtil.getInstance().getDragonBoneByConfig(AssetsConfig.PLAYER_ANIMATION,0,!0),this.enemy=AssetsUtil.getInstance().getDragonBoneByConfig(AssetsConfig.BOSS_2_ANIMATION,0,!0),this.masterGP.addChild(this.player),this.enemyGP.addChild(this.enemy)},t.prototype.startGame=function(){var e=this;e.resetSetting(),e.visible=!0,e.figureGP.visible=!0,e.questionsList=Question.normal_questionList.sort(function(){return Math.random()-.2}),egret.Tween.get(this).wait(2e3).call(this.closeVsGP).wait(1e3).call(this.startQuestion)},t.prototype.resetSetting=function(){for(var e,t=this,n=0;n<t.HPGP.numChildren;n++)e=t.HPGP.getChildAt(n),e.visible=!0,e=t.bossHPGP.getChildAt(n),e.visible=!0;t.playerHP=t.fullHP,t.enemyHP=t.fullHP,t.enemy.animation.gotoAndPlayByFrame("idle",0,-1),t.player.animation.gotoAndPlayByFrame("idle",0,-1)},t.prototype.closeVsGP=function(){var e=this;e.figureGP.visible=!1,e.HPGP.visible=!0,e.bossHPGP.visible=!0},t.prototype.startQuestion=function(){var e=this;e.enemy.animation.gotoAndPlayByFrame("idle",0,-1),e.player.animation.gotoAndPlayByFrame("idle",0,-1),this.countdownTimer()},t.prototype.countdownTimer=function(){var e=this;e.questions>9&&(e.questions=0);var t=e.questionsList[e.questions];e.questionImg.source="question_0"+t+"_normal_png",0==t||1==t?e.answerImg.source="noIntroduce_png":e.answerImg.source="answer_0"+t+"_normal_png",e.questionImg.visible=!0,e.questionBGImg.visible=!0,e.buttonGP.visible=!0,e.countdownFNT.visible=!0,e.buttonGP.touchEnabled=!0,e.totalTimes=60,egret.Tween.removeTweens(e),egret.Tween.get(e,{onChange:e.onChange,onChangeObj:e}).to({totalTimes:0},6e4).wait(200).call(function(){return e.onClickOption("5")})},t.prototype.onChange=function(){this.countdownFNT.text=""+Math.round(this.totalTimes)},t.prototype.onClickOption=function(e){var t=this;egret.Tween.removeTweens(t),t.buttonGP.touchEnabled=!1;var n;n=Question.normal_answerList[t.questionsList[t.questions]].indexOf(e),-1==n?(t.correct=!1,t.logoImg.source="no_png"):(t.correct=!0,t.logoImg.source="yes_png"),egret.Tween.get(this).wait(500).call(this.showAnswer)},t.prototype.showAnswer=function(){var e=this;egret.Tween.removeTweens(e),e.logoImg.visible=!0,e.questionImg.visible=!1,e.answerImg.visible=!0,e.buttonGP.visible=!1,e.countdownFNT.visible=!1,e.questions++,egret.Tween.get(this).wait(2e3).call(this.showNext)},t.prototype.showNext=function(){var e=this;egret.Tween.removeTweens(e),e.nextImg.visible=!0,e.nextButton.visible=!0,e.nextButton.once(egret.TouchEvent.TOUCH_TAP,e.showAnimation,this)},t.prototype.showAnimation=function(){var e=this;e.logoImg.visible=!1,e.questionImg.visible=!1,e.questionBGImg.visible=!1,e.answerImg.visible=!1,e.nextImg.visible=!1,e.nextButton.visible=!1,e.correct?(e.player.animation.gotoAndPlayByFrame("run",0,1),e.player.once(dragonBones.EgretEvent.COMPLETE,function(){return e.showAttack("master")},this)):(e.enemy.animation.gotoAndPlayByFrame("run",0,1),e.enemy.once(dragonBones.EgretEvent.COMPLETE,function(){return e.showAttack("enemy")},this))},t.prototype.showAttack=function(e){var t,n=this,o=this,i=0;switch(e){case"master":o.player.animation.gotoAndPlayByFrame("attack",0,1),o.enemyHP--,0==o.enemyHP&&o.callBack.playSound("anubis_dead"),egret.setTimeout(function(){0==o.enemyHP?(o.enemy.animation.gotoAndPlayByFrame("dead",0,1),o.enemy.once(dragonBones.EgretEvent.COMPLETE,function(){return o.afterDead("enemy")},n),o.callBack.createView("game2")):(o.enemy.animation.gotoAndPlayByFrame("hurt",0,1),o.enemy.once(dragonBones.EgretEvent.COMPLETE,function(){return o.afterHurt("player")},n),o.callBack.playSound("attack"),o.callBack.playSound("anubis_hurt")),i=o.enemyHP+2,t=o.bossHPGP.getChildAt(i),t.visible=!1},o,500);break;case"enemy":o.enemy.animation.gotoAndPlayByFrame("attack",0,1),egret.setTimeout(function(){o.playerHP--,0==o.playerHP?(o.player.animation.gotoAndPlayByFrame("dead",0,1),o.player.once(dragonBones.EgretEvent.COMPLETE,function(){return o.afterDead("master")},n),o.callBack.playSound("anubis_attack"),o.callBack.playSound("dead")):(o.player.animation.gotoAndPlayByFrame("hurt",0,1),o.player.once(dragonBones.EgretEvent.COMPLETE,function(){return o.afterHurt("player")},n),o.callBack.playSound("hurt"),o.callBack.playSound("anubis_attack")),i=o.playerHP+2,t=o.HPGP.getChildAt(i),t.visible=!1},o,500)}},t.prototype.afterHurt=function(e){var t=this;t.startQuestion()},t.prototype.afterDead=function(e){var t=this;t.backGP.visible=!0,t.backBGimg.visible=!0,t.backButton.visible=!0;var n;switch(e){case"master":t.failImg.visible=!0,n="fail";break;case"enemy":t.successImg.visible=!0,n="success"}t.backButton.once(egret.TouchEvent.TOUCH_TAP,function(){return t.callBack.onClickBackButton(n,"game2")},this),this.player.animation.stop(),this.enemy.animation.stop()},t}(eui.Component);window.Game_2_View=n,__reflect(n.prototype,"Game_2_View",["eui.UIComponent"])},function(e,t){var n=function(e){function t(){var t=e.call(this)||this;return t.fullHP=5,t.questions=0,t.correct=!1,t.playerHP=5,t.enemyHP=5,t}return __extends(t,e),t.prototype.partAdded=function(t,n){e.prototype.partAdded.call(this,t,n)},t.prototype.childrenCreated=function(){var t=this;e.prototype.childrenCreated.call(this),this.button_1.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){return t.onClickOption("1")},this),this.button_2.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){return t.onClickOption("2")},this),this.button_3.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){return t.onClickOption("3")},this),this.button_4.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){return t.onClickOption("4")},this),this.player=AssetsUtil.getInstance().getDragonBoneByConfig(AssetsConfig.PLAYER_ANIMATION,0,!0),this.enemy=AssetsUtil.getInstance().getDragonBoneByConfig(AssetsConfig.BOSS_3_ANIMATION,0,!0),this.masterGP.addChild(this.player),this.enemyGP.addChild(this.enemy)},t.prototype.startGame=function(){var e=this;e.resetSetting(),e.visible=!0,e.figureGP.visible=!0,e.questionsList=Question.hard_questionList.sort(function(){return Math.random()-.2}),egret.Tween.get(this).wait(2e3).call(this.closeVsGP).wait(1e3).call(this.startQuestion)},t.prototype.resetSetting=function(){for(var e,t=this,n=0;n<t.HPGP.numChildren;n++)e=t.HPGP.getChildAt(n),e.visible=!0,e=t.bossHPGP.getChildAt(n),e.visible=!0;t.playerHP=t.fullHP,t.enemyHP=t.fullHP,t.enemy.animation.gotoAndPlayByFrame("idle",0,-1),t.player.animation.gotoAndPlayByFrame("idle",0,-1)},t.prototype.closeVsGP=function(){var e=this;e.figureGP.visible=!1,e.HPGP.visible=!0,e.bossHPGP.visible=!0},t.prototype.startQuestion=function(){var e=this;e.enemy.animation.gotoAndPlayByFrame("idle",0,-1),e.player.animation.gotoAndPlayByFrame("idle",0,-1),this.countdownTimer()},t.prototype.countdownTimer=function(){var e=this;e.questions>9&&(e.questions=0);var t=e.questionsList[e.questions];
e.questionImg.source="question_0"+t+"_hard_png",1==t||2==t?e.answerImg.source="noIntroduce_png":e.answerImg.source="answer_0"+t+"_hard_png",e.questionImg.visible=!0,e.questionBGImg.visible=!0,e.buttonGP.visible=!0,e.countdownFNT.visible=!0,e.buttonGP.touchEnabled=!0,e.totalTimes=60,egret.Tween.removeTweens(e),egret.Tween.get(e,{onChange:e.onChange,onChangeObj:e}).to({totalTimes:0},6e4).wait(200).call(function(){return e.onClickOption("5")})},t.prototype.onChange=function(){this.countdownFNT.text=""+Math.round(this.totalTimes)},t.prototype.onClickOption=function(e){var t=this;egret.Tween.removeTweens(t),t.buttonGP.touchEnabled=!1;var n;n=Question.hard_answerList[t.questionsList[t.questions]].indexOf(e),-1==n?(t.correct=!1,t.logoImg.source="no_png"):(t.correct=!0,t.logoImg.source="yes_png"),egret.Tween.get(this).wait(500).call(this.showAnswer)},t.prototype.showAnswer=function(){var e=this;egret.Tween.removeTweens(e),e.logoImg.visible=!0,e.questionImg.visible=!1,e.answerImg.visible=!0,e.buttonGP.visible=!1,e.countdownFNT.visible=!1,e.questions++,egret.Tween.get(this).wait(2e3).call(this.showNext)},t.prototype.showNext=function(){var e=this;egret.Tween.removeTweens(e),e.nextImg.visible=!0,e.nextButton.visible=!0,e.nextButton.once(egret.TouchEvent.TOUCH_TAP,e.showAnimation,this)},t.prototype.showAnimation=function(){var e=this;e.logoImg.visible=!1,e.questionImg.visible=!1,e.questionBGImg.visible=!1,e.answerImg.visible=!1,e.nextImg.visible=!1,e.nextButton.visible=!1,e.correct?(e.player.animation.gotoAndPlayByFrame("run",0,1),e.player.once(dragonBones.EgretEvent.COMPLETE,function(){return e.showAttack("master")},this)):(e.enemy.animation.gotoAndPlayByFrame("run",0,1),e.enemy.once(dragonBones.EgretEvent.COMPLETE,function(){return e.showAttack("enemy")},this))},t.prototype.showAttack=function(e){var t,n=this,o=this,i=0;switch(e){case"master":o.player.animation.gotoAndPlayByFrame("attack",0,1),egret.setTimeout(function(){o.enemyHP--,0==o.enemyHP?(o.enemy.animation.gotoAndPlayByFrame("dead",0,1),o.enemy.once(dragonBones.EgretEvent.COMPLETE,function(){return o.afterDead("enemy")},n),o.callBack.createView("game3"),o.callBack.playSound("dragon_dead")):(o.enemy.animation.gotoAndPlayByFrame("hurt",0,1),o.enemy.once(dragonBones.EgretEvent.COMPLETE,function(){return o.afterHurt("player")},n),o.callBack.playSound("attack"),o.callBack.playSound("dragon_hurt")),i=o.enemyHP+2,t=o.bossHPGP.getChildAt(i),t.visible=!1},o,500);break;case"enemy":o.enemy.animation.gotoAndPlayByFrame("attack",0,1),egret.setTimeout(function(){o.playerHP--,0==o.playerHP?(o.player.animation.gotoAndPlayByFrame("dead",0,1),o.player.once(dragonBones.EgretEvent.COMPLETE,function(){return o.afterDead("master")},n),o.callBack.playSound("dragon_attack"),o.callBack.playSound("dead")):(o.player.animation.gotoAndPlayByFrame("hurt",0,1),o.player.once(dragonBones.EgretEvent.COMPLETE,function(){return o.afterHurt("player")},n),o.callBack.playSound("hurt"),o.callBack.playSound("dragon_attack")),i=o.playerHP+2,t=o.HPGP.getChildAt(i),t.visible=!1},o,500)}},t.prototype.afterHurt=function(e){var t=this;t.startQuestion()},t.prototype.afterDead=function(e){var t=this;t.backGP.visible=!0,t.backBGimg.visible=!0,t.backButton.visible=!0;var n;switch(e){case"master":t.failImg.visible=!0,n="fail";break;case"enemy":t.successImg.visible=!0,n="success"}t.backButton.once(egret.TouchEvent.TOUCH_TAP,function(){return t.callBack.onClickBackButton(n,"game3")},this),this.player.animation.stop(),this.enemy.animation.stop()},t}(eui.Component);window.Game_3_View=n,__reflect(n.prototype,"Game_3_View",["eui.UIComponent"])},function(e,t){var n=function(e){function t(){return e.call(this)||this}return __extends(t,e),t.prototype.partAdded=function(t,n){e.prototype.partAdded.call(this,t,n)},t.prototype.childrenCreated=function(){var t=this;e.prototype.childrenCreated.call(this),this.icon_1.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){return t.onMapClick("1")},this),this.icon_2.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){return t.onMapClick("2")},this),this.icon_3.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){return t.onMapClick("3")},this)},t.prototype.followAction=function(){var e=new egret.TextField;e.textFlow=new Array({text:"这段文字有链接",style:{href:"http://www.egret.com/"}}),e.touchEnabled=!0,e.addEventListener(egret.TextEvent.LINK,function(e){console.log(e.text)},this),e.x=10,e.y=90,this.addChild(e)},t.prototype.onMapClick=function(e){var t=this;t.visible=!1,t.callBack.clickMapLevel(e)},t.prototype.showIcon=function(e){var t=this;switch(e){case"game1":if(0==t.maplock_2_Img.alpha)return;t.maplock_2_Img.visible=!0,egret.Tween.get(t.maplock_2_Img).to({alpha:0},1500).wait(500).call(function(){return t.afterShowIcon(e)});break;case"game2":if(0==t.maplock_3_Img.alpha)return;t.maplock_3_Img.visible=!0,egret.Tween.get(t.maplock_3_Img).to({alpha:0},1500).wait(500).call(function(){return t.afterShowIcon(e)});break;case"game3":}},t.prototype.afterShowIcon=function(e){var t=this;switch(e){case"game1":t.icon_2.visible=!0;break;case"game2":t.icon_3.visible=!0;break;case"game3":}},t}(eui.Component);window.MapView=n,__reflect(n.prototype,"MapView",["eui.UIComponent"])},function(e,t){var n=function(){function e(){}return e.easy_questionList=[0,1,2,3,4,5,6,7,8,9],e.easy_answerList=["1","4","3","4","3","2","4","3","3","4"],e.normal_questionList=[0,1,2,3,4,5,6,7,8,9],e.normal_answerList=["1","3","2","1","3","1","4","1","4","4"],e.hard_questionList=[0,1,2,3,4,5,6,7,8,9],e.hard_answerList=["2","1","4","4","3","1","1","4","2","4"],e}();window.Question=n,__reflect(n.prototype,"Question",[])},function(e,t){var n=function(){function e(){}return e.testSound=[],e.channel=[],e}();window.SoundDataMap=n,__reflect(n.prototype,"SoundDataMap",[]);var o=function(){function e(){}return e.list=["loading_bgm","1st_bgm","2nd_bgm","3rd_bgm","dead","attack","hurt","zombie_dead","zombie_hurt","zombie_attack","anubis_attack","anubis_hurt","anubis_dead","dragon_attack","dragon_hurt","dragon_dead"],e}();window.SoundList=o,__reflect(o.prototype,"SoundList",[])}]);