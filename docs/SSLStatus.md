
# SSLStatus

SSL certificate state for a custom domain.

## Properties

Name | Type
------------ | -------------
`status` | string
`issuedAt` | Date
`expiresAt` | Date
`issuer` | string

## Example

```typescript
import type { SSLStatus } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "status": active,
  "issuedAt": 2025-01-15T15:05Z,
  "expiresAt": 2025-04-15T15:05Z,
  "issuer": Let's Encrypt,
} satisfies SSLStatus

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SSLStatus
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


