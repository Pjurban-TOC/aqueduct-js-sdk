
# ModelInfo

Available model information.

## Properties

Name | Type
------------ | -------------
`id` | string
`object` | string
`created` | number
`ownedBy` | string
`capabilities` | [ModelInfoCapabilities](ModelInfoCapabilities.md)
`rateLimits` | [ModelInfoRateLimits](ModelInfoRateLimits.md)

## Example

```typescript
import type { ModelInfo } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "id": gpt-4o,
  "object": null,
  "created": 1705326600,
  "ownedBy": openai,
  "capabilities": null,
  "rateLimits": null,
} satisfies ModelInfo

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ModelInfo
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


