
# TestBreakpointResponse

Result of testing a breakpoint against sample fields.

## Properties

Name | Type
------------ | -------------
`triggered` | boolean
`matchedConditions` | Array&lt;number&gt;
`message` | string

## Example

```typescript
import type { TestBreakpointResponse } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "triggered": true,
  "matchedConditions": [0,1],
  "message": Breakpoint would trigger (all conditions matched),
} satisfies TestBreakpointResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TestBreakpointResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


