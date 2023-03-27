import {Router} from 'express'
import Nfmt from '../db/models/nfmt'

const router = Router()

router.get('/hello', (req, res) => {
  res.send('Hello')
})

router.get('/nfmt', async (req, res) => {
  const nfmt = await Nfmt.find({})

  return res.send(nfmt)
})

export default router