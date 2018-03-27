import * as utils from './utils';

class Operator {
  constructor(opt) {
    this.opt = opt;
  }

  toString() {
    switch (this.opt) {
      case '+':
      case '-':
        return this.opt;
      case '*':
        return 'x';
      case '/':
        return '÷';
      default:
        return `invalid operator ${this.opt}`;
    }
  }
}

export default class Problem {
  constructor(name, numOfOperands, allowdOperators, min, max) {
    this.name = name;
    this.numOfOperands = numOfOperands;
    this.allowdOperators = allowdOperators;
    this.min = min;
    this.max = max;
  }

  toString() {
    return `${this.operands[0]} ${this.operators[0]} ${this.operands[1]} = ______`;
  }

  random() {
    const randomOperands = [];
    const randomOperators = [];

    // generate random operators in allowdOperators
    let count = 0;
    while (count < this.numOfOperands - 1) {
      const r = this.allowdOperators[utils.randomInRange(0, this.numOfOperands - 1)];
      randomOperators.push(r);
      count += 1;
    }

    // generate random operators
    randomOperands.push(utils.randomInRange(this.min + 1, this.max - 1));
  }
}
