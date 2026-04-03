
# ComplianceFramework

A compliance framework definition (e.g., SOC2, HIPAA, FedRAMP). Matches compliance-engine ComplianceFramework struct. 

## Properties

Name | Type
------------ | -------------
`id` | string
`name` | string
`version` | string
`description` | string
`controls` | [Array&lt;ComplianceControl&gt;](ComplianceControl.md)

## Example

```typescript
import type { ComplianceFramework } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "id": soc2-2024,
  "name": SOC 2 Type II,
  "version": 2024,
  "description": Service Organization Control 2 — Trust Services Criteria for Security, Availability, Processing Integrity, Confidentiality, and Privacy.,
  "controls": null,
} satisfies ComplianceFramework

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ComplianceFramework
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


