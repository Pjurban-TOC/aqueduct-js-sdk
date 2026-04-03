
# DeleteTenantRequest

Request body for tenant deletion. Matches `tenants.go:102` DeleteTenantRequest.

## Properties

Name | Type
------------ | -------------
`confirmation` | string
`reason` | string
`exportData` | boolean

## Example

```typescript
import type { DeleteTenantRequest } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "confirmation": acme-corp,
  "reason": Organization dissolved per legal request,
  "exportData": true,
} satisfies DeleteTenantRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DeleteTenantRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


