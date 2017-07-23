"use strict";
exports.__esModule = true;
function fill(value, start, deleteCount) {
    var _this = this;
    if (start && deleteCount !== undefined) {
        var i = void 0;
        for (i = start + 1; i < deleteCount; i++) {
            this.datatype[i] = value;
        }
        return this.datatype;
    }
    else {
        this.datatype.forEach(function (el, id) {
            _this.datatype[id] = value;
        });
        return this.datatype;
    }
}
exports.fill = fill;
