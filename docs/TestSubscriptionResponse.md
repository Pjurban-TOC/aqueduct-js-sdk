
# TestSubscriptionResponse

Result of sending a test webhook.test event to a subscription endpoint. Maps to service.TestResult. 

## Properties

Name | Type
------------ | -------------
`success` | boolean
`statusCode` | number
`latencyMs` | number
`error` | string

## Example

```typescript
import type { TestSubscriptionResponse } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "success": true,
  "statusCode": 200,
  "latencyMs": 142,
  "error": connection refused,
} satisfies TestSubscriptionResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TestSubscriptionResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


