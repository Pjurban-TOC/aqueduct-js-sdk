
# SignResponse

Response containing the digital signature.

## Properties

Name | Type
------------ | -------------
`signature` | string
`keyId` | string

## Example

```typescript
import type { SignResponse } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "signature": c2lnbmF0dXJlLWJ5dGVz,
  "keyId": key_01HQ3XYZABC123,
} satisfies SignResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SignResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


