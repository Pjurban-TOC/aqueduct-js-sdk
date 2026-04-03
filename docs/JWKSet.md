
# JWKSet

JSON Web Key Set per [RFC 7517](https://www.rfc-editor.org/rfc/rfc7517). Contains the public keys used to verify JWT tokens issued by the auth service. 

## Properties

Name | Type
------------ | -------------
`keys` | [Array&lt;JWK&gt;](JWK.md)

## Example

```typescript
import type { JWKSet } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "keys": null,
} satisfies JWKSet

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as JWKSet
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


