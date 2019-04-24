// import {timeAndDate}  from'../../../utilities/timeAndDate'; 

// export class TransferService {


//      time: string;
//      buffer: string[];
//      date: string;
//      tranferedAmount: number;
//     constructor() { 
//     }


    

// validateTransferUser(transferedBalance:any,transferedBank_account:any,user: any):string {
//         if (!user)
//             return  'user not found';

//         if (transferedBalance > user.balance)
//             return  "you dont have enough balance" ;

//         if (user.bank_account == transferedBank_account)
//             return  "you are not allowed to transfer money to your self" ;

//     };

// checkTransferLimits(transferLimits: any):string {
//         if (transferLimits == 0)
//             return "you excceded your transfers limits";
//    };

// checkReceiveLimits(receiveLimits: any) {
//         if (receiveLimits == 0)
//            return "this user cant receive the money today" ;

//     };

// validateReceiveUser(user: any) {
//         if (!user || user.admin)
//             return  "you are trying to transfer money to not existing user" ;

//     };


// async transferProccess(transferedBalabce:any,user: any) {
//         user.transferLimits -= 1;
//         this.tranferedAmount = parseInt(transferedBalabce);
//         user.balance -= this.tranferedAmount;
//         user = await user.save()
//     };

// async receiveProccess(receivedBalance:any,user: any) {
//         user.balance += parseInt(receivedBalance);
//         user.receiveLimits -= 1;
//         user = await user.save()

//     };



// async createHistory(balance:any,receiveUser: any, transferUser: any,time:string,
// date:string) {
//         let transferHistory = await History.bulkCreate([{
//             id: transferUser.id,
//             amount: parseInt(balance),
//             first_name: receiveUser.first_name,
//             last_name: receiveUser.last_name,
//             transaction_time: time,
//             transaction_date: date,
//             state: "tranfered"
//         },
//         {
//             id: receiveUser.id,
//             amount: parseInt(balance),
//             first_name: transferUser.first_name,
//             last_name: transferUser.last_name,
//             transaction_time: this.time,
//             transaction_date: this.date,
//             state: "received"
//         } 
//     ]);

//     }

// static init(senderBalance:any,receiverAccount:any,senderUser: any,receiveUser:any) {

//         let self = new this(); 
//         let errMessage=undefined;
//         errMessage=self.validateTransferUser(senderBalance,receiverAccount,senderUser);
//         if(errMessage)
//         return errMessage;
//         errMessage=self.checkTransferLimits(senderUser.transferLimits);
//         if(errMessage)
//           return errMessage;
          
//         let transferUser = senderUser;

//         errMessage=self.validateReceiveUser(receiveUser);
//         if(errMessage)
//         return errMessage;
//         errMessage=self.checkReceiveLimits(receiveUser.receiveLimits);
//         if(errMessage)
//         return errMessage;
//         self.transferProccess(senderBalance,transferUser);
//         self.receiveProccess(senderBalance,receiveUser);


//         let time=timeAndDate.getTimeAndDate().transferTime;
//         let date =timeAndDate.getTimeAndDate().tranferDate;
            
//         self.createHistory(senderBalance,receiveUser, transferUser,time,date);

//         return false;
            
//     }
// }