import e, { NextFunction, Request, Response } from 'express'
import { body, validationResult, ValidationChain } from 'express-validator'
import { RunnableValidationChains } from 'express-validator/src/middlewares/schema'
import { EntityError, ErrorWithStatus } from '~/models/Errors'

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
    const errorsObject = errors.mapped()
    const entityError = new EntityError({ errors: {} })
    for (const key in errorsObject) {
      //lấy msg của từng lỗi ra
      const { msg } = errorsObject[key]
      if (msg instanceof ErrorWithStatus && msg.status !== 422) {
        return next(msg)
      }
      //nếu xg dc đây thì mầy là lỗi 422
      entityError.errors[key] = msg
    }
    next(entityError)
  }
}
