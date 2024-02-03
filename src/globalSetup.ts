// FILE TO SETUP FRAMEWORK TO TEST IN RESPECTIVE ENVIRONMENTS
// INCLUDE ANY: AUTHENTICATION LOGIC
import auth from './utils/auth'
import getEnv from './utils/env'

export default function globalSetup() {
  getEnv()
  const token = auth()
  console.log(token)
  // process.env.accessToken = token
  // do any required prereq setups here for example configuring testdata dependencies
}
