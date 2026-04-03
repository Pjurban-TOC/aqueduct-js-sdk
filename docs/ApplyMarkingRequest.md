
# ApplyMarkingRequest


## Properties

Name | Type
------------ | -------------
`resourceId` | string
`resourceType` | string
`categories` | Array&lt;string&gt;
`disseminationControls` | Array&lt;string&gt;
`releasableTo` | Array&lt;string&gt;
`controlledBy` | string
`decontrolDate` | Date
`decontrolEvent` | string

## Example

```typescript
import type { ApplyMarkingRequest } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "resourceId": doc-12345,
  "resourceType": document,
  "categories": ["SP-HLTH","SP-PRVCY"],
  "disseminationControls": ["FEDCON"],
  "releasableTo": ["GBR","USA"],
  "controlledBy": HHS//PRIVACY-OFFICE,
  "decontrolDate": Tue Jan 01 00:00:00 UTC 2030,
  "decontrolEvent": null,
} satisfies ApplyMarkingRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ApplyMarkingRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


