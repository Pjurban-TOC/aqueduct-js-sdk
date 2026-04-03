
# ListKeysResponse

Paginated list of HSM keys.

## Properties

Name | Type
------------ | -------------
`keys` | [Array&lt;HSMKeyMetadata&gt;](HSMKeyMetadata.md)
`count` | number

## Example

```typescript
import type { ListKeysResponse } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "keys": null,
  "count": 12,
} satisfies ListKeysResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ListKeysResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


