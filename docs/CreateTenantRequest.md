
# CreateTenantRequest

Request body for creating a new tenant. Matches `tenants.go:50` CreateTenantRequest.

## Properties

Name | Type
------------ | -------------
`name` | string
`slug` | string
`tier` | [TenantTier](TenantTier.md)
`region` | string
`adminEmail` | string
`config` | [TenantConfigRequest](TenantConfigRequest.md)

## Example

```typescript
import type { CreateTenantRequest } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "name": Acme Corp,
  "slug": acme-corp,
  "tier": null,
  "region": us-east-1,
  "adminEmail": admin@acme.example.com,
  "config": null,
} satisfies CreateTenantRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateTenantRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


