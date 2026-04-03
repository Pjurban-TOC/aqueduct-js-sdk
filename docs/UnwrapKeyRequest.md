
# UnwrapKeyRequest

Request to unwrap a Data Encryption Key using AES-KWP (RFC 5649 / NIST SP 800-38F).

## Properties

Name | Type
------------ | -------------
`kekId` | string
`wrappedDek` | string

## Example

```typescript
import type { UnwrapKeyRequest } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "kekId": key_kek_01HQ3XYZABC123,
  "wrappedDek": d3JhcHBlZC1kZWstYnl0ZXM=,
} satisfies UnwrapKeyRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UnwrapKeyRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


