
# Subscription

Webhook subscription resource returned by the API. Maps to types.Subscription.  The secret field is redacted on read (first 10 chars + \"****\"). 

## Properties

Name | Type
------------ | -------------
`id` | string
`tenantId` | string
`url` | string
`secret` | string
`eventTypes` | Array&lt;string&gt;
`headers` | { [key: string]: string; }
`active` | boolean
`description` | string
`maxRetries` | number
`timeoutSec` | number
`rateLimitRpm` | number
`createdAt` | Date
`updatedAt` | Date
`previousSecret` | string
`previousSecretExpiresAt` | Date

## Example

```typescript
import type { Subscription } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "id": 1711036800000000000_1,
  "tenantId": tnt_acme-corp_a1b2c3,
  "url": https://hooks.acme.example.com/aqueduct,
  "secret": whsec_dGhl****,
  "eventTypes": ["dlp.alert","safety.violation"],
  "headers": {"X-Custom-Auth":"secret-token-123"},
  "active": true,
  "description": Production webhook for security events,
  "maxRetries": 5,
  "timeoutSec": 30,
  "rateLimitRpm": 60,
  "createdAt": 2025-01-15T14:30Z,
  "updatedAt": 2025-01-15T15:00Z,
  "previousSecret": null,
  "previousSecretExpiresAt": null,
} satisfies Subscription

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Subscription
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


