
# ConfigListResponse

Paginated list of configuration entries. Matches `config.go` ConfigListResponse struct.

## Properties

Name | Type
------------ | -------------
`configs` | [Array&lt;ConfigEntry&gt;](ConfigEntry.md)
`nextCursor` | string
`total` | number

## Example

```typescript
import type { ConfigListResponse } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "configs": null,
  "nextCursor": eyJrZXkiOiJhdXRoLnNlc3Npb24ifQ==,
  "total": 87,
} satisfies ConfigListResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ConfigListResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


