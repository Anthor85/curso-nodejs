const fs = require('fs');

const data = fs.readFileSync('./README.md', 'utf-8');
// console.log(data);

const newData = data.replace(/React/ig, 'Angular');
fs.writeFileSync('./README-Angular.md', newData);