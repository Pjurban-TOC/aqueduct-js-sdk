
# SafetyRail


## Properties

Name | Type
------------ | -------------
`type` | [SafetyCheckType](SafetyCheckType.md)
`threshold` | number
`action` | string
`customModel` | string

## Example

```typescript
import type { SafetyRail } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "type": null,
  "threshold": 0.8,
  "action": block,
  "customModel": null,
} satisfies SafetyRail

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SafetyRail
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


