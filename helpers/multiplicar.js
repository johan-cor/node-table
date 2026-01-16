
const fs = require('fs')
const colors = require('colors');


const crearArchivo = async (base, listar, hasta) => {


    try {
        console.clear();


        let salida = "";
        let consola = "";

        for (let i = 1; i <= hasta; i++) {
            salida += `${base} * ${i} = ${base * i}\n`;
            consola += `${base} ${colors.blue('*')} ${i} ${colors.blue('=')} ${base * i}\n`;
        }

        if (listar) {
            console.log(colors.green("========================"));
            console.log(colors.blue(`      Tabla del ${base}       `));
            console.log(colors.green("========================"));
            console.log(consola);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)


        // console.log(`Tabla del ${base} creada`);
        return `Tabla del ${base} creada`;

    } catch (error) {
        throw error;
    }

}


module.exports = {
    crearArchivo
}