
# ListMarkingsResponse


## Properties

Name | Type
------------ | -------------
`markings` | [Array&lt;StoredMarking&gt;](StoredMarking.md)
`count` | number

## Example

```typescript
import type { ListMarkingsResponse } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "markings": null,
  "count": null,
} satisfies ListMarkingsResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ListMarkingsResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


