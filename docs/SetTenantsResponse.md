
# SetTenantsResponse

Response confirming the tenants configured for compliance monitoring. Matches compliance-engine SetTenantsResponse struct. 

## Properties

Name | Type
------------ | -------------
`status` | string
`tenantIds` | Array&lt;string&gt;

## Example

```typescript
import type { SetTenantsResponse } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "status": ok,
  "tenantIds": ["tnt_acme-corp_a1b2c3","tnt_globex-inc_d4e5f6"],
} satisfies SetTenantsResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SetTenantsResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


