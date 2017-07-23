"use strict";
exports.__esModule = true;
function group() {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
    var grouped = [].concat.apply([], rest);
    return grouped;
}
exports.group = group;
;
