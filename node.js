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

const express = require ('express');
const requireLog = require('./logs');
const app = express();
app.use(express.json());

app.post('./log' , (req,res) =>{
    const {nome} = req.body;
    if (!nome){
        return res.status(400).json( {error: "Precisa do nome do aluno"});
    }
})

const PORT = 8900

app.listen(PORT,  () => {
    console.log("Servidor esta rodando")
})