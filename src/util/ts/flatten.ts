function flattener(arr) {
  var flat: any[] = [];
  var i: number;
  for (i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flat = flat.concat(flattener(arr[i]));
    } else {
      flat.push(arr[i]);
    }
  }
  return flat;
}

export function flatten() {
  return flattener(this.datatype);
}
