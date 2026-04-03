
# PaginationMeta

Cursor-based pagination metadata.

## Properties

Name | Type
------------ | -------------
`nextCursor` | string
`hasMore` | boolean
`totalCount` | number

## Example

```typescript
import type { PaginationMeta } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "nextCursor": eyJpZCI6MTAwfQ==,
  "hasMore": true,
  "totalCount": 42,
} satisfies PaginationMeta

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PaginationMeta
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


