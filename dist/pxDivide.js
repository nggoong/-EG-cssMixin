export var pxDivide = function (px, divisor) {
    if (divisor === void 0) { divisor = 3; }
    return "".concat(Math.round(px / divisor), "px");
};
