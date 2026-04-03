
# JWK

A single JSON Web Key.

## Properties

Name | Type
------------ | -------------
`kty` | string
`use` | string
`kid` | string
`alg` | string
`n` | string
`e` | string
`x5c` | Array&lt;string&gt;
`x5t` | string

## Example

```typescript
import type { JWK } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "kty": RSA,
  "use": sig,
  "kid": aqueduct-2025-01,
  "alg": RS256,
  "n": null,
  "e": AQAB,
  "x5c": null,
  "x5t": null,
} satisfies JWK

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as JWK
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


