
# ComplianceEvidence

A piece of evidence supporting a compliance check result. Matches compliance-engine ComplianceEvidence struct. 

## Properties

Name | Type
------------ | -------------
`id` | string
`sourceType` | string
`eventId` | string
`tenantId` | string
`timestamp` | Date
`summary` | string
`details` | { [key: string]: any; }

## Example

```typescript
import type { ComplianceEvidence } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "id": ev_01HQ3XYZABC123,
  "sourceType": audit_log,
  "eventId": 01HQVXYZ89ABCDEFGHJKMNPQRS,
  "tenantId": tnt_acme-corp_a1b2c3,
  "timestamp": 2025-06-15T10:28Z,
  "summary": MFA login event recorded for user usr_johndoe_abc123.,
  "details": {"user_id":"usr_johndoe_abc123","mfa_method":"totp","ip_address":"192.168.1.100"},
} satisfies ComplianceEvidence

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ComplianceEvidence
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


