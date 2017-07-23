export function drop(amount: number) {
  this.datatype.splice(0, amount);
  return this.datatype;
}
