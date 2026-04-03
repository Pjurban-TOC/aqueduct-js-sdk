
# HSMKeyMetadata

HSM-managed key metadata. Matches `handler.go` HSMKeyMetadata struct.

## Properties

Name | Type
------------ | -------------
`keyId` | string
`keyType` | string
`label` | string
`state` | string
`algorithmOid` | string
`providerId` | string
`fipsLevel` | number
`attestationAvailable` | boolean
`createdAt` | Date
`deactivatedAt` | Date
`destroyedAt` | Date
`rotatedAt` | Date

## Example

```typescript
import type { HSMKeyMetadata } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "keyId": key_01HQ3XYZABC123,
  "keyType": AES-256,
  "label": tenant-dek-prod-01,
  "state": active,
  "algorithmOid": 2.16.840.1.101.3.4.1.46,
  "providerId": hsm-partition-us-east-1a,
  "fipsLevel": 3,
  "attestationAvailable": true,
  "createdAt": 2025-06-15T10:00Z,
  "deactivatedAt": null,
  "destroyedAt": null,
  "rotatedAt": 2025-07-15T10:00Z,
} satisfies HSMKeyMetadata

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as HSMKeyMetadata
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


