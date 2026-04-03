
# GapAnalysisReport

Full gap analysis report for a compliance framework against a tenant. Per AEGIS [arXiv:2603.12621] and NIST AI RMF 1.0 continuous monitoring requirements. Matches compliance-engine GapAnalysisReport struct. 

## Properties

Name | Type
------------ | -------------
`framework` | string
`frameworkName` | string
`tenantId` | string
`timestamp` | Date
`overallScore` | number
`controls` | [Array&lt;ControlReport&gt;](ControlReport.md)
`totalControls` | number
`metControls` | number
`unmetControls` | number

## Example

```typescript
import type { GapAnalysisReport } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "framework": soc2-2024,
  "frameworkName": SOC 2 Type II,
  "tenantId": tnt_acme-corp_a1b2c3,
  "timestamp": 2025-06-15T10:35Z,
  "overallScore": 87.5,
  "controls": null,
  "totalControls": 24,
  "metControls": 21,
  "unmetControls": 3,
} satisfies GapAnalysisReport

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GapAnalysisReport
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


