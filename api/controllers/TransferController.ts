// /// <reference path="../../typings/tsd.d.ts" />
// /**
//  * TransferController
//  *
//  * @description :: Server-side logic for managing Transfers
//  * @help 		:: See http://links.sailsjs.org/docs/controllers
//  */

// import { TransferService } from './serviceProvider/TransferService';
// import {timeAndDate}  from'../../utilities/timeAndDate'; 

// class TransferController {

// 	public transferservice: TransferService;
// 	constructor() {
// 		this.transferservice = new TransferService();
// 	}

// async transferMoney(req: Request, res: Response, next: Function) {

// 	let  transferUser ,errMessage=undefined;
// 	let snederUser  =  await User.findOne({ where: { id: req.body.transmitid } });
// 	let receiveUser =  await User.findOne({ where: { bank_account: req.body.bank_account } })

// 	errMessage= TransferService.init(req.body.balance,req.body.bank_account,snederUser,receiveUser);
// 	if(errMessage)
// 		  return res.badRequest({"success":false,"message":errMessage});
		 
// 	let time = timeAndDate.getTimeAndDate();
	
// 	return res.ok({"success": true, "message": "you transfered " + req.body.balance + " to " +
// 	receiveUser.first_name + " " + receiveUser.last_name + " at "+time.transferTime});
// 	}
// }

// module.exports = new TransferController();