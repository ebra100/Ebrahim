
/**
 * Exampleservice Service
 *
 */
import  {JwtProvider} from '../controllers/serviceProvider/JwtProvider';
import * as JWT from 'jwt-decode';


var jwt=require('jsonwebtoken');
var config = require('./config.js');

export class Userservice  {

newToken:string;
 public jwtprovider:JwtProvider;

constructor(){
    this.jwtprovider=new JwtProvider();
}

async findByEmail(email:any){
    let user = await User.findOne({where:{email:email}});
    return user;
}
verifyToken(token:any){
  return this.jwtprovider.verify(token,  (err:Error, decoded:any)=> {
        if(err) return err;
        else 
            return decoded;
})
 
}

Authenticate(user:any){
   let token=  this.jwtprovider.getToken({user:user});
   this.newToken=token;
   return token;
}


validatePassword(userPassword:any,password:any){
    if(userPassword==password)
     return true;
    else
     return false;
}

}

module.exports = new Userservice();