
# ComplianceControl

A single control within a compliance framework. Matches compliance-engine ComplianceControl struct. 

## Properties

Name | Type
------------ | -------------
`id` | string
`frameworkId` | string
`name` | string
`description` | string
`category` | string
`checkIds` | Array&lt;string&gt;

## Example

```typescript
import type { ComplianceControl } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "id": CC6.1,
  "frameworkId": soc2-2024,
  "name": Logical and Physical Access Controls,
  "description": The entity implements logical access security software, infrastructure, and architectures over protected information assets.,
  "category": Access Control,
  "checkIds": ["chk_mfa_enabled","chk_ip_allowlist","chk_session_timeout"],
} satisfies ComplianceControl

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ComplianceControl
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


