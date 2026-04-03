
# DLPDeidentifyRequest

Content de-identification request with per-info-type operator configuration. Per PAPILLON [IJCAI 2025], PII redaction modes (mask/tokenize/remove) should be configurable policy options. 

## Properties

Name | Type
------------ | -------------
`content` | string
`deidentifyConfig` | [DLPDeidentifyRequestDeidentifyConfig](DLPDeidentifyRequestDeidentifyConfig.md)
`contentType` | string

## Example

```typescript
import type { DLPDeidentifyRequest } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "content": Contact john.doe@acme.com for details. SSN is 123-45-6789.,
  "deidentifyConfig": null,
  "contentType": null,
} satisfies DLPDeidentifyRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DLPDeidentifyRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


