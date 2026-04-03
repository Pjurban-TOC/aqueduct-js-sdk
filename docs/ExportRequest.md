
# ExportRequest

Export request. Matches handler/export.go ExportRequest.

## Properties

Name | Type
------------ | -------------
`tenantId` | string
`userId` | string
`action` | string
`start` | Date
`end` | Date
`format` | string

## Example

```typescript
import type { ExportRequest } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "tenantId": tnt_acme-corp_a1b2c3,
  "userId": null,
  "action": null,
  "start": null,
  "end": null,
  "format": json,
} satisfies ExportRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ExportRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


