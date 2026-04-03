
# EncryptRequest

Request to encrypt data using an HSM key (AES-256-GCM per NIST SP 800-38D).

## Properties

Name | Type
------------ | -------------
`keyId` | string
`plaintext` | string
`aad` | string

## Example

```typescript
import type { EncryptRequest } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "keyId": key_01HQ3XYZABC123,
  "plaintext": SGVsbG8gV29ybGQ=,
  "aad": dGVuYW50OnRudF9hY21l,
} satisfies EncryptRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EncryptRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


