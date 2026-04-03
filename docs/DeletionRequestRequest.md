
# DeletionRequestRequest

Request body for initiating tenant deletion per GDPR Art. 17 right to erasure.

## Properties

Name | Type
------------ | -------------
`reason` | string
`details` | string
`confirmation` | string
`exportData` | boolean

## Example

```typescript
import type { DeletionRequestRequest } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "reason": customer_request,
  "details": Customer requested full data removal per GDPR Art. 17,
  "confirmation": DELETE Acme Corp,
  "exportData": true,
} satisfies DeletionRequestRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DeletionRequestRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


