export function getRandomArbitrary(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export function fibonaci(n: number): number {
  if (n == 0 || n == 1) {
    return 1;
  }
  return fibonaci(n - 1) + fibonaci(n - 2);
}
