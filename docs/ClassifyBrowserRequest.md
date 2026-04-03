
# ClassifyBrowserRequest


## Properties

Name | Type
------------ | -------------
`userAgent` | string

## Example

```typescript
import type { ClassifyBrowserRequest } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "userAgent": Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36,
} satisfies ClassifyBrowserRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ClassifyBrowserRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


