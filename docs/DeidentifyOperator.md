
# DeidentifyOperator

De-identification operator configuration.

## Properties

Name | Type
------------ | -------------
`type` | string
`replacement` | string
`maskingChar` | string
`charsToMask` | number
`hashAlgorithm` | string
`cryptoKeyName` | string

## Example

```typescript
import type { DeidentifyOperator } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "type": null,
  "replacement": [REDACTED],
  "maskingChar": *,
  "charsToMask": null,
  "hashAlgorithm": null,
  "cryptoKeyName": null,
} satisfies DeidentifyOperator

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DeidentifyOperator
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


