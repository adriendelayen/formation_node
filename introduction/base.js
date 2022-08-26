// Pour executer un fichier avec NodeJS
// node path/to/file.js

// Consol log sur JavaScript

console.log('Hello World');

const number = 10;

console.log('Hello', 'World', number);

// Consol log sur Node JS

console.log('La valeur de number est %d', number);

console.log(`La valeur de number est ${number}`);

// __filename (Chemin vers le fichier)
// __dirname (Chemin vers le répertoire)

console.log(`__filename: ${__filename}`);
console.log(`__dirname: ${__dirname}`);



const timer = 1000;
setTimeout( () => {
    console.log(`Je suis executé après ${timer} ms`);
}, timer );

console.log(`Fin de ma page`);




