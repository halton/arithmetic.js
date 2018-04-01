export function randomInRange(min, max) {
  return Math.floor((Math.random() * ((max - min) + 1)) + min);
}

export function genAdd(min, max) {
  const addend1 = randomInRange(min, max);
  const addend2 = randomInRange(min, max - addend1);

  return {
    addend1,
    addend2,
  };
}

export function genSub(min, max) {
  const total = randomInRange(min, max);
  const subtrahend = randomInRange(min, total);

  return {
    total,
    subtrahend,
  };
}

export function genAddUnder100() {
  const add = genAdd(2, 99);
  return `${add.addend1} + ${add.addend2} = ____`;
}

export function genSubUnder100() {
  const add = genSub(2, 99);
  return `${add.total} - ${add.subtrahend} = ____`;
}

export function genDivisionWithRemain() {
  // Get a dividend in range [20, 90]
  const mult1 = randomInRange(2, 9);
  const mult2 = randomInRange(2, 9);
  const remain = randomInRange(1, mult2 - 1);
  const total = (mult1 * mult2) + remain;

  return `${total} ÷ ${mult2} = ____`;
}

export function makeExamGenerator(problem) {
  return (numOfExcercies) => {
    const result = [];
    let c = 0;
    while (c < numOfExcercies) {
      result.push(problem());
      c += 1;
    }
    return result;
  };
}
