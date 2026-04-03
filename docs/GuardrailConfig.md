
# GuardrailConfig

Guardrail configuration defining input and output safety rails. Per LlamaFirewall multi-layer architecture. 

## Properties

Name | Type
------------ | -------------
`guardrailId` | string
`name` | string
`description` | string
`inputRails` | [Array&lt;SafetyRail&gt;](SafetyRail.md)
`outputRails` | [Array&lt;SafetyRail&gt;](SafetyRail.md)
`reasoningRails` | [Array&lt;SafetyRail&gt;](SafetyRail.md)
`mode` | string
`enabled` | boolean
`createdAt` | Date
`updatedAt` | Date

## Example

```typescript
import type { GuardrailConfig } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "guardrailId": gc_01HQ3XYZABC123,
  "name": Production Safety Guardrails,
  "description": Standard guardrails for production AI inference,
  "inputRails": null,
  "outputRails": null,
  "reasoningRails": null,
  "mode": null,
  "enabled": null,
  "createdAt": null,
  "updatedAt": null,
} satisfies GuardrailConfig

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GuardrailConfig
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


