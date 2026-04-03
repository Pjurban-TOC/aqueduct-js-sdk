
# TenantResponse

Tenant in API responses. Matches `tenants.go:67` TenantResponse.

## Properties

Name | Type
------------ | -------------
`tenantId` | string
`name` | string
`slug` | string
`tier` | [TenantTier](TenantTier.md)
`region` | string
`status` | [TenantStatus](TenantStatus.md)
`createdAt` | Date
`updatedAt` | Date
`config` | [TenantConfigResponse](TenantConfigResponse.md)
`usageSummary` | [UsageSummaryResponse](UsageSummaryResponse.md)

## Example

```typescript
import type { TenantResponse } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "tenantId": tnt_acme-corp_a1b2c3,
  "name": Acme Corp,
  "slug": acme-corp,
  "tier": null,
  "region": us-east-1,
  "status": null,
  "createdAt": 2025-01-15T14:30Z,
  "updatedAt": 2025-01-15T14:30Z,
  "config": null,
  "usageSummary": null,
} satisfies TenantResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TenantResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


