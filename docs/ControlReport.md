
# ControlReport

Report for a single control within a gap analysis. Matches compliance-engine ControlReport struct. 

## Properties

Name | Type
------------ | -------------
`id` | string
`name` | string
`category` | string
`status` | [ControlStatus](ControlStatus.md)
`checks` | [Array&lt;CheckResult&gt;](CheckResult.md)
`gaps` | Array&lt;string&gt;
`evidenceCount` | number
`lastChecked` | Date

## Example

```typescript
import type { ControlReport } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "id": CC6.1,
  "name": Logical and Physical Access Controls,
  "category": Access Control,
  "status": null,
  "checks": null,
  "gaps": ["IP allowlist not configured","Session timeout exceeds maximum of 30 minutes"],
  "evidenceCount": 12,
  "lastChecked": 2025-06-15T10:30Z,
} satisfies ControlReport

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ControlReport
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


