import {Request, Response, NextFunction} from 'express'

function return401(res: Response) {
  return res.status(401).end()
}

export default function(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.header('authorization');
}