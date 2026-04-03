
# ListAlertsResponse

List of performance alerts.

## Properties

Name | Type
------------ | -------------
`alerts` | [Array&lt;PerformanceAlert&gt;](PerformanceAlert.md)
`totalCount` | number

## Example

```typescript
import type { ListAlertsResponse } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "alerts": null,
  "totalCount": 3,
} satisfies ListAlertsResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ListAlertsResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


