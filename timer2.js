//Personal Solution
// function timer2() {
//   const stdin = process.stdin;
//   stdin.setRawMode(true);
//   stdin.setEncoding("utf8");
//   stdin.on("data", key => {
//     if (key === "b") {
//       process.stdout.write("\x07");
//     } else if (key >= 1 && key <= 9) {
//       console.log(`Setting timer for ${key} seconds`);
//       setTimeout(() => process.stdout.write("\x07"), key * 1000);
//     } else if (key === "\u0003") {
//       console.log("Thanks for using me, ciao!");
//       process.exit();
//     } else {
//       console.log("Invalid value");
//     }
//   });
// }
// timer2();


//Pair programming with kevin
function setTimer(num) {
  let timeout = num * 1000;
  setTimeout(() => {
    console.log(`timeout after ${num} seconds`)
    process.stdout.write('\x07');
  }, timeout);
}
​
function timer() {
  const stdin = process.stdin;
  // don't worry about these next two lines of setup work.
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.on('data', (key) => {
    // \u0003 maps to ctrl+c input
    if (key === '\u0003') {
      process.exit();
    } else if (key * 0 !== 0) {
      console.error('not a number');
    } else {
      setTimer(key);
    }
  });
}​
timer();



