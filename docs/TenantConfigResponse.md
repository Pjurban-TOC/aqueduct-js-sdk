
# TenantConfigResponse

Tenant configuration in responses. Matches `tenants.go:81` TenantConfigResponse.

## Properties

Name | Type
------------ | -------------
`sessionTimeoutMinutes` | number
`mfaRequired` | boolean
`ipAllowlist` | Array&lt;string&gt;

## Example

```typescript
import type { TenantConfigResponse } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "sessionTimeoutMinutes": 30,
  "mfaRequired": true,
  "ipAllowlist": ["10.0.0.0/8"],
} satisfies TenantConfigResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TenantConfigResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


