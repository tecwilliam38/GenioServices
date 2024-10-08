const mongoose = require("mongoose");

// const url = "mongodb+srv://william:QygxKiOa2hJCDotV@cluster0.z2aoz22.mongodb.net/cadastroUser?retryWrites=true&w=majority"
const url = "mongodb+srv://william:QygxKiOa2hJCDotV@cluster0.z2aoz22.mongodb.net/cadastroPc?retryWrites=true&w=majority"

// const uri = "mongodb+srv://william:uL4Hn7ciZlQyRXF4@cluster0.rg3hyyd.mongodb.net/cadastroPC?retryWrites=true&w=majority"

const DEFAULT_URL = "mongodb+srv://william:MpwiXT4ZFPjkejCn@cluster0.z2aoz22.mongodb.net/barber?retryWrites=true&w=majority&appName=Cluster0"


const connection = async()=>{
  console.log("Esperando para conectar com o Mongoose");
  mongoose.set("strictQuery", true);
  try {        
  await mongoose.connect(
     DEFAULT_URL
     )          
      console.log("Conectado com o mongoose.");
     
} catch (error) {
  console.log(`Erro: ${error}`);
}
}

module.exports = connection;