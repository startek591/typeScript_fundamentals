function multiply(a: number, b: number, c?: number) {
  if (typeof c !== 'undefined') {
    return a * b * c;
  }
  return a * b;
}
