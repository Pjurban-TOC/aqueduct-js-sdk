
# SafetyScanResponse

Safety scan result with per-check findings. Per Bypassing LLM Guardrails [arXiv:2504.11168] which achieves 100% evasion against individual guards, defense-in-depth with per-layer pass/fail reporting is required. 

## Properties

Name | Type
------------ | -------------
`safe` | boolean
`action` | string
`findings` | [Array&lt;SafetyFinding&gt;](SafetyFinding.md)
`modifiedContent` | string
`scanDurationMs` | number
`checksPerformed` | [Array&lt;SafetyCheckType&gt;](SafetyCheckType.md)
`guardLayer` | string

## Example

```typescript
import type { SafetyScanResponse } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "safe": false,
  "action": block,
  "findings": null,
  "modifiedContent": null,
  "scanDurationMs": 85,
  "checksPerformed": null,
  "guardLayer": null,
} satisfies SafetyScanResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SafetyScanResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


