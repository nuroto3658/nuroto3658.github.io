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
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml","GameView":"resource/eui_skins/GameView.exml","game_2_view":"resource/eui_skins/game_2_view.exml","Game_2_View":"resource/eui_skins/Game_2_View.exml","MapView":"resource/eui_skins/MapView.exml","Game_3_View":"resource/eui_skins/Game_3_View.exml"};generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
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
})(eui.Skin);generateEUI.paths['resource/eui_skins/Game_2_View.exml'] = window.Game_2_ViewSkin = (function (_super) {
	__extends(Game_2_ViewSkin, _super);
	var Game_2_ViewSkin$Skin1 = 	(function (_super) {
		__extends(Game_2_ViewSkin$Skin1, _super);
		function Game_2_ViewSkin$Skin1() {
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
						new eui.SetProperty("_Image1","source","back_button_off_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = Game_2_ViewSkin$Skin1.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "back_button_on_png";
			t.percentWidth = 100;
			return t;
		};
		return Game_2_ViewSkin$Skin1;
	})(eui.Skin);

	var Game_2_ViewSkin$Skin2 = 	(function (_super) {
		__extends(Game_2_ViewSkin$Skin2, _super);
		function Game_2_ViewSkin$Skin2() {
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
		var _proto = Game_2_ViewSkin$Skin2.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "button_ON_01_png";
			t.percentWidth = 100;
			return t;
		};
		return Game_2_ViewSkin$Skin2;
	})(eui.Skin);

	var Game_2_ViewSkin$Skin3 = 	(function (_super) {
		__extends(Game_2_ViewSkin$Skin3, _super);
		function Game_2_ViewSkin$Skin3() {
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
		var _proto = Game_2_ViewSkin$Skin3.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "button_ON_02_png";
			t.percentWidth = 100;
			return t;
		};
		return Game_2_ViewSkin$Skin3;
	})(eui.Skin);

	var Game_2_ViewSkin$Skin4 = 	(function (_super) {
		__extends(Game_2_ViewSkin$Skin4, _super);
		function Game_2_ViewSkin$Skin4() {
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
		var _proto = Game_2_ViewSkin$Skin4.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "button_ON_03_png";
			t.percentWidth = 100;
			return t;
		};
		return Game_2_ViewSkin$Skin4;
	})(eui.Skin);

	var Game_2_ViewSkin$Skin5 = 	(function (_super) {
		__extends(Game_2_ViewSkin$Skin5, _super);
		function Game_2_ViewSkin$Skin5() {
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
		var _proto = Game_2_ViewSkin$Skin5.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "button_ON_04_png";
			t.percentWidth = 100;
			return t;
		};
		return Game_2_ViewSkin$Skin5;
	})(eui.Skin);

	var Game_2_ViewSkin$Skin6 = 	(function (_super) {
		__extends(Game_2_ViewSkin$Skin6, _super);
		function Game_2_ViewSkin$Skin6() {
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
						new eui.SetProperty("_Image1","source","back_button_off_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = Game_2_ViewSkin$Skin6.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "back_button_on_png";
			t.percentWidth = 100;
			return t;
		};
		return Game_2_ViewSkin$Skin6;
	})(eui.Skin);

	function Game_2_ViewSkin() {
		_super.call(this);
		this.skinParts = ["BGImg","masterGP","enemyGP","battlGP","vsImg","masterImg","enemyImg","figureGP","blood_frame","playerIcon","blood_01_Img","blood_02_Img","blood_03_Img","blood_04_Img","blood_05_Img","HPGP","boss_blood_frame","bossIcon","boss_blood_01_Img","boss_blood_02_Img","boss_blood_03_Img","boss_blood_04_Img","boss_blood_05_Img","bossHPGP","questionBGImg","questionImg","answerImg","logoImg","nextButton","nextImg","countdownFNT","button_1","button_2","button_3","button_4","buttonGP","questionGP","backBGimg","backButton","successImg","failImg","backGP"];
		
		this.height = 900;
		this.width = 1600;
		this.elementsContent = [this.battlGP_i(),this.figureGP_i(),this.HPGP_i(),this.bossHPGP_i(),this.questionGP_i(),this.backGP_i()];
	}
	var _proto = Game_2_ViewSkin.prototype;

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
		t.horizontalCenter = 0;
		t.source = "Scenes_02_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.masterGP_i = function () {
		var t = new eui.Group();
		this.masterGP = t;
		t.horizontalCenter = -580;
		t.verticalCenter = 200;
		return t;
	};
	_proto.enemyGP_i = function () {
		var t = new eui.Group();
		this.enemyGP = t;
		t.horizontalCenter = 550;
		t.verticalCenter = 200;
		return t;
	};
	_proto.figureGP_i = function () {
		var t = new eui.Group();
		this.figureGP = t;
		t.height = 900;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = true;
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
		t.source = "Role_01_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.enemyImg_i = function () {
		var t = new eui.Image();
		this.enemyImg = t;
		t.horizontalCenter = 500;
		t.source = "Boss_02_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.HPGP_i = function () {
		var t = new eui.Group();
		this.HPGP = t;
		t.height = 900;
		t.horizontalCenter = -500;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.verticalCenter = -300;
		t.visible = false;
		t.width = 1600;
		t.elementsContent = [this.blood_frame_i(),this.playerIcon_i(),this.blood_01_Img_i(),this.blood_02_Img_i(),this.blood_03_Img_i(),this.blood_04_Img_i(),this.blood_05_Img_i()];
		return t;
	};
	_proto.blood_frame_i = function () {
		var t = new eui.Image();
		this.blood_frame = t;
		t.horizontalCenter = 0;
		t.source = "Avatar_frame_png";
		t.verticalCenter = 0;
		t.visible = true;
		return t;
	};
	_proto.playerIcon_i = function () {
		var t = new eui.Image();
		this.playerIcon = t;
		t.horizontalCenter = -106;
		t.source = "Avatar_01_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.blood_01_Img_i = function () {
		var t = new eui.Image();
		this.blood_01_Img = t;
		t.horizontalCenter = 0;
		t.source = "Blood_01_png";
		t.verticalCenter = 0;
		t.visible = true;
		return t;
	};
	_proto.blood_02_Img_i = function () {
		var t = new eui.Image();
		this.blood_02_Img = t;
		t.horizontalCenter = 0;
		t.source = "Blood_02_png";
		t.verticalCenter = 0;
		t.visible = true;
		return t;
	};
	_proto.blood_03_Img_i = function () {
		var t = new eui.Image();
		this.blood_03_Img = t;
		t.horizontalCenter = 0;
		t.source = "Blood_03_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.blood_04_Img_i = function () {
		var t = new eui.Image();
		this.blood_04_Img = t;
		t.horizontalCenter = 0;
		t.source = "Blood_04_png";
		t.verticalCenter = 0;
		t.visible = true;
		return t;
	};
	_proto.blood_05_Img_i = function () {
		var t = new eui.Image();
		this.blood_05_Img = t;
		t.horizontalCenter = 0;
		t.source = "Blood_05_png";
		t.verticalCenter = 0;
		t.visible = true;
		return t;
	};
	_proto.bossHPGP_i = function () {
		var t = new eui.Group();
		this.bossHPGP = t;
		t.height = 900;
		t.horizontalCenter = 500;
		t.scaleX = -1.5;
		t.scaleY = 1.5;
		t.verticalCenter = -300;
		t.visible = false;
		t.width = 1600;
		t.elementsContent = [this.boss_blood_frame_i(),this.bossIcon_i(),this.boss_blood_01_Img_i(),this.boss_blood_02_Img_i(),this.boss_blood_03_Img_i(),this.boss_blood_04_Img_i(),this.boss_blood_05_Img_i()];
		return t;
	};
	_proto.boss_blood_frame_i = function () {
		var t = new eui.Image();
		this.boss_blood_frame = t;
		t.horizontalCenter = 0;
		t.source = "Avatar_frame_png";
		t.verticalCenter = 0;
		t.visible = true;
		return t;
	};
	_proto.bossIcon_i = function () {
		var t = new eui.Image();
		this.bossIcon = t;
		t.horizontalCenter = -106;
		t.source = "Avatar_Boss_01_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.boss_blood_01_Img_i = function () {
		var t = new eui.Image();
		this.boss_blood_01_Img = t;
		t.horizontalCenter = 0;
		t.source = "Blood_01_png";
		t.verticalCenter = 0;
		t.visible = true;
		return t;
	};
	_proto.boss_blood_02_Img_i = function () {
		var t = new eui.Image();
		this.boss_blood_02_Img = t;
		t.horizontalCenter = 0;
		t.source = "Blood_02_png";
		t.verticalCenter = 0;
		t.visible = true;
		return t;
	};
	_proto.boss_blood_03_Img_i = function () {
		var t = new eui.Image();
		this.boss_blood_03_Img = t;
		t.horizontalCenter = 0;
		t.source = "Blood_03_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.boss_blood_04_Img_i = function () {
		var t = new eui.Image();
		this.boss_blood_04_Img = t;
		t.horizontalCenter = 0;
		t.source = "Blood_04_png";
		t.verticalCenter = 0;
		t.visible = true;
		return t;
	};
	_proto.boss_blood_05_Img_i = function () {
		var t = new eui.Image();
		this.boss_blood_05_Img = t;
		t.horizontalCenter = 0;
		t.source = "Blood_05_png";
		t.verticalCenter = 0;
		t.visible = true;
		return t;
	};
	_proto.questionGP_i = function () {
		var t = new eui.Group();
		this.questionGP = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = true;
		t.elementsContent = [this.questionBGImg_i(),this.questionImg_i(),this.answerImg_i(),this.logoImg_i(),this.nextButton_i(),this.nextImg_i(),this.countdownFNT_i(),this.buttonGP_i()];
		return t;
	};
	_proto.questionBGImg_i = function () {
		var t = new eui.Image();
		this.questionBGImg = t;
		t.horizontalCenter = 0;
		t.source = "frame_png";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.questionImg_i = function () {
		var t = new eui.Image();
		this.questionImg = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.answerImg_i = function () {
		var t = new eui.Image();
		this.answerImg = t;
		t.horizontalCenter = 0;
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
	_proto.nextButton_i = function () {
		var t = new eui.Button();
		this.nextButton = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 345;
		t.visible = false;
		t.skinName = Game_2_ViewSkin$Skin1;
		return t;
	};
	_proto.nextImg_i = function () {
		var t = new eui.Image();
		this.nextImg = t;
		t.horizontalCenter = 0;
		t.source = "next_png";
		t.touchEnabled = false;
		t.verticalCenter = 200;
		t.visible = false;
		return t;
	};
	_proto.countdownFNT_i = function () {
		var t = new eui.BitmapLabel();
		this.countdownFNT = t;
		t.font = "TS_FNT02_fnt";
		t.horizontalCenter = 0;
		t.text = "60";
		t.touchEnabled = false;
		t.visible = false;
		t.y = 55;
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
		t.skinName = Game_2_ViewSkin$Skin2;
		return t;
	};
	_proto.button_2_i = function () {
		var t = new eui.Button();
		this.button_2 = t;
		t.horizontalCenter = -120;
		t.verticalCenter = 0;
		t.skinName = Game_2_ViewSkin$Skin3;
		return t;
	};
	_proto.button_3_i = function () {
		var t = new eui.Button();
		this.button_3 = t;
		t.horizontalCenter = 120;
		t.verticalCenter = 0;
		t.skinName = Game_2_ViewSkin$Skin4;
		return t;
	};
	_proto.button_4_i = function () {
		var t = new eui.Button();
		this.button_4 = t;
		t.horizontalCenter = 350;
		t.verticalCenter = 0;
		t.skinName = Game_2_ViewSkin$Skin5;
		return t;
	};
	_proto.backGP_i = function () {
		var t = new eui.Group();
		this.backGP = t;
		t.height = 900;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 1600;
		t.elementsContent = [this.backBGimg_i(),this.backButton_i(),this.successImg_i(),this.failImg_i()];
		return t;
	};
	_proto.backBGimg_i = function () {
		var t = new eui.Image();
		this.backBGimg = t;
		t.horizontalCenter = 0;
		t.source = "frame_png";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.backButton_i = function () {
		var t = new eui.Button();
		this.backButton = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 150;
		t.visible = false;
		t.skinName = Game_2_ViewSkin$Skin6;
		return t;
	};
	_proto.successImg_i = function () {
		var t = new eui.Image();
		this.successImg = t;
		t.horizontalCenter = 0;
		t.source = "success_png";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.failImg_i = function () {
		var t = new eui.Image();
		this.failImg = t;
		t.horizontalCenter = 0;
		t.source = "fail_png";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	return Game_2_ViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Game_3_View.exml'] = window.Game_3_ViewSkin = (function (_super) {
	__extends(Game_3_ViewSkin, _super);
	var Game_3_ViewSkin$Skin7 = 	(function (_super) {
		__extends(Game_3_ViewSkin$Skin7, _super);
		function Game_3_ViewSkin$Skin7() {
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
						new eui.SetProperty("_Image1","source","back_button_off_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = Game_3_ViewSkin$Skin7.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "back_button_on_png";
			t.percentWidth = 100;
			return t;
		};
		return Game_3_ViewSkin$Skin7;
	})(eui.Skin);

	var Game_3_ViewSkin$Skin8 = 	(function (_super) {
		__extends(Game_3_ViewSkin$Skin8, _super);
		function Game_3_ViewSkin$Skin8() {
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
		var _proto = Game_3_ViewSkin$Skin8.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "button_ON_01_png";
			t.percentWidth = 100;
			return t;
		};
		return Game_3_ViewSkin$Skin8;
	})(eui.Skin);

	var Game_3_ViewSkin$Skin9 = 	(function (_super) {
		__extends(Game_3_ViewSkin$Skin9, _super);
		function Game_3_ViewSkin$Skin9() {
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
		var _proto = Game_3_ViewSkin$Skin9.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "button_ON_02_png";
			t.percentWidth = 100;
			return t;
		};
		return Game_3_ViewSkin$Skin9;
	})(eui.Skin);

	var Game_3_ViewSkin$Skin10 = 	(function (_super) {
		__extends(Game_3_ViewSkin$Skin10, _super);
		function Game_3_ViewSkin$Skin10() {
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
		var _proto = Game_3_ViewSkin$Skin10.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "button_ON_03_png";
			t.percentWidth = 100;
			return t;
		};
		return Game_3_ViewSkin$Skin10;
	})(eui.Skin);

	var Game_3_ViewSkin$Skin11 = 	(function (_super) {
		__extends(Game_3_ViewSkin$Skin11, _super);
		function Game_3_ViewSkin$Skin11() {
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
		var _proto = Game_3_ViewSkin$Skin11.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "button_ON_04_png";
			t.percentWidth = 100;
			return t;
		};
		return Game_3_ViewSkin$Skin11;
	})(eui.Skin);

	var Game_3_ViewSkin$Skin12 = 	(function (_super) {
		__extends(Game_3_ViewSkin$Skin12, _super);
		function Game_3_ViewSkin$Skin12() {
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
						new eui.SetProperty("_Image1","source","back_button_off_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = Game_3_ViewSkin$Skin12.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "back_button_on_png";
			t.percentWidth = 100;
			return t;
		};
		return Game_3_ViewSkin$Skin12;
	})(eui.Skin);

	function Game_3_ViewSkin() {
		_super.call(this);
		this.skinParts = ["BGImg","masterGP","enemyGP","battlGP","vsImg","masterImg","enemyImg","figureGP","blood_frame","playerIcon","blood_01_Img","blood_02_Img","blood_03_Img","blood_04_Img","blood_05_Img","HPGP","boss_blood_frame","bossIcon","boss_blood_01_Img","boss_blood_02_Img","boss_blood_03_Img","boss_blood_04_Img","boss_blood_05_Img","bossHPGP","questionBGImg","questionImg","answerImg","logoImg","nextButton","nextImg","countdownFNT","button_1","button_2","button_3","button_4","buttonGP","questionGP","backBGimg","backButton","successImg","failImg","backGP","hyperlinkGP"];
		
		this.height = 900;
		this.width = 1600;
		this.elementsContent = [this.battlGP_i(),this.figureGP_i(),this.HPGP_i(),this.bossHPGP_i(),this.questionGP_i(),this.backGP_i(),this.hyperlinkGP_i()];
	}
	var _proto = Game_3_ViewSkin.prototype;

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
		t.horizontalCenter = 0;
		t.source = "Scenes_03_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.masterGP_i = function () {
		var t = new eui.Group();
		this.masterGP = t;
		t.horizontalCenter = -580;
		t.verticalCenter = 200;
		return t;
	};
	_proto.enemyGP_i = function () {
		var t = new eui.Group();
		this.enemyGP = t;
		t.horizontalCenter = 550;
		t.verticalCenter = 200;
		return t;
	};
	_proto.figureGP_i = function () {
		var t = new eui.Group();
		this.figureGP = t;
		t.height = 900;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = true;
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
		t.source = "Role_01_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.enemyImg_i = function () {
		var t = new eui.Image();
		this.enemyImg = t;
		t.horizontalCenter = 500;
		t.source = "Boss_03_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.HPGP_i = function () {
		var t = new eui.Group();
		this.HPGP = t;
		t.height = 900;
		t.horizontalCenter = -500;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.verticalCenter = -300;
		t.visible = false;
		t.width = 1600;
		t.elementsContent = [this.blood_frame_i(),this.playerIcon_i(),this.blood_01_Img_i(),this.blood_02_Img_i(),this.blood_03_Img_i(),this.blood_04_Img_i(),this.blood_05_Img_i()];
		return t;
	};
	_proto.blood_frame_i = function () {
		var t = new eui.Image();
		this.blood_frame = t;
		t.horizontalCenter = 0;
		t.source = "Avatar_frame_png";
		t.verticalCenter = 0;
		t.visible = true;
		return t;
	};
	_proto.playerIcon_i = function () {
		var t = new eui.Image();
		this.playerIcon = t;
		t.horizontalCenter = -106;
		t.source = "Avatar_01_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.blood_01_Img_i = function () {
		var t = new eui.Image();
		this.blood_01_Img = t;
		t.horizontalCenter = 0;
		t.source = "Blood_01_png";
		t.verticalCenter = 0;
		t.visible = true;
		return t;
	};
	_proto.blood_02_Img_i = function () {
		var t = new eui.Image();
		this.blood_02_Img = t;
		t.horizontalCenter = 0;
		t.source = "Blood_02_png";
		t.verticalCenter = 0;
		t.visible = true;
		return t;
	};
	_proto.blood_03_Img_i = function () {
		var t = new eui.Image();
		this.blood_03_Img = t;
		t.horizontalCenter = 0;
		t.source = "Blood_03_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.blood_04_Img_i = function () {
		var t = new eui.Image();
		this.blood_04_Img = t;
		t.horizontalCenter = 0;
		t.source = "Blood_04_png";
		t.verticalCenter = 0;
		t.visible = true;
		return t;
	};
	_proto.blood_05_Img_i = function () {
		var t = new eui.Image();
		this.blood_05_Img = t;
		t.horizontalCenter = 0;
		t.source = "Blood_05_png";
		t.verticalCenter = 0;
		t.visible = true;
		return t;
	};
	_proto.bossHPGP_i = function () {
		var t = new eui.Group();
		this.bossHPGP = t;
		t.height = 900;
		t.horizontalCenter = 500;
		t.scaleX = -1.5;
		t.scaleY = 1.5;
		t.verticalCenter = -300;
		t.visible = false;
		t.width = 1600;
		t.elementsContent = [this.boss_blood_frame_i(),this.bossIcon_i(),this.boss_blood_01_Img_i(),this.boss_blood_02_Img_i(),this.boss_blood_03_Img_i(),this.boss_blood_04_Img_i(),this.boss_blood_05_Img_i()];
		return t;
	};
	_proto.boss_blood_frame_i = function () {
		var t = new eui.Image();
		this.boss_blood_frame = t;
		t.horizontalCenter = 0;
		t.source = "Avatar_frame_png";
		t.verticalCenter = 0;
		t.visible = true;
		return t;
	};
	_proto.bossIcon_i = function () {
		var t = new eui.Image();
		this.bossIcon = t;
		t.horizontalCenter = -106;
		t.source = "Avatar_Boss_01_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.boss_blood_01_Img_i = function () {
		var t = new eui.Image();
		this.boss_blood_01_Img = t;
		t.horizontalCenter = 0;
		t.source = "Blood_01_png";
		t.verticalCenter = 0;
		t.visible = true;
		return t;
	};
	_proto.boss_blood_02_Img_i = function () {
		var t = new eui.Image();
		this.boss_blood_02_Img = t;
		t.horizontalCenter = 0;
		t.source = "Blood_02_png";
		t.verticalCenter = 0;
		t.visible = true;
		return t;
	};
	_proto.boss_blood_03_Img_i = function () {
		var t = new eui.Image();
		this.boss_blood_03_Img = t;
		t.horizontalCenter = 0;
		t.source = "Blood_03_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.boss_blood_04_Img_i = function () {
		var t = new eui.Image();
		this.boss_blood_04_Img = t;
		t.horizontalCenter = 0;
		t.source = "Blood_04_png";
		t.verticalCenter = 0;
		t.visible = true;
		return t;
	};
	_proto.boss_blood_05_Img_i = function () {
		var t = new eui.Image();
		this.boss_blood_05_Img = t;
		t.horizontalCenter = 0;
		t.source = "Blood_05_png";
		t.verticalCenter = 0;
		t.visible = true;
		return t;
	};
	_proto.questionGP_i = function () {
		var t = new eui.Group();
		this.questionGP = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = true;
		t.elementsContent = [this.questionBGImg_i(),this.questionImg_i(),this.answerImg_i(),this.logoImg_i(),this.nextButton_i(),this.nextImg_i(),this.countdownFNT_i(),this.buttonGP_i()];
		return t;
	};
	_proto.questionBGImg_i = function () {
		var t = new eui.Image();
		this.questionBGImg = t;
		t.horizontalCenter = 0;
		t.source = "frame_png";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.questionImg_i = function () {
		var t = new eui.Image();
		this.questionImg = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.answerImg_i = function () {
		var t = new eui.Image();
		this.answerImg = t;
		t.horizontalCenter = 0;
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
	_proto.nextButton_i = function () {
		var t = new eui.Button();
		this.nextButton = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 345;
		t.visible = false;
		t.skinName = Game_3_ViewSkin$Skin7;
		return t;
	};
	_proto.nextImg_i = function () {
		var t = new eui.Image();
		this.nextImg = t;
		t.horizontalCenter = 0;
		t.source = "next_png";
		t.touchEnabled = false;
		t.verticalCenter = 200;
		t.visible = false;
		return t;
	};
	_proto.countdownFNT_i = function () {
		var t = new eui.BitmapLabel();
		this.countdownFNT = t;
		t.font = "TS_FNT02_fnt";
		t.horizontalCenter = 0;
		t.text = "60";
		t.touchEnabled = false;
		t.visible = false;
		t.y = 55;
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
		t.skinName = Game_3_ViewSkin$Skin8;
		return t;
	};
	_proto.button_2_i = function () {
		var t = new eui.Button();
		this.button_2 = t;
		t.horizontalCenter = -120;
		t.verticalCenter = 0;
		t.skinName = Game_3_ViewSkin$Skin9;
		return t;
	};
	_proto.button_3_i = function () {
		var t = new eui.Button();
		this.button_3 = t;
		t.horizontalCenter = 120;
		t.verticalCenter = 0;
		t.skinName = Game_3_ViewSkin$Skin10;
		return t;
	};
	_proto.button_4_i = function () {
		var t = new eui.Button();
		this.button_4 = t;
		t.horizontalCenter = 350;
		t.verticalCenter = 0;
		t.skinName = Game_3_ViewSkin$Skin11;
		return t;
	};
	_proto.backGP_i = function () {
		var t = new eui.Group();
		this.backGP = t;
		t.height = 900;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 1600;
		t.elementsContent = [this.backBGimg_i(),this.backButton_i(),this.successImg_i(),this.failImg_i()];
		return t;
	};
	_proto.backBGimg_i = function () {
		var t = new eui.Image();
		this.backBGimg = t;
		t.horizontalCenter = 0;
		t.source = "frame_png";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.backButton_i = function () {
		var t = new eui.Button();
		this.backButton = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 150;
		t.visible = false;
		t.skinName = Game_3_ViewSkin$Skin12;
		return t;
	};
	_proto.successImg_i = function () {
		var t = new eui.Image();
		this.successImg = t;
		t.horizontalCenter = 0;
		t.source = "success_png";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.failImg_i = function () {
		var t = new eui.Image();
		this.failImg = t;
		t.horizontalCenter = 0;
		t.source = "fail_png";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.hyperlinkGP_i = function () {
		var t = new eui.Group();
		this.hyperlinkGP = t;
		t.height = 500;
		t.horizontalCenter = 0;
		t.name = "hyperlinkGP";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 800;
		return t;
	};
	return Game_3_ViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameView.exml'] = window.GameViewSkin = (function (_super) {
	__extends(GameViewSkin, _super);
	var GameViewSkin$Skin13 = 	(function (_super) {
		__extends(GameViewSkin$Skin13, _super);
		function GameViewSkin$Skin13() {
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
						new eui.SetProperty("_Image1","source","back_button_off_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameViewSkin$Skin13.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "back_button_on_png";
			t.percentWidth = 100;
			return t;
		};
		return GameViewSkin$Skin13;
	})(eui.Skin);

	var GameViewSkin$Skin14 = 	(function (_super) {
		__extends(GameViewSkin$Skin14, _super);
		function GameViewSkin$Skin14() {
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
		var _proto = GameViewSkin$Skin14.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "button_ON_01_png";
			t.percentWidth = 100;
			return t;
		};
		return GameViewSkin$Skin14;
	})(eui.Skin);

	var GameViewSkin$Skin15 = 	(function (_super) {
		__extends(GameViewSkin$Skin15, _super);
		function GameViewSkin$Skin15() {
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
		var _proto = GameViewSkin$Skin15.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "button_ON_02_png";
			t.percentWidth = 100;
			return t;
		};
		return GameViewSkin$Skin15;
	})(eui.Skin);

	var GameViewSkin$Skin16 = 	(function (_super) {
		__extends(GameViewSkin$Skin16, _super);
		function GameViewSkin$Skin16() {
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
		var _proto = GameViewSkin$Skin16.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "button_ON_03_png";
			t.percentWidth = 100;
			return t;
		};
		return GameViewSkin$Skin16;
	})(eui.Skin);

	var GameViewSkin$Skin17 = 	(function (_super) {
		__extends(GameViewSkin$Skin17, _super);
		function GameViewSkin$Skin17() {
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
		var _proto = GameViewSkin$Skin17.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "button_ON_04_png";
			t.percentWidth = 100;
			return t;
		};
		return GameViewSkin$Skin17;
	})(eui.Skin);

	var GameViewSkin$Skin18 = 	(function (_super) {
		__extends(GameViewSkin$Skin18, _super);
		function GameViewSkin$Skin18() {
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
						new eui.SetProperty("_Image1","source","back_button_off_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameViewSkin$Skin18.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "back_button_on_png";
			t.percentWidth = 100;
			return t;
		};
		return GameViewSkin$Skin18;
	})(eui.Skin);

	function GameViewSkin() {
		_super.call(this);
		this.skinParts = ["BGImg","masterGP","enemyGP","battlGP","vsImg","masterImg","enemyImg","figureGP","blood_frame","playerIcon","blood_01_Img","blood_02_Img","blood_03_Img","blood_04_Img","blood_05_Img","HPGP","boss_blood_frame","bossIcon","boss_blood_01_Img","boss_blood_02_Img","boss_blood_03_Img","boss_blood_04_Img","boss_blood_05_Img","bossHPGP","questionBGImg","questionImg","answerImg","logoImg","nextButton","nextImg","countdownFNT","button_1","button_2","button_3","button_4","buttonGP","questionGP","backBGimg","backButton","successImg","failImg","backGP"];
		
		this.height = 900;
		this.width = 1600;
		this.elementsContent = [this.battlGP_i(),this.figureGP_i(),this.HPGP_i(),this.bossHPGP_i(),this.questionGP_i(),this.backGP_i()];
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
		t.horizontalCenter = 0;
		t.source = "Scenes_01_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.masterGP_i = function () {
		var t = new eui.Group();
		this.masterGP = t;
		t.horizontalCenter = -580;
		t.verticalCenter = 200;
		return t;
	};
	_proto.enemyGP_i = function () {
		var t = new eui.Group();
		this.enemyGP = t;
		t.horizontalCenter = 550;
		t.verticalCenter = 200;
		return t;
	};
	_proto.figureGP_i = function () {
		var t = new eui.Group();
		this.figureGP = t;
		t.height = 900;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = true;
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
		t.source = "Role_01_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.enemyImg_i = function () {
		var t = new eui.Image();
		this.enemyImg = t;
		t.horizontalCenter = 500;
		t.source = "Boss_01_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.HPGP_i = function () {
		var t = new eui.Group();
		this.HPGP = t;
		t.height = 900;
		t.horizontalCenter = -500;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.verticalCenter = -300;
		t.visible = false;
		t.width = 1600;
		t.elementsContent = [this.blood_frame_i(),this.playerIcon_i(),this.blood_01_Img_i(),this.blood_02_Img_i(),this.blood_03_Img_i(),this.blood_04_Img_i(),this.blood_05_Img_i()];
		return t;
	};
	_proto.blood_frame_i = function () {
		var t = new eui.Image();
		this.blood_frame = t;
		t.horizontalCenter = 0;
		t.source = "Avatar_frame_png";
		t.verticalCenter = 0;
		t.visible = true;
		return t;
	};
	_proto.playerIcon_i = function () {
		var t = new eui.Image();
		this.playerIcon = t;
		t.horizontalCenter = -106;
		t.source = "Avatar_01_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.blood_01_Img_i = function () {
		var t = new eui.Image();
		this.blood_01_Img = t;
		t.horizontalCenter = 0;
		t.source = "Blood_01_png";
		t.verticalCenter = 0;
		t.visible = true;
		return t;
	};
	_proto.blood_02_Img_i = function () {
		var t = new eui.Image();
		this.blood_02_Img = t;
		t.horizontalCenter = 0;
		t.source = "Blood_02_png";
		t.verticalCenter = 0;
		t.visible = true;
		return t;
	};
	_proto.blood_03_Img_i = function () {
		var t = new eui.Image();
		this.blood_03_Img = t;
		t.horizontalCenter = 0;
		t.source = "Blood_03_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.blood_04_Img_i = function () {
		var t = new eui.Image();
		this.blood_04_Img = t;
		t.horizontalCenter = 0;
		t.source = "Blood_04_png";
		t.verticalCenter = 0;
		t.visible = true;
		return t;
	};
	_proto.blood_05_Img_i = function () {
		var t = new eui.Image();
		this.blood_05_Img = t;
		t.horizontalCenter = 0;
		t.source = "Blood_05_png";
		t.verticalCenter = 0;
		t.visible = true;
		return t;
	};
	_proto.bossHPGP_i = function () {
		var t = new eui.Group();
		this.bossHPGP = t;
		t.height = 900;
		t.horizontalCenter = 500;
		t.scaleX = -1.5;
		t.scaleY = 1.5;
		t.verticalCenter = -300;
		t.visible = false;
		t.width = 1600;
		t.elementsContent = [this.boss_blood_frame_i(),this.bossIcon_i(),this.boss_blood_01_Img_i(),this.boss_blood_02_Img_i(),this.boss_blood_03_Img_i(),this.boss_blood_04_Img_i(),this.boss_blood_05_Img_i()];
		return t;
	};
	_proto.boss_blood_frame_i = function () {
		var t = new eui.Image();
		this.boss_blood_frame = t;
		t.horizontalCenter = 0;
		t.source = "Avatar_frame_png";
		t.verticalCenter = 0;
		t.visible = true;
		return t;
	};
	_proto.bossIcon_i = function () {
		var t = new eui.Image();
		this.bossIcon = t;
		t.horizontalCenter = -106;
		t.source = "Avatar_Boss_01_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.boss_blood_01_Img_i = function () {
		var t = new eui.Image();
		this.boss_blood_01_Img = t;
		t.horizontalCenter = 0;
		t.source = "Blood_01_png";
		t.verticalCenter = 0;
		t.visible = true;
		return t;
	};
	_proto.boss_blood_02_Img_i = function () {
		var t = new eui.Image();
		this.boss_blood_02_Img = t;
		t.horizontalCenter = 0;
		t.source = "Blood_02_png";
		t.verticalCenter = 0;
		t.visible = true;
		return t;
	};
	_proto.boss_blood_03_Img_i = function () {
		var t = new eui.Image();
		this.boss_blood_03_Img = t;
		t.horizontalCenter = 0;
		t.source = "Blood_03_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.boss_blood_04_Img_i = function () {
		var t = new eui.Image();
		this.boss_blood_04_Img = t;
		t.horizontalCenter = 0;
		t.source = "Blood_04_png";
		t.verticalCenter = 0;
		t.visible = true;
		return t;
	};
	_proto.boss_blood_05_Img_i = function () {
		var t = new eui.Image();
		this.boss_blood_05_Img = t;
		t.horizontalCenter = 0;
		t.source = "Blood_05_png";
		t.verticalCenter = 0;
		t.visible = true;
		return t;
	};
	_proto.questionGP_i = function () {
		var t = new eui.Group();
		this.questionGP = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = true;
		t.elementsContent = [this.questionBGImg_i(),this.questionImg_i(),this.answerImg_i(),this.logoImg_i(),this.nextButton_i(),this.nextImg_i(),this.countdownFNT_i(),this.buttonGP_i()];
		return t;
	};
	_proto.questionBGImg_i = function () {
		var t = new eui.Image();
		this.questionBGImg = t;
		t.horizontalCenter = 0;
		t.source = "frame_png";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.questionImg_i = function () {
		var t = new eui.Image();
		this.questionImg = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.answerImg_i = function () {
		var t = new eui.Image();
		this.answerImg = t;
		t.horizontalCenter = 0;
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
	_proto.nextButton_i = function () {
		var t = new eui.Button();
		this.nextButton = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 345;
		t.visible = false;
		t.skinName = GameViewSkin$Skin13;
		return t;
	};
	_proto.nextImg_i = function () {
		var t = new eui.Image();
		this.nextImg = t;
		t.horizontalCenter = 0;
		t.source = "next_png";
		t.touchEnabled = false;
		t.verticalCenter = 200;
		t.visible = false;
		return t;
	};
	_proto.countdownFNT_i = function () {
		var t = new eui.BitmapLabel();
		this.countdownFNT = t;
		t.font = "TS_FNT02_fnt";
		t.horizontalCenter = 0;
		t.text = "60";
		t.touchEnabled = false;
		t.visible = false;
		t.y = 55;
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
		t.skinName = GameViewSkin$Skin14;
		return t;
	};
	_proto.button_2_i = function () {
		var t = new eui.Button();
		this.button_2 = t;
		t.horizontalCenter = -120;
		t.verticalCenter = 0;
		t.skinName = GameViewSkin$Skin15;
		return t;
	};
	_proto.button_3_i = function () {
		var t = new eui.Button();
		this.button_3 = t;
		t.horizontalCenter = 120;
		t.verticalCenter = 0;
		t.skinName = GameViewSkin$Skin16;
		return t;
	};
	_proto.button_4_i = function () {
		var t = new eui.Button();
		this.button_4 = t;
		t.horizontalCenter = 350;
		t.verticalCenter = 0;
		t.skinName = GameViewSkin$Skin17;
		return t;
	};
	_proto.backGP_i = function () {
		var t = new eui.Group();
		this.backGP = t;
		t.height = 900;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 1600;
		t.elementsContent = [this.backBGimg_i(),this.backButton_i(),this.successImg_i(),this.failImg_i()];
		return t;
	};
	_proto.backBGimg_i = function () {
		var t = new eui.Image();
		this.backBGimg = t;
		t.horizontalCenter = 0;
		t.source = "frame_png";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.backButton_i = function () {
		var t = new eui.Button();
		this.backButton = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 150;
		t.visible = false;
		t.skinName = GameViewSkin$Skin18;
		return t;
	};
	_proto.successImg_i = function () {
		var t = new eui.Image();
		this.successImg = t;
		t.horizontalCenter = 0;
		t.source = "success_png";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.failImg_i = function () {
		var t = new eui.Image();
		this.failImg = t;
		t.horizontalCenter = 0;
		t.source = "fail_png";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	return GameViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/LoadingUI.exml'] = window.LoadingUISkin = (function (_super) {
	__extends(LoadingUISkin, _super);
	var LoadingUISkin$Skin19 = 	(function (_super) {
		__extends(LoadingUISkin$Skin19, _super);
		function LoadingUISkin$Skin19() {
			_super.call(this);
			this.skinParts = ["thumb"];
			
			this.elementsContent = [this.thumb_i()];
		}
		var _proto = LoadingUISkin$Skin19.prototype;

		_proto.thumb_i = function () {
			var t = new eui.Image();
			this.thumb = t;
			t.source = "LoadingBar_02_png";
			return t;
		};
		return LoadingUISkin$Skin19;
	})(eui.Skin);

	function LoadingUISkin() {
		_super.call(this);
		this.skinParts = ["loadingBG","progressBar_bg","progressBar","loadGP"];
		
		this.height = 900;
		this.width = 1600;
		this.elementsContent = [this.loadGP_i()];
	}
	var _proto = LoadingUISkin.prototype;

	_proto.loadGP_i = function () {
		var t = new eui.Group();
		this.loadGP = t;
		t.height = 900;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1600;
		t.elementsContent = [this.loadingBG_i(),this.progressBar_bg_i(),this.progressBar_i()];
		return t;
	};
	_proto.loadingBG_i = function () {
		var t = new eui.Image();
		this.loadingBG = t;
		t.horizontalCenter = 0;
		t.source = "loagding_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.progressBar_bg_i = function () {
		var t = new eui.Image();
		this.progressBar_bg = t;
		t.horizontalCenter = 0;
		t.source = "LoadingBar_01_png";
		t.y = 695;
		return t;
	};
	_proto.progressBar_i = function () {
		var t = new eui.ProgressBar();
		this.progressBar = t;
		t.horizontalCenter = 0;
		t.maximum = 100;
		t.value = 0;
		t.y = 700;
		t.skinName = LoadingUISkin$Skin19;
		return t;
	};
	return LoadingUISkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/MapView.exml'] = window.MapViewSkin = (function (_super) {
	__extends(MapViewSkin, _super);
	function MapViewSkin() {
		_super.call(this);
		this.skinParts = ["mapBGImg","icon_1","maplock_2_Img","icon_2","maplock_3_Img","icon_3","mapGP"];
		
		this.height = 300;
		this.width = 400;
		this.elementsContent = [this.mapGP_i()];
	}
	var _proto = MapViewSkin.prototype;

	_proto.mapGP_i = function () {
		var t = new eui.Group();
		this.mapGP = t;
		t.height = 900;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1600;
		t.elementsContent = [this.mapBGImg_i(),this.icon_1_i(),this.maplock_2_Img_i(),this.icon_2_i(),this.maplock_3_Img_i(),this.icon_3_i()];
		return t;
	};
	_proto.mapBGImg_i = function () {
		var t = new eui.Image();
		this.mapBGImg = t;
		t.horizontalCenter = 0;
		t.source = "map_all_png";
		t.verticalCenter = 0;
		t.visible = true;
		return t;
	};
	_proto.icon_1_i = function () {
		var t = new eui.Image();
		this.icon_1 = t;
		t.horizontalCenter = -300;
		t.source = "boss_icon_png";
		t.verticalCenter = 200;
		t.visible = true;
		return t;
	};
	_proto.maplock_2_Img_i = function () {
		var t = new eui.Image();
		this.maplock_2_Img = t;
		t.horizontalCenter = 418;
		t.source = "map_lock_02_png";
		t.verticalCenter = 140;
		t.visible = true;
		return t;
	};
	_proto.icon_2_i = function () {
		var t = new eui.Image();
		this.icon_2 = t;
		t.horizontalCenter = 424;
		t.source = "boss_icon_png";
		t.verticalCenter = 170;
		t.visible = false;
		return t;
	};
	_proto.maplock_3_Img_i = function () {
		var t = new eui.Image();
		this.maplock_3_Img = t;
		t.horizontalCenter = 52;
		t.source = "map_lock_03_png";
		t.verticalCenter = -246;
		t.visible = true;
		return t;
	};
	_proto.icon_3_i = function () {
		var t = new eui.Image();
		this.icon_3 = t;
		t.horizontalCenter = 46;
		t.source = "boss_icon_png";
		t.verticalCenter = -250;
		t.visible = false;
		return t;
	};
	return MapViewSkin;
})(eui.Skin);