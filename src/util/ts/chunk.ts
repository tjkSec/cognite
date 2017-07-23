export function chunk(size:number) {
  let i : number;
  let chunked : any[] = [];
  for(i=0;i < this.datatype.length; i+=size) {
    chunked.push(this.datatype.slice(i, i + size));
  }
  return chunked;
}
