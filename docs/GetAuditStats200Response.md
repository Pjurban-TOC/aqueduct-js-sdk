
# GetAuditStats200Response


## Properties

Name | Type
------------ | -------------
`timeRange` | [GetAuditStats200ResponseTimeRange](GetAuditStats200ResponseTimeRange.md)
`totals` | [GetAuditStats200ResponseTotals](GetAuditStats200ResponseTotals.md)
`groups` | [Array&lt;GetAuditStats200ResponseGroupsInner&gt;](GetAuditStats200ResponseGroupsInner.md)

## Example

```typescript
import type { GetAuditStats200Response } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "timeRange": null,
  "totals": null,
  "groups": null,
} satisfies GetAuditStats200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetAuditStats200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


