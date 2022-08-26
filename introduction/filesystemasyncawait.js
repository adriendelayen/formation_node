const fs = require('fs').promises;
const path = require('path');
require('colors');

const pathfile = path.join(__dirname, 'assets', 'content', 'asyncawait.txt');
const content = 'Hello World\r\n';

// IIFE (Immediately Invoked Fuction Expression)

(async () => {
    await fs.mkdir(path.dirname(pathfile), {recursive: true});
    console.log('Les répertoires ont bien été créés'.blue);

    await fs.writeFile(pathfile, content, {flag: 'a'});
    console.log('Ecriture terminée.'.bgBlack.green);

    const result = await fs.readFile(pathfile);
    console.log(`${result}`);   
})();