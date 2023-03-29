import {Router} from 'express'
import multer from 'multer'

import Nfmt from '../db/models/nfmt'
import {authMw, AuthRequest} from '../middleware/auth'

import { deployNfmtHandler } from '../handlers/deployNfmt'
import { getProfileHandler } from '../handlers/getProfileHandler'
import { updateProfile } from '../handlers/updateProfile'

const upload = multer({ dest: 'uploads/' })
const router = Router()

router.get('/hello', (req, res) => {
  res.send('Hello')
})

router.get('/nfmt', async (req, res) => {
  const nfmt = await Nfmt.find({})

  return res.send(nfmt)
})

router.post('/nfmt', upload.array('images', 5),  deployNfmtHandler)

router.get('/profile/:address', getProfileHandler)
router.post('/profile', authMw, upload.single('image'), updateProfile)

router.get('/test-auth', authMw, (req: any, res) => {
  return res.send(req.user.address)
})

export default router
