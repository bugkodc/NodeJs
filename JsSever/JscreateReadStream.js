const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
    const fileStream = fs.createReadStream('bigfile.txt', { encoding: 'utf8' });
    fileStream.on('open', () => {
        fileStream.pipe(res);
    });
    fileStream.on('error', (err) => {
        res.end(err.message);
    });
});
const PORT = 5000;
server.listen(PORT, () => {
    console.log(`err sever ${PORT}`);
});
