
# DeactivateKeyResponse

Response confirming key deactivation per NIST SP 800-57 state transition.

## Properties

Name | Type
------------ | -------------
`success` | boolean
`keyId` | string

## Example

```typescript
import type { DeactivateKeyResponse } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "success": true,
  "keyId": key_01HQ3XYZABC123,
} satisfies DeactivateKeyResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DeactivateKeyResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


