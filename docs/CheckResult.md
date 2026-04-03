
# CheckResult

Result of a single compliance check execution. Matches compliance-engine CheckResult struct. 

## Properties

Name | Type
------------ | -------------
`checkId` | string
`tenantId` | string
`status` | [ControlStatus](ControlStatus.md)
`message` | string
`evidence` | [Array&lt;ComplianceEvidence&gt;](ComplianceEvidence.md)
`checkedAt` | Date

## Example

```typescript
import type { CheckResult } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "checkId": chk_mfa_enabled,
  "tenantId": tnt_acme-corp_a1b2c3,
  "status": null,
  "message": MFA is enforced for all users in tenant.,
  "evidence": null,
  "checkedAt": 2025-06-15T10:30Z,
} satisfies CheckResult

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CheckResult
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


