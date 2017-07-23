/* Arrays & Objects */
import { all } from "./util/js/all.js";
import { chunk } from "./util/js/chunk.js";
import { distill } from "./util/js/distill.js";
import { group } from "./util/js/group.js";
import { drop } from "./util/js/drop.js";
import { lop } from "./util/js/lop.js";
import { fill } from "./util/js/fill.js";
import { flatten } from "./util/js/flatten.js";
import { pair } from "./util/js/pair.js";
import { first } from "./util/js/first.js";
import { last } from "./util/js/last.js";
import { lose } from "./util/js/lose.js";
import { loseTop } from "./util/js/loseTop.js";
import { conjoin } from "./util/js/conjoin.js";
import { nth } from "./util/js/nth.js";

class Cognite {
  constructor(data) {
    this.datatype = data;
  }
}

Cognite.prototype.all = all;
Cognite.prototype.chunk = chunk;
Cognite.prototype.distill = distill;
Cognite.prototype.group = group;
Cognite.prototype.drop = drop;
Cognite.prototype.lop = lop;
Cognite.prototype.fill = fill;
Cognite.prototype.flatten = flatten;
Cognite.prototype.pair = pair;
Cognite.prototype.first = first;
Cognite.prototype.last = last;
Cognite.prototype.lose = lose;
Cognite.prototype.loseTop = loseTop;
Cognite.prototype.conjoin = conjoin;
Cognite.prototype.nth = nth;

const x = new Cognite([0, 1, 2, 3, 3, 3, 4, 5]);

document.addEventListener("click", function() {
  alert(JSON.stringify(x.nth(1)));
});
