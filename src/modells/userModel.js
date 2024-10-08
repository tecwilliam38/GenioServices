const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const userSchema = new Schema({
    id: ObjectId,
    user: String,
    company: String,
    phone: String,
    ceo: String,
    email: String,
    skill: String,
    passWord: String
})

const UserModel = mongoose.model("cadastroUser", userSchema)
module.exports = UserModel;