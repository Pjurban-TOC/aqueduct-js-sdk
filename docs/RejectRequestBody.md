
# RejectRequestBody

Request body for rejecting a paused request.

## Properties

Name | Type
------------ | -------------
`reason` | string

## Example

```typescript
import type { RejectRequestBody } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "reason": Request contains unapproved PII,
} satisfies RejectRequestBody

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RejectRequestBody
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


