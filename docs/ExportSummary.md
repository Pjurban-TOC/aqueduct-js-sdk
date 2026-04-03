
# ExportSummary

Data export artifact details.

## Properties

Name | Type
------------ | -------------
`url` | string
`expiresAt` | Date
`sizeBytes` | number

## Example

```typescript
import type { ExportSummary } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "url": https://exports.aqueduct.ai/tnt_acme-corp_a1b2c3/export-2025-01-15.tar.gz,
  "expiresAt": 2025-01-22T14:30Z,
  "sizeBytes": 524288000,
} satisfies ExportSummary

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ExportSummary
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


