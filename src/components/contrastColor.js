"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * get contrast color in monochrome
 * @param {Array<number>} rgb - rgb channels, 0~255
 * @param {number} maxContrast 128~255
 * @returns {Array<number>}
 */
function getContrastColor(_a, maxContrast) {
    var r = _a[0], g = _a[1], b = _a[2];
    if (maxContrast === void 0) { maxContrast = 192; }
    var minContrast = 128;
    var y = Math.round(0.299 * r + 0.587 * g + 0.114 * b); // luma
    var oy = 255 - y; // opposite
    var dy = oy - y; // delta
    if (Math.abs(dy) > maxContrast) {
        dy = Math.sign(dy) * maxContrast;
        oy = y + dy;
    }
    else if (Math.abs(dy) < minContrast) {
        dy = Math.sign(dy) * minContrast;
        oy = y + dy;
    }
    console.log("".concat([oy, oy, oy]));
    return [oy, oy, oy];
}
getContrastColor([2, 3, 21], 255);
