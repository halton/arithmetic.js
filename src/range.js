import { randomInRange } from './utils'

export default class Range {
  constructor(min, max) {
    this.min = min;
    this.max = max;
  }

  between(num) {
    return ((num >= this.min) && (num <= this.max));
  }

  toString() {
    return `[${this.min} ${this.max}]`;
  }

  * random() {
    let value = 0;
    while(true) {
      yield randomInRange(this.min, this.max);
    }
  }
}
