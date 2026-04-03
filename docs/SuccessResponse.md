
# SuccessResponse

Generic success response. Matches handler/common.go SuccessResponse.

## Properties

Name | Type
------------ | -------------
`success` | boolean
`data` | { [key: string]: any; }
`message` | string

## Example

```typescript
import type { SuccessResponse } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "success": true,
  "data": null,
  "message": null,
} satisfies SuccessResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SuccessResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


