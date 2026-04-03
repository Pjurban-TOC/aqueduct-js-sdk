
# ListDisseminationControlsResponse


## Properties

Name | Type
------------ | -------------
`disseminationControls` | [Array&lt;DisseminationControl&gt;](DisseminationControl.md)
`count` | number

## Example

```typescript
import type { ListDisseminationControlsResponse } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "disseminationControls": null,
  "count": null,
} satisfies ListDisseminationControlsResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ListDisseminationControlsResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


