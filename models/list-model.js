const { Schema, model } = require('mongoose');

const listSchema = new Schema({
    task : {
        type : String,
        trim : true
    }
}, {
    collection : 'List',
    timestamps : true
});

const List = model('List', listSchema);
module.exports = List;