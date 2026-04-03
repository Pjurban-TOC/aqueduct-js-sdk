
# ExportDownloadResponse

Detailed export download status and artifact information.

## Properties

Name | Type
------------ | -------------
`exportId` | string
`status` | string
`url` | string
`expiresAt` | Date
`sizeBytes` | number
`checksum` | string

## Example

```typescript
import type { ExportDownloadResponse } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "exportId": exp_01HQ3XYZABC123,
  "status": ready,
  "url": https://exports.aqueduct.ai/tnt_acme-corp_a1b2c3/export-2025-01-15.tar.gz,
  "expiresAt": 2025-01-22T14:30Z,
  "sizeBytes": 524288000,
  "checksum": sha256:e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855,
} satisfies ExportDownloadResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ExportDownloadResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


