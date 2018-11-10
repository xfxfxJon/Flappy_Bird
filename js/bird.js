var durMax = 0;
var heightStep = 0.03;

var Bird = function (img0, img1, img2, x, y, speed, step, height, con) {
    this.img0 = img0; //图片1
    this.img1 = img1; //图片2
    this.img2 = img2; //图片3
    this.x = x;
    this.y = y;
    this.speed = speed; //速度
    this.step = step; //变化量
    this.height = height; //开始页面上下飞的高度差
    this.con = con;
    this.index = 0; //小鸟的动作(一共三张图片)
};

Bird.prototype.updateForStart = function (duration) {
    durMax += duration;

    if (durMax > 150) {
        this.index++;
        if (this.index == 3) {
            this.index = 0;
        }
        durMax -= 150;
    }

    this.height += duration * heightStep;
    if (this.height > 10) {
        heightStep = -Math.abs(heightStep);
    } else if (this.height <= 0) {
        heightStep = Math.abs(heightStep);
    }

    // this.speed = this.speed + this.a * this.duration;
};

Bird.prototype.drawForStart = function () {
    this.con.drawImage(this["img" + this.index], this.x, this.y + this.height);
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

    this.speed = this.speed + this.a * this.duration;
    this.y = this.y + this.speed * duration;
};

Bird.prototype.draw = function () {
    this.con.save();
    this.con.translate(this.x, this.y);
    this.con.rotate(Math.Pi / 6 * this.speed);
    this.con.drawImage(this["img" + this.index], this.x, this.y);
    this.con.restore();
};