const argv = require('yargs')
    .command('crear', 'Genera una nueva tarea por hacer', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripción de la tarea por hacer'
        }
    })
    .command('actualizar', 'Actualiza el estado de la tarea por hacer', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripción de la tarea por hacer'
        },
        completado: {
            alias: 'c',
            default: true,
            desc: 'Marco como completado o pendiente la tarea'

        }
    })
    .help()
    .argv;

module.exports = {
    argv
}