/*! rem 2018-12-29 */
!function (a, b) {
  var c = a.documentElement, d = "orientationchange" in window ? "orientationchange" : "resize", e = function () {
    var a = c.clientWidth;
    a && (a > 1024 ? c.style.fontSize = 100 * (a / 960) + "px" : c.style.fontSize = 300 * (a / 960) + "px", document.getElementsByTagName("body")[0].style.display = "block")
  };
  a.addEventListener && (e(), b.addEventListener(d, e, !1), a.addEventListener("DOMContentLoaded", e, !1))
}(document, window);