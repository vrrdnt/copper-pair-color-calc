const colorCode = {
  tip_table: [
    'white', // 1-5
    'red', // 6-10
    'black', // 11-15
    'yellow', // 16-20
    'violet'
  ], // 21-25
  ring_table: [
    'blue', // 1, 6
    'orange', // 2, 7
    'green', // 3, 8
    'brown', // 4, 9
    'slate'
  ] // 5, 0
}

class PairObj {
  constructor(pair_num) {
    this.pair_num = pair_num;

    if (this.pair_num <= 600) {
        let quotient = Math.floor(this.pair_num / 25)
        let remainder = this.pair_num % 25
        if (remainder) { quotient++ }
        this.binder = quotient;
        this.pair = remainder;
    } else {
        let quotient = Math.floor(this.pair_num / 600);
        let remainder = this.pair_num % 600;
        if (remainder) { quotient++ }
        this.super_group = quotient;
        quotient = Math.floor(remainder / 25);
        remainder = this.pair_num % 25
        if (remainder) { quotient++ }
        this.binder = quotient;
        this.pair = remainder;
    }

    let colorMap = new Map();
    let counter = 1;
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        colorMap.set(counter, `${colorCode.tip_table[i]} ${colorCode.ring_table[j]}`)
        counter++
      }
    }

    this.colorMap = colorMap;
  }

  getSuperGroup() {
    return colorCode.tip_table[this.super_group - 1];
  }

  getBinder() {
    return this.colorMap.get(this.binder)
  }

  getPair() {
    return this.colorMap.get(this.pair);
  }
}

let test = new PairObj(601);
console.log(`Super Group: ${test.getSuperGroup()}\n
						 Binder: ${test.getBinder()}\n
             Pair: ${test.getPair()}`)
