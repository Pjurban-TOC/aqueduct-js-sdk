
# SetOverrideRequest

Request body for setting a tenant-level configuration override. Matches `config.go` SetOverrideRequest struct.

## Properties

Name | Type
------------ | -------------
`value` | any
`type` | string
`description` | string

## Example

```typescript
import type { SetOverrideRequest } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "value": 120,
  "type": int,
  "description": Extended timeout for enterprise tenant per SLA agreement.,
} satisfies SetOverrideRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SetOverrideRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


