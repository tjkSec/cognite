export function fill(value: any, start: number, deleteCount: number) {
  if (start && deleteCount !== undefined) {
    let i: number;
    for (i = start + 1; i < deleteCount; i++) {
      this.datatype[i] = value;
    }
    return this.datatype;
  } else {
    this.datatype.forEach((el, id) => {
      this.datatype[id] = value;
    });
    return this.datatype;
  }
}
