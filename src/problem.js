import * as utils from './utils';
import Range from './range';

export default class Problem {
  constructor(json) {
    this.name = json.name;
    this.result = new Range(json.result.min, json.result.max);

    this.operands = [];
    for (let i = 0; i < json.operands.length; i += 1) {
      this.operands.push(new Range(json.operands[i].min, json.operands[i].max));
    }

    this.operators = [];
    for (let i = 0; i < json.operators.length; i += 1) {
      const opts = [];
      for (let j = 0; j < json.operators[i].allowed.length; j += 1) {
        opts.push(json.operators[i].allowed[j]);
      }
      this.operators.push(opts);
    }
  }

  randomToString() {
    return `To be supported.`;
  }

  random() {
    for (i = 0; i <= this.operands.length; i += 2) {
      let g1 = this.operands[i].next.value;
      let g2 = this.operands[i + 1].next.value;

      let result = 0;
      switch (this.operators[i]) {
        case '+':
          result = g1 + g2;
          break;
        case '-':
          result = g1 - g2;
        case 'x':
          result = g1 * g2;
        case '÷':
          result = g1 / g2;
      }
    }
    for (let operand of this.operands) {
      console.log(value);
    }
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
