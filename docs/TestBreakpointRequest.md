
# TestBreakpointRequest

Request body for testing a breakpoint against sample field data.

## Properties

Name | Type
------------ | -------------
`fields` | { [key: string]: any; }

## Example

```typescript
import type { TestBreakpointRequest } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "fields": {"token_count":5200,"model":"gpt-4","user_id":"usr_johndoe_abc123"},
} satisfies TestBreakpointRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TestBreakpointRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


