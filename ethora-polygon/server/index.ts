import {Nitro} from 'nitropack'
import mongoose from 'mongoose'

export default async (_nitroApp: Nitro) => {
  const config = useRuntimeConfig()

  try {
    await mongoose.connect(config.mongodbUri)
    console.log('db connected')
  } catch (error) {
    console.log(error)
  }
}