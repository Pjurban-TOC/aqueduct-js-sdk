
# RefreshTokenRequest

Token refresh request.

## Properties

Name | Type
------------ | -------------
`refreshToken` | string
`sessionId` | string

## Example

```typescript
import type { RefreshTokenRequest } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "refreshToken": dGhpcyBpcyBhIHJlZnJlc2ggdG9rZW4...,
  "sessionId": ses_01HQ3XYZABC123,
} satisfies RefreshTokenRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RefreshTokenRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


