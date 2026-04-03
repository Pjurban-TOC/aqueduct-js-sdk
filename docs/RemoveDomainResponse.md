
# RemoveDomainResponse

Response for domain removal (API-PLAT-004-04).

## Properties

Name | Type
------------ | -------------
`domainId` | string
`status` | string
`gracePeriodEnds` | Date
`fullyRemovedAt` | Date

## Example

```typescript
import type { RemoveDomainResponse } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "domainId": dom_01HQ3XYZABC123,
  "status": removing,
  "gracePeriodEnds": 2025-01-18T14:30Z,
  "fullyRemovedAt": 2025-01-22T14:30Z,
} satisfies RemoveDomainResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RemoveDomainResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


