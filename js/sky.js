var Sky = function (img, speed, x, con) {
    this.img = img;
    this.speed = speed;
    this.x = x;
    this.con = con;
};

// 更新当前sky
Sky.prototype.draw = function () {
    this.con.drawImage(this.img, this.x, 0);
};

// 更新sky的x轴位置
Sky.prototype.update = function (duration) {
    this.x = this.x + this.speed * duration;
    if (this.x < -288) {
        this.x = this.x + Sky.count * 288;
    }
};

// 设置sky的index
Sky.prototype.setCount = function (num) {
    Sky.count = num;
};