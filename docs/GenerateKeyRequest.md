
# GenerateKeyRequest

Request to generate a new HSM-managed key. Matches `handler.go` GenerateKeyRequest.

## Properties

Name | Type
------------ | -------------
`keyType` | [HSMKeyType](HSMKeyType.md)
`label` | string

## Example

```typescript
import type { GenerateKeyRequest } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "keyType": null,
  "label": tenant-dek-prod-02,
} satisfies GenerateKeyRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GenerateKeyRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


