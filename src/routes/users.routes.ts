import { Router } from 'express'
import { register } from 'module'
import { loginController, registerController } from '~/controllers/users.controllers'
import { loginValidator, registerValidator } from '~/middlewares/users.middlewares'
const userRoute = Router()

//controller
userRoute.get('/login', loginValidator, loginController)
/*
Description: Register new user
Path: /register
Method: POST
body: {
    name: string
    email: string
    password: string
    confirm_password: string
    date_of_birth: string theo chuẩn ISO 8601

}

*/
userRoute.post('/register', registerValidator, registerController)

export default userRoute
