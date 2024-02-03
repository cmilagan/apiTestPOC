import dotenv from 'dotenv'
import path from 'path'

export default function getEnv() {
  const ENV = process.env.ENV || 'dev'
  const filepath = path.resolve(process.cwd(), `.env.${ENV}`)
  dotenv.config({ path: filepath })
}
