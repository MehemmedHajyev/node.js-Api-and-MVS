const UserLoginDTO = require('../../models/user/user-login-dto');
const authService = require('../../services/auth-service');

const loginUser = async (req,res) =>{
    const userLoginDto = new UserLoginDTO(req.body);
    const result = await authService.loginUser(userLoginDto);

    if(!result.success)
        res.status(400).json(result);
    else
        res.status(200).json(result);
}

module.exports = {
    loginUser
}