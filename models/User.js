const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    userName: {type: String, required: true, unique: true},
    fullName: {type: String, required: true},
    position: {type: String, required: true},
    shift: {type: String},
    userStatus: {type: String},
    work: {type: String},
    workType: {type: String},
    time: {type: String},
    isOnline: {type: Boolean},
    isCoordinator: {type: String},
})

module.exports = model('User', schema)