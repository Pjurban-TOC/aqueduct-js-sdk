
# AuditLogEntry

Comprehensive audit log entry following the Kong AI Gateway audit reference. Every API call is logged with full request/response metadata per AEGIS [arXiv:2603.12621]. Supports per-request compliance evaluation via policy-as-code per ISpec [arXiv:2512.17259]. 

## Properties

Name | Type
------------ | -------------
`eventId` | string
`traceId` | string
`requestId` | string
`tenantId` | string
`userId` | string
`apiKeyId` | string
`sessionId` | string
`timestamp` | Date
`request` | [AuditLogEntryRequest](AuditLogEntryRequest.md)
`response` | [AuditLogEntryResponse](AuditLogEntryResponse.md)
`model` | [AuditLogEntryModel](AuditLogEntryModel.md)
`usage` | [AuditLogEntryUsage](AuditLogEntryUsage.md)
`performance` | [AuditLogEntryPerformance](AuditLogEntryPerformance.md)
`dlp` | [AuditLogEntryDlp](AuditLogEntryDlp.md)
`safety` | [AuditLogEntrySafety](AuditLogEntrySafety.md)
`rag` | [AuditLogEntryRag](AuditLogEntryRag.md)
`cache` | [AuditLogEntryCache](AuditLogEntryCache.md)
`compliance` | [AuditLogEntryCompliance](AuditLogEntryCompliance.md)

## Example

```typescript
import type { AuditLogEntry } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "eventId": 01HQVXYZ89ABCDEFGHJKMNPQRS,
  "traceId": 01HQVXYZ89ABCDEFGHJKMNPQRS,
  "requestId": req-abc123,
  "tenantId": tnt_acme-corp_a1b2c3,
  "userId": usr_johndoe_abc123,
  "apiKeyId": key_01HQ3XYZABC123,
  "sessionId": ses_01HQ3XYZABC123,
  "timestamp": 2025-01-15T14:30Z,
  "request": null,
  "response": null,
  "model": null,
  "usage": null,
  "performance": null,
  "dlp": null,
  "safety": null,
  "rag": null,
  "cache": null,
  "compliance": null,
} satisfies AuditLogEntry

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AuditLogEntry
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


