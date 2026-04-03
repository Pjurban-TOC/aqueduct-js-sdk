
# VerificationDetails

DNS verification instructions for domain ownership.

## Properties

Name | Type
------------ | -------------
`method` | string
`recordName` | string
`recordValue` | string
`instructions` | string

## Example

```typescript
import type { VerificationDetails } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "method": dns_txt,
  "recordName": _aqueduct-verify.api.acme.example.com,
  "recordValue": aqueduct-verify=abc123def456,
  "instructions": Add a TXT record with the name and value above to your DNS provider.,
} satisfies VerificationDetails

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as VerificationDetails
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


