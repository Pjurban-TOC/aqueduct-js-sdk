
# CacheHitRateResponse

Cache hit rate response with target compliance.

## Properties

Name | Type
------------ | -------------
`stats` | [CacheHitStats](CacheHitStats.md)
`targetHitRate` | number
`targetMet` | boolean
`requirement` | string

## Example

```typescript
import type { CacheHitRateResponse } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "stats": null,
  "targetHitRate": 0.99,
  "targetMet": true,
  "requirement": AC-UI-045-014: >99% cache hit rate for returning users,
} satisfies CacheHitRateResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CacheHitRateResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


