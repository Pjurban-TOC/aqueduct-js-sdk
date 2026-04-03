
# WebhookEvent

An inbound event stored by the webhook service and dispatched to matching subscriptions.  Maps to types.WebhookEvent. 

## Properties

Name | Type
------------ | -------------
`id` | string
`tenantId` | string
`eventType` | string
`payload` | any
`payloadSize` | number
`idempotencyKey` | string
`createdAt` | Date

## Example

```typescript
import type { WebhookEvent } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "id": 1711036800000000000_1,
  "tenantId": tnt_acme-corp_a1b2c3,
  "eventType": dlp.alert,
  "payload": {"rule_id":"pii-ssn","severity":"high"},
  "payloadSize": 248,
  "idempotencyKey": a3f1c9b7e4d82f6501ab3c9d8e7f6a5b4c3d2e1f0a9b8c7d6e5f4a3b2c1d0e9f,
  "createdAt": 2025-01-15T14:30Z,
} satisfies WebhookEvent

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as WebhookEvent
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


