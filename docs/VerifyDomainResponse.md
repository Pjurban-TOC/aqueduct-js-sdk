
# VerifyDomainResponse

Response for manual domain verification (API-PLAT-004-05).

## Properties

Name | Type
------------ | -------------
`domainId` | string
`verificationStatus` | string
`dnsRecordFound` | boolean
`lastCheckedAt` | Date
`nextCheckAt` | Date

## Example

```typescript
import type { VerifyDomainResponse } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "domainId": dom_01HQ3XYZABC123,
  "verificationStatus": verified,
  "dnsRecordFound": true,
  "lastCheckedAt": 2025-01-15T15:00Z,
  "nextCheckAt": 2025-01-15T15:30Z,
} satisfies VerifyDomainResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as VerifyDomainResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


