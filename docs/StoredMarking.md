
# StoredMarking


## Properties

Name | Type
------------ | -------------
`resourceId` | string
`resourceType` | string
`tenantId` | string
`categories` | Array&lt;string&gt;
`disseminationControls` | Array&lt;string&gt;
`releasableTo` | Array&lt;string&gt;
`controlledBy` | string
`bannerLine` | string
`accumuloVisibility` | string
`decontrolDate` | string
`decontrolEvent` | string
`markedBy` | string
`markedAt` | Date
`updatedAt` | Date

## Example

```typescript
import type { StoredMarking } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "resourceId": null,
  "resourceType": null,
  "tenantId": null,
  "categories": null,
  "disseminationControls": null,
  "releasableTo": null,
  "controlledBy": null,
  "bannerLine": CUI//SP-HLTH/SP-PRVCY//FEDCON,
  "accumuloVisibility": CUI&SP_HLTH&SP_PRVCY&FEDCON,
  "decontrolDate": null,
  "decontrolEvent": null,
  "markedBy": null,
  "markedAt": null,
  "updatedAt": null,
} satisfies StoredMarking

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as StoredMarking
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


