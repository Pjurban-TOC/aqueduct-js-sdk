
# IngestEventRequest

Request body for POST /api/v1/webhooks/events. Maps to service.IngestEventRequest. 

## Properties

Name | Type
------------ | -------------
`eventType` | string
`payload` | any
`idempotencyKey` | string

## Example

```typescript
import type { IngestEventRequest } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "eventType": dlp.alert,
  "payload": {"rule_id":"pii-ssn","severity":"high"},
  "idempotencyKey": my-unique-key-123,
} satisfies IngestEventRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as IngestEventRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


