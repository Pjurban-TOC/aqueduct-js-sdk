
# DeletionStatusResponse

Comprehensive deletion status for a tenant including request, approvals, timeline, and export.

## Properties

Name | Type
------------ | -------------
`tenantId` | string
`deletionStatus` | string
`request` | [DeletionRequestSummary](DeletionRequestSummary.md)
`approvals` | [Array&lt;ApprovalRecord&gt;](ApprovalRecord.md)
`timeline` | [DeletionTimeline](DeletionTimeline.md)
`_export` | [ExportSummary](ExportSummary.md)

## Example

```typescript
import type { DeletionStatusResponse } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "tenantId": tnt_acme-corp_a1b2c3,
  "deletionStatus": pending_approval,
  "request": null,
  "approvals": null,
  "timeline": null,
  "_export": null,
} satisfies DeletionStatusResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DeletionStatusResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


