
# CDNLatencyStats

CDN latency percentile statistics.

## Properties

Name | Type
------------ | -------------
`p50Ms` | number
`p75Ms` | number
`p90Ms` | number
`p95Ms` | number
`p99Ms` | number
`sampleCount` | number
`p95ByPop` | { [key: string]: number; }
`p95ByType` | { [key: string]: number; }
`targetP95Ms` | number
`targetMet` | boolean

## Example

```typescript
import type { CDNLatencyStats } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "p50Ms": 12.5,
  "p75Ms": 22,
  "p90Ms": 35,
  "p95Ms": 42,
  "p99Ms": 85,
  "sampleCount": 50000,
  "p95ByPop": {"iad-1":38,"lax-1":45},
  "p95ByType": {"script":40,"image":35},
  "targetP95Ms": 50,
  "targetMet": true,
} satisfies CDNLatencyStats

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CDNLatencyStats
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


