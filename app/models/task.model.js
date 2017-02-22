var task = require('../../database/Schemas/task.schema');


module.exports = {

  saveTask: function (title, description, created_at,update_at) {
      var task_data = {
          "title":title,
          "description":description,
          "created_at":created_at,
          "updated_at":update_at
      };
      return task.create(task_data);
  }




};