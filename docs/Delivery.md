
# Delivery

A single delivery attempt for an event+subscription pair. Maps to types.DeliveryAttempt. 

## Properties

Name | Type
------------ | -------------
`id` | string
`tenantId` | string
`subscriptionId` | string
`eventId` | string
`eventType` | string
`url` | string
`status` | string
`attemptCount` | number
`maxRetries` | number
`nextRetryAt` | Date
`lastAttemptAt` | Date
`responseStatus` | number
`responseBody` | string
`errorMessage` | string
`createdAt` | Date
`completedAt` | Date

## Example

```typescript
import type { Delivery } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "id": 1711036800100000000_2,
  "tenantId": tnt_acme-corp_a1b2c3,
  "subscriptionId": 1711036800000000000_1,
  "eventId": 1711036800000000000_1,
  "eventType": dlp.alert,
  "url": https://hooks.acme.example.com/aqueduct,
  "status": delivered,
  "attemptCount": 1,
  "maxRetries": 5,
  "nextRetryAt": 2025-01-15T14:31Z,
  "lastAttemptAt": 2025-01-15T14:30:01Z,
  "responseStatus": 200,
  "responseBody": {"ok":true},
  "errorMessage": connection refused,
  "createdAt": 2025-01-15T14:30Z,
  "completedAt": 2025-01-15T14:30:01Z,
} satisfies Delivery

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Delivery
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


