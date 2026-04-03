
# AuditLogEntryResponse


## Properties

Name | Type
------------ | -------------
`statusCode` | number
`contentLength` | number
`errorCode` | string

## Example

```typescript
import type { AuditLogEntryResponse } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "statusCode": 200,
  "contentLength": 2048,
  "errorCode": null,
} satisfies AuditLogEntryResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AuditLogEntryResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


