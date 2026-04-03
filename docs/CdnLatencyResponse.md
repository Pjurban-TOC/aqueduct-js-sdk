
# CdnLatencyResponse

CDN latency response with target compliance.

## Properties

Name | Type
------------ | -------------
`stats` | [CDNLatencyStats](CDNLatencyStats.md)
`targetP95Ms` | number
`targetMet` | boolean
`requirement` | string

## Example

```typescript
import type { CdnLatencyResponse } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "stats": null,
  "targetP95Ms": 50,
  "targetMet": true,
  "requirement": AC-UI-045-011: CDN latency P95 <50ms,
} satisfies CdnLatencyResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CdnLatencyResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


