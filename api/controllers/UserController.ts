/// <reference path="../../typings/tsd.d.ts" />
/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help 		:: See http://links.sailsjs.org/docs/controllers
 */

const passport = require('passport');

import { JwtProvider } from './serviceProvider/JwtProvider';

export class UserController {

	async signUp(req: Request, res: Response) {
		let email = req.body.email;
		let device_username = req.body.device_username;
		let device_password = req.body.device_password;

		let user = await Mobile_users.findOne({ where: { email: email } });

		if (user)
			return res.status(400).send({ "success": false, "message": "you already have an accont with this email" });

		let device = await Device.findOne(
			{ where: { username: device_username, password: device_password } });

		if (!device)
			return res.status(400).send({ "success": false, "message": "you cant register to this app if you dont have a woment safety device if you have one please enter the right serial number of the device" });

		let registeredUser = await Mobile_users.create(req.body)

		if (registeredUser)
			return res.status(200).send({ "success": "true", "message": "registered successfully" })

		return res.status(500).send({ "success": "false", "message": "something went wrong" })
	}


	async login(req: Request, res: Response, next: Function) {


		console.log("here")
		let users = await BaseModelService.findOne('Mobile_users', { email: 'ebra@yahoo.com' })
		console.log(users.toJSON());
        res.send(users.toJSON())
		// let email = req.body.email;
		// let device_username = req.body.device_username;
		// let device_password = req.body.device_password;

		// let user = await Mobile_users.findOne({ where: { email: email } });

		// if (user) {
		// 	var rightPassword = device_password == user.device_password && device_username == user.device_username;
		// 	if (rightPassword) {
		// 		let userToken = UserService.Authenticate(user);
		// 		return res.status(200).send({ "success": true, "message": "successfully loged in", "user": userToken });
		// 	}
		// 	return res.status(404).send({ "success": false, "message": "wrong password or username" })

		// }
		// return res.status(404).send({ "success": false, "message": "wrong email" });

	}

	async location(req: Request, res: Response) {
		let token = req.headers['x-access-token'];
		let loggedUserObject = UserService.verifyToken(token).user;
		let device = await Device.findOne({
			where: {
				username: loggedUserObject.device_username,
				password: loggedUserObject.device_password
			}
		})
		let deviceId = device.id;
		let crime = await Crime.findOne({
			where:
				{ device_id: deviceId, seen_by_mobile_user: 0, seen: 0 }
		});
		if (crime) {
			let updateCrime = await Crime.update({
				seen_by_mobile_user: 1
			},
				{ where: { device_id: deviceId } })

			return res.send({ "location_lat": crime.location_lat, "location_lng": crime.location_lng });
		}
		return res.send({ "state": "stable" })

	}

}
module.exports = new UserController();

