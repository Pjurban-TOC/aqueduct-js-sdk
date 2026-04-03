
# AttestationResponse

Remote attestation evidence for an HSM key per IETF RATS (RFC 9334).

## Properties

Name | Type
------------ | -------------
`keyId` | string
`format` | string
`evidence` | string
`certificateChain` | Array&lt;string&gt;
`timestamp` | Date

## Example

```typescript
import type { AttestationResponse } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "keyId": key_01HQ3XYZABC123,
  "format": TPM2,
  "evidence": dHBtMi1hdHRlc3RhdGlvbi1ldmlkZW5jZQ==,
  "certificateChain": ["-----BEGIN CERTIFICATE-----\\nMIIBxTCCAWugAwIBAgI...\\n-----END CERTIFICATE-----"],
  "timestamp": 2025-06-15T10:05Z,
} satisfies AttestationResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AttestationResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


