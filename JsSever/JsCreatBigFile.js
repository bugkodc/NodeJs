const { writeFileSync, appendFileSync } = require('fs');

for (let i = 0; i < 10000; i++) {
    appendFileSync('bigfile.txt', `hello world ${i}\n`, { encoding: 'utf8' });
}
