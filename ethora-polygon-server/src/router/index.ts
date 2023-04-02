import {Router} from 'express'
import multer from 'multer'

import Nfmt from '../db/models/nfmt'
import {authMw, AuthRequest} from '../middleware/auth'

import { preDeployNfmtHandler } from '../handlers/preDeployNfmt'
import { getProfileHandler } from '../handlers/getProfileHandler'
import { updateProfile } from '../handlers/updateProfile'
import { afterDeployHandler } from '../handlers/afterDeployHandler'

const upload = multer({ dest: 'uploads/' })
const router = Router()

router.get('/hello', (req, res) => {
  res.send('Hello')
})

router.get('/nfmt', async (req, res) => {
  const nfmt = await Nfmt.find({}).sort({createdAt: -1})

  return res.send(nfmt)
})

router.post(
  '/pre-deploy-nfmt',
  authMw,
  upload.array('images', 5),
  preDeployNfmtHandler
)

router.post('/upload', upload.array('images', 5), (req, res) => {
  console.log('/upload start')
  return res.send({files: req.files})
})

router.post('/after-deploy-nfmt/:id', authMw, afterDeployHandler)

router.get('/profile/:address', getProfileHandler)
router.post('/profile', authMw, upload.single('image'), updateProfile)

router.get('/test-auth', authMw, (req: any, res) => {
  return res.send(req.user.address)
})

export default router
