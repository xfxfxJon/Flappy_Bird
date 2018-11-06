window.onload = function () {
    // 初始化

    // 图片初始化
    var imgs = [{
            name: "bg_day",
            src: "img/bg_day.png"
        },
        {
            name: "bg_night",
            src: "img/bg_night.png"
        },
        {
            name: "bird0_0",
            src: "img/bird0_0.png"
        },
        {
            name: "play",
            src: "img/button_play.png"
        },
    ];


    load(imgs, function (flag) {
        if (flag) {
            // 生成开始页面
        }
    });
};