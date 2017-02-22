var user = require('../models/user.model');

/*
    This is the index action!
 */
function index (req, res) {
   res.json({"status":"success","data":"welcome to meantodo"});
}




module.exports = {

    index:index

};