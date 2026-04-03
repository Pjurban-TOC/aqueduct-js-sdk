
# CollabActivityListResponse

Paginated list of collaboration activity records.

## Properties

Name | Type
------------ | -------------
`records` | [Array&lt;CollabActivityRecord&gt;](CollabActivityRecord.md)
`nextCursor` | string

## Example

```typescript
import type { CollabActivityListResponse } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "records": null,
  "nextCursor": null,
} satisfies CollabActivityListResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CollabActivityListResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


