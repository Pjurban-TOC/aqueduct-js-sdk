
# DomainResponse

Detailed domain information (API-PLAT-004-02).

## Properties

Name | Type
------------ | -------------
`domainId` | string
`domain` | string
`type` | string
`status` | string
`isApex` | boolean
`verification` | [VerificationStatus](VerificationStatus.md)
`ssl` | [SSLStatus](SSLStatus.md)
`createdAt` | Date
`updatedAt` | Date

## Example

```typescript
import type { DomainResponse } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "domainId": dom_01HQ3XYZABC123,
  "domain": api.acme.example.com,
  "type": api,
  "status": verified,
  "isApex": false,
  "verification": null,
  "ssl": null,
  "createdAt": 2025-01-15T14:30Z,
  "updatedAt": 2025-01-15T15:00Z,
} satisfies DomainResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DomainResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


