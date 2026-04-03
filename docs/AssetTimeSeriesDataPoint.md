
# AssetTimeSeriesDataPoint

Single time series data point with percentiles.

## Properties

Name | Type
------------ | -------------
`timestamp` | Date
`value` | number
`p50` | number
`p95` | number
`p99` | number
`sampleCount` | number

## Example

```typescript
import type { AssetTimeSeriesDataPoint } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "timestamp": null,
  "value": 45.2,
  "p50": 38,
  "p95": 120,
  "p99": 250,
  "sampleCount": 1500,
} satisfies AssetTimeSeriesDataPoint

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AssetTimeSeriesDataPoint
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


