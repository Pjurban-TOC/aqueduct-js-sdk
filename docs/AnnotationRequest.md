
# AnnotationRequest

Request body for creating an annotation.

## Properties

Name | Type
------------ | -------------
`body` | string
`parentAnnotationId` | string

## Example

```typescript
import type { AnnotationRequest } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "body": This needs clarification. @bob can you check?,
  "parentAnnotationId": null,
} satisfies AnnotationRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AnnotationRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


