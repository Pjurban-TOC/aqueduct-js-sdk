
# DLPDeidentifyResponse


## Properties

Name | Type
------------ | -------------
`deidentifiedContent` | string
`transformationsCount` | number
`transformations` | [Array&lt;DLPDeidentifyResponseTransformationsInner&gt;](DLPDeidentifyResponseTransformationsInner.md)

## Example

```typescript
import type { DLPDeidentifyResponse } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "deidentifiedContent": Contact [EMAIL] for details. SSN is ***-**-6789.,
  "transformationsCount": 2,
  "transformations": [{"info_type":"EMAIL_ADDRESS","operator":"replace","count":1},{"info_type":"US_SSN","operator":"mask","count":1}],
} satisfies DLPDeidentifyResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DLPDeidentifyResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


