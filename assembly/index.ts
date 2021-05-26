// The entry file of your WebAssembly module.
export function minusOne(n: i32): i32 {
  return n - 1;
}

export function weirdSquare (n: i32): i32 {
  if (n === 2) return n * 2;
  else if (n === 3) return n * 3;
  else return n * n;
}
