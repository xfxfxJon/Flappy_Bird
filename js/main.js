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
            name: "text_ready",
            src: "img/text_ready.png"
        },
        {
            name: "text_game_over",
            src: "img/text_game_over.png"
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
        {
            name: "tutorial",
            src: "img/tutorial.png"
        },
        // 分数
        {
            name: "048",
            src: "img/font_048.png"
        },
        {
            name: "049",
            src: "img/font_049.png"
        },
        {
            name: "050",
            src: "img/font_050.png"
        },
        {
            name: "051",
            src: "img/font_051.png"
        },
        {
            name: "052",
            src: "img/font_052.png"
        },
        {
            name: "053",
            src: "img/font_053.png"
        },
        {
            name: "054",
            src: "img/font_054.png"
        },
        {
            name: "055",
            src: "img/font_055.png"
        },
        {
            name: "056",
            src: "img/font_056.png"
        },
        {
            name: "057",
            src: "img/font_057.png"
        },
        {
            name: "pipe_down",
            src: "img/pipe_down.png"
        },
        {
            name: "pipe_up",
            src: "img/pipe_up.png"
        },

    ];

    // 加载开始
    load(imgs, function (imgs) {
        if (imgs) {
            // 配置参数
            var speed = -0.1;
            // 创建对象
            var objs = {};
            objs.land1 = new Land(imgs.land, 336 * 0, speed, con); //land1
            objs.land2 = new Land(imgs.land, 336 * 1, speed, con); //land2
            objs.bird0 = new Bird(imgs.bird0_0, imgs.bird0_1, imgs.bird0_2, 125, 200, 0.0003, 0.0006, 0, con);
            objs.sky1 = new Sky(imgs.night, speed, 288 * 0, con);
            objs.sky2 = new Sky(imgs.night, speed, 288 * 1, con);
            objs.pipe1 = new Pipe(imgs.pipe_up, imgs.pipe_down, 400, speed, con);
            objs.pipe2 = new Pipe(imgs.pipe_up, imgs.pipe_down, 400 + 146, speed, con);
            objs.pipe3 = new Pipe(imgs.pipe_up, imgs.pipe_down, 400 + 146 * 2, speed, con);

            // 开始页面
            drawStartPage(imgs, objs);
        }
    });

    // 分数在中间显示
    function drawScore(imgs, score) {
        score = score.toString();
        var width = 0;
        if (score.length == 1) {
            con.drawImage(imgs["0" + score.charCodeAt(0)], 132, 80);
        }
        // for(var i = 0; i< i<score.length; i++){

        // }
    }

    // 开始页面
    function drawStartPage(imgs, objs) {
        var startTime = Date.now();
        var isStart = true;

        function run() {
            var now = Date.now();
            dt = now - startTime;
            startTime = now;
            con.drawImage(imgs.night, 0, 0); //绘制开始页面的蓝天

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
        myCanvas.addEventListener("click", paly = function (e) {
            e = e || window.event;
            var x = e.offsetX;
            var y = e.offsetY;
            if (x >= 23 && x <= 135 && y >= 340 && y <= 405) {
                isStart = false;
                // alert(1);
                myCanvas.removeEventListener("click", paly, false);
                // 跳转到游戏准备页面
                drawReadyPage(imgs, objs);
            }
        }, false);
    }

    // 绘制游戏准备页面
    function drawReadyPage(imgs, objs) {
        objs.bird0 = new Bird(imgs.bird0_0, imgs.bird0_1, imgs.bird0_2, 75, 220, 0.0003, 0.0006, 0, con);
        var startTime = Date.now();
        var isStart = true;

        function run() {
            var now = Date.now();
            dt = now - startTime;
            startTime = now;
            con.drawImage(imgs.night, 0, 0); //绘制开始页面的蓝天

            // 绘制动态的land
            objs.land1.setCount(2);
            objs.land1.update(dt);
            objs.land1.draw();
            objs.land2.update(dt);
            objs.land2.draw();

            drawScore(imgs, 0); //绘制分数
            con.drawImage(imgs.text_ready, 50, 150); //绘制游戏ready
            con.drawImage(imgs.tutorial, 87, 220); //绘制游戏提示


            // 绘制会飞的鸟
            objs.bird0.updateForStart(dt);
            objs.bird0.drawForStart();
            if (isStart) {
                requestAnimationFrame(run);
            }
        }
        requestAnimationFrame(run);

        // 给开始按钮添加监听事件
        myCanvas.addEventListener("click", paly = function (e) {
            isStart = false;
            // alert(1);
            myCanvas.removeEventListener("click", paly, false);
            // 跳转到游戏准备页面
            drawGame(imgs, objs);
        }, false);
    }

    // 绘制游戏中界面
    function drawGame(imgs, objs) {
        var startTime = Date.now();
        var isStart = true;

        function run() {
            var now = Date.now();
            dt = now - startTime;
            startTime = now;

            // 绘制动态的蓝天
            objs.sky1.setCount(2);
            objs.sky1.update(dt);
            objs.sky1.draw();
            objs.sky2.update(dt);
            objs.sky2.draw();

            // 绘制动态的land
            objs.land1.setCount(2);
            objs.land1.update(dt);
            objs.land1.draw();
            objs.land2.update(dt);
            objs.land2.draw();


            // 绘制柱子
            objs.pipe1.setCount(3, 120);
            objs.pipe1.update(dt);
            objs.pipe1.draw();
            objs.pipe2.update(dt);
            objs.pipe2.draw();
            objs.pipe3.update(dt);
            objs.pipe3.draw();

            // 绘制会飞的鸟
            objs.bird0.update(dt);
            objs.bird0.draw();

            drawScore(imgs, 0); //绘制分数


            if (isStart) {
                requestAnimationFrame(run);
            }
        }
        requestAnimationFrame(run);

        // 给开始按钮添加监听事件
        myCanvas.addEventListener("click", paly = function (e) {
            objs.bird0.speed = -0.24;
        }, false);
    }


};