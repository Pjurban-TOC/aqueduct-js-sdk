
# BreakpointListResponse

Paginated list of breakpoints.

## Properties

Name | Type
------------ | -------------
`breakpoints` | [Array&lt;BreakpointResponse&gt;](BreakpointResponse.md)
`totalCount` | number
`nextCursor` | string

## Example

```typescript
import type { BreakpointListResponse } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "breakpoints": null,
  "totalCount": 42,
  "nextCursor": bp_01HQ3XYZABC999,
} satisfies BreakpointListResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BreakpointListResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


