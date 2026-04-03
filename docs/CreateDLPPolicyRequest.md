
# CreateDLPPolicyRequest

Request body for creating a new DLP enforcement policy. The server assigns the policy_id on creation. 

## Properties

Name | Type
------------ | -------------
`name` | string
`description` | string
`enabled` | boolean
`scope` | string
`rules` | [Array&lt;DLPPolicyRule&gt;](DLPPolicyRule.md)
`appliesToModels` | Array&lt;string&gt;

## Example

```typescript
import type { CreateDLPPolicyRequest } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "name": PCI-DSS Credit Card Protection,
  "description": Block or redact credit card numbers in all AI interactions,
  "enabled": true,
  "scope": null,
  "rules": null,
  "appliesToModels": ["gpt-4o","claude-sonnet-4-20250514"],
} satisfies CreateDLPPolicyRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateDLPPolicyRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


