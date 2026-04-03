
# AddDomainResponse

Response for adding a custom domain with verification instructions.

## Properties

Name | Type
------------ | -------------
`domainId` | string
`domain` | string
`type` | string
`status` | string
`verification` | [VerificationDetails](VerificationDetails.md)
`createdAt` | Date

## Example

```typescript
import type { AddDomainResponse } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "domainId": dom_01HQ3XYZABC123,
  "domain": api.acme.example.com,
  "type": api,
  "status": pending_verification,
  "verification": null,
  "createdAt": 2025-01-15T14:30Z,
} satisfies AddDomainResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AddDomainResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


