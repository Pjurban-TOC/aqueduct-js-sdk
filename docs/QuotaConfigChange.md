
# QuotaConfigChange

Single config change. Matches `quotas.go:125` QuotaConfigChange.

## Properties

Name | Type
------------ | -------------
`field` | string
`oldValue` | any
`newValue` | any

## Example

```typescript
import type { QuotaConfigChange } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "field": limits.api_calls_per_hour,
  "oldValue": null,
  "newValue": null,
} satisfies QuotaConfigChange

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as QuotaConfigChange
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


