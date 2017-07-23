export function group(...rest) {
  let grouped: any[] = [].concat.apply([], rest);
  return grouped;
};
