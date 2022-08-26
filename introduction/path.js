// Sur NodeJS pour utiliser une fonction, nous devons la déclarer en variable au préalable

const path = require('path');

const file = './assets/content/hello.txt';

console.log(`file : ${file}`);

console.log(`dirname(): ${path.dirname(file)}`); // retourne le répertoire où est enregistré le fichier

console.log(`basename(): ${path.basename(file)}`); // retourne le nom du fichier

console.log(`extname(): ${path.extname(file)}`); // retourne l'extension du fichier

console.log(`Séparateur système: ${path.sep}`); // retourne le séparateur système (mais NodeJS le connaît)

const image = path.join('assets', 'images', 'image.png');

console.log(`Chemin vers mon image: ${image}`);

const absImage = path.join(__dirname, 'assets', 'images', 'image.png'); // retourne le chemin absolue de mon image

console.log(`Chemin absolu vers mon image: ${absImage}`);

