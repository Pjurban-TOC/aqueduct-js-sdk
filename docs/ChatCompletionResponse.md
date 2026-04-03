
# ChatCompletionResponse

Non-streaming chat completion response.

## Properties

Name | Type
------------ | -------------
`id` | string
`object` | string
`created` | number
`model` | string
`choices` | [Array&lt;ChatCompletionResponseChoicesInner&gt;](ChatCompletionResponseChoicesInner.md)
`usage` | [CompletionUsage](CompletionUsage.md)
`systemFingerprint` | string
`xAqueductTraceId` | string
`xAqueductTenantId` | string
`xAqueductProvider` | string
`xAqueductCacheStatus` | string
`xAqueductDlpResult` | [ChatCompletionResponseXAqueductDlpResult](ChatCompletionResponseXAqueductDlpResult.md)
`xAqueductRouting` | [ChatCompletionResponseXAqueductRouting](ChatCompletionResponseXAqueductRouting.md)

## Example

```typescript
import type { ChatCompletionResponse } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "id": chatcmpl-01HQ3XYZABC123,
  "object": chat.completion,
  "created": 1705326600,
  "model": gpt-4o-2024-11-20,
  "choices": null,
  "usage": null,
  "systemFingerprint": fp_abc123,
  "xAqueductTraceId": 01HQVXYZ89ABCDEFGHJKMNPQRS,
  "xAqueductTenantId": tnt_acme-corp_a1b2c3,
  "xAqueductProvider": openai,
  "xAqueductCacheStatus": MISS,
  "xAqueductDlpResult": null,
  "xAqueductRouting": null,
} satisfies ChatCompletionResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ChatCompletionResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


