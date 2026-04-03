
# ConfigAuditEntry

An audit log entry for configuration changes. Matches `config.go` ConfigAuditEntry struct. The `tenant_id` field is omitted for global configuration changes (Go `omitempty`). 

## Properties

Name | Type
------------ | -------------
`id` | string
`action` | string
`key` | string
`tenantId` | string
`oldValue` | any
`newValue` | any
`changedBy` | string
`timestamp` | Date

## Example

```typescript
import type { ConfigAuditEntry } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "id": caud_01HQ3XYZABC123,
  "action": update,
  "key": auth.session_timeout_minutes,
  "tenantId": tnt_acme-corp_a1b2c3,
  "oldValue": 30,
  "newValue": 60,
  "changedBy": usr_admin_xyz789,
  "timestamp": 2025-06-10T09:15Z,
} satisfies ConfigAuditEntry

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ConfigAuditEntry
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


