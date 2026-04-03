
# OverallComplianceStatus

Aggregated compliance status across all frameworks for a tenant. Per ISpec [arXiv:2512.17259] multi-framework compliance overview. Matches compliance-engine OverallComplianceStatus struct. 

## Properties

Name | Type
------------ | -------------
`tenantId` | string
`frameworks` | [Array&lt;FrameworkStatus&gt;](FrameworkStatus.md)

## Example

```typescript
import type { OverallComplianceStatus } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "tenantId": tnt_acme-corp_a1b2c3,
  "frameworks": null,
} satisfies OverallComplianceStatus

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OverallComplianceStatus
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


