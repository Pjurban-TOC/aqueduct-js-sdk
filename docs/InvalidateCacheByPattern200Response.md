
# InvalidateCacheByPattern200Response


## Properties

Name | Type
------------ | -------------
`pattern` | string
`invalidatedCount` | number
`durationMs` | number

## Example

```typescript
import type { InvalidateCacheByPattern200Response } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "pattern": null,
  "invalidatedCount": 85,
  "durationMs": 30,
} satisfies InvalidateCacheByPattern200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as InvalidateCacheByPattern200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


