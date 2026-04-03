
# ConditionRequest

A single flat condition that a breakpoint evaluates against request fields.

## Properties

Name | Type
------------ | -------------
`field` | string
`operator` | string
`value` | any

## Example

```typescript
import type { ConditionRequest } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "field": token_count,
  "operator": gt,
  "value": 4000,
} satisfies ConditionRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ConditionRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


