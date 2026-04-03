
# UpdateQuotaConfigRequest

Admin request to update quota configuration. Matches `quotas.go:95` UpdateQuotaConfigRequest.

## Properties

Name | Type
------------ | -------------
`limits` | [QuotaLimitsUpdate](QuotaLimitsUpdate.md)
`modelsAllowed` | Array&lt;string&gt;
`featuresEnabled` | Array&lt;string&gt;
`temporaryIncrease` | [TemporaryIncreaseReq](TemporaryIncreaseReq.md)

## Example

```typescript
import type { UpdateQuotaConfigRequest } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "limits": null,
  "modelsAllowed": ["gpt-4","gpt-4o","claude-sonnet-4-20250514"],
  "featuresEnabled": ["conversations","dlp_scanning"],
  "temporaryIncrease": null,
} satisfies UpdateQuotaConfigRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateQuotaConfigRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


