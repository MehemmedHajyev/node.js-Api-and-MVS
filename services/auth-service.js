const pool = require('../config/db');
const userService = require('./user-service');
const UserLoginDTO = require('../models/user/user-login-dto');
const { ErrorResult, SuccessResult } = require('../utils/results/result');
const { USER_DOES_NOT_EXIST, USER_DEACTIVATED, PASSWORD_INCORRECT, USER_LOGIN_SUCCESSFUL } = require('../utils/constants/user-messages');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const AccessToken = require('../utils/auth/access-token');

/**
 * 
 * @param {UserLoginDTO} userLoginDto 
 */
const loginUser = async (userLoginDto) =>{
    // check username exists or not
    const userExistingResult = await userService.getUserByUsername(userLoginDto.username);
    if(!userExistingResult.data)
        return new ErrorResult(USER_DOES_NOT_EXIST);

    //check existing user's profile status
    if(!userExistingResult.data.isactive)
        return new ErrorResult(USER_DEACTIVATED);

    // check password
    const passwordCheckingResult = await bcrypt.compare(userLoginDto.password,userExistingResult.data.password);

    if(!passwordCheckingResult)
        return new ErrorResult(PASSWORD_INCORRECT);

    const token = await jwt.sign({username:userExistingResult.data.username},process.env.JWT_SECRET_KEY,{expiresIn:'1h'});
    const expireDate = new Date();
    expireDate.setHours(expireDate.getHours() + 1);
    const accessToken = new AccessToken(token,expireDate.toString());
    return new SuccessResult(USER_LOGIN_SUCCESSFUL,accessToken);
}

module.exports = {
    loginUser
}