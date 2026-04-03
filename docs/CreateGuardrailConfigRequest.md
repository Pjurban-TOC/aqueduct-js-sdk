
# CreateGuardrailConfigRequest


## Properties

Name | Type
------------ | -------------
`name` | string
`description` | string
`inputRails` | [Array&lt;SafetyRail&gt;](SafetyRail.md)
`outputRails` | [Array&lt;SafetyRail&gt;](SafetyRail.md)
`reasoningRails` | [Array&lt;SafetyRail&gt;](SafetyRail.md)
`mode` | string
`enabled` | boolean

## Example

```typescript
import type { CreateGuardrailConfigRequest } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "description": null,
  "inputRails": null,
  "outputRails": null,
  "reasoningRails": null,
  "mode": null,
  "enabled": null,
} satisfies CreateGuardrailConfigRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateGuardrailConfigRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


