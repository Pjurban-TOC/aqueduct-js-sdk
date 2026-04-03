
# SignRequest

Request to sign a digest using an HSM signing key.

## Properties

Name | Type
------------ | -------------
`keyId` | string
`digest` | string

## Example

```typescript
import type { SignRequest } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "keyId": key_01HQ3XYZABC123,
  "digest": c2hhMjU2LWRpZ2VzdC1ieXRlcw==,
} satisfies SignRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SignRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


