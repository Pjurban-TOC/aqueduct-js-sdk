
# ExportResponse

Export response. Matches handler/export.go ExportResponse.

## Properties

Name | Type
------------ | -------------
`exportedAt` | Date
`totalEvents` | number
`timeRange` | [TimeRange](TimeRange.md)
`events` | [Array&lt;ActivityEvent&gt;](ActivityEvent.md)

## Example

```typescript
import type { ExportResponse } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "exportedAt": null,
  "totalEvents": 5000,
  "timeRange": null,
  "events": null,
} satisfies ExportResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ExportResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


