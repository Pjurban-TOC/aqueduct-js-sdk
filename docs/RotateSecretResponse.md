
# RotateSecretResponse

Response after rotating a subscription\'s signing secret. Handler returns: {\"secret\": \"<new-whsec>\"} 

## Properties

Name | Type
------------ | -------------
`secret` | string

## Example

```typescript
import type { RotateSecretResponse } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "secret": whsec_dGhlIHF1aWNrIGJyb3duIGZveA==,
} satisfies RotateSecretResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RotateSecretResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


