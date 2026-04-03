
# CreateBreakpointRequest

Request body for creating a new breakpoint.

## Properties

Name | Type
------------ | -------------
`tenantId` | string
`name` | string
`description` | string
`stage` | string
`mode` | string
`conditions` | [Array&lt;ConditionRequest&gt;](ConditionRequest.md)
`priority` | string

## Example

```typescript
import type { CreateBreakpointRequest } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "tenantId": tnt_acme-corp_a1b2c3,
  "name": Flag large token requests,
  "description": Pause requests exceeding 4000 tokens for manual review,
  "stage": PRE_MODEL_CALL,
  "mode": pause,
  "conditions": null,
  "priority": high,
} satisfies CreateBreakpointRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateBreakpointRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


