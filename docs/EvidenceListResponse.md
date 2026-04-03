
# EvidenceListResponse

Paginated response containing compliance evidence records. Matches compliance-engine EvidenceListResponse struct. 

## Properties

Name | Type
------------ | -------------
`evidence` | [Array&lt;ComplianceEvidence&gt;](ComplianceEvidence.md)
`nextCursor` | string
`total` | number

## Example

```typescript
import type { EvidenceListResponse } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "evidence": null,
  "nextCursor": eyJpZCI6MTAwfQ==,
  "total": 256,
} satisfies EvidenceListResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EvidenceListResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


