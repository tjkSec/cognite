export function lop(amount:number) {
  this.datatype.splice(-Math.abs(amount))
  return this.datatype;
}
