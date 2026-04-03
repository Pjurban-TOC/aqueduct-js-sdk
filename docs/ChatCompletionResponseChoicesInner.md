
# ChatCompletionResponseChoicesInner


## Properties

Name | Type
------------ | -------------
`index` | number
`message` | [ChatMessage](ChatMessage.md)
`finishReason` | string

## Example

```typescript
import type { ChatCompletionResponseChoicesInner } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "index": 0,
  "message": null,
  "finishReason": stop,
} satisfies ChatCompletionResponseChoicesInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ChatCompletionResponseChoicesInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


