
# QuotaAlertsResponse

List of quota alerts. Matches `quotas.go:148` QuotaAlertsResponse.

## Properties

Name | Type
------------ | -------------
`alerts` | [Array&lt;QuotaAlertDetail&gt;](QuotaAlertDetail.md)

## Example

```typescript
import type { QuotaAlertsResponse } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "alerts": null,
} satisfies QuotaAlertsResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as QuotaAlertsResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


