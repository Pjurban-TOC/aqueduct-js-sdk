
# ChatCompletionRequest

OpenAI-compatible chat completion request. This is the universal interchange format for AI gateway inference endpoints (2024-2026). 

## Properties

Name | Type
------------ | -------------
`model` | string
`messages` | [Array&lt;ChatMessage&gt;](ChatMessage.md)
`temperature` | number
`topP` | number
`maxTokens` | number
`stream` | boolean
`stop` | [ChatCompletionRequestStop](ChatCompletionRequestStop.md)
`frequencyPenalty` | number
`presencePenalty` | number
`responseFormat` | [ChatCompletionRequestResponseFormat](ChatCompletionRequestResponseFormat.md)
`tools` | [Array&lt;ToolDefinition&gt;](ToolDefinition.md)
`toolChoice` | [ChatCompletionRequestToolChoice](ChatCompletionRequestToolChoice.md)
`user` | string
`xAqueductPriority` | string

## Example

```typescript
import type { ChatCompletionRequest } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "model": gpt-4o,
  "messages": null,
  "temperature": 0.7,
  "topP": 0.9,
  "maxTokens": 4096,
  "stream": false,
  "stop": null,
  "frequencyPenalty": null,
  "presencePenalty": null,
  "responseFormat": null,
  "tools": null,
  "toolChoice": null,
  "user": usr_johndoe_abc123,
  "xAqueductPriority": null,
} satisfies ChatCompletionRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ChatCompletionRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


