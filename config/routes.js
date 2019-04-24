module.exports.routes = {

//  'post /admin.login': 'ManageusersController.adminLogin',
 // 'get /admin.history/:account': 'ManageusersController.getHistory',  
  'post /login': 'UserController.login',
  'post /signup': 'UserController.signup',
  'get /location': 'UserController.location',

 // 'post /transfer': 'TransferController.transferMoney',
  //'post /setlimits': 'ManageusersController.setLimits',
//  'post /history': 'HistoryController.history',
//  'post /checkbalance': 'UserController.checkBalance'

};
