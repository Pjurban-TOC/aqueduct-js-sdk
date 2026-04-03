
# ChatCompletionRequestResponseFormat

Desired response format.

## Properties

Name | Type
------------ | -------------
`type` | string
`jsonSchema` | object

## Example

```typescript
import type { ChatCompletionRequestResponseFormat } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "type": json_object,
  "jsonSchema": null,
} satisfies ChatCompletionRequestResponseFormat

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ChatCompletionRequestResponseFormat
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


