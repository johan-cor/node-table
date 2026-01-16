const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
// const argv = yargs(hideBin(process.argv)).argv;
const argv = yargs(hideBin(process.argv))
    .option('b',{
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('l',{
        alias: 'listar',
        type: 'boolean',
        demandOption: false,
        default: false,
        describe: 'Muestra la tabla en la consola'
    })
    .option('h',{
        alias: 'hasta',
        type: 'number',
        demandOption: false,
        default: 10,
        describe: 'Es el limite de la tabla de multiplicar'
    })
    .check((argv,options) => {
        if(isNaN(argv.base)){
            throw new Error('La base debe ser un numero');
        }
        if(typeof argv.l !== 'boolean'){
            throw new Error('La base debe ser un numero');
        }
        if(isNaN(argv.hasta)){
            throw new Error('El hasta debe ser un numero');
        }
        return true;
    })
    .argv;



    module.exports = {
        argv
    }