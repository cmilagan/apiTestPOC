// FILE CONTAINING RE-USABLE GENERAL PURPOSE CODE FOR EXAMPLE GETTING CURRENT TIME
export const requestConfig = {
  // All requests we send go to this API endpoint.
  baseURL: process.env.BASE_URL || 'https://petstore.swagger.io/v2',
  extraHTTPHeaders: {
    // We set this header per GitHub guidelines.
    Accept: 'application/json',
    // Add authorization token to all requests.
    // Assuming personal access token available in the environment.
    Authorization: process.env.ACCESS_TOKEN || `special-key`,
  },
}
