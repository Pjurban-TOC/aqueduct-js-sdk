
# DeleteResponse

Generic success response for delete and replay operations. Handler returns: {\"success\": true, \"id\": \"<id>\"} 

## Properties

Name | Type
------------ | -------------
`success` | boolean
`id` | string

## Example

```typescript
import type { DeleteResponse } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "success": true,
  "id": 1711036801000000000_3,
} satisfies DeleteResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DeleteResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


