
# SafetyFinding

Single safety check finding.

## Properties

Name | Type
------------ | -------------
`checkType` | [SafetyCheckType](SafetyCheckType.md)
`detected` | boolean
`score` | number
`severity` | string
`category` | string
`evidence` | string
`explanation` | string

## Example

```typescript
import type { SafetyFinding } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "checkType": null,
  "detected": true,
  "score": 0.95,
  "severity": high,
  "category": direct_injection,
  "evidence": Ignore all previous instructions,
  "explanation": Content contains a direct prompt injection attempt to override system instructions.,
} satisfies SafetyFinding

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SafetyFinding
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


