import authServicesInterface from "../../../applications/service/authServiceInter.js";
import authServiceImplements from '../../service/authServices.js'

const jwtAuthentication = async (req, res, next) => {
  try {
    console.log(req.headers);
    let token = req.headers.authorization;
    if (token) {
      token = token.replace('Bearer ', '');
      const authService = authServicesInterface(authServiceImplements());
      const decode = await authService.verifyAccessToken(token);
      console.log(decode, 'decoded data');
      req.user = decode.userId;
      return next();
    } else {
      console.log('No token found');
      return res.status(401).json({ message: 'No token found',role:'canteen' });
    }
  } catch (err) {
    console.log(err);
    return res.status(401).json({ message: 'Token validation failed',role:'canteen' });
  }
};

export default jwtAuthentication;
