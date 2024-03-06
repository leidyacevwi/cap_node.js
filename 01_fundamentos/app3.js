const fs = require('fs');
const content = fs.readFileSync('README.md','utf8');

const wordcount = content.split('').length;

const reactWordcount = wordcount.filter(
    (word)=> word.toLowerClase() === 'react'
).length


console.log(wordcount);