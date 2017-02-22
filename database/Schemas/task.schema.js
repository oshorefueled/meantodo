var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var taskSchema = new Schema({
    "title":String,
    "description":String,
    "created_at":Date,
    "updated_at":Date
});



module.exports = mongoose.model('todos', taskSchema);
