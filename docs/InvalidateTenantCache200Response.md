
# InvalidateTenantCache200Response


## Properties

Name | Type
------------ | -------------
`tenantId` | string
`invalidatedCount` | number
`durationMs` | number

## Example

```typescript
import type { InvalidateTenantCache200Response } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "tenantId": tnt_acme-corp_a1b2c3,
  "invalidatedCount": 150,
  "durationMs": 25,
} satisfies InvalidateTenantCache200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as InvalidateTenantCache200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


