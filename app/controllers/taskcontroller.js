/**
 * Created by osho on 2/22/17.
 */
var moment = require("moment");
var task = require("../models/task.model");

function saveTask(req, res){
    var title  = req.query.title ;
    var description = req.query.description;
    var created_at = moment();
    var updated_at = moment();

    try{
        var result = task.saveTask(title,description,created_at,updated_at);
        result.then(function (result) {
            res.json({"status":"success", "data":result});
        });
    } catch (err){
        console.log(err);
        res.json({"status":"error","data":"an error occured when saving"});
    }

}

function updateTask(req, res){
    //Todo
}

function deleteTask(req, res) {
    //Todo
}

module.exports = {
    saveTask:saveTask,
    updateTask:updateTask,
    deleteTask:deleteTask
};