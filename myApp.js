
var DemoLayer = cc.LayerColor.extend({
    init:function () {
        this._super();

        // close fps display
        cc.Director.getInstance().setDisplayStats(true);

        // get window size
        var winSize = cc.Director.getInstance().getWinSize();

        // create title
        var demoTitle = cc.LabelTTF.create("Shape Sprite Demo", "Arial Black", 26);
        demoTitle.setVerticalAlignment(cc.VERTICAL_TEXT_ALIGNMENT_CENTER);
        demoTitle.setPosition(cc.p(winSize.width / 2, winSize.height - 30));
        this.addChild(demoTitle, 1);
        
        // dot
        for (var i = 0; i < 18; i++) {
        	var dotSprite = DotSprite.create(20);
        	dotSprite.setColor(cc.c3b(200 + Math.random() * 55, Math.random() * 150, Math.random() * 100));
        	dotSprite.setOpacity(100 + Math.random() * 155);
        	dotSprite.setPosition(cc.p(50 + i * 40, winSize.height * 16 / 20));
        	this.addChild(dotSprite);
        }
        
        // line
        for (var i = 0; i < 8; i++) {
        	var lineSprite = LineSprite.create(cc.p(50, winSize.height * 15 / 20 - 20 * i), cc.p(winSize.width - 50, winSize.height * 15 / 20 - 20 * i), i);
        	lineSprite.setColor(cc.c3b(200 + Math.random() * 55, Math.random() * 150, Math.random() * 100));
        	lineSprite.setOpacity(100 + Math.random() * 155);
        	this.addChild(lineSprite);
        }
        
        // polygon
        for (var i = 0; i < 9; i++) {
        	var polygon = PolygonSprite.create(i + 3, 40);
        	//polygon.setColor(cc.c3b(200 + Math.random() * 55, Math.random() * 150, Math.random() * 100));
            polygon.setColor(cc.c3b(255, 255, 0));
        	//polygon.setOpacity(100 + Math.random() * 155);
            polygon.setPosition(cc.p(50 + i * 85, winSize.height * 6 / 20));
        	this.addChild(polygon);
        }

        // frame
        var frame = FrameSprite.create(demoTitle.getBoundingBox(), 3, 10);
        frame.setColor(cc.c3b(255, 0, 0));
        demoTitle.addChild(frame);

        var frame2 = FrameSprite.create(this.getBoundingBox(), 3, -5);
        frame2.setColor(cc.c3b(255, 255, 0));
        this.addChild(frame2);
        
        return true;
    }
});

var DemoScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new DemoLayer();
        layer.init();
        this.addChild(layer);
    }
});

