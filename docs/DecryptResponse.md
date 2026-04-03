
# DecryptResponse

Response containing the decrypted plaintext.

## Properties

Name | Type
------------ | -------------
`plaintext` | string

## Example

```typescript
import type { DecryptResponse } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "plaintext": SGVsbG8gV29ybGQ=,
} satisfies DecryptResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DecryptResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


