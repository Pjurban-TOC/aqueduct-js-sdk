
# FrameworkStatus

Compliance status summary for a single framework. Matches compliance-engine FrameworkStatus struct. 

## Properties

Name | Type
------------ | -------------
`frameworkId` | string
`frameworkName` | string
`compliancePercentage` | number
`overallStatus` | [ControlStatus](ControlStatus.md)

## Example

```typescript
import type { FrameworkStatus } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "frameworkId": soc2-2024,
  "frameworkName": SOC 2 Type II,
  "compliancePercentage": 87.5,
  "overallStatus": null,
} satisfies FrameworkStatus

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FrameworkStatus
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


