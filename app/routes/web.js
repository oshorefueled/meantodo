/*
 ===================================================
    --------------------------------------
    Application Routes
    --------------------------------------

    This is where you register your routes and map
    them to your controllers
 ====================================================
*/




var routes = [
    {prefix:'/v1', childRoutes:[
        {path:"/task/save", controller:"taskcontroller",action:"saveTask", reqType:"get"},
        {path:"/task/update", controller:"taskcontroller", action:"updateTask", reqType:"get"},
        {path:"/task/delete", controller:"taskcontroller", action:"deleteTask", reqType:"get"}
    ]},
  {path:"/", controller:"indexcontroller",action:"index", reqType:"get"}
    
];


module.exports = routes;