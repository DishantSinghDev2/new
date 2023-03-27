import dotenv from 'dotenv'

dotenv.config()

export default {
  appPort: process.env.PORT || '3030',
  mongoUri: process.env.MONGO || 'mongodb://localhost:27017/ethora-polygon',
  alchemyWs: process.env.ALCHEMY_WS || '',
}