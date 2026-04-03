
# GenerateKeyResponse

Response containing metadata for the newly generated HSM key.

## Properties

Name | Type
------------ | -------------
`metadata` | [HSMKeyMetadata](HSMKeyMetadata.md)

## Example

```typescript
import type { GenerateKeyResponse } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "metadata": null,
} satisfies GenerateKeyResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GenerateKeyResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


