
# ListCategoriesResponse


## Properties

Name | Type
------------ | -------------
`categories` | [Array&lt;CUICategory&gt;](CUICategory.md)
`count` | number

## Example

```typescript
import type { ListCategoriesResponse } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "categories": null,
  "count": null,
} satisfies ListCategoriesResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ListCategoriesResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


