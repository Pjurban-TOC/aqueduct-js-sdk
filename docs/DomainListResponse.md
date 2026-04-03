
# DomainListResponse

List of domains for a tenant (API-PLAT-004-03).

## Properties

Name | Type
------------ | -------------
`domains` | [Array&lt;DomainListItem&gt;](DomainListItem.md)

## Example

```typescript
import type { DomainListResponse } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "domains": null,
} satisfies DomainListResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DomainListResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


