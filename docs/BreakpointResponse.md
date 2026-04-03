
# BreakpointResponse

A breakpoint configuration as returned by the API.

## Properties

Name | Type
------------ | -------------
`id` | string
`tenantId` | string
`name` | string
`description` | string
`stage` | string
`mode` | string
`conditions` | [Array&lt;ConditionResponse&gt;](ConditionResponse.md)
`priority` | string
`enabled` | boolean
`createdBy` | string
`createdAt` | Date
`updatedAt` | Date
`version` | number

## Example

```typescript
import type { BreakpointResponse } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "id": bp_01HQ3XYZABC123,
  "tenantId": tnt_acme-corp_a1b2c3,
  "name": Flag large token requests,
  "description": Pause requests exceeding 4000 tokens for manual review,
  "stage": PRE_MODEL_CALL,
  "mode": pause,
  "conditions": null,
  "priority": high,
  "enabled": true,
  "createdBy": usr_admin_xyz789,
  "createdAt": 2025-01-15T14:30Z,
  "updatedAt": 2025-01-16T09:15Z,
  "version": 3,
} satisfies BreakpointResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BreakpointResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


