var lasttime;//上一次被执行的时间
var deltatime;//两针之间时间差
var canwidth;
var canheight;
var bgPic=new Image();//全局生成背景图片实例
var can1;
var can2;
var ctx1;
var ctx2;

window.onload = function () {
	
	init();
	lasttime=Date.now();
	deltatime=0;
	gameloop();

	function init() {
		can1 = document.getElementById('c1');
		ctx1 = can1.getContext('2d'); //画笔
		can2 = document.getElementById('c2');
		ctx2 = can2.getContext('2d'); //画笔

		//获取背景图的路径，宽高
		bgPic.src='./src/background.jpg';
		canwidth=can1.width;
		canheight=can1.height;
	}

	//游戏循环函数
	function gameloop() {
		//requestAnimationFrame返回的时间差是不确定的
		requestAnimationFrame(gameloop);//根据机器性能智能计算
		var now=Date.now();
		deltatime=now-lasttime;
		lasttime=now;
		bgPic.onload=function () {
			drawBackground();
		}
	}


}