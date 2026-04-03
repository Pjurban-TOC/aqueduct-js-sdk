
# BatchEventResponse

Batch event creation response. Matches handler/events.go BatchEventResponse.

## Properties

Name | Type
------------ | -------------
`totalReceived` | number
`totalAccepted` | number
`totalRejected` | number
`errors` | [Array&lt;BatchEventResponseErrorsInner&gt;](BatchEventResponseErrorsInner.md)

## Example

```typescript
import type { BatchEventResponse } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "totalReceived": 50,
  "totalAccepted": 48,
  "totalRejected": 2,
  "errors": null,
} satisfies BatchEventResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BatchEventResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


