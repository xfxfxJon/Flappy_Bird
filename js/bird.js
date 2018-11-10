var durMax = 0;
var heightStep = 0.05;

var Bird = function (img0, img1, img2, x, y, speed, step, hight, con) {
    this.img0 = img0; //图片1
    this.img1 = img1; //图片2
    this.img2 = img2; //图片3
    this.x = x;
    this.y = y;
    this.speed = speed; //速度
    this.step = step; //变化量
    this.hight = hight; //开始页面上下飞的高度差
    this.con = con;
    this.index = 0; //小鸟的动作(一共三张图片)
};

Bird.prototype.update = function (duration) {
    durMax += duration;

    if (durMax > 150) {
        this.index++;
        if (this.index == 3) {
            this.index = 0;
        }
        durMax -= 150;
    }

    this.hight += duration * heightStep;
    if (this.hight > 20) {
        heightStep = -heightStep;
    } else if (this.hight <= 0) {
        heightStep = -heightStep;
    }

    // this.speed = this.speed + this.a * this.duration;
};

Bird.prototype.drawForStart = function () {
    this.con.drawImage(this["img" + this.index], 125, 200 + this.hight);
};