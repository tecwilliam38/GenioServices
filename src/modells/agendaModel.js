const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const agendaSchema = new Schema({
    id: ObjectId,
    servico: String,
    barber: String,
    client: String,
    status: String,
    msg: String,    
})

const agendaModel = mongoose.model("cadastroAgenda", agendaSchema)
module.exports = agendaModel;