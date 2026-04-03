
# CreateSubscriptionRequest

Request body for POST /api/v1/webhooks/subscriptions. Maps to service.CreateSubscriptionRequest. 

## Properties

Name | Type
------------ | -------------
`url` | string
`eventTypes` | Array&lt;string&gt;
`headers` | { [key: string]: string; }
`description` | string
`maxRetries` | number
`timeoutSec` | number
`rateLimitRpm` | number

## Example

```typescript
import type { CreateSubscriptionRequest } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "url": https://hooks.acme.example.com/aqueduct,
  "eventTypes": ["dlp.alert","safety.violation"],
  "headers": {"X-Custom-Auth":"secret-token-123"},
  "description": Production webhook for security events,
  "maxRetries": 5,
  "timeoutSec": 30,
  "rateLimitRpm": 60,
} satisfies CreateSubscriptionRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateSubscriptionRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


