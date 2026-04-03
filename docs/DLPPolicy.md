
# DLPPolicy

DLP enforcement policy (response model). Policies support bidirectional scope (request/response/both) and model-specific application. 

## Properties

Name | Type
------------ | -------------
`policyId` | string
`name` | string
`description` | string
`enabled` | boolean
`scope` | string
`rules` | [Array&lt;DLPPolicyRule&gt;](DLPPolicyRule.md)
`appliesToModels` | Array&lt;string&gt;
`createdAt` | Date
`updatedAt` | Date

## Example

```typescript
import type { DLPPolicy } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "policyId": dlppol_01HQ3XYZABC123,
  "name": PCI-DSS Credit Card Protection,
  "description": Block or redact credit card numbers in all AI interactions,
  "enabled": true,
  "scope": null,
  "rules": null,
  "appliesToModels": ["gpt-4o","claude-sonnet-4-20250514"],
  "createdAt": null,
  "updatedAt": null,
} satisfies DLPPolicy

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DLPPolicy
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


