export function pair() {
  var newObj:object = {};
  for(let i: number = 0; i < this.datatype.length; i++ ) {
    newObj[String(this.datatype[i][0])] = String(this.datatype[i][1]);
  };
  return newObj;
}
