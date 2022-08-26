const fs = require('fs');
const path = require('path');
require('colors');

const pathfile = path.join(__dirname, 'assets', 'content', 'hello.txt');
const content = 'Hello World\r\n';


// Créer les répertoires 'assets' et 'content'
// Le {recusrive : true} va faire que la fonction va se répeter jusqu'à ce que le chemin soit créé complétement

fs.mkdir(path.dirname(pathfile), {recursive: true}, (err) => {
    if(err) {
        throw err;
    }

    console.log('Les répertoires ont bien été créés'.blue);

    fs.writeFile(pathfile, content, {flag: 'a'}, (err) => {
        if(err) throw err;

        console.log('Ecriture terminée.'.bgBlack.green);
    })

    fs.readFile(pathfile, (err, result) => {
        if(err) throw err;

        //console.log(result.toString());
        console.log(`${result}`);
    });
});



