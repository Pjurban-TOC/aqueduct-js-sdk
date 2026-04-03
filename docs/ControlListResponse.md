
# ControlListResponse

Response containing the list of controls for a framework. Matches compliance-engine ControlListResponse struct. 

## Properties

Name | Type
------------ | -------------
`controls` | [Array&lt;ComplianceControl&gt;](ComplianceControl.md)

## Example

```typescript
import type { ControlListResponse } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "controls": null,
} satisfies ControlListResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ControlListResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


