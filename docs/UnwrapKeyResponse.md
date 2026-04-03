
# UnwrapKeyResponse

Response containing the unwrapped Data Encryption Key.

## Properties

Name | Type
------------ | -------------
`dek` | string

## Example

```typescript
import type { UnwrapKeyResponse } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "dek": cmF3LWRlay1ieXRlcw==,
} satisfies UnwrapKeyResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UnwrapKeyResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


