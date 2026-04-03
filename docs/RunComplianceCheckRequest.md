
# RunComplianceCheckRequest


## Properties

Name | Type
------------ | -------------
`frameworkId` | string
`tenantId` | string
`controlId` | string

## Example

```typescript
import type { RunComplianceCheckRequest } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "frameworkId": soc2-2024,
  "tenantId": tnt_acme-corp_a1b2c3,
  "controlId": soc2-cc6.1,
} satisfies RunComplianceCheckRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RunComplianceCheckRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


