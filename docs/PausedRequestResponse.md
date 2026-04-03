
# PausedRequestResponse

A request that was paused by a breakpoint, awaiting operator review.

## Properties

Name | Type
------------ | -------------
`id` | string
`breakpointId` | string
`breakpointName` | string
`tenantId` | string
`userId` | string
`correlationId` | string
`stage` | string
`priority` | string
`sanitizedPreview` | string
`metadata` | { [key: string]: any; }
`status` | string
`pausedAt` | Date
`expiresAt` | Date
`reviewedBy` | string
`reviewDecision` | string
`reviewNotes` | string
`reviewedAt` | Date

## Example

```typescript
import type { PausedRequestResponse } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "id": preq_01HQ3XYZABC123,
  "breakpointId": bp_01HQ3XYZABC123,
  "breakpointName": Flag large token requests,
  "tenantId": tnt_acme-corp_a1b2c3,
  "userId": usr_johndoe_abc123,
  "correlationId": corr_01HQ3XYZABC789,
  "stage": PRE_MODEL_CALL,
  "priority": high,
  "sanitizedPreview": User asks about [REDACTED] financial projections for Q3...,
  "metadata": {"model":"gpt-4","endpoint":"/v1/chat/completions","token_count":5200},
  "status": pending,
  "pausedAt": 2025-01-15T14:30Z,
  "expiresAt": 2025-01-15T15:30Z,
  "reviewedBy": usr_operator_abc123,
  "reviewDecision": approved,
  "reviewNotes": Approved after confirming business justification,
  "reviewedAt": 2025-01-15T14:45Z,
} satisfies PausedRequestResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PausedRequestResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


