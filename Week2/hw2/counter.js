function mkCounter() {
  let count = 0; // free variables in closure
  return {
    getCount: function getCount() {
      return count;
    },
    increase: function increase(val) {
      count += val;
    },
    decrease: function decrease(val) {
      count -= val;
    },
  };
}

// let counter = mkCounter();
// console.log(counter.getCount());
// counter.increase(1);
// console.log(counter.getCount());
// counter.increase(12);
// console.log(counter.getCount());
// counter.increase(3);
// console.log(counter.getCount());
// counter.decrease(5);
// console.log(counter.getCount());
// counter.decrease(18);
// console.log(counter.getCount());
// counter.increase(7);
// console.log(counter.getCount());
// counter.decrease(4);
// console.log(counter.getCount());
