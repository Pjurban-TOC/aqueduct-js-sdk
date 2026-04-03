
# ChatCompletionResponseXAqueductRouting

Model routing metadata. Per TensorOpera Router [arXiv:2408.12320] and UniRoute [arXiv:2502.08773]. 

## Properties

Name | Type
------------ | -------------
`policy` | string
`candidatesEvaluated` | number
`selectionReason` | string

## Example

```typescript
import type { ChatCompletionResponseXAqueductRouting } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "policy": cost-optimized,
  "candidatesEvaluated": 3,
  "selectionReason": Lowest cost within quality threshold,
} satisfies ChatCompletionResponseXAqueductRouting

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ChatCompletionResponseXAqueductRouting
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


