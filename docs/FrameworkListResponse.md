
# FrameworkListResponse

Response containing the list of available compliance frameworks. Matches compliance-engine FrameworkListResponse struct. 

## Properties

Name | Type
------------ | -------------
`frameworks` | [Array&lt;ComplianceFramework&gt;](ComplianceFramework.md)

## Example

```typescript
import type { FrameworkListResponse } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "frameworks": null,
} satisfies FrameworkListResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FrameworkListResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


