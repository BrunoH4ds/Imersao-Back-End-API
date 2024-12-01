import 'dotenv/config';
import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/dbConfig.js"

// Conecta ao banco de dados utilizando a string de conexão fornecida como variável de ambiente
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);
const dataBaseNome = "imersao-back-end";
const postColecao = "posts";

// função para pegar uma coleção
function getColecao(dbNome, colecaoNome){
    const db = conexao.db(dbNome); 
    return db.collection(colecaoNome); 
}

// Função assíncrona para buscar todos os posts do banco de dados
export async function getTodosPosts() {
    const colecao = getColecao(dataBaseNome, postColecao);
    // Retorna um array com todos os documentos da coleção
    return colecao.find().toArray();
}

// função para buscar post por ID
export async function buscarPostPorID(id){
    const colecao = getColecao(dataBaseNome, postColecao);
    const objectId = new ObjectId(id);
    return colecao.findOne({ _id: objectId }); 
};

export async function criarPost(novoPost) {
    const colecao = getColecao(dataBaseNome, postColecao);
    return colecao.insertOne(novoPost);
}

//função para editar um post
export async function editarPost(id, novoPost) {
    const colecao = getColecao(dataBaseNome, postColecao);
    const objectId = new ObjectId(id);
    return colecao.updateOne({_id: objectId}, {$set: novoPost});
};

//função para apagar um psot
export async function apagarPost(id) {
    const colecao = getColecao(dataBaseNome, postColecao);
    const objectId = new ObjectId(id);
    return colecao.deleteOne({_id: objectId});
}