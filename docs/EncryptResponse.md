
# EncryptResponse

Response containing the ciphertext produced by HSM encryption.

## Properties

Name | Type
------------ | -------------
`ciphertext` | string
`nonce` | string
`keyId` | string
`keyVersion` | number

## Example

```typescript
import type { EncryptResponse } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "ciphertext": YWVzLTI1Ni1nY20tY2lwaGVydGV4dA==,
  "nonce": c2FtcGxlLW5vbmNl,
  "keyId": key_01HQ3XYZABC123,
  "keyVersion": 3,
} satisfies EncryptResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EncryptResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


