var user = require('../../database/Schemas/user.schema');


function createUsers(username, email) {
    var user_data = {
        "username":username,
        "email":email
    };
    return user.create(user_data, function (err, result) {
    });
}



module.exports = {
    createUsers:createUsers
};
