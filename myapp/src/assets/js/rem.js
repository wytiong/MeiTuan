// 自适应代码
(function (win) {
    var doc = win.document;
    var docEl = doc.documentElement;
    var tid;
    function refreshRem() {
        var width = docEl.getBoundingClientRect().width;
        var rem = width / 7.5;
        console.log(rem);
        docEl.style.fontSize =( rem /2-8)+ 'px';
    }
    win.addEventListener('resize', function () {
        clearTimeout(tid);
        tid = setTimeout(refreshRem, 10);
    }, false);
    win.addEventListener('pageshow', function (e) {
        if (e.persisted) {
            clearTimeout(tid);
            tid = setTimeout(refreshRem, 10);
        }
    }, false);
    refreshRem();
})(window);