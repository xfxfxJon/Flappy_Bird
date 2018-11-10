window.onload = function () {
    // 初始化画布
    var myCanvas = document.getElementById("box");
    var con = myCanvas.getContext("2d");

    // 图片初始化
    var imgs = [{
            name: "day",
            src: "img/bg_day.png"
        },
        {
            name: "night",
            src: "img/bg_night.png"
        },
        {
            name: "bird0_0",
            src: "img/bird0_0.png"
        },
        {
            name: "bird0_1",
            src: "img/bird0_1.png"
        },
        {
            name: "bird0_2",
            src: "img/bird0_2.png"
        },
        {
            name: "bird1_0",
            src: "img/bird1_0.png"
        },
        {
            name: "bird1_1",
            src: "img/bird1_1.png"
        },
        {
            name: "bird1_2",
            src: "img/bird1_2.png"
        },
        {
            name: "bird2_0",
            src: "img/bird2_0.png"
        },
        {
            name: "bird2_1",
            src: "img/bird2_1.png"
        },
        {
            name: "bird2_2",
            src: "img/bird2_2.png"
        },
        {
            name: "play_btn",
            src: "img/button_play.png"
        },
        {
            name: "title",
            src: "img/title.png"
        },
        {
            name: "button_rate",
            src: "img/button_rate.png"
        },
        {
            name: "button_score",
            src: "img/button_score.png"
        },
        {
            name: "brand_copyright",
            src: "img/brand_copyright.png"
        },
        {
            name: "land",
            src: "img/land.png"
        },
    ];


    load(imgs, function (imgs) {
        if (imgs) {
            // 创建对象
            var objs = {};
            objs.land1 = new Land(imgs.land, 336 * 0, -0.3, con); //land1
            objs.land2 = new Land(imgs.land, 336 * 1, -0.3, con); //land2
            objs.bird0 = new Bird(imgs.bird0_0, imgs.bird0_1, imgs.bird0_2, 150, 200, 0.0003, 0.0006, 0, con);

            // 开始页面
            drawStartPage(imgs, objs);



        }





    });

    // 开始页面
    function drawStartPage(imgs, objs) {
        var startTime = Date.now();
        var isStart = true;

        function run() {
            var now = Date.now();
            dt = now - startTime;
            startTime = now;
            con.drawImage(imgs.day, 0, 0); //绘制开始页面的蓝天

            // 绘制动态的land
            objs.land1.setCount(2);
            objs.land1.update(dt);
            objs.land1.draw();
            objs.land2.update(dt);
            objs.land2.draw();

            con.drawImage(imgs.title, 60, 140); //绘制title
            con.drawImage(imgs.play_btn, 0, 0, 116, 70, 25, 340, 116, 70); //绘制开始按钮
            con.drawImage(imgs.button_score, 151, 340); //绘制得分按钮
            con.drawImage(imgs.button_rate, 110, 280); //绘制rate
            con.drawImage(imgs.brand_copyright, 81, 420);

            // 绘制会飞的鸟
            objs.bird0.updateForStart(dt);
            objs.bird0.drawForStart();
            if (isStart) {
                requestAnimationFrame(run);
            }
        }
        requestAnimationFrame(run);

        // 给开始按钮添加监听事件
        myCanvas.addEventListener("click", function (e) {
            e = e || window.event;
            var x = e.offsetX;
            var y = e.offsetY;
            if (x >= 23 && x <= 135 && y >= 340 && y <= 405) {
                isStart = false;
                // 跳转到游戏页面
            }
        }, false);
    }
};