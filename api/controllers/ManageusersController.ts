// /// <reference path="../../typings/tsd.d.ts" />
// /**
//  * ManageusersController
//  *
//  * @description :: Server-side logic for managing Manageusers
//  * @help 		:: See http://links.sailsjs.org/docs/controllers
//  */


// var ManageusersController = {

//    async adminLogin(req:Request,res:Response,next:Function){
// 	 let user= await User.findOne({where:{username:req.body.username}});
// 	 if(!user){
// 		return res.send({"success":false,"message":"wrong username"});
// 	  }
// 	  else if(user.admin){
// 		if(user.password!=req.body.password){
// 		  return res.send({"success":false,"message":"wrong password"})
// 		}
//       let adminToken=UserService.Authenticate(user);
// 		  return res.send({success:true,message: 'login successful',token:adminToken,id:user.id,admin:user.admin});
// 	  }
// 	  else if(!user.admin){
// 		  return res.send({"success":false,"message":"you are not an admin"});
// 	  }
//    },


// 	async getHistory (req: Request, res: Response, next: Function) {
// 		let user= await User.findOne({where:{bank_account:req.params.account}})
// 	  if(!user || user.admin){
// 		 return res.send({"success":false,"message":"wrong bank account"})
// 	  }
// 	  let history =await History.findAll({where:{id:user.id}})
// 	   res.send({"success":true,"message":history});
// 	},
// 	async updateLimits(id:number,transferlimits:any,receivelimits:any){
// 		let user = await User.findOne({where:{id:id}})
// 		user.transferLimits=transferlimits;
// 		user.receiveLimits=receivelimits;
// 		let saveUser= await user.save()
		  
// 	   },

//     async setLimits(req:Request,res:Response,next:Function){
// 		let  users =await User.findAll();
// 		for(var index=0;index<users.length;index++){
//           if(!users[index].admin){
//                this.updateLimits(users[index].id,req.body.transferlimits,req.body.receivelimits);
// 		  }
// 		  if(index==users.length){
// 			return res.send({"success":true,"message":"limits were updated"});
// 			}
// 		}
// 	},



// };

// module.exports = ManageusersController;
