
# VerifyRequest

Request to verify a digital signature using an HSM key.

## Properties

Name | Type
------------ | -------------
`keyId` | string
`digest` | string
`signature` | string

## Example

```typescript
import type { VerifyRequest } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "keyId": key_01HQ3XYZABC123,
  "digest": c2hhMjU2LWRpZ2VzdC1ieXRlcw==,
  "signature": c2lnbmF0dXJlLWJ5dGVz,
} satisfies VerifyRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as VerifyRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


