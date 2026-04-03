
# DocumentSource

Document source location.

## Properties

Name | Type
------------ | -------------
`type` | string
`uri` | string

## Example

```typescript
import type { DocumentSource } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "type": upload,
  "uri": s3://aqueduct-docs/api-reference-v2.pdf,
} satisfies DocumentSource

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DocumentSource
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


