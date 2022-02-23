window.skins=window.skins||{};
                var __extends = this && this.__extends|| function (d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = window.generateEUI||{};
                generateEUI.paths = generateEUI.paths||{};
                generateEUI.styles = undefined;
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml","GameView":"resource/eui_skins/GameView.exml"};generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameView.exml'] = window.GameViewSkin = (function (_super) {
	__extends(GameViewSkin, _super);
	var GameViewSkin$Skin1 = 	(function (_super) {
		__extends(GameViewSkin$Skin1, _super);
		function GameViewSkin$Skin1() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","button_OFF_01_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameViewSkin$Skin1.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "button_ON_01_png";
			t.percentWidth = 100;
			return t;
		};
		return GameViewSkin$Skin1;
	})(eui.Skin);

	var GameViewSkin$Skin2 = 	(function (_super) {
		__extends(GameViewSkin$Skin2, _super);
		function GameViewSkin$Skin2() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","button_OFF_02_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameViewSkin$Skin2.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "button_ON_02_png";
			t.percentWidth = 100;
			return t;
		};
		return GameViewSkin$Skin2;
	})(eui.Skin);

	var GameViewSkin$Skin3 = 	(function (_super) {
		__extends(GameViewSkin$Skin3, _super);
		function GameViewSkin$Skin3() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","button_OFF_03_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameViewSkin$Skin3.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "button_ON_03_png";
			t.percentWidth = 100;
			return t;
		};
		return GameViewSkin$Skin3;
	})(eui.Skin);

	var GameViewSkin$Skin4 = 	(function (_super) {
		__extends(GameViewSkin$Skin4, _super);
		function GameViewSkin$Skin4() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","button_OFF_04_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameViewSkin$Skin4.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "button_ON_04_png";
			t.percentWidth = 100;
			return t;
		};
		return GameViewSkin$Skin4;
	})(eui.Skin);

	function GameViewSkin() {
		_super.call(this);
		this.skinParts = ["BGImg","masterGP","enemyGP","battlGP","vsImg","masterImg","enemyImg","figureGP","questionImg","answerImg","logoImg","nextImg","countdownFNT","button_1","button_2","button_3","button_4","buttonGP","questionGP","mapBGImg","optionGP_1","buttonGP_1"];
		
		this.height = 900;
		this.width = 1600;
		this.elementsContent = [this.battlGP_i(),this.figureGP_i(),this.questionGP_i(),this.mapBGImg_i(),this.buttonGP_1_i()];
	}
	var _proto = GameViewSkin.prototype;

	_proto.battlGP_i = function () {
		var t = new eui.Group();
		this.battlGP = t;
		t.height = 900;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1600;
		t.elementsContent = [this.BGImg_i(),this.masterGP_i(),this.enemyGP_i()];
		return t;
	};
	_proto.BGImg_i = function () {
		var t = new eui.Image();
		this.BGImg = t;
		t.height = 900;
		t.horizontalCenter = 0;
		t.source = "battleBG_jpg";
		t.verticalCenter = 0;
		t.width = 1600;
		return t;
	};
	_proto.masterGP_i = function () {
		var t = new eui.Group();
		this.masterGP = t;
		t.horizontalCenter = -700;
		t.verticalCenter = 30;
		return t;
	};
	_proto.enemyGP_i = function () {
		var t = new eui.Group();
		this.enemyGP = t;
		t.horizontalCenter = 700;
		t.verticalCenter = 30;
		return t;
	};
	_proto.figureGP_i = function () {
		var t = new eui.Group();
		this.figureGP = t;
		t.height = 900;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1600;
		t.elementsContent = [this.vsImg_i(),this.masterImg_i(),this.enemyImg_i()];
		return t;
	};
	_proto.vsImg_i = function () {
		var t = new eui.Image();
		this.vsImg = t;
		t.height = 900;
		t.horizontalCenter = 0;
		t.source = "vs_jpg";
		t.verticalCenter = 0;
		t.width = 1600;
		return t;
	};
	_proto.masterImg_i = function () {
		var t = new eui.Image();
		this.masterImg = t;
		t.horizontalCenter = -500;
		t.source = "master_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.enemyImg_i = function () {
		var t = new eui.Image();
		this.enemyImg = t;
		t.horizontalCenter = 500;
		t.scaleX = -1;
		t.source = "master_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.questionGP_i = function () {
		var t = new eui.Group();
		this.questionGP = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = true;
		t.elementsContent = [this.questionImg_i(),this.answerImg_i(),this.logoImg_i(),this.nextImg_i(),this.countdownFNT_i(),this.buttonGP_i()];
		return t;
	};
	_proto.questionImg_i = function () {
		var t = new eui.Image();
		this.questionImg = t;
		t.horizontalCenter = 0;
		t.source = "question_01_png";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.answerImg_i = function () {
		var t = new eui.Image();
		this.answerImg = t;
		t.horizontalCenter = 0;
		t.source = "answer_01_png";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.logoImg_i = function () {
		var t = new eui.Image();
		this.logoImg = t;
		t.horizontalCenter = 0;
		t.source = "no_png";
		t.verticalCenter = -235;
		t.visible = false;
		return t;
	};
	_proto.nextImg_i = function () {
		var t = new eui.Image();
		this.nextImg = t;
		t.horizontalCenter = 0;
		t.source = "next_png";
		t.verticalCenter = 280;
		t.visible = false;
		return t;
	};
	_proto.countdownFNT_i = function () {
		var t = new eui.BitmapLabel();
		this.countdownFNT = t;
		t.font = "TS_FNT02_fnt";
		t.horizontalCenter = 0;
		t.touchEnabled = false;
		t.visible = false;
		t.y = -80;
		return t;
	};
	_proto.buttonGP_i = function () {
		var t = new eui.Group();
		this.buttonGP = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 205;
		t.visible = false;
		t.elementsContent = [this.button_1_i(),this.button_2_i(),this.button_3_i(),this.button_4_i()];
		return t;
	};
	_proto.button_1_i = function () {
		var t = new eui.Button();
		this.button_1 = t;
		t.horizontalCenter = -350;
		t.verticalCenter = 0;
		t.skinName = GameViewSkin$Skin1;
		return t;
	};
	_proto.button_2_i = function () {
		var t = new eui.Button();
		this.button_2 = t;
		t.horizontalCenter = -120;
		t.verticalCenter = 0;
		t.skinName = GameViewSkin$Skin2;
		return t;
	};
	_proto.button_3_i = function () {
		var t = new eui.Button();
		this.button_3 = t;
		t.horizontalCenter = 120;
		t.verticalCenter = 0;
		t.skinName = GameViewSkin$Skin3;
		return t;
	};
	_proto.button_4_i = function () {
		var t = new eui.Button();
		this.button_4 = t;
		t.horizontalCenter = 350;
		t.verticalCenter = 0;
		t.skinName = GameViewSkin$Skin4;
		return t;
	};
	_proto.mapBGImg_i = function () {
		var t = new eui.Image();
		this.mapBGImg = t;
		t.height = 900;
		t.horizontalCenter = 0;
		t.source = "map_jpg";
		t.verticalCenter = 0;
		t.visible = true;
		t.width = 1600;
		return t;
	};
	_proto.buttonGP_1_i = function () {
		var t = new eui.Group();
		this.buttonGP_1 = t;
		t.height = 900;
		t.width = 1600;
		t.elementsContent = [this.optionGP_1_i()];
		return t;
	};
	_proto.optionGP_1_i = function () {
		var t = new eui.Group();
		this.optionGP_1 = t;
		t.height = 130;
		t.width = 145;
		t.x = 335;
		t.y = 200;
		return t;
	};
	return GameViewSkin;
})(eui.Skin);