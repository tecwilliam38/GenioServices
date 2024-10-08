const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const pcSchema = new Schema({
    id: ObjectId,
    asset: String,
    serviceTag: String,
    user: String,
    status: String,
    garantia: String,
    reservado: String,
    msg: String,    
    disp: String
})

const pcModel = mongoose.model("cadastroPc", pcSchema)
module.exports = pcModel;