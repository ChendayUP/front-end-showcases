const promise1 = Promise.resolve(1);
const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'foo'));
const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 500, 'bar'));

const promises = [promise1, promise2, promise3];

Promise.allSettled(promises).
  then((results) => {
    console.log(JSON.stringify(results));
  });

// 输出:
// [{"status":"fulfilled","value":1},{"status":"rejected","reason":"foo"},{"status":"fulfilled","value":"bar"}]