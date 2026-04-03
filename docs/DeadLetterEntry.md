
# DeadLetterEntry

A permanently failed delivery stored in the dead-letter queue for manual review and optional replay.  Maps to types.DeadLetterEntry. 

## Properties

Name | Type
------------ | -------------
`id` | string
`tenantId` | string
`subscriptionId` | string
`deliveryId` | string
`eventId` | string
`eventType` | string
`url` | string
`payload` | any
`attemptCount` | number
`lastResponseCode` | number
`lastError` | string
`createdAt` | Date
`deadLetteredAt` | Date
`replayedAt` | Date

## Example

```typescript
import type { DeadLetterEntry } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "id": 1711036801000000000_3,
  "tenantId": tnt_acme-corp_a1b2c3,
  "subscriptionId": 1711036800000000000_1,
  "deliveryId": 1711036800100000000_2,
  "eventId": 1711036800000000000_1,
  "eventType": dlp.alert,
  "url": https://hooks.acme.example.com/aqueduct,
  "payload": {"rule_id":"pii-ssn","severity":"high"},
  "attemptCount": 5,
  "lastResponseCode": 503,
  "lastError": service unavailable after 5 attempts,
  "createdAt": 2025-01-15T14:30Z,
  "deadLetteredAt": 2025-01-15T14:35Z,
  "replayedAt": 2025-01-15T15:00Z,
} satisfies DeadLetterEntry

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DeadLetterEntry
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


