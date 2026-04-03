
# DLPScanRequest

Content scanning request for PII and sensitive data detection. Supports bidirectional scanning (prompts AND responses) per PII-Scope [arXiv:2410.06704] which shows existing evaluations underestimate leakage by 5x. 

## Properties

Name | Type
------------ | -------------
`content` | string
`contentType` | string
`infoTypes` | [Array&lt;InfoType&gt;](InfoType.md)
`scoreThreshold` | number
`language` | string

## Example

```typescript
import type { DLPScanRequest } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "content": Please send the invoice to john.doe@acme.com at 123 Main St, SSN 123-45-6789.,
  "contentType": null,
  "infoTypes": ["PERSON_NAME","EMAIL_ADDRESS","US_SSN"],
  "scoreThreshold": 0.7,
  "language": en,
} satisfies DLPScanRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DLPScanRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


