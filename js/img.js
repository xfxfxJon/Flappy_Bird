// 资源加载
function load(imgs, callback) {
    var imgObjs = {};
    var count = 0;
    for (var i = 0; i < imgs.length; i++) {
        var newImgObj = new Image();
        newImgObj.src = imgs[i].src;
        imgObjs[imgs[i].name] = newImgObj;
        imgObjs[imgs[i].name].onload = function () {
            count++;
            if (count == imgs.length) {
                callback(imgObjs);
            }
        };
    }
}