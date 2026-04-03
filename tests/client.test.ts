import { describe, it, expect } from 'vitest'

// Use CJS for test compatibility
const { Configuration, AuthenticationApi } = require('../cjs/index.js')

describe('AqueductClient', () => {
  it('creates configuration with api key header', () => {
    const config = new Configuration({
      basePath: 'https://api.aqueduct.io',
      apiKey: 'test-key',
    })
    expect(config).toBeDefined()
    expect(config.basePath).toBe('https://api.aqueduct.io')
  })

  it('creates configuration with bearer token', async () => {
    const config = new Configuration({
      basePath: 'https://api.aqueduct.io',
      accessToken: 'test-bearer',
    })
    expect(config).toBeDefined()
    // accessToken can be a string or a sync/async function
    let token = config.accessToken
    if (typeof token === 'function') {
      token = await token()
    }
    expect(token).toBe('test-bearer')
  })

  it('AuthenticationApi instantiates with configuration', () => {
    const config = new Configuration({
      basePath: 'https://api.aqueduct.io',
    })
    const api = new AuthenticationApi(config)
    expect(api).toBeDefined()
  })
})
