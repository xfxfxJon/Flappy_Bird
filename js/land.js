var Land = function (img, x, speed, con) {
    this.img = img;
    this.x = x;
    this.speed = speed;
    this.con = con;
};

// 更新当前land
Land.prototype.draw = function () {
    this.con.drawImage(this.img, this.x, 400);
};

// 更新land的x轴位置
Land.prototype.update = function (duration) {
    this.x = this.x + this.speed * duration;
    if (this.x < -336) {
        this.x = this.x + Land.count * 336;
    }
};

// 设置land的index
Land.prototype.setCount = function (num) {
    Land.count = num;
};