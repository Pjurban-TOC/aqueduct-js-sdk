
# ExportStatusResponse

Export job status. Matches handler/export.go ExportStatusResponse.

## Properties

Name | Type
------------ | -------------
`exportId` | string
`status` | string
`message` | string
`progress` | number
`downloadUrl` | string
`createdAt` | Date
`completedAt` | Date

## Example

```typescript
import type { ExportStatusResponse } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "exportId": exp_01HQ3XYZABC123,
  "status": completed,
  "message": null,
  "progress": 100,
  "downloadUrl": null,
  "createdAt": null,
  "completedAt": null,
} satisfies ExportStatusResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ExportStatusResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


