const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};
const completado = {
    alias: 'c',
    default: true,
    desc: 'Marco como completado o pendiente la tarea'
};

const argv = require('yargs')
    .command('crear', 'Genera una nueva tarea por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado de la tarea por hacer', {
        descripcion,
        completado
    })
    .command('borrar', 'Eliminar una tarea por hacer', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}