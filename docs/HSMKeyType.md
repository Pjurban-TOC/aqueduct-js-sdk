
# HSMKeyType

Supported HSM key types. Post-quantum (PQC) types per NIST IR 8547 and CNSA 2.0: ML-KEM (FIPS 203), ML-DSA (FIPS 204), SLH-DSA (FIPS 205). 

## Properties

Name | Type
------------ | -------------

## Example

```typescript
import type { HSMKeyType } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
} satisfies HSMKeyType

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as HSMKeyType
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


