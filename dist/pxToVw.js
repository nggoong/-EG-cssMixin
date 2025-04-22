export var pxToVw = function (px, base) {
    if (base === void 0) { base = 360; }
    var vw = (px / base) * 100;
    var rounded = Math.round(vw * 100) / 100;
    return "".concat(rounded, "vw");
};
