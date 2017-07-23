"use strict";
exports.__esModule = true;
function chunk(size) {
    var i;
    var chunked = [];
    for (i = 0; i < this.datatype.length; i += size) {
        chunked.push(this.datatype.slice(i, i + size));
    }
    return chunked;
}
exports.chunk = chunk;
