
# AcknowledgeAlertRequest

Request to acknowledge a performance alert.

## Properties

Name | Type
------------ | -------------
`acknowledgedBy` | string
`note` | string

## Example

```typescript
import type { AcknowledgeAlertRequest } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "acknowledgedBy": usr_admin_xyz789,
  "note": Investigating CDN configuration in IAD region.,
} satisfies AcknowledgeAlertRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AcknowledgeAlertRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


