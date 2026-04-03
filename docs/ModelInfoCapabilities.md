
# ModelInfoCapabilities

Model capability flags.

## Properties

Name | Type
------------ | -------------
`chat` | boolean
`embeddings` | boolean
`functionCalling` | boolean
`vision` | boolean
`streaming` | boolean

## Example

```typescript
import type { ModelInfoCapabilities } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "chat": true,
  "embeddings": false,
  "functionCalling": true,
  "vision": true,
  "streaming": true,
} satisfies ModelInfoCapabilities

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ModelInfoCapabilities
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


