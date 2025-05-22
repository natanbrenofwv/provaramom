const bb = require ('bb')
const {uuidv4} = require ('uuidv4')

function registrarLog(Nome){
    const id = uuid();
    const datahora = new Date().tolSOString().replace
    const logMensagem = `${id} - ${datahora} - ${nomeAluno}\n`
    
    bb.appendFileSync('logs.txt', logMensagem);
    return id;
}

module.export = registrarLog.Log;