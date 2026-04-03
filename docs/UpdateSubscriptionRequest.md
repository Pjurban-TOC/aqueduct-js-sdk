
# UpdateSubscriptionRequest

Request body for PUT /api/v1/webhooks/subscriptions/{id}. All fields are optional — only supplied fields are updated. Maps to service.UpdateSubscriptionRequest. 

## Properties

Name | Type
------------ | -------------
`url` | string
`eventTypes` | Array&lt;string&gt;
`headers` | { [key: string]: string; }
`description` | string
`active` | boolean
`maxRetries` | number
`timeoutSec` | number
`rateLimitRpm` | number

## Example

```typescript
import type { UpdateSubscriptionRequest } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "url": https://hooks.acme.example.com/v2/aqueduct,
  "eventTypes": ["dlp.alert","prompt.processed"],
  "headers": {"X-Custom-Auth":"new-token-456"},
  "description": Updated production webhook,
  "active": true,
  "maxRetries": 10,
  "timeoutSec": 15,
  "rateLimitRpm": 120,
} satisfies UpdateSubscriptionRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateSubscriptionRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


