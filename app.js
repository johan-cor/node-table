
const { crearArchivo } = require('./helpers/multiplicar')
const { argv } = require('./config/yargs')
const colors = require('colors');


console.log(argv);

crearArchivo(argv.b || argv.base, argv.l || argv.listar, argv.h || argv.hasta)
.then(nombreArchivo => console.log(nombreArchivo.rainbow))
.catch(err => console.log(err));

