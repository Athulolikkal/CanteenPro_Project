import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import config from '../../config/config.js'

export default function authSerivecs() {
       const passwordBcrypt = async (password) => {
              const salt = await bcrypt.genSalt(10);
              const hashPassword = await bcrypt.hash(password, salt)
              return hashPassword
       }

       const comparePassword = async (passwordDb, password) => {
              const isPassword = await bcrypt.compare(password, passwordDb)
              return isPassword
       }

       const createAccessToken = async (user) => {
              // const secretKey = role === 'canteen' ? config.jwtCanteenAccessSecretKey : config.jwtUserAccessSecretKey
              const accessToken = jwt.sign(user, config.jwtAccessSecretKey, { expiresIn: '60m' })
              return accessToken
       }

       const createRefreshToken = async (user) => {
              // const secretKey= role ==='canteen'?config.jwtCanteenRefreshSecretKey:config.jwtUserRefreshSecretKey
              const refreshToken = jwt.sign(user, config.jwtRefreshSecretKey, { expiresIn: '7d' })
              return refreshToken
       }

       const verifyAccessToken = async (tokendata) => {
              const isVerified = await jwt.verify(tokendata, config.jwtAccessSecretKey)
              return isVerified
       }

       return {
              passwordBcrypt,
              comparePassword,
              createAccessToken,
              createRefreshToken,
              verifyAccessToken

       }
}