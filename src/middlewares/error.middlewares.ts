import { Request, Response, NextFunction } from 'express'
import { omit } from 'lodash'
import HTTP_STATUS from '~/constants/httpStatus'

export const defaultErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  //đây là nơi mà tất cả lỗi trên hệ thống sẽ dồn về
  res.status(err.status || HTTP_STATUS.INTERNAL_SERVER_ERROR).json(omit(err, ['status']))
}
// nếu lỗi xuong1 được đây thì nghĩa là lỗi mặc định
// đầu tien set name, stack ,message về enumerable : true
// Object.getOwnPropertyNames(err).forEach((key) => {
//   Object.defineProperty(err, key, { enumerable: true })
// })
// res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
//   message: err.message,
//   errorInfor: omit(err, ['stack'])
// })
