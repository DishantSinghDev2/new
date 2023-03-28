import {Router} from 'express'
import Nfmt from '../db/models/nfmt'
import {authMw, AuthRequest} from '../middleware/auth'

const router = Router()

router.get('/hello', (req, res) => {
  res.send('Hello')
})

router.get('/nfmt', async (req, res) => {
  const nfmt = await Nfmt.find({})

  return res.send(nfmt)
})

router.get('/test-auth', authMw, (req: any, res) => {
  console.log(req.user)

  return res.send(req.user.address)
})

export default router