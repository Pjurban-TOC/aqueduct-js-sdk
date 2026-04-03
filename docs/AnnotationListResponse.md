
# AnnotationListResponse

List of annotations for a conversation turn.

## Properties

Name | Type
------------ | -------------
`annotations` | [Array&lt;AnnotationRecord&gt;](AnnotationRecord.md)

## Example

```typescript
import type { AnnotationListResponse } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "annotations": null,
} satisfies AnnotationListResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AnnotationListResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


