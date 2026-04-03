
# AuditLogEntryCompliance

Per-request compliance evaluation per ISpec [arXiv:2512.17259]. 

## Properties

Name | Type
------------ | -------------
`policiesEvaluated` | Array&lt;string&gt;
`violations` | [Array&lt;AuditLogEntryComplianceViolationsInner&gt;](AuditLogEntryComplianceViolationsInner.md)
`compliant` | boolean

## Example

```typescript
import type { AuditLogEntryCompliance } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "policiesEvaluated": ["pci-dss-card-protection","hipaa-phi-scanning"],
  "violations": null,
  "compliant": true,
} satisfies AuditLogEntryCompliance

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AuditLogEntryCompliance
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


