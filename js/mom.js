class Mom{
	constructor(){
		this.x=0;
		this.y=0;
		this.bigEye =new Image();
		this.bigBody=new Image();
		this.bigTail=new Image();
		this.angel=0;

		this.bigTailTimer=0;
		this.bigTailCount=0;
		this.bigEyeTimer = 0;
		this.bigEyeCount = 0;
		this.bigEyeInterval = 1000;
		this.bigBodyCount = 0;

	}
	init(){
		this.x=canwidth/2;
		this.y=canheight/2;
		this.angel=0;
		this.bigEye.src = "./src/bigEye0.png";
		this.bigBody.src = "./src/bigSwim0.png";
		this.bigTail.src = "./src/bigTail0.png";

	}
	draw(ctx,x,y){
		// 追随鼠标
		this.x = lerpDistance(mx, this.x, 0.98);
		this.y = lerpDistance(my, this.y, 0.98);
		// lerb 角度
		var deltaY = my - this.y;
		var deltaX = mx - this.x;
		var beta = Math.atan2(deltaY, deltaX) + Math.PI;
		this.angle = lerpAngle(beta, this.angle, 0.6);
		ctx.save();
		ctx.translate(this.x,this.y);//此时坐标原点在鱼的坐标位置
		ctx.rotate(this.angle);
		//中心全部绘制在坐标原点
		ctx.drawImage(this.bigEye,-this.bigEye.width*.5,-this.bigEye.height*.5);
		ctx.drawImage(this.bigBody,-this.bigBody.width*.5,-this.bigBody.height*.5);
		ctx.drawImage(this.bigTail,-this.bigTail.width*.5+30,-this.bigTail.height*.5);
		ctx.restore();

	}
}