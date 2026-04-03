
# AuditLogEntryRequest


## Properties

Name | Type
------------ | -------------
`method` | string
`path` | string
`ipAddress` | string
`userAgent` | string
`contentLength` | number

## Example

```typescript
import type { AuditLogEntryRequest } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "method": POST,
  "path": /v1/chat/completions,
  "ipAddress": 192.168.1.100,
  "userAgent": aqueduct-sdk/1.0.0 python/3.11,
  "contentLength": 1024,
} satisfies AuditLogEntryRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AuditLogEntryRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


