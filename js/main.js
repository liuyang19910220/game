var lasttime;//上一次被执行的时间
var deltatime;//两针之间时间差
var canwidth;
var canheight;
var bgPic = new Image();//全局生成背景图片实例
var can1;
var can2;
var ctx1;
var ctx2;

var ane;
var fruit;
var mom;
var baby;
var data;


//鼠标位置
var mx;
var my;


window.onload = function () {

	init();
	lasttime = Date.now();
	deltatime = 0;
	gameloop();

	//主初始化函数
	function init() {
		can1 = document.getElementById('c1');
		ctx1 = can1.getContext('2d'); //画笔
		can2 = document.getElementById('c2');
		ctx2 = can2.getContext('2d'); //画笔
		// onMouseMove();
		canwidth = can1.width;
		canheight = can1.height;

		//实例化海葵
		ane = new Ane();
		ane.init();
		//实例化果实
		fruit = new Fruits();
		fruit.init();
		//实例化mom
		mom = new Mom();
		mom.init();

	}

	//游戏循环函数
	function gameloop() {
		// console.log(1)
		//requestAnimationFrame返回的时间差是不确定的
		requestAnimationFrame(gameloop);//根据机器性能智能计算

		var now = Date.now();
		deltatime = now - lasttime;
		lasttime = now;

		//绘制can2上的各模块
		ctx2.clearRect(0, 0, canwidth, canheight);
		//处理图片资源的异步加载
		bgPic.onload = function () {
			drawBackground();
		}
		//获取背景图的路径，宽高
		bgPic.src = './src/background.jpg';
		ane.draw(ctx2);
		fruit.draw(ctx2);
		fruit.fruitMonitor();

		//绘制can1上的各模块
		ctx1.clearRect(0, 0, canwidth, canheight);
		mom.draw(ctx1);
		// momFruitsCollision();
		// momBabyCollision();
		// baby.draw();


	}

/*	can1.onmousemove = function (evt) {
		var e = evt || event;
		mx = e.clientX;
		my = e.clientY;
		console.log(evt, mx, my)
		mom.draw(ctx1,mx,my);
	}*/
}