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

app.post('/logs', (req,res) =>{
    const {nome} = req.body;
    if (!nome) {
        return res.status(400).json({error: "Obrigatorio Nome do aluno"});
    } 
    const id = registrarLog(nome);
    return res.status(201).json({id,logMensagem: "Log registrado :D"})
});

//rota para buscar log por ID
app.get('/logs/:id', (req, res) => {
  const { id } = req.params;

  try {
    const conteudo = fs.readFileSync('logs.txt', 'utf-8');
    const linhas = conteudo.split('\n');
    const linhaEncontrada = linhas.find(linha => linha.startsWith(id));

    if (linhaEncontrada) {
      return res.status(200).json({ log: linhaEncontrada });
    } else {
      return res.status(404).json({ erro: 'Log não encontrado.' });
    }
  } catch (err) {
    return res.status(500).json({ erro: 'Erro ao ler o arquivo de logs.' });
  }
});

const PORT = 8000;
//Servidor iniciando
app.listen(PORT, () => {
    console.log("Servidor ta rodando na porta 8000 ")
})

