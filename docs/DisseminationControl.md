
# DisseminationControl


## Properties

Name | Type
------------ | -------------
`code` | string
`name` | string
`description` | string
`legacy` | boolean

## Example

```typescript
import type { DisseminationControl } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "code": NOFORN,
  "name": No Foreign Dissemination,
  "description": null,
  "legacy": null,
} satisfies DisseminationControl

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DisseminationControl
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


