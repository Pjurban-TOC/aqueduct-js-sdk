
# PausedRequestListResponse

Paginated list of paused requests.

## Properties

Name | Type
------------ | -------------
`requests` | [Array&lt;PausedRequestResponse&gt;](PausedRequestResponse.md)
`totalCount` | number
`nextCursor` | string

## Example

```typescript
import type { PausedRequestListResponse } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "requests": null,
  "totalCount": 12,
  "nextCursor": preq_01HQ3XYZABC999,
} satisfies PausedRequestListResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PausedRequestListResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


