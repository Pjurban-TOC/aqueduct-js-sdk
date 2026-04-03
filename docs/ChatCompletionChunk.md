
# ChatCompletionChunk

Streaming chat completion chunk. Sent as Server-Sent Events with content-type `text/event-stream`. Uses `delta` instead of `message`. 

## Properties

Name | Type
------------ | -------------
`id` | string
`object` | string
`created` | number
`model` | string
`choices` | [Array&lt;ChatCompletionChunkChoicesInner&gt;](ChatCompletionChunkChoicesInner.md)
`usage` | [CompletionUsage](CompletionUsage.md)

## Example

```typescript
import type { ChatCompletionChunk } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "id": chatcmpl-01HQ3XYZABC123,
  "object": null,
  "created": null,
  "model": null,
  "choices": null,
  "usage": null,
} satisfies ChatCompletionChunk

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ChatCompletionChunk
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


