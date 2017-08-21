/*function Ane () {
	this.x=[];//坐标
	this.len=[];//高度

}

Ane.prototype.num=50;//为何不放在属性上

Ane.prototype.init=function () {
	for(var i=0;i<this.num;i++){
		this.x[i]=i*35+Math.random()*20;
		this.len[i]=350+Math.random()*50;
	}
}

Ane.prototype.draw=function () {
	ctx2.save();
	ctx2.globalAlpha=0.6;
	ctx2.strokeStyle='#3b154e';
	ctx2.lineCap='round';
	ctx2.lineWidth=20;

	for(var i=0;i<this.num;i++){
		ctx2.beginPath();
		ctx2.moveTo(this.x[i],canheight);
		ctx2.lineTo(this.x[i],this.len[i]);
		ctx2.stroke();
	}
	ctx2.restore();
}
*/

class Ane {
	constructor() {
		this.x = [];//坐标
		this.len = [];//从下往上画，从画布顶端到海葵顶端的长度
		this.num = 50;//数量
	}

	init() {
		for (var i = 0; i < this.num; i++) {
			this.x[i] = i * 35 + Math.random() * 20;
			this.len[i] = 350 + Math.random() * 50;//值越大，海葵越矮小
		}
	}


	draw(ctx) {
		ctx.save();
		ctx.globalAlpha = 0.6;
		ctx.strokeStyle = '#3b154e';
		ctx.lineCap = 'round';
		ctx.lineWidth = 20;

		for (var i = 0; i < this.num; i++) {
			ctx.beginPath();
			ctx.moveTo(this.x[i], canheight);
			// console.log(this.len[i]);
			ctx.lineTo(this.x[i], this.len[i]);//从下往上画，this.len[i]--》画布顶端到海葵顶端的长度
			ctx.stroke();
		}
		ctx.restore();

	}
}