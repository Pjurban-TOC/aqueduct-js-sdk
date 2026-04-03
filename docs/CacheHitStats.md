
# CacheHitStats

Cache hit rate statistics.

## Properties

Name | Type
------------ | -------------
`totalRequests` | number
`cacheHits` | number
`cacheMisses` | number
`hitRate` | number
`hitRateByType` | { [key: string]: number; }
`hitRateByPop` | { [key: string]: number; }
`swCacheHits` | number
`swHitRate` | number
`targetHitRate` | number
`targetMet` | boolean

## Example

```typescript
import type { CacheHitStats } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "totalRequests": 50000,
  "cacheHits": 49750,
  "cacheMisses": 250,
  "hitRate": 0.995,
  "hitRateByType": {"script":0.998,"stylesheet":0.999,"image":0.99},
  "hitRateByPop": {"iad-1":0.997,"lax-1":0.993},
  "swCacheHits": 5000,
  "swHitRate": 0.1,
  "targetHitRate": 0.99,
  "targetMet": true,
} satisfies CacheHitStats

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CacheHitStats
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


