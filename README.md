# Notas: Multiplication Table CLI App

Este es un proyecto de consola interactivo construido con Node.js que genera tablas de multiplicar y las guarda en archivos de texto.

## Descripción
La aplicación permite generar la tabla de multiplicar de una base específica, con opciones para controlar el límite de la multiplicación y visualizar el resultado directamente en la consola con colores.

## Instalación
1. Clona el repositorio o descarga el código.
2. Ejecuta el siguiente comando para instalar las dependencias:
   ```bash
   npm install
   ```

## Uso
Para ejecutar la aplicación, utiliza el siguiente comando:

```bash
node app -b <base>
```

### Opciones (Flags)
La aplicación utiliza `yargs` para gestionar las opciones de línea de comandos:

| Opción | Alias | Tipo | Descripción | Defecto |
|---|---|---|---|---|
| `--base` | `-b` | `number` | **(Requerido)** La base de la tabla de multiplicar. | - |
| `--listar` | `-l` | `boolean` | Muestra la tabla en consola. | `false` |
| `--hasta` | `-h` | `number` | Límite hasta donde llegar la multiplicación. | `10` |

### Ejemplos

**Crear la tabla del 5:**
```bash
node app -b 5
```

**Crear la tabla del 5 y listarla en consola:**
```bash
node app -b 5 -l
```

**Crear la tabla del 5 hasta el 20:**
```bash
node app -b 5 -h 20
```

**Crear tabla, listar y definir límite:**
```bash
node app -b 8 -l -h 20
```

## Salida
* Los archivos generados se guardan en la carpeta `./salida/` con el nombre formato `tabla-<base>.txt`.
* Si se usa la opción `-l`, la salida en consola mostrará colores gracias a la librería `colors`.

## Dependencias
* [yargs](https://www.npmjs.com/package/yargs): Para el manejo de argumentos en consola.
* [colors](https://www.npmjs.com/package/colors): Para dar estilo y color a la salida en consola.
