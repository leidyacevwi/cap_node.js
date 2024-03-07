const fs = require('fs');
const content = fs.readFileSync('README.md','utf8');

// const wordcount = content.split('').length;

// const reactWordcount = wordcount.filter(
//     (word)=> word.toLowerClase() === 'react'
// ).length


const wordcount = content.split(' ');

// const reactWordcount = wordcount.filter(
//     (word)=> word.toLowerCase().includes('react')
// ).length

const reactWordcount = content.match(/react/gi ?? []).length;

console.log(reactWordcount);