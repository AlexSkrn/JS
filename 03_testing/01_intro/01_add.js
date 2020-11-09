function add(x, y) {
  return x + y;
}

function add2(x, y) {
  if (typeof(x) && typeof(y) !== 'number') {
    throw new Error('Params must be a number.');
  }

  result = x + y;

  if (parseInt(result) !== result) {          // 0.1 + 0.2 = 0.3
    result = parseFloat(result.toFixed(1));
  }

  return result;
}

expect(add2(2, 3)).toBe(5);

expect(add2(2, 'test')).toThrow();

expect(add2(0.1, 0.2)).toBe(0.3);
