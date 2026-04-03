
# ApprovalRecord

A single admin approval entry in the deletion approval chain.

## Properties

Name | Type
------------ | -------------
`approvedBy` | string
`approvedAt` | Date

## Example

```typescript
import type { ApprovalRecord } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "approvedBy": usr_admin_xyz789,
  "approvedAt": 2025-01-16T09:00Z,
} satisfies ApprovalRecord

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ApprovalRecord
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


