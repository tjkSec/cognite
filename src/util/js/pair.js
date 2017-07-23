"use strict";
exports.__esModule = true;
function pair() {
    var newObj = {};
    for (var i = 0; i < this.datatype.length; i++) {
        newObj[String(this.datatype[i][0])] = String(this.datatype[i][1]);
    }
    ;
    return newObj;
}
exports.pair = pair;
