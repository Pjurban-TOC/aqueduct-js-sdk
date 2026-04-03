
# ChatCompletionResponseXAqueductDlpResult

DLP scan summary for the response.

## Properties

Name | Type
------------ | -------------
`scanned` | boolean
`findingsCount` | number
`action` | string

## Example

```typescript
import type { ChatCompletionResponseXAqueductDlpResult } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "scanned": null,
  "findingsCount": null,
  "action": null,
} satisfies ChatCompletionResponseXAqueductDlpResult

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ChatCompletionResponseXAqueductDlpResult
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


