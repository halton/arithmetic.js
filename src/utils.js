export function randomInRange(min, max) {
  return Math.floor((Math.random() * ((max - min) + 1)) + min);
}

export function genAddWithTwoOperands(rangeOfOpt, rangeOfTotal) {
  const addend1 = randomInRange(rangeOfOpt.min, rangeOfOpt.max);
  let total = 0;
  let addend2 = 0;
  if (rangeOfTotal.min > rangeOfOpt.max) {
    addend2 = randomInRange(Math.abs(rangeOfTotal.min - addend1), rangeOfOpt.max);
  } else {
    total = randomInRange(addend1, rangeOfTotal.max);
    addend2 = total - addend1;
  }

  return `${addend1} + ${addend2} = ____`;
}

export function genSubWithTwoOperands(rangeOfOpt, rangeOfTotal) {
  const total = randomInRange(rangeOfTotal.min, rangeOfTotal.max);
  const subtrahend = randomInRange(rangeOfOpt.min, total);

  return `${total} - ${subtrahend} = ____`;
}

export function genMultiWithTwoOperands(rangeOfOpt) {
  const mult1 = randomInRange(rangeOfOpt.min, rangeOfOpt.max);
  const mult2 = randomInRange(rangeOfOpt.min, rangeOfOpt.max);

  return `${mult1} x ${mult2} = ____`;
}

export function genDivision(needRemain) {
  // Get a dividend in range [20, 90]
  const mult1 = randomInRange(2, 9);
  const mult2 = randomInRange(2, 9);
  const remain = needRemain ? randomInRange(1, mult2 - 1) : 0;
  const total = (mult1 * mult2) + remain;

  return `${total} ÷ ${mult2} = ____`;
}

export function makeExamGenerator(problem, min, max) {
  return (numOfExcercies) => {
    const result = [];
    let c = 0;
    while (c < numOfExcercies) {
      result.push(problem(min, max));
      c += 1;
    }
    return result;
  };
}
