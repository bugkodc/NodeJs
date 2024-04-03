const fs = require('fs');
fs.readFile('first.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Lỗi khi đọc tệp:', err);
        return;
    }
    console.log('Nội dung của tệp "first.txt":', data);
});
const contentToWrite = 'Hello, world!';
fs.writeFile('output.txt', contentToWrite, { encoding: 'utf8' }, (err) => {
    if (err) {
        console.error('Lỗi khi ghi tệp:', err);
        return;
    }
    console.log('Đã ghi dữ liệu vào tệp "output.txt"');
});
