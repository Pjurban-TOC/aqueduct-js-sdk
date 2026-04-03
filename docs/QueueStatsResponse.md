
# QueueStatsResponse

Aggregate statistics for the breakpoint review queue.

## Properties

Name | Type
------------ | -------------
`tenantId` | string
`totalPending` | number
`byPriority` | { [key: string]: number; }
`byStage` | { [key: string]: number; }
`oldestPending` | Date
`avgWaitTimeSeconds` | number
`updatedAt` | Date

## Example

```typescript
import type { QueueStatsResponse } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "tenantId": tnt_acme-corp_a1b2c3,
  "totalPending": 12,
  "byPriority": {"low":2,"normal":5,"high":4,"critical":1},
  "byStage": {"PRE_MODEL_CALL":8,"POST_MODEL_RESPONSE":4},
  "oldestPending": 2025-01-15T12:00Z,
  "avgWaitTimeSeconds": 120.5,
  "updatedAt": 2025-01-15T14:30Z,
} satisfies QueueStatsResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as QueueStatsResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


