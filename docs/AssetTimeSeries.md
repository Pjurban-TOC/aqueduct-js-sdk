
# AssetTimeSeries

Time series data for an asset metric.

## Properties

Name | Type
------------ | -------------
`metricType` | string
`dataPoints` | [Array&lt;AssetTimeSeriesDataPoint&gt;](AssetTimeSeriesDataPoint.md)
`unit` | string
`startTime` | Date
`endTime` | Date

## Example

```typescript
import type { AssetTimeSeries } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "metricType": load_time,
  "dataPoints": null,
  "unit": ms,
  "startTime": null,
  "endTime": null,
} satisfies AssetTimeSeries

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AssetTimeSeries
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


