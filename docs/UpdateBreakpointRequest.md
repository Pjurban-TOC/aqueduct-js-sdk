
# UpdateBreakpointRequest

Request body for updating an existing breakpoint. All fields except `version` are optional; only supplied fields are changed.

## Properties

Name | Type
------------ | -------------
`name` | string
`description` | string
`stage` | string
`mode` | string
`conditions` | [Array&lt;ConditionRequest&gt;](ConditionRequest.md)
`priority` | string
`enabled` | boolean
`version` | number

## Example

```typescript
import type { UpdateBreakpointRequest } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "name": Flag very large token requests,
  "description": Pause requests exceeding 8000 tokens,
  "stage": PRE_MODEL_CALL,
  "mode": pause,
  "conditions": null,
  "priority": critical,
  "enabled": false,
  "version": 3,
} satisfies UpdateBreakpointRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateBreakpointRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


