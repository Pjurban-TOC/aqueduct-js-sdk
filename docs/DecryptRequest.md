
# DecryptRequest

Request to decrypt data using an HSM key.

## Properties

Name | Type
------------ | -------------
`keyId` | string
`ciphertext` | string
`nonce` | string
`aad` | string

## Example

```typescript
import type { DecryptRequest } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "keyId": key_01HQ3XYZABC123,
  "ciphertext": YWVzLTI1Ni1nY20tY2lwaGVydGV4dA==,
  "nonce": c2FtcGxlLW5vbmNl,
  "aad": dGVuYW50OnRudF9hY21l,
} satisfies DecryptRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DecryptRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


