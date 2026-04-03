
# ActivityEvent

Activity event. Matches domain/event.go ActivityEvent struct.

## Properties

Name | Type
------------ | -------------
`eventId` | string
`tenantId` | string
`userId` | string
`timestamp` | Date
`action` | string
`resourceType` | string
`resourceId` | string
`ipAddress` | string
`userAgent` | string
`sessionId` | string
`requestId` | string
`outcome` | string
`errorCode` | string
`errorMessage` | string
`metadata` | { [key: string]: any; }
`hashChain` | string
`previousHash` | string
`storageTier` | string
`archivedAt` | Date

## Example

```typescript
import type { ActivityEvent } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "eventId": evt_01HQ3XYZAB,
  "tenantId": tnt_acme-corp_a1b2c3,
  "userId": usr_johndoe_abc123,
  "timestamp": 2025-01-15T14:30Z,
  "action": document.view,
  "resourceType": document,
  "resourceId": doc_abc123,
  "ipAddress": 192.168.1.100,
  "userAgent": aqueduct-sdk/1.0.0,
  "sessionId": ses_01HQ3XYZABC123,
  "requestId": req-abc123,
  "outcome": success,
  "errorCode": null,
  "errorMessage": null,
  "metadata": null,
  "hashChain": null,
  "previousHash": null,
  "storageTier": null,
  "archivedAt": null,
} satisfies ActivityEvent

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ActivityEvent
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


