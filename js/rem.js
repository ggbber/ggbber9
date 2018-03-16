// rem.js 移动端页面适配代码
!function (n) {
    var e = n.document,
        t = e.documentElement,
        i = 720,
        d = i / 100,
        o = "orientationchange" in n ? "orientationchange" : "resize",
        a = function () {
            var n = t.clientWidth || 320;
            n > 720 && (n = 720);
            t.style.fontSize = n / d + "px"
        };
    e.addEventListener && (n.addEventListener(o, a, !1), e.addEventListener("DOMContentLoaded", a, !1))
}(window);
/*
!function (n) {
    var e = n.document;
    var t = e.documentElement;
    var i = 720;
    var d = i / 100;
    if ('orientationchange' in n) {
        var o = 'orientationchange';
    } else {
        var o = 'resize';
    }
    var a = function () {
        var n = t.clientWidth || 320;
        if (n > 720) {
            n = 720;
        }
        t.style.fontSize = n / d + 'px';
    };

    if (e.addEventListener) {
        n.addEventListener(o, a, false);
        e.addEventListener("DOMContentLoaded", a, false);
    } else {
        a();
    }
}(window);*/

// window.document.documentElement.style.fontSize = '50px';

/*

"use strict";

// rem.js 移动端页面适配代码
!function (n) {
    var e = n.document,
        t = e.documentElement,
        i = 720,
        d = i / 100,
        o = "orientationchange" in n ? "orientationchange" : "resize",
        a = function a() {
            var n = t.clientWidth || 320;
            n > 720 && (n = 720);
            t.style.fontSize = n / d + "px";
        };

     e.addEventListener && (n.addEventListener(o, a, !1), e.addEventListener("DOMContentLoaded", a, !1));
}(window);*/

function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r !== null) return decodeURI(r[2]);
}
