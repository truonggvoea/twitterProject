import { NextFunction, Request, Response } from 'express'
import { body, validationResult, ValidationChain } from 'express-validator'
import { RunnableValidationChains } from 'express-validator/src/middlewares/schema'

export const validate = (validation: RunnableValidationChains<ValidationChain>) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    await validation.run(req)
    //di qua email pass ... luu trog req
    //run trả ra promise sài await
    // gọi validate nhận middeware
    //bỏ checkSchema nhận dc middeware
    //chạy qua check lỗi lưu req k có lỗi thì qua controll

    const errors = validationResult(req)
    if (errors.isEmpty()) {
      return next()
    }
    // thay array = mapped (de nhìn hơn)
    res.status(400).json({ errors: errors.mapped() })
  }
}
