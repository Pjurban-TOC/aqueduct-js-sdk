
# DLPDeidentifyRequestDeidentifyConfig

Per-info-type de-identification operators.

## Properties

Name | Type
------------ | -------------
`defaultOperator` | [DeidentifyOperator](DeidentifyOperator.md)
`infoTypeOperators` | [{ [key: string]: DeidentifyOperator; }](DeidentifyOperator.md)

## Example

```typescript
import type { DLPDeidentifyRequestDeidentifyConfig } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "defaultOperator": null,
  "infoTypeOperators": {"EMAIL_ADDRESS":{"type":"replace","replacement":"[EMAIL]"},"US_SSN":{"type":"mask","masking_char":"*","chars_to_mask":5}},
} satisfies DLPDeidentifyRequestDeidentifyConfig

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DLPDeidentifyRequestDeidentifyConfig
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


