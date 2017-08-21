class Fruits {
	constructor() {
		this.alive = [];//是否被吃掉
		this.x = [];//坐标
		this.y = [];//坐标
		this.orange = new Image();
		this.blue = new Image();
		this.num = 30;
		this.scale = [];//随时间放大后的尺寸属性
		this.speed = [];
		this.type = [];
	}

	init() {
		for (var i = 0; i < this.num; i++) {
			this.alive[i] = true;
			this.x[i] = 0;//坐标初始化为0
			this.y[i] = 0;//坐标
			this.scale[i] = 0;
			this.born(i);//初始化的时候让所有的果实都出生
			this.speed[i] = Math.random() * 0.017 + .003;
			this.type[i] = 'orange';
		}
		this.orange.src = './src/fruit.png';
		this.blue.src = './src/blue.png';
	}

	born(i) {
		var aneId = Math.floor(Math.random() * ane.num);
		this.x[i] = ane.x[aneId];//出生时候将海葵的坐标赋给种子
		this.y[i] = ane.len[aneId];
		this.scale[i] = 0;
		this.alive[i] = true;
		//随机颜色
		if (Math.random() < .3) {
			this.type[i] = 'blue';
		} else {
			this.type[i] = 'orange';
		}
	}


	draw(ctx) {
		for (var i = 0; i < this.num; i++) {
			//选颜色
			if (this.type[i] == 'blue') {
				var pic = this.blue;
			} else {
				var pic = this.orange;
			}

			//放大-->上升，
			if (this.alive[i]) {
				if (this.scale[i] <= 14) {
					//让scale属性随时间增加
					this.scale[i] += this.speed[i] * deltatime;
				} else {
					this.y[i] -= this.speed[i] * 7 * deltatime;//成熟后上移走
				}
				ctx.drawImage(
					pic,//绘制源
					this.x[i] - this.scale[i] * .5, this.y[i] - this.scale[i] * .5,//绘制在哪里
					this.scale[i], this.scale[i]//图片宽高
				)
				//上升到一定高度，死亡
				if (this.y[i] < 0) {
					this.alive[i] = false;
				}

			}
		}

	}


	dead() {
		this.alive[i] = false;
	}

	//监视果实数量
	fruitMonitor() {
		var num = 0;
		for (var i = 0; i < this.num; i++) {
			if (this.alive[i]) {
				num++;
			}
		}
		if (num < 15) {
			//数量小于15时，新生果实
			this.sendFruit();
			// this.born(i);
			 return;
		}
	}

	//一个一个替换死亡果实
	sendFruit() {
		for (var i = 0; i < this.num; i++) {
			if (!this.alive[i]) {
				this.born(i);
				return;//每生成一个，调出循环
			}
		}
	}

}