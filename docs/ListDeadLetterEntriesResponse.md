
# ListDeadLetterEntriesResponse

Paginated list of dead-letter queue entries. Handler returns: {\"entries\":[], \"next_cursor\":\"\", \"has_more\":bool} 

## Properties

Name | Type
------------ | -------------
`entries` | [Array&lt;DeadLetterEntry&gt;](DeadLetterEntry.md)
`nextCursor` | string
`hasMore` | boolean

## Example

```typescript
import type { ListDeadLetterEntriesResponse } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "entries": null,
  "nextCursor": 1711036801000000000_3,
  "hasMore": false,
} satisfies ListDeadLetterEntriesResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ListDeadLetterEntriesResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


