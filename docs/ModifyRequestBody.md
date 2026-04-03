
# ModifyRequestBody

Request body for modifying a paused request before approving it.

## Properties

Name | Type
------------ | -------------
`modifications` | { [key: string]: any; }
`notes` | string

## Example

```typescript
import type { ModifyRequestBody } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "modifications": {"model":"gpt-3.5-turbo","max_tokens":2000},
  "notes": Downgraded model to reduce cost,
} satisfies ModifyRequestBody

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ModifyRequestBody
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


