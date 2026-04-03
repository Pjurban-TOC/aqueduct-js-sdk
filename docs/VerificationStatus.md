
# VerificationStatus

Domain verification state.

## Properties

Name | Type
------------ | -------------
`method` | string
`recordName` | string
`recordValue` | string
`verifiedAt` | Date

## Example

```typescript
import type { VerificationStatus } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "method": dns_txt,
  "recordName": _aqueduct-verify.api.acme.example.com,
  "recordValue": aqueduct-verify=abc123def456,
  "verifiedAt": 2025-01-15T15:00Z,
} satisfies VerificationStatus

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as VerificationStatus
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


