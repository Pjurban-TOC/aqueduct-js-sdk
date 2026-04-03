
# QuotaStatusResponse

Tenant quota status. Matches `quotas.go:70` QuotaStatusResponse.

## Properties

Name | Type
------------ | -------------
`tier` | string
`limits` | [{ [key: string]: QuotaLimit; }](QuotaLimit.md)
`modelsAllowed` | Array&lt;string&gt;
`featuresEnabled` | Array&lt;string&gt;
`alerts` | [Array&lt;QuotaAlertSummary&gt;](QuotaAlertSummary.md)

## Example

```typescript
import type { QuotaStatusResponse } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "tier": pro,
  "limits": {"api_calls_per_hour":{"max":10000,"current":2500,"soft_limit":8000,"percent_used":25,"reset_date":"2025-02-01T00:00:00Z"},"storage_gb":{"max":100,"current":12,"soft_limit":80,"percent_used":12}},
  "modelsAllowed": ["gpt-4","gpt-4o","claude-sonnet-4-20250514"],
  "featuresEnabled": ["conversations","dlp_scanning","rag_retrieval"],
  "alerts": null,
} satisfies QuotaStatusResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as QuotaStatusResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


