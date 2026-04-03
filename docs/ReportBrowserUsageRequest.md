
# ReportBrowserUsageRequest


## Properties

Name | Type
------------ | -------------
`sessionId` | string
`userAgent` | string
`featuresUsed` | Array&lt;string&gt;
`pageViews` | number
`durationSeconds` | number

## Example

```typescript
import type { ReportBrowserUsageRequest } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "sessionId": null,
  "userAgent": null,
  "featuresUsed": null,
  "pageViews": null,
  "durationSeconds": null,
} satisfies ReportBrowserUsageRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ReportBrowserUsageRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


