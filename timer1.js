//Personal solution
// let intervals = process.argv.slice(2);
// function timer(intervals) {
//   if (intervals.length <= 0) {
//     return;
//   }
//   for (let i = 0; i < intervals.length; i++) {
//     if (i > 0 || typeof intervals[i] === "number") {
//       setTimeout(() => process.stdout.write("\x07"), intervals[i] * 1000);
//     } else {
//       continue;
//     }
//   }
// }
// timer(intervals);
//Pair programming with kevin
let consoleArguments = process.argv;
function timer(consoleArguments) {
  if (consoleArguments.length > 2) {
    let args = consoleArguments.slice(2);
    for (let i = 0; i < args.length; i++) {
      if (args[i] * 0 === 0) {
        if (args[i] > 0) {
          setTimeout(() => {
            console.log(`Function call after ${args[i] * 1000} seconds`);
            process.stdout.write("\x07");
          }, args[i] * 1000);
        } else {
          console.error(
            `Ignored argument ${args[i]} since a negative argument`
          );
        }
      } else {
        console.error(`Ignored argument ${args[i]} since not a number`);
      }
    }
  } else {
    console.error("Need to provide at least one argument");
  }
}
timer(consoleArguments);
