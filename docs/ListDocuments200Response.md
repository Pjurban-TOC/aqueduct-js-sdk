
# ListDocuments200Response


## Properties

Name | Type
------------ | -------------
`documents` | [Array&lt;Document&gt;](Document.md)
`nextCursor` | string
`total` | number

## Example

```typescript
import type { ListDocuments200Response } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "documents": null,
  "nextCursor": null,
  "total": null,
} satisfies ListDocuments200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ListDocuments200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


