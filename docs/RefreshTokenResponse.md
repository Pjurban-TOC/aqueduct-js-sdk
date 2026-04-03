
# RefreshTokenResponse

New token pair from a refresh operation.

## Properties

Name | Type
------------ | -------------
`accessToken` | string
`refreshToken` | string
`tokenType` | string
`expiresIn` | number

## Example

```typescript
import type { RefreshTokenResponse } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "accessToken": eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImFxdWVkdWN0LTIwMjUtMDEifQ...,
  "refreshToken": dGhpcyBpcyBhIG5ldyByZWZyZXNoIHRva2Vu...,
  "tokenType": Bearer,
  "expiresIn": 3600,
} satisfies RefreshTokenResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RefreshTokenResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


