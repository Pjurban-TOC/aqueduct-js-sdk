
# ListTenantsResponse

Paginated tenant list. Matches `tenants.go:134` ListTenantsResponse.

## Properties

Name | Type
------------ | -------------
`tenants` | [Array&lt;TenantResponse&gt;](TenantResponse.md)
`nextCursor` | string
`total` | number

## Example

```typescript
import type { ListTenantsResponse } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "tenants": null,
  "nextCursor": eyJpZCI6MTAwfQ==,
  "total": 42,
} satisfies ListTenantsResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ListTenantsResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


