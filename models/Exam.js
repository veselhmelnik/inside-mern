const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    user: {type: Object},
    project: {type: String},
    last: {type: Boolean},
    class: {type: Boolean}
})
module.exports = model('Exam', schema)