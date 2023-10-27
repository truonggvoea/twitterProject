import { Router } from 'express'
import { access } from 'fs'
import { register } from 'module'
import { loginController, logoutController, registerController } from '~/controllers/users.controllers'
import {
  accessTokenValidator,
  loginValidator,
  refreshTokenValidator,
  registerValidator
} from '~/middlewares/users.middlewares'
import { wrapAsync } from '~/utils/handlers'
const userRoute = Router()

//controller
userRoute.get('/login', loginValidator, wrapAsync(loginController))

userRoute.post('/register', registerValidator, wrapAsync(registerController))
/* 
des: đăng xuất 
path: /users/logout
method: POST
headers: {Authorization: 'Bearer <access_token>'}
body: {refresh_token: string}
*/
userRoute.post('/logout', accessTokenValidator, refreshTokenValidator, wrapAsync(logoutController))
export default userRoute
