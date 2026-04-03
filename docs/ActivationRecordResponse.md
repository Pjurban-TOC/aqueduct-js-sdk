
# ActivationRecordResponse

A single activation (trigger) record for a breakpoint.

## Properties

Name | Type
------------ | -------------
`id` | string
`breakpointId` | string
`tenantId` | string
`userId` | string
`correlationId` | string
`stage` | string
`mode` | string
`decision` | string
`reviewedBy` | string
`reviewedAt` | Date
`activatedAt` | Date

## Example

```typescript
import type { ActivationRecordResponse } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "id": act_01HQ3XYZABC456,
  "breakpointId": bp_01HQ3XYZABC123,
  "tenantId": tnt_acme-corp_a1b2c3,
  "userId": usr_johndoe_abc123,
  "correlationId": corr_01HQ3XYZABC789,
  "stage": PRE_MODEL_CALL,
  "mode": pause,
  "decision": approved,
  "reviewedBy": usr_operator_abc123,
  "reviewedAt": 2025-01-15T14:45Z,
  "activatedAt": 2025-01-15T14:30Z,
} satisfies ActivationRecordResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ActivationRecordResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


