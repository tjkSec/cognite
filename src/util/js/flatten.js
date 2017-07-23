"use strict";
exports.__esModule = true;
function flattener(arr) {
    var flat = [];
    var i;
    for (i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            flat = flat.concat(flattener(arr[i]));
        }
        else {
            flat.push(arr[i]);
        }
    }
    return flat;
}
function flatten() {
    return flattener(this.datatype);
}
exports.flatten = flatten;
