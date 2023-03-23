// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { config } from '@/constants/config'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  const ttl = ~~(Date.now() / 1000) + config.ttl
  const data = {
    types: {
      EIP712Domain: [
        { name: 'name', type: 'string' },
        { name: 'version', type: 'string' },
      ],
      login: [
        { name: 'message', type: 'string' },
      ],
    },
    domain: {
      name: 'EthoraPolygon',
      version: '1',
    },
    primaryType: 'Login',
    message: `I accept Ethora' Terms of service`,
  }

  res.status(200).json({data, ttl})
}