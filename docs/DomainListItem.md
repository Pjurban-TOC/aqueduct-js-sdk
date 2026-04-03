
# DomainListItem

Domain summary in list responses.

## Properties

Name | Type
------------ | -------------
`domainId` | string
`domain` | string
`type` | string
`status` | string
`sslExpiresAt` | Date

## Example

```typescript
import type { DomainListItem } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "domainId": dom_01HQ3XYZABC123,
  "domain": api.acme.example.com,
  "type": api,
  "status": verified,
  "sslExpiresAt": null,
} satisfies DomainListItem

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DomainListItem
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


