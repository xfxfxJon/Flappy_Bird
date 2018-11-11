var Pipe = function (upImg, downImg, x, speed, con) {
    this.x = x;
    this.upImg = upImg;
    this.downImg = downImg;
    this.speed = speed;
    this.con = con;
    this.r = Math.random() * (280 - 40 + 1) + 40; //柱子长度范围40-280
    this.dv = 100;
};

Pipe.prototype.draw = function () {
    this.con.drawImage(this.upImg, 0, 0, 52, this.r, this.x, 400 - this.r, 52, this.r);
    var downImgHeight = 400 - this.r - this.dv;
    this.con.drawImage(this.downImg, 0, (320 - downImgHeight), 52, downImgHeight, this.x, 0, 52, downImgHeight);
};

Pipe.prototype.setCount = function (count, distance) {
    Pipe.count = count;
    Pipe.distance = distance;
};

Pipe.prototype.update = function (duration) {
    this.x = this.x + this.speed * duration;
    if (this.x < -52) {
        this.x = this.x + Pipe.count * Pipe.distance + (Pipe.count - 1) * 52;
        this.r = Math.random() * (280 - 40 + 1) + 40;
    }
};

Pipe.prototype.hitTest = function (x, y) {
    return (x > this.x && x < this.x + 52) &&
        (!(y > this.r && y < this.r + 150));
};