const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

stdin.on('data', (key) => {
  const numbers = ['1' , '2', '3', '4', '5', '6', '7', '8', '9'];
  
  if (numbers.includes(key)) {
    setTimeout(() => {
      process.stdout.write('\x07');
      process.stdout.write('.');
    }, Number(key) * 1000);
    console.log(`setting timer for ${key} seconds...`);
  }
  if (key === `b`) {
    process.stdout.write('\x07');
    process.stdout.write('.');
  }

  if (key === '\u0003') {
    console.log('\nThanks for using me, ciao!');
    process.exit();
  }
});