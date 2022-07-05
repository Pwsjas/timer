const timer = (args) => {
  let time = 0;
  for (let value of args) {
    if (Number.isFinite(Number(value)) && value >= 0) {
      time = value * 1000;
      setTimeout(() => {
        process.stdout.write('\x07');
        process.stdout.write('.');
      }, time)
    }
  }
};

const args = process.argv.slice(2);
timer(args);